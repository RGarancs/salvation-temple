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
      async (event, session) => {
        const user = session?.user ?? null;
        let isAdmin = false;
        if (user) {
          isAdmin = await checkAdmin(user.id);
        }
        setState({ user, session, isAdmin, loading: false });
      }
    );

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const user = session?.user ?? null;
      let isAdmin = false;
      if (user) {
        isAdmin = await checkAdmin(user.id);
      }
      setState({ user, session, isAdmin, loading: false });
    });

    return () => subscription.unsubscribe();
  }, [checkAdmin]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { ...state, signOut };
};
