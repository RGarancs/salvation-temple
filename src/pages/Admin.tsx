import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import {
  CalendarDays, Users, Image, BarChart3, Church, LogOut,
  Plus, Trash2, Edit, Save, X, Home
} from 'lucide-react';

type Tab = 'dashboard' | 'calendar' | 'ministries' | 'gallery' | 'statistics';

interface CalendarEvent {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  event_date: string;
  event_time: string | null;
  event_type: string | null;
  is_recurring: boolean | null;
}

interface Ministry {
  id: string;
  key: string;
  title: Record<string, string>;
  description: Record<string, string>;
  leader_name: string | null;
  icon: string | null;
  sort_order: number | null;
}

interface Statistic {
  id: string;
  key: string;
  value: number;
  label: Record<string, string>;
  category: string | null;
}

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('dashboard');
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [ministries, setMinistries] = useState<Ministry[]>([]);
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin, tab]);

  const loadData = async () => {
    if (tab === 'calendar' || tab === 'dashboard') {
      const { data } = await supabase.from('calendar_events').select('*').order('event_date');
      if (data) setEvents(data.map(e => ({ ...e, title: e.title as any, description: e.description as any })));
    }
    if (tab === 'ministries' || tab === 'dashboard') {
      const { data } = await supabase.from('ministries').select('*').order('sort_order');
      if (data) setMinistries(data.map(m => ({ ...m, title: m.title as any, description: m.description as any })));
    }
    if (tab === 'statistics' || tab === 'dashboard') {
      const { data } = await supabase.from('site_statistics').select('*').order('category');
      if (data) setStatistics(data.map(s => ({ ...s, label: s.label as any })));
    }
  };

  const handleDelete = async (table: string, id: string) => {
    await supabase.from(table).delete().eq('id', id);
    loadData();
  };

  const handleSaveEvent = async () => {
    if (!formData) return;
    if (editingId) {
      await supabase.from('calendar_events').update(formData).eq('id', editingId);
    } else {
      await supabase.from('calendar_events').insert({ ...formData, created_by: user?.id });
    }
    setEditingId(null);
    setFormData(null);
    loadData();
  };

  const handleSaveMinistry = async () => {
    if (!formData) return;
    if (editingId) {
      await supabase.from('ministries').update(formData).eq('id', editingId);
    } else {
      await supabase.from('ministries').insert(formData);
    }
    setEditingId(null);
    setFormData(null);
    loadData();
  };

  const handleSaveStat = async () => {
    if (!formData) return;
    if (editingId) {
      await supabase.from('site_statistics').update(formData).eq('id', editingId);
    } else {
      await supabase.from('site_statistics').insert(formData);
    }
    setEditingId(null);
    setFormData(null);
    loadData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="w-10 h-10 rounded-full border-4 border-sunset/30 border-t-sunset animate-spin" />
      </div>
    );
  }

  const tabs: { key: Tab; icon: any; label: string }[] = [
    { key: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { key: 'calendar', icon: CalendarDays, label: 'Calendar' },
    { key: 'ministries', icon: Church, label: 'Ministries' },
    { key: 'gallery', icon: Image, label: 'Gallery' },
    { key: 'statistics', icon: Users, label: 'Statistics' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-white/10 p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-sunset">Admin Panel</h1>
          <p className="text-xs text-white/40 mt-1">{user?.email}</p>
        </div>
        <nav className="space-y-1 flex-1">
          {tabs.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => { setTab(key); setEditingId(null); setFormData(null); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                tab === key ? 'bg-sunset/20 text-sunset' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="space-y-2 mt-4">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5">
            <Home className="w-4 h-4" /> Back to Site
          </button>
          <button onClick={signOut} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {tab === 'dashboard' && <DashboardView events={events} ministries={ministries} statistics={statistics} />}
        {tab === 'calendar' && (
          <ContentManager
            title="Calendar Events"
            items={events}
            onAdd={() => {
              setEditingId(null);
              setFormData({ title: { ru: '', en: '', lv: '' }, description: { ru: '', en: '', lv: '' }, event_date: '', event_time: '', event_type: 'service' });
            }}
            onEdit={(item) => { setEditingId(item.id); setFormData(item); }}
            onDelete={(id) => handleDelete('calendar_events', id)}
            renderItem={(item: CalendarEvent) => (
              <div>
                <p className="font-medium">{item.title?.en || item.title?.ru || 'Untitled'}</p>
                <p className="text-sm text-white/50">{item.event_date} {item.event_time && `at ${item.event_time}`}</p>
              </div>
            )}
            editForm={formData && (
              <EventForm data={formData} onChange={setFormData} onSave={handleSaveEvent} onCancel={() => { setEditingId(null); setFormData(null); }} />
            )}
          />
        )}
        {tab === 'ministries' && (
          <ContentManager
            title="Ministries"
            items={ministries}
            onAdd={() => {
              setEditingId(null);
              setFormData({ key: '', title: { ru: '', en: '', lv: '' }, description: { ru: '', en: '', lv: '' }, leader_name: '', icon: 'Heart', sort_order: 0 });
            }}
            onEdit={(item) => { setEditingId(item.id); setFormData(item); }}
            onDelete={(id) => handleDelete('ministries', id)}
            renderItem={(item: Ministry) => (
              <div>
                <p className="font-medium">{item.title?.en || item.title?.ru || item.key}</p>
                <p className="text-sm text-white/50">{item.leader_name || 'No leader set'}</p>
              </div>
            )}
            editForm={formData && (
              <MinistryForm data={formData} onChange={setFormData} onSave={handleSaveMinistry} onCancel={() => { setEditingId(null); setFormData(null); }} />
            )}
          />
        )}
        {tab === 'statistics' && (
          <ContentManager
            title="Statistics"
            items={statistics}
            onAdd={() => {
              setEditingId(null);
              setFormData({ key: '', value: 0, label: { ru: '', en: '', lv: '' }, category: 'general' });
            }}
            onEdit={(item) => { setEditingId(item.id); setFormData(item); }}
            onDelete={(id) => handleDelete('site_statistics', id)}
            renderItem={(item: Statistic) => (
              <div>
                <p className="font-medium">{item.label?.en || item.key}: <span className="text-sunset">{item.value}</span></p>
                <p className="text-sm text-white/50">Category: {item.category}</p>
              </div>
            )}
            editForm={formData && (
              <StatForm data={formData} onChange={setFormData} onSave={handleSaveStat} onCancel={() => { setEditingId(null); setFormData(null); }} />
            )}
          />
        )}
        {tab === 'gallery' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Gallery Management</h2>
            <p className="text-white/60">Gallery images are currently loaded from project assets. To manage gallery images through the admin panel, image upload functionality can be added in a future update.</p>
          </div>
        )}
      </main>
    </div>
  );
};

// Dashboard overview
const DashboardView = ({ events, ministries, statistics }: { events: CalendarEvent[]; ministries: Ministry[]; statistics: Statistic[] }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatCard icon={CalendarDays} label="Calendar Events" value={events.length} color="text-blue-400" />
      <StatCard icon={Church} label="Ministries" value={ministries.length} color="text-green-400" />
      <StatCard icon={BarChart3} label="Statistics Tracked" value={statistics.length} color="text-amber-400" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-900 rounded-xl p-5 border border-white/10">
        <h3 className="font-semibold mb-3 text-white/80">Upcoming Events</h3>
        {events.filter(e => new Date(e.event_date) >= new Date()).slice(0, 5).map(e => (
          <div key={e.id} className="py-2 border-b border-white/5 last:border-0">
            <p className="text-sm font-medium">{e.title?.en || e.title?.ru}</p>
            <p className="text-xs text-white/40">{e.event_date}</p>
          </div>
        ))}
        {events.filter(e => new Date(e.event_date) >= new Date()).length === 0 && (
          <p className="text-sm text-white/40">No upcoming events</p>
        )}
      </div>
      <div className="bg-gray-900 rounded-xl p-5 border border-white/10">
        <h3 className="font-semibold mb-3 text-white/80">Active Ministries</h3>
        {ministries.slice(0, 5).map(m => (
          <div key={m.id} className="py-2 border-b border-white/5 last:border-0">
            <p className="text-sm font-medium">{m.title?.en || m.title?.ru || m.key}</p>
            <p className="text-xs text-white/40">{m.leader_name || '—'}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, label, value, color }: { icon: any; label: string; value: number; color: string }) => (
  <div className="bg-gray-900 rounded-xl p-5 border border-white/10">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-white/50">{label}</p>
      </div>
    </div>
  </div>
);

// Generic content manager
const ContentManager = ({ title, items, onAdd, onEdit, onDelete, renderItem, editForm }: any) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sunset text-white text-sm font-medium hover:bg-sunset/80 transition-colors">
        <Plus className="w-4 h-4" /> Add New
      </button>
    </div>
    {editForm && (
      <div className="mb-6 bg-gray-900 rounded-xl p-6 border border-sunset/30">
        {editForm}
      </div>
    )}
    <div className="space-y-2">
      {items.map((item: any) => (
        <div key={item.id} className="flex items-center justify-between bg-gray-900 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors">
          <div className="flex-1">{renderItem(item)}</div>
          <div className="flex items-center gap-2 ml-4">
            <button onClick={() => onEdit(item)} className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors">
              <Edit className="w-4 h-4" />
            </button>
            <button onClick={() => onDelete(item.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-white/60 hover:text-red-400 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
      {items.length === 0 && <p className="text-center text-white/40 py-8">No items yet. Click "Add New" to create one.</p>}
    </div>
  </div>
);

// Form components
const FormField = ({ label, value, onChange, type = 'text', placeholder }: any) => (
  <div>
    <label className="block text-xs font-medium text-white/60 mb-1">{label}</label>
    <input
      type={type}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-sunset/50"
    />
  </div>
);

const TextAreaField = ({ label, value, onChange, placeholder }: any) => (
  <div>
    <label className="block text-xs font-medium text-white/60 mb-1">{label}</label>
    <textarea
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-sunset/50 resize-none"
    />
  </div>
);

const FormActions = ({ onSave, onCancel }: any) => (
  <div className="flex justify-end gap-3 mt-4">
    <button onClick={onCancel} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/60 hover:bg-white/5">
      <X className="w-4 h-4" /> Cancel
    </button>
    <button onClick={onSave} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sunset text-white text-sm font-medium hover:bg-sunset/80">
      <Save className="w-4 h-4" /> Save
    </button>
  </div>
);

const EventForm = ({ data, onChange, onSave, onCancel }: any) => {
  const update = (field: string, value: any) => onChange({ ...data, [field]: value });
  const updateTitle = (lang: string, val: string) => onChange({ ...data, title: { ...data.title, [lang]: val } });
  const updateDesc = (lang: string, val: string) => onChange({ ...data, description: { ...data.description, [lang]: val } });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Event Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField label="Title (RU)" value={data.title?.ru} onChange={(v: string) => updateTitle('ru', v)} placeholder="Название" />
        <FormField label="Title (EN)" value={data.title?.en} onChange={(v: string) => updateTitle('en', v)} placeholder="Title" />
        <FormField label="Title (LV)" value={data.title?.lv} onChange={(v: string) => updateTitle('lv', v)} placeholder="Nosaukums" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <TextAreaField label="Description (RU)" value={data.description?.ru} onChange={(v: string) => updateDesc('ru', v)} />
        <TextAreaField label="Description (EN)" value={data.description?.en} onChange={(v: string) => updateDesc('en', v)} />
        <TextAreaField label="Description (LV)" value={data.description?.lv} onChange={(v: string) => updateDesc('lv', v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField label="Date" value={data.event_date} onChange={(v: string) => update('event_date', v)} type="date" />
        <FormField label="Time" value={data.event_time} onChange={(v: string) => update('event_time', v)} placeholder="11:00" />
        <FormField label="Type" value={data.event_type} onChange={(v: string) => update('event_type', v)} placeholder="service, special, etc." />
      </div>
      <FormActions onSave={onSave} onCancel={onCancel} />
    </div>
  );
};

const MinistryForm = ({ data, onChange, onSave, onCancel }: any) => {
  const update = (field: string, value: any) => onChange({ ...data, [field]: value });
  const updateTitle = (lang: string, val: string) => onChange({ ...data, title: { ...data.title, [lang]: val } });
  const updateDesc = (lang: string, val: string) => onChange({ ...data, description: { ...data.description, [lang]: val } });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Ministry Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <FormField label="Key (unique identifier)" value={data.key} onChange={(v: string) => update('key', v)} placeholder="e.g. youth" />
        <FormField label="Leader Name" value={data.leader_name} onChange={(v: string) => update('leader_name', v)} placeholder="Name" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField label="Title (RU)" value={data.title?.ru} onChange={(v: string) => updateTitle('ru', v)} />
        <FormField label="Title (EN)" value={data.title?.en} onChange={(v: string) => updateTitle('en', v)} />
        <FormField label="Title (LV)" value={data.title?.lv} onChange={(v: string) => updateTitle('lv', v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <TextAreaField label="Description (RU)" value={data.description?.ru} onChange={(v: string) => updateDesc('ru', v)} />
        <TextAreaField label="Description (EN)" value={data.description?.en} onChange={(v: string) => updateDesc('en', v)} />
        <TextAreaField label="Description (LV)" value={data.description?.lv} onChange={(v: string) => updateDesc('lv', v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField label="Icon" value={data.icon} onChange={(v: string) => update('icon', v)} placeholder="Heart, Users, etc." />
        <FormField label="Sort Order" value={data.sort_order} onChange={(v: string) => update('sort_order', parseInt(v) || 0)} type="number" />
      </div>
      <FormActions onSave={onSave} onCancel={onCancel} />
    </div>
  );
};

const StatForm = ({ data, onChange, onSave, onCancel }: any) => {
  const update = (field: string, value: any) => onChange({ ...data, [field]: value });
  const updateLabel = (lang: string, val: string) => onChange({ ...data, label: { ...data.label, [lang]: val } });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Statistic Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField label="Key (unique)" value={data.key} onChange={(v: string) => update('key', v)} placeholder="e.g. members" />
        <FormField label="Value" value={data.value} onChange={(v: string) => update('value', parseInt(v) || 0)} type="number" />
        <FormField label="Category" value={data.category} onChange={(v: string) => update('category', v)} placeholder="general, yearly, history" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField label="Label (RU)" value={data.label?.ru} onChange={(v: string) => updateLabel('ru', v)} />
        <FormField label="Label (EN)" value={data.label?.en} onChange={(v: string) => updateLabel('en', v)} />
        <FormField label="Label (LV)" value={data.label?.lv} onChange={(v: string) => updateLabel('lv', v)} />
      </div>
      <FormActions onSave={onSave} onCancel={onCancel} />
    </div>
  );
};

export default Admin;
