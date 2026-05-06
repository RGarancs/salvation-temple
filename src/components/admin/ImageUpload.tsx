import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X, Loader2 } from 'lucide-react';

interface ImageUploadProps {
  value?: string | null;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
}

export const ImageUpload = ({ value, onChange, folder = 'misc', label = 'Image' }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split('.').pop();
      const path = `${folder}/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from('church-media').upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });
      if (error) throw error;
      const { data } = supabase.storage.from('church-media').getPublicUrl(path);
      onChange(data.publicUrl);
    } catch (e) {
      console.error('Upload failed', e);
      alert('Upload failed: ' + (e as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-xs font-medium text-white/60 mb-1">{label}</label>
      {value ? (
        <div className="relative inline-block">
          <img src={value} alt="" className="w-32 h-32 object-cover rounded-lg border border-white/10" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <label className="flex items-center justify-center gap-2 w-full h-24 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-sunset/50 transition-colors">
          {uploading ? <Loader2 className="w-5 h-5 animate-spin text-sunset" /> : <Upload className="w-5 h-5 text-white/40" />}
          <span className="text-sm text-white/60">{uploading ? 'Uploading...' : 'Click to upload'}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            disabled={uploading}
            onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </label>
      )}
    </div>
  );
};
