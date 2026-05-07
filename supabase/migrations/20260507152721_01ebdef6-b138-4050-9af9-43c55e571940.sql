
CREATE TABLE IF NOT EXISTS public.seo_meta (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  route text NOT NULL UNIQUE,
  title jsonb NOT NULL DEFAULT '{"ru":"","en":"","lv":""}'::jsonb,
  description jsonb NOT NULL DEFAULT '{"ru":"","en":"","lv":""}'::jsonb,
  keywords text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.seo_meta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read seo_meta" ON public.seo_meta FOR SELECT USING (true);
CREATE POLICY "Admins manage seo_meta" ON public.seo_meta FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
