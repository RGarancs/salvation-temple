export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_invitations: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string
          id: string
          invited_by: string | null
          role: Database["public"]["Enums"]["app_role"]
          status: string
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email: string
          id?: string
          invited_by?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          status?: string
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string
          id?: string
          invited_by?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          status?: string
        }
        Relationships: []
      }
      calendar_events: {
        Row: {
          created_at: string
          created_by: string | null
          description: Json | null
          event_date: string
          event_time: string | null
          event_type: string | null
          id: string
          is_recurring: boolean | null
          title: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: Json | null
          event_date: string
          event_time?: string | null
          event_type?: string | null
          id?: string
          is_recurring?: boolean | null
          title?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: Json | null
          event_date?: string
          event_time?: string | null
          event_type?: string | null
          id?: string
          is_recurring?: boolean | null
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          caption: Json | null
          category: string | null
          created_at: string
          id: string
          image_url: string
          sort_order: number | null
          uploaded_by: string | null
        }
        Insert: {
          caption?: Json | null
          category?: string | null
          created_at?: string
          id?: string
          image_url: string
          sort_order?: number | null
          uploaded_by?: string | null
        }
        Update: {
          caption?: Json | null
          category?: string | null
          created_at?: string
          id?: string
          image_url?: string
          sort_order?: number | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      ministries: {
        Row: {
          created_at: string
          description: Json | null
          external_links: Json
          how_to_help: Json | null
          icon: string | null
          id: string
          key: string
          leader_image_url: string | null
          leader_name: string | null
          mission: Json | null
          prayer_needs: Json | null
          sort_order: number | null
          title: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: Json | null
          external_links?: Json
          how_to_help?: Json | null
          icon?: string | null
          id?: string
          key: string
          leader_image_url?: string | null
          leader_name?: string | null
          mission?: Json | null
          prayer_needs?: Json | null
          sort_order?: number | null
          title?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: Json | null
          external_links?: Json
          how_to_help?: Json | null
          icon?: string | null
          id?: string
          key?: string
          leader_image_url?: string | null
          leader_name?: string | null
          mission?: Json | null
          prayer_needs?: Json | null
          sort_order?: number | null
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      ministry_gallery: {
        Row: {
          caption: Json | null
          created_at: string
          id: string
          image_url: string
          ministry_key: string
          sort_order: number | null
        }
        Insert: {
          caption?: Json | null
          created_at?: string
          id?: string
          image_url: string
          ministry_key: string
          sort_order?: number | null
        }
        Update: {
          caption?: Json | null
          created_at?: string
          id?: string
          image_url?: string
          ministry_key?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      news: {
        Row: {
          content: Json
          created_at: string
          created_by: string | null
          id: string
          image_url: string | null
          published: boolean
          published_at: string
          title: Json
          updated_at: string
        }
        Insert: {
          content?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          image_url?: string | null
          published?: boolean
          published_at?: string
          title?: Json
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          image_url?: string | null
          published?: boolean
          published_at?: string
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_meta: {
        Row: {
          description: Json
          id: string
          keywords: string | null
          route: string
          title: Json
          updated_at: string
        }
        Insert: {
          description?: Json
          id?: string
          keywords?: string | null
          route: string
          title?: Json
          updated_at?: string
        }
        Update: {
          description?: Json
          id?: string
          keywords?: string | null
          route?: string
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      site_statistics: {
        Row: {
          category: string | null
          id: string
          key: string
          label: Json | null
          updated_at: string
          value: number
        }
        Insert: {
          category?: string | null
          id?: string
          key: string
          label?: Json | null
          updated_at?: string
          value?: number
        }
        Update: {
          category?: string | null
          id?: string
          key?: string
          label?: Json | null
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          after_text: Json
          before_text: Json
          created_at: string
          encounter_text: Json
          id: string
          name: Json
          published: boolean
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          after_text?: Json
          before_text?: Json
          created_at?: string
          encounter_text?: Json
          id?: string
          name?: Json
          published?: boolean
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          after_text?: Json
          before_text?: Json
          created_at?: string
          encounter_text?: Json
          id?: string
          name?: Json
          published?: boolean
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
