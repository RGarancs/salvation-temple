
-- Attach the auto_assign_admin trigger so invited users actually get their role on sign-in
DROP TRIGGER IF EXISTS on_auth_user_created_assign_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_assign_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.auto_assign_admin();

-- Backfill: ensure the owner email has admin role even if trigger didn't run historically
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users WHERE email = 'rihards.garancs@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- Backfill: process any pending invitations for users that already exist
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, i.role
FROM public.admin_invitations i
JOIN auth.users u ON lower(u.email) = lower(i.email)
WHERE i.status = 'pending'
ON CONFLICT (user_id, role) DO NOTHING;

UPDATE public.admin_invitations i
SET status = 'accepted', accepted_at = now()
FROM auth.users u
WHERE lower(u.email) = lower(i.email) AND i.status = 'pending';

-- Allow any authenticated user to read THEIR OWN role rows.
-- Without this, a non-admin (or freshly-promoted user before role propagates)
-- cannot verify their own role and gets bounced from /admin.
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
