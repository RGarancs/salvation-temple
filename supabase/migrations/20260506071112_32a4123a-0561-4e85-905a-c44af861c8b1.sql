
-- News table
CREATE TABLE public.news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title jsonb NOT NULL DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  content jsonb NOT NULL DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  image_url text,
  published boolean NOT NULL DEFAULT true,
  published_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published news" ON public.news FOR SELECT USING (published = true);
CREATE POLICY "Admins manage news" ON public.news FOR ALL TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));

-- Testimonials table
CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name jsonb NOT NULL DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  before_text jsonb NOT NULL DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  encounter_text jsonb NOT NULL DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  after_text jsonb NOT NULL DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  sort_order int DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published testimonials" ON public.testimonials FOR SELECT USING (published = true);
CREATE POLICY "Admins manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));

-- Ministry gallery
CREATE TABLE public.ministry_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ministry_key text NOT NULL,
  image_url text NOT NULL,
  caption jsonb DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  sort_order int DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.ministry_gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view ministry gallery" ON public.ministry_gallery FOR SELECT USING (true);
CREATE POLICY "Admins manage ministry gallery" ON public.ministry_gallery FOR ALL TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));

-- Admin invitations
CREATE TABLE public.admin_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  role app_role NOT NULL DEFAULT 'admin',
  invited_by uuid,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  accepted_at timestamptz
);
ALTER TABLE public.admin_invitations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage invitations" ON public.admin_invitations FOR ALL TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));

-- Site settings
CREATE TABLE public.site_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Admins manage settings" ON public.site_settings FOR ALL TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));

INSERT INTO public.site_settings (key, value) VALUES ('google_calendar_embed_url', '{"url":""}'::jsonb);

-- Extend ministries with new fields
ALTER TABLE public.ministries
  ADD COLUMN IF NOT EXISTS prayer_needs jsonb DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  ADD COLUMN IF NOT EXISTS how_to_help jsonb DEFAULT '{"en":"","ru":"","lv":""}'::jsonb,
  ADD COLUMN IF NOT EXISTS mission jsonb DEFAULT '{"en":"","ru":"","lv":""}'::jsonb;

-- Update auto-assign function: keep super admin + grant from invitations
CREATE OR REPLACE FUNCTION public.auto_assign_admin()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  inv_role app_role;
BEGIN
  IF NEW.email = 'rihards.garancs@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  SELECT role INTO inv_role FROM public.admin_invitations
    WHERE lower(email) = lower(NEW.email) AND status = 'pending' LIMIT 1;
  IF inv_role IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, inv_role)
    ON CONFLICT (user_id, role) DO NOTHING;
    UPDATE public.admin_invitations SET status='accepted', accepted_at=now() WHERE lower(email)=lower(NEW.email);
  END IF;
  RETURN NEW;
END;
$$;

-- Storage bucket for media uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('church-media', 'church-media', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read church-media" ON storage.objects FOR SELECT USING (bucket_id = 'church-media');
CREATE POLICY "Admins upload church-media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id='church-media' AND has_role(auth.uid(),'admin'));
CREATE POLICY "Admins update church-media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id='church-media' AND has_role(auth.uid(),'admin'));
CREATE POLICY "Admins delete church-media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id='church-media' AND has_role(auth.uid(),'admin'));

-- Allow admins to view all user_roles & profiles list
CREATE POLICY "Admins manage user_roles" ON public.user_roles FOR ALL TO authenticated
  USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));
