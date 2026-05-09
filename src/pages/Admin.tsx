import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { ImageUpload } from '@/components/admin/ImageUpload';
import {
  CalendarDays, Users, Image as ImageIcon, BarChart3, Church, LogOut,
  Plus, Trash2, Edit, Save, X, Home, MessageSquareQuote, Newspaper,
  UserPlus, Settings, ArrowUp, ArrowDown, Sparkles, Search, Loader2,
  Download, Droplets,
} from 'lucide-react';

const SOCIAL_KEYS = ['whatsapp', 'telegram', 'instagram', 'youtube', 'facebook', 'website'] as const;
type SocialKey = typeof SOCIAL_KEYS[number];

type Tab = 'dashboard' | 'calendar' | 'ministries' | 'gallery' | 'statistics' | 'testimonials' | 'news' | 'users' | 'seo' | 'settings';

const LANGS = ['ru', 'en', 'lv'] as const;
const emptyI18n = () => ({ ru: '', en: '', lv: '' });

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('dashboard');

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) navigate('/admin/login');
  }, [user, isAdmin, loading, navigate]);

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
    { key: 'news', icon: Newspaper, label: 'News' },
    { key: 'ministries', icon: Church, label: 'Ministries' },
    { key: 'gallery', icon: ImageIcon, label: 'Gallery' },
    { key: 'testimonials', icon: MessageSquareQuote, label: 'Testimonials' },
    { key: 'statistics', icon: BarChart3, label: 'Statistics' },
    { key: 'users', icon: Users, label: 'Users' },
    { key: 'seo', icon: Search, label: 'AI SEO' },
    { key: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <aside className="w-60 bg-gray-900 border-r border-white/10 p-4 flex flex-col">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-sunset">Admin Panel</h1>
          <p className="text-xs text-white/40 mt-1 truncate">{user?.email}</p>
        </div>
        <nav className="space-y-1 flex-1 overflow-y-auto">
          {tabs.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === key ? 'bg-sunset/20 text-sunset' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </nav>
        <div className="space-y-2 mt-4">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5">
            <Home className="w-4 h-4" /> Back to Site
          </button>
          <button onClick={signOut} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {tab === 'dashboard' && <Dashboard />}
        {tab === 'calendar' && <CalendarManager userId={user?.id} />}
        {tab === 'news' && <NewsManager userId={user?.id} />}
        {tab === 'ministries' && <MinistriesManager />}
        {tab === 'gallery' && <GalleryManager />}
        {tab === 'testimonials' && <TestimonialsManager />}
        {tab === 'statistics' && <StatisticsManager />}
        {tab === 'users' && <UsersManager />}
        {tab === 'seo' && <SeoManager />}
        {tab === 'settings' && <SettingsManager />}
      </main>
    </div>
  );
};

// =============== Reusable UI ===============
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-gray-900 rounded-xl p-4 border border-white/10 ${className}`}>{children}</div>
);

const PageHeader = ({ title, action }: { title: string; action?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold">{title}</h2>
    {action}
  </div>
);

const Btn = ({ children, variant = 'primary', ...rest }: any) => {
  const styles = {
    primary: 'bg-sunset text-white hover:bg-sunset/80',
    ghost: 'text-white/60 hover:bg-white/5',
    danger: 'text-red-400 hover:bg-red-500/10',
  }[variant as 'primary' | 'ghost' | 'danger'];
  return (
    <button {...rest} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${styles} ${rest.className || ''}`}>
      {children}
    </button>
  );
};

const Field = ({ label, value, onChange, type = 'text', placeholder, rows }: any) => (
  <div>
    <label className="block text-xs font-medium text-white/60 mb-1">{label}</label>
    {rows ? (
      <textarea value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        className="w-full bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-sunset/50 resize-y" />
    ) : (
      <input type={type} value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-sunset/50" />
    )}
  </div>
);

const aiTranslate = async (source: string, sourceLang: string, targets: string[]) => {
  const { data, error } = await supabase.functions.invoke('ai-assist', {
    body: { mode: 'translate', source, sourceLang, targets },
  });
  if (error) throw error;
  return data.result as Record<string, string>;
};

const I18nField = ({ label, value, onChange, rows }: { label: string; value: any; onChange: (v: any) => void; rows?: number }) => {
  const [busy, setBusy] = useState<string | null>(null);
  const handleAi = async (sourceLang: string) => {
    const src = value?.[sourceLang];
    if (!src) { alert(`Fill ${sourceLang.toUpperCase()} first`); return; }
    const targets = LANGS.filter(l => l !== sourceLang);
    setBusy(sourceLang);
    try {
      const result = await aiTranslate(src, sourceLang, targets);
      onChange({ ...(value || emptyI18n()), ...result });
    } catch (e) { alert('Translate failed: ' + (e as Error).message); }
    finally { setBusy(null); }
  };
  return (
    <div>
      <label className="block text-xs font-semibold text-white/70 mb-2">{label}</label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {LANGS.map(l => (
          <div key={l} className="relative">
            <Field label={l.toUpperCase()} value={value?.[l]} onChange={(v: string) => onChange({ ...(value || emptyI18n()), [l]: v })} rows={rows} />
            <button
              type="button"
              title={`Translate from ${l.toUpperCase()} → others`}
              onClick={() => handleAi(l)}
              disabled={busy !== null}
              className="absolute top-0 right-0 p-1 rounded text-sunset hover:bg-sunset/10 disabled:opacity-40"
            >
              {busy === l ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============== Dashboard ===============
const Dashboard = () => {
  const [counts, setCounts] = useState({ events: 0, ministries: 0, news: 0, testimonials: 0, users: 0 });
  useEffect(() => {
    (async () => {
      const [e, m, n, t, u] = await Promise.all([
        supabase.from('calendar_events').select('id', { count: 'exact', head: true }),
        supabase.from('ministries').select('id', { count: 'exact', head: true }),
        supabase.from('news').select('id', { count: 'exact', head: true }),
        supabase.from('testimonials').select('id', { count: 'exact', head: true }),
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
      ]);
      setCounts({ events: e.count || 0, ministries: m.count || 0, news: n.count || 0, testimonials: t.count || 0, users: u.count || 0 });
    })();
  }, []);
  const items = [
    { icon: CalendarDays, label: 'Events', value: counts.events, color: 'text-blue-400' },
    { icon: Church, label: 'Ministries', value: counts.ministries, color: 'text-green-400' },
    { icon: Newspaper, label: 'News Posts', value: counts.news, color: 'text-amber-400' },
    { icon: MessageSquareQuote, label: 'Testimonials', value: counts.testimonials, color: 'text-coral' },
    { icon: Users, label: 'Users', value: counts.users, color: 'text-purple-400' },
  ];
  return (
    <div>
      <PageHeader title="Dashboard" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map(it => (
          <Card key={it.label}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${it.color}`}><it.icon className="w-5 h-5" /></div>
              <div><p className="text-2xl font-bold">{it.value}</p><p className="text-xs text-white/50">{it.label}</p></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// =============== Calendar ===============
const CalendarManager = ({ userId }: { userId?: string }) => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const load = useCallback(async () => {
    const { data } = await supabase.from('calendar_events').select('*').order('event_date');
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);

  const save = async () => {
    const payload = { ...editing };
    delete payload.id;
    if (editing.id) await supabase.from('calendar_events').update(payload).eq('id', editing.id);
    else await supabase.from('calendar_events').insert({ ...payload, created_by: userId });
    setEditing(null); load();
  };
  const del = async (id: string) => { if (confirm('Delete?')) { await supabase.from('calendar_events').delete().eq('id', id); load(); } };

  return (
    <div>
      <PageHeader title="Calendar Events" action={<Btn onClick={() => setEditing({ title: emptyI18n(), description: emptyI18n(), event_date: '', event_time: '', event_type: 'service', is_recurring: false })}><Plus className="w-4 h-4" /> Add Event</Btn>} />
      {editing && (
        <Card className="mb-4 border-sunset/30">
          <div className="space-y-3">
            <I18nField label="Title" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} />
            <I18nField label="Description" value={editing.description} onChange={v => setEditing({ ...editing, description: v })} rows={2} />
            <div className="grid grid-cols-3 gap-2">
              <Field label="Date" type="date" value={editing.event_date} onChange={(v: string) => setEditing({ ...editing, event_date: v })} />
              <Field label="Time" value={editing.event_time} onChange={(v: string) => setEditing({ ...editing, event_time: v })} placeholder="11:00" />
              <Field label="Type" value={editing.event_type} onChange={(v: string) => setEditing({ ...editing, event_type: v })} />
            </div>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setEditing(null)}><X className="w-4 h-4" /> Cancel</Btn>
              <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
            </div>
          </div>
        </Card>
      )}
      <div className="space-y-2">
        {items.map(it => (
          <Card key={it.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{it.title?.en || it.title?.ru || 'Untitled'}</p>
              <p className="text-xs text-white/50">{it.event_date} {it.event_time && `· ${it.event_time}`}</p>
            </div>
            <div className="flex gap-1">
              <Btn variant="ghost" onClick={() => setEditing(it)}><Edit className="w-4 h-4" /></Btn>
              <Btn variant="danger" onClick={() => del(it.id)}><Trash2 className="w-4 h-4" /></Btn>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="text-center text-white/40 py-8">No events yet.</p>}
      </div>
    </div>
  );
};

// =============== News ===============
const NewsManager = ({ userId }: { userId?: string }) => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const load = useCallback(async () => {
    const { data } = await supabase.from('news').select('*').order('published_at', { ascending: false });
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);

  const save = async () => {
    const payload = { ...editing }; delete payload.id; delete payload.created_at; delete payload.updated_at;
    if (editing.id) await supabase.from('news').update(payload).eq('id', editing.id);
    else await supabase.from('news').insert({ ...payload, created_by: userId });
    setEditing(null); load();
  };
  const del = async (id: string) => { if (confirm('Delete?')) { await supabase.from('news').delete().eq('id', id); load(); } };

  return (
    <div>
      <BaptismDatesPanel />
      <PageHeader title="News" action={<Btn onClick={() => setEditing({ title: emptyI18n(), content: emptyI18n(), image_url: '', published: true, published_at: new Date().toISOString().slice(0, 10) })}><Plus className="w-4 h-4" /> Add Post</Btn>} />
      {editing && (
        <Card className="mb-4 border-sunset/30">
          <div className="space-y-3">
            <I18nField label="Title" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} />
            <I18nField label="Content" value={editing.content} onChange={v => setEditing({ ...editing, content: v })} rows={4} />
            <ImageUpload label="Cover image" folder="news" value={editing.image_url} onChange={url => setEditing({ ...editing, image_url: url })} />
            <div className="grid grid-cols-2 gap-2">
              <Field label="Published date" type="date" value={(editing.published_at || '').slice(0, 10)} onChange={(v: string) => setEditing({ ...editing, published_at: v })} />
              <label className="flex items-center gap-2 mt-6 text-sm">
                <input type="checkbox" checked={!!editing.published} onChange={e => setEditing({ ...editing, published: e.target.checked })} /> Published
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setEditing(null)}><X className="w-4 h-4" /> Cancel</Btn>
              <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
            </div>
          </div>
        </Card>
      )}
      <div className="space-y-2">
        {items.map(it => (
          <Card key={it.id} className="flex items-center justify-between gap-3">
            {it.image_url && <img src={it.image_url} className="w-16 h-16 object-cover rounded" alt="" />}
            <div className="flex-1">
              <p className="font-medium">{it.title?.en || it.title?.ru || 'Untitled'}</p>
              <p className="text-xs text-white/50">{(it.published_at || '').slice(0, 10)} {!it.published && '· DRAFT'}</p>
            </div>
            <div className="flex gap-1">
              <Btn variant="ghost" onClick={() => setEditing(it)}><Edit className="w-4 h-4" /></Btn>
              <Btn variant="danger" onClick={() => del(it.id)}><Trash2 className="w-4 h-4" /></Btn>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="text-center text-white/40 py-8">No news posts yet.</p>}
      </div>
    </div>
  );
};

// =============== Ministries ===============
const MinistriesManager = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [galleryFor, setGalleryFor] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase.from('ministries').select('*').order('sort_order');
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);

  const save = async () => {
    const payload = { ...editing }; delete payload.id; delete payload.created_at; delete payload.updated_at;
    if (editing.id) await supabase.from('ministries').update(payload).eq('id', editing.id);
    else await supabase.from('ministries').insert(payload);
    setEditing(null); load();
  };
  const del = async (id: string) => { if (confirm('Delete?')) { await supabase.from('ministries').delete().eq('id', id); load(); } };

  if (galleryFor) return <MinistryGalleryEditor ministryKey={galleryFor} onClose={() => setGalleryFor(null)} />;

  return (
    <div>
      <PageHeader title="Ministries" action={<Btn onClick={() => setEditing({ key: '', title: emptyI18n(), description: emptyI18n(), mission: emptyI18n(), prayer_needs: emptyI18n(), how_to_help: emptyI18n(), leader_name: '', leader_image_url: '', icon: 'Heart', sort_order: items.length, external_links: {} })}><Plus className="w-4 h-4" /> Add Ministry</Btn>} />
      {editing && (
        <Card className="mb-4 border-sunset/30">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Field label="Key (unique id)" value={editing.key} onChange={(v: string) => setEditing({ ...editing, key: v })} placeholder="youth" />
              <Field label="Leader Name" value={editing.leader_name} onChange={(v: string) => setEditing({ ...editing, leader_name: v })} />
              <Field label="Sort Order" type="number" value={editing.sort_order} onChange={(v: string) => setEditing({ ...editing, sort_order: parseInt(v) || 0 })} />
            </div>
            <ImageUpload label="Leader Photo" folder="leaders" value={editing.leader_image_url} onChange={url => setEditing({ ...editing, leader_image_url: url })} />
            <I18nField label="Title" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} />
            <I18nField label="Description" value={editing.description} onChange={v => setEditing({ ...editing, description: v })} rows={3} />
            <I18nField label="Our Mission" value={editing.mission} onChange={v => setEditing({ ...editing, mission: v })} rows={3} />
            <I18nField label="Prayer Needs" value={editing.prayer_needs} onChange={v => setEditing({ ...editing, prayer_needs: v })} rows={3} />
            <I18nField label="How You Can Help / Join Us" value={editing.how_to_help} onChange={v => setEditing({ ...editing, how_to_help: v })} rows={3} />
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-2">External Links (social channels & pages outside the website)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {SOCIAL_KEYS.map((k: SocialKey) => (
                  <Field
                    key={k}
                    label={k.charAt(0).toUpperCase() + k.slice(1)}
                    value={editing.external_links?.[k] || ''}
                    placeholder={k === 'whatsapp' ? 'https://chat.whatsapp.com/…' : k === 'telegram' ? 'https://t.me/…' : `https://${k === 'website' ? 'example.com' : k + '.com/…'}`}
                    onChange={(v: string) => setEditing({ ...editing, external_links: { ...(editing.external_links || {}), [k]: v } })}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setEditing(null)}><X className="w-4 h-4" /> Cancel</Btn>
              <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
            </div>
          </div>
        </Card>
      )}
      <div className="space-y-2">
        {items.map(it => (
          <Card key={it.id} className="flex items-center justify-between gap-3">
            {it.leader_image_url && <img src={it.leader_image_url} className="w-12 h-12 rounded-full object-cover" alt="" />}
            <div className="flex-1">
              <p className="font-medium">{it.title?.en || it.title?.ru || it.key}</p>
              <p className="text-xs text-white/50">{it.leader_name || 'No leader'} · key: {it.key}</p>
            </div>
            <div className="flex gap-1">
              <Btn variant="ghost" onClick={() => setGalleryFor(it.key)}><ImageIcon className="w-4 h-4" /> Gallery</Btn>
              <Btn variant="ghost" onClick={() => setEditing(it)}><Edit className="w-4 h-4" /></Btn>
              <Btn variant="danger" onClick={() => del(it.id)}><Trash2 className="w-4 h-4" /></Btn>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="text-center text-white/40 py-8">No ministries yet. <br /><span className="text-xs">Tip: Add ministries with keys matching the carousel: worship, sundaySchool, youth, etc.</span></p>}
      </div>
    </div>
  );
};

const MinistryGalleryEditor = ({ ministryKey, onClose }: { ministryKey: string; onClose: () => void }) => {
  const [items, setItems] = useState<any[]>([]);
  const load = useCallback(async () => {
    const { data } = await supabase.from('ministry_gallery').select('*').eq('ministry_key', ministryKey).order('sort_order');
    if (data) setItems(data);
  }, [ministryKey]);
  useEffect(() => { load(); }, [load]);

  const add = async (url: string) => {
    if (!url) return;
    await supabase.from('ministry_gallery').insert({ ministry_key: ministryKey, image_url: url, sort_order: items.length });
    load();
  };
  const del = async (id: string) => { await supabase.from('ministry_gallery').delete().eq('id', id); load(); };
  const move = async (id: string, dir: -1 | 1) => {
    const idx = items.findIndex(x => x.id === id); const target = idx + dir;
    if (target < 0 || target >= items.length) return;
    await Promise.all([
      supabase.from('ministry_gallery').update({ sort_order: target }).eq('id', items[idx].id),
      supabase.from('ministry_gallery').update({ sort_order: idx }).eq('id', items[target].id),
    ]);
    load();
  };

  return (
    <div>
      <PageHeader title={`Gallery: ${ministryKey}`} action={<Btn variant="ghost" onClick={onClose}><X className="w-4 h-4" /> Close</Btn>} />
      <Card className="mb-4">
        <ImageUpload label="Add image to gallery" folder={`ministry/${ministryKey}`} value="" onChange={add} />
      </Card>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <div key={it.id} className="relative group">
            <img src={it.image_url} alt="" className="w-full h-40 object-cover rounded-lg border border-white/10" />
            <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => move(it.id, -1)} disabled={i === 0} className="w-7 h-7 rounded bg-gray-900/90 flex items-center justify-center disabled:opacity-30"><ArrowUp className="w-3 h-3" /></button>
              <button onClick={() => move(it.id, 1)} disabled={i === items.length - 1} className="w-7 h-7 rounded bg-gray-900/90 flex items-center justify-center disabled:opacity-30"><ArrowDown className="w-3 h-3" /></button>
              <button onClick={() => del(it.id)} className="w-7 h-7 rounded bg-red-500/90 flex items-center justify-center"><Trash2 className="w-3 h-3" /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="col-span-full text-center text-white/40 py-8">No images yet.</p>}
      </div>
    </div>
  );
};

// =============== Gallery (homepage gallery_images) ===============
const bundledGalleryModules = import.meta.glob<{ default: string }>('@/assets/gallery-*.jpg', { eager: true });
const bundledGalleryAssets = Object.entries(bundledGalleryModules).map(([path, mod]) => ({
  url: mod.default,
  name: path.split('/').pop() || 'image.jpg',
}));

const GalleryManager = () => {
  const [items, setItems] = useState<any[]>([]);
  const [importing, setImporting] = useState(false);
  const load = useCallback(async () => {
    const { data } = await supabase.from('gallery_images').select('*').order('sort_order');
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);

  const add = async (url: string) => {
    if (!url) return;
    await supabase.from('gallery_images').insert({ image_url: url, sort_order: items.length, category: 'general' });
    load();
  };
  const del = async (id: string) => { await supabase.from('gallery_images').delete().eq('id', id); load(); };
  const move = async (id: string, dir: -1 | 1) => {
    const idx = items.findIndex(x => x.id === id); const target = idx + dir;
    if (target < 0 || target >= items.length) return;
    await Promise.all([
      supabase.from('gallery_images').update({ sort_order: target }).eq('id', items[idx].id),
      supabase.from('gallery_images').update({ sort_order: idx }).eq('id', items[target].id),
    ]);
    load();
  };

  const importBundled = async () => {
    if (!confirm(`Import ${bundledGalleryAssets.length} bundled gallery images into the database? Existing items will be kept.`)) return;
    setImporting(true);
    let added = 0;
    try {
      const existing = new Set(items.map((it: any) => (it.image_url || '').split('/').pop()));
      for (const asset of bundledGalleryAssets) {
        const baseName = asset.name;
        if (Array.from(existing).some(n => typeof n === 'string' && n.includes(baseName.replace('.jpg', '')))) continue;
        const blob = await (await fetch(asset.url)).blob();
        const path = `gallery/${baseName.replace('.jpg', '')}-${crypto.randomUUID().slice(0, 8)}.jpg`;
        const { error } = await supabase.storage.from('church-media').upload(path, blob, { contentType: 'image/jpeg', upsert: false });
        if (error) { console.warn('skip', baseName, error.message); continue; }
        const { data } = supabase.storage.from('church-media').getPublicUrl(path);
        await supabase.from('gallery_images').insert({ image_url: data.publicUrl, sort_order: items.length + added, category: 'general', caption: { en: baseName.replace(/^gallery-|\.jpg$/g, '').replace(/-/g, ' '), ru: '', lv: '' } });
        added++;
      }
      alert(`Imported ${added} images.`);
    } catch (e) { alert('Import failed: ' + (e as Error).message); }
    finally { setImporting(false); load(); }
  };

  return (
    <div>
      <PageHeader title="Gallery" action={
        <Btn onClick={importBundled} disabled={importing}>
          {importing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          Import bundled images ({bundledGalleryAssets.length})
        </Btn>
      } />
      <Card className="mb-4">
        <ImageUpload label="Add new gallery image" folder="gallery" value="" onChange={add} />
      </Card>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <div key={it.id} className="relative group">
            <img src={it.image_url} alt="" className="w-full h-40 object-cover rounded-lg border border-white/10" />
            <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => move(it.id, -1)} disabled={i === 0} className="w-7 h-7 rounded bg-gray-900/90 flex items-center justify-center disabled:opacity-30"><ArrowUp className="w-3 h-3" /></button>
              <button onClick={() => move(it.id, 1)} disabled={i === items.length - 1} className="w-7 h-7 rounded bg-gray-900/90 flex items-center justify-center disabled:opacity-30"><ArrowDown className="w-3 h-3" /></button>
              <button onClick={() => del(it.id)} className="w-7 h-7 rounded bg-red-500/90 flex items-center justify-center"><Trash2 className="w-3 h-3" /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="col-span-full text-center text-white/40 py-8">No images yet. Click "Import bundled images" above to seed the database with the existing /gallery photos.</p>}
      </div>
    </div>
  );
};

// =============== Testimonials ===============
const TestimonialsManager = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const load = useCallback(async () => {
    const { data } = await supabase.from('testimonials').select('*').order('sort_order');
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);

  const save = async () => {
    const payload = { ...editing }; delete payload.id; delete payload.created_at; delete payload.updated_at;
    if (editing.id) await supabase.from('testimonials').update(payload).eq('id', editing.id);
    else await supabase.from('testimonials').insert(payload);
    setEditing(null); load();
  };
  const del = async (id: string) => { if (confirm('Delete?')) { await supabase.from('testimonials').delete().eq('id', id); load(); } };

  return (
    <div>
      <PageHeader title="Testimonials" action={<Btn onClick={() => setEditing({ name: emptyI18n(), before_text: emptyI18n(), encounter_text: emptyI18n(), after_text: emptyI18n(), sort_order: items.length, published: true })}><Plus className="w-4 h-4" /> Add Testimonial</Btn>} />
      {editing && (
        <Card className="mb-4 border-sunset/30">
          <div className="space-y-3">
            <I18nField label="Person Name" value={editing.name} onChange={v => setEditing({ ...editing, name: v })} />
            <I18nField label="Before" value={editing.before_text} onChange={v => setEditing({ ...editing, before_text: v })} rows={3} />
            <I18nField label="Encounter" value={editing.encounter_text} onChange={v => setEditing({ ...editing, encounter_text: v })} rows={3} />
            <I18nField label="After" value={editing.after_text} onChange={v => setEditing({ ...editing, after_text: v })} rows={3} />
            <div className="grid grid-cols-2 gap-2">
              <Field label="Sort Order" type="number" value={editing.sort_order} onChange={(v: string) => setEditing({ ...editing, sort_order: parseInt(v) || 0 })} />
              <label className="flex items-center gap-2 mt-6 text-sm">
                <input type="checkbox" checked={!!editing.published} onChange={e => setEditing({ ...editing, published: e.target.checked })} /> Published
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setEditing(null)}><X className="w-4 h-4" /> Cancel</Btn>
              <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
            </div>
          </div>
        </Card>
      )}
      <div className="space-y-2">
        {items.map(it => (
          <Card key={it.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{it.name?.en || it.name?.ru || 'Anonymous'}</p>
              <p className="text-xs text-white/50 line-clamp-1 max-w-md">{(it.before_text?.en || it.before_text?.ru || '').slice(0, 100)}</p>
            </div>
            <div className="flex gap-1">
              <Btn variant="ghost" onClick={() => setEditing(it)}><Edit className="w-4 h-4" /></Btn>
              <Btn variant="danger" onClick={() => del(it.id)}><Trash2 className="w-4 h-4" /></Btn>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="text-center text-white/40 py-8">No testimonials yet. The public page will fall back to bundled translations.</p>}
      </div>
    </div>
  );
};

// =============== Statistics ===============
const StatisticsManager = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const load = useCallback(async () => {
    const { data } = await supabase.from('site_statistics').select('*').order('category');
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);
  const save = async () => {
    const p = { ...editing }; delete p.id; delete p.updated_at;
    if (editing.id) await supabase.from('site_statistics').update(p).eq('id', editing.id);
    else await supabase.from('site_statistics').insert(p);
    setEditing(null); load();
  };
  const del = async (id: string) => { if (confirm('Delete?')) { await supabase.from('site_statistics').delete().eq('id', id); load(); } };

  return (
    <div>
      <PageHeader title="Statistics" action={<Btn onClick={() => setEditing({ key: '', value: 0, label: emptyI18n(), category: 'general' })}><Plus className="w-4 h-4" /> Add</Btn>} />
      {editing && (
        <Card className="mb-4 border-sunset/30">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <Field label="Key" value={editing.key} onChange={(v: string) => setEditing({ ...editing, key: v })} />
              <Field label="Value" type="number" value={editing.value} onChange={(v: string) => setEditing({ ...editing, value: parseInt(v) || 0 })} />
              <Field label="Category" value={editing.category} onChange={(v: string) => setEditing({ ...editing, category: v })} />
            </div>
            <I18nField label="Label" value={editing.label} onChange={v => setEditing({ ...editing, label: v })} />
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setEditing(null)}><X className="w-4 h-4" /> Cancel</Btn>
              <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
            </div>
          </div>
        </Card>
      )}
      <div className="space-y-2">
        {items.map(it => (
          <Card key={it.id} className="flex items-center justify-between">
            <div><p className="font-medium">{it.label?.en || it.key}: <span className="text-sunset">{it.value}</span></p><p className="text-xs text-white/50">{it.category}</p></div>
            <div className="flex gap-1">
              <Btn variant="ghost" onClick={() => setEditing(it)}><Edit className="w-4 h-4" /></Btn>
              <Btn variant="danger" onClick={() => del(it.id)}><Trash2 className="w-4 h-4" /></Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// =============== Users & Invitations ===============
const UsersManager = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [roles, setRoles] = useState<any[]>([]);
  const [invites, setInvites] = useState<any[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<'admin' | 'editor'>('admin');

  const load = useCallback(async () => {
    const [p, r, i] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      supabase.from('user_roles').select('*'),
      supabase.from('admin_invitations').select('*').order('created_at', { ascending: false }),
    ]);
    setProfiles(p.data || []); setRoles(r.data || []); setInvites(i.data || []);
  }, []);
  useEffect(() => { load(); }, [load]);

  const invite = async () => {
    if (!newEmail) return;
    await supabase.from('admin_invitations').insert({ email: newEmail.toLowerCase().trim(), role: newRole });
    setNewEmail(''); load();
  };
  const revokeInvite = async (id: string) => { await supabase.from('admin_invitations').delete().eq('id', id); load(); };
  const revokeRole = async (id: string) => { if (confirm('Revoke role?')) { await supabase.from('user_roles').delete().eq('id', id); load(); } };

  const userRole = (uid: string) => roles.find(r => r.user_id === uid)?.role;

  return (
    <div>
      <PageHeader title="Users & Access" />

      <Card className="mb-6 border-sunset/30">
        <h3 className="font-semibold mb-3 flex items-center gap-2"><UserPlus className="w-4 h-4" /> Invite by Email</h3>
        <p className="text-xs text-white/50 mb-3">When this person signs in with Google using the email below, they will automatically receive the chosen role.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="email@example.com" value={newEmail} onChange={e => setNewEmail(e.target.value)} className="flex-1 bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <select value={newRole} onChange={e => setNewRole(e.target.value as any)} className="bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-sm">
            <option value="admin">Admin</option><option value="editor">Editor</option>
          </select>
          <Btn onClick={invite}><Plus className="w-4 h-4" /> Invite</Btn>
        </div>
      </Card>

      <h3 className="font-semibold mb-3">Pending Invitations</h3>
      <div className="space-y-2 mb-6">
        {invites.filter(i => i.status === 'pending').map(i => (
          <Card key={i.id} className="flex items-center justify-between">
            <div><p className="font-medium">{i.email}</p><p className="text-xs text-white/50">Role: {i.role} · sent {new Date(i.created_at).toLocaleDateString()}</p></div>
            <Btn variant="danger" onClick={() => revokeInvite(i.id)}><Trash2 className="w-4 h-4" /></Btn>
          </Card>
        ))}
        {invites.filter(i => i.status === 'pending').length === 0 && <p className="text-sm text-white/40">No pending invitations.</p>}
      </div>

      <h3 className="font-semibold mb-3">Active Users</h3>
      <div className="space-y-2">
        {profiles.map(p => {
          const role = userRole(p.id);
          const roleRow = roles.find(r => r.user_id === p.id);
          return (
            <Card key={p.id} className="flex items-center justify-between gap-3">
              {p.avatar_url && <img src={p.avatar_url} className="w-10 h-10 rounded-full" alt="" />}
              <div className="flex-1">
                <p className="font-medium">{p.full_name || p.email}</p>
                <p className="text-xs text-white/50">{p.email} {role && <span className="ml-2 px-2 py-0.5 rounded bg-sunset/20 text-sunset">{role}</span>}</p>
              </div>
              {roleRow && p.email !== 'rihards.garancs@gmail.com' && (
                <Btn variant="danger" onClick={() => revokeRole(roleRow.id)}><Trash2 className="w-4 h-4" /> Revoke</Btn>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

// =============== Settings ===============
const SettingsManager = () => {
  const [embed, setEmbed] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    supabase.from('site_settings').select('value').eq('key', 'google_calendar_embed_url').maybeSingle()
      .then(({ data }) => setEmbed((data?.value as any)?.url || ''));
  }, []);

  const save = async () => {
    await supabase.from('site_settings').upsert({ key: 'google_calendar_embed_url', value: { url: embed }, updated_at: new Date().toISOString() });
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <PageHeader title="Settings" />
      <Card>
        <h3 className="font-semibold mb-2">Google Calendar Embed</h3>
        <p className="text-xs text-white/50 mb-3">
          Paste the public Google Calendar embed URL. In Google Calendar, go to Settings → your calendar → Integrate calendar → copy the "Embed code" src URL (starts with <code className="text-sunset">https://calendar.google.com/calendar/embed?src=...</code>). The calendar must be set to "Public".
        </p>
        <Field label="Embed URL" value={embed} onChange={setEmbed} placeholder="https://calendar.google.com/calendar/embed?src=..." />
        <div className="flex items-center gap-3 mt-3">
          <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
          {saved && <span className="text-green-400 text-sm">Saved!</span>}
        </div>
        {embed && (
          <div className="mt-4">
            <p className="text-xs text-white/50 mb-2">Preview:</p>
            <iframe src={embed} className="w-full h-96 rounded-lg border border-white/10" title="Calendar preview" />
          </div>
        )}
      </Card>
    </div>
  );
};

// =============== AI SEO ===============
const DEFAULT_ROUTES = [
  { route: '/', label: 'Home' },
  { route: '/history', label: 'History' },
  { route: '/training', label: 'Training' },
  { route: '/donations', label: 'Donations' },
  { route: '/gallery', label: 'Gallery' },
  { route: '/testimonies', label: 'Testimonies' },
  { route: '/serve', label: 'Serve' },
];

const SeoManager = () => {
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [generating, setGenerating] = useState(false);
  const [topic, setTopic] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase.from('seo_meta' as any).select('*').order('route');
    if (data) setItems(data);
  }, []);
  useEffect(() => { load(); }, [load]);

  const generate = async () => {
    if (!editing?.route) return;
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-assist', {
        body: { mode: 'seo', route: editing.route, topic: topic || editing.route },
      });
      if (error) throw error;
      const r = data.result as any;
      setEditing({
        ...editing,
        title: { ru: r.ru?.title || '', en: r.en?.title || '', lv: r.lv?.title || '' },
        description: { ru: r.ru?.description || '', en: r.en?.description || '', lv: r.lv?.description || '' },
      });
    } catch (e) { alert('Generation failed: ' + (e as Error).message); }
    finally { setGenerating(false); }
  };

  const save = async () => {
    const p = { ...editing }; delete p.id; delete p.updated_at;
    if (editing.id) await (supabase.from('seo_meta' as any) as any).update(p).eq('id', editing.id);
    else await (supabase.from('seo_meta' as any) as any).insert(p);
    setEditing(null); setTopic(''); load();
  };
  const del = async (id: string) => { if (confirm('Delete?')) { await (supabase.from('seo_meta' as any) as any).delete().eq('id', id); load(); } };

  const existingRoutes = new Set(items.map(i => i.route));

  return (
    <div>
      <PageHeader title="AI SEO Manager" action={
        <Btn onClick={() => setEditing({ route: '', title: emptyI18n(), description: emptyI18n(), keywords: '' })}>
          <Plus className="w-4 h-4" /> Add
        </Btn>
      } />

      <Card className="mb-4">
        <p className="text-xs text-white/60 mb-2">Quick add (missing routes):</p>
        <div className="flex flex-wrap gap-2">
          {DEFAULT_ROUTES.filter(r => !existingRoutes.has(r.route)).map(r => (
            <button key={r.route} onClick={() => setEditing({ route: r.route, title: emptyI18n(), description: emptyI18n(), keywords: '' })}
              className="px-3 py-1 text-xs rounded-full bg-sunset/10 text-sunset hover:bg-sunset/20">
              + {r.label} ({r.route})
            </button>
          ))}
        </div>
      </Card>

      {editing && (
        <Card className="mb-4 border-sunset/30">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Field label="Route (e.g. /, /history)" value={editing.route} onChange={(v: string) => setEditing({ ...editing, route: v })} />
              <Field label="Keywords (comma separated)" value={editing.keywords} onChange={(v: string) => setEditing({ ...editing, keywords: v })} />
            </div>
            <Card className="bg-sunset/5 border-sunset/20">
              <div className="flex items-end gap-2">
                <Field label="AI: describe this page in a sentence" value={topic} onChange={setTopic} placeholder="e.g. Church history page covering 1907 founding by William Fetler..." />
                <Btn onClick={generate} disabled={generating}>
                  {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />} Generate trilingual SEO
                </Btn>
              </div>
            </Card>
            <I18nField label="Title (<60 chars)" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} />
            <I18nField label="Description (<160 chars)" value={editing.description} onChange={v => setEditing({ ...editing, description: v })} rows={2} />
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => { setEditing(null); setTopic(''); }}><X className="w-4 h-4" /> Cancel</Btn>
              <Btn onClick={save}><Save className="w-4 h-4" /> Save</Btn>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {items.map(it => (
          <Card key={it.id} className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="font-medium"><span className="text-sunset">{it.route}</span> · {it.title?.en || it.title?.ru || '(no title)'}</p>
              <p className="text-xs text-white/50 truncate">{it.description?.en || it.description?.ru}</p>
            </div>
            <div className="flex gap-1">
              <Btn variant="ghost" onClick={() => setEditing(it)}><Edit className="w-4 h-4" /></Btn>
              <Btn variant="danger" onClick={() => del(it.id)}><Trash2 className="w-4 h-4" /></Btn>
            </div>
          </Card>
        ))}
        {items.length === 0 && <p className="text-center text-white/40 py-8">No SEO entries yet. Click a route chip above to start.</p>}
      </div>
    </div>
  );
};

export default Admin;
