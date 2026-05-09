import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
}

export const useAuth = () => {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    isAdmin: false,
    loading: true,
  });

  const checkAdmin = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();
    return !!data;
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const user = session?.user ?? null;
        // Synchronously update session/user, then defer admin check to avoid
        // deadlocking the gotrue auth lock (no supabase calls inside this callback).
        setState((prev) => ({ ...prev, user, session, loading: user ? prev.loading : false, isAdmin: user ? prev.isAdmin : false }));
        if (user) {
          setTimeout(async () => {
            const isAdmin = await checkAdmin(user.id);
            setState({ user, session, isAdmin, loading: false });
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      const user = session?.user ?? null;
      if (!user) {
        setState({ user: null, session: null, isAdmin: false, loading: false });
        return;
      }
      setTimeout(async () => {
        const isAdmin = await checkAdmin(user.id);
        setState({ user, session, isAdmin, loading: false });
      }, 0);
    });

    return () => subscription.unsubscribe();
  }, [checkAdmin]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { ...state, signOut };
};
