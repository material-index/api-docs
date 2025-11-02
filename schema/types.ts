export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      material_categories: {
        Row: {
          created_by: string | null
          id: number
          name: string
          parent_id: number | null
          tooltip: string | null
        }
        Insert: {
          created_by?: string | null
          id: number
          name?: string
          parent_id?: number | null
          tooltip?: string | null
        }
        Update: {
          created_by?: string | null
          id?: number
          name?: string
          parent_id?: number | null
          tooltip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "material_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      material_properties: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_verified: boolean | null
          material_id: number
          notes: string | null
          property_category: number | null
          property_id: number | null
          source: string | null
          test_standard: string | null
          unit: string | null
          updated_at: string | null
          value: number | null
          value_max: number | null
          value_min: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_verified?: boolean | null
          material_id: number
          notes?: string | null
          property_category?: number | null
          property_id?: number | null
          source?: string | null
          test_standard?: string | null
          unit?: string | null
          updated_at?: string | null
          value?: number | null
          value_max?: number | null
          value_min?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_verified?: boolean | null
          material_id?: number
          notes?: string | null
          property_category?: number | null
          property_id?: number | null
          source?: string | null
          test_standard?: string | null
          unit?: string | null
          updated_at?: string | null
          value?: number | null
          value_max?: number | null
          value_min?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "material_properties_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "material_properties_property_category_fkey"
            columns: ["property_category"]
            isOneToOne: false
            referencedRelation: "property_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "material_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      materials: {
        Row: {
          alternative_names: string | null
          created_at: string | null
          created_by: string | null
          custom_id: string | null
          description: string | null
          distribution: string | null
          group_image_url: string | null
          id: number
          ingredients: number[] | null
          is_public: boolean
          is_verified: boolean
          material_category_id: number | null
          name: string | null
          scientific_name: string | null
          slug: string | null
          source: string | null
          updated_at: string | null
          variation_name: string | null
          version: number | null
        }
        Insert: {
          alternative_names?: string | null
          created_at?: string | null
          created_by?: string | null
          custom_id?: string | null
          description?: string | null
          distribution?: string | null
          group_image_url?: string | null
          id: number
          ingredients?: number[] | null
          is_public?: boolean
          is_verified: boolean
          material_category_id?: number | null
          name?: string | null
          scientific_name?: string | null
          slug?: string | null
          source?: string | null
          updated_at?: string | null
          variation_name?: string | null
          version?: number | null
        }
        Update: {
          alternative_names?: string | null
          created_at?: string | null
          created_by?: string | null
          custom_id?: string | null
          description?: string | null
          distribution?: string | null
          group_image_url?: string | null
          id?: number
          ingredients?: number[] | null
          is_public?: boolean
          is_verified?: boolean
          material_category_id?: number | null
          name?: string | null
          scientific_name?: string | null
          slug?: string | null
          source?: string | null
          updated_at?: string | null
          variation_name?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "materials_material_category_id_fkey"
            columns: ["material_category_id"]
            isOneToOne: false
            referencedRelation: "material_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          alternative_name: string | null
          category_id: number
          created_by: string | null
          data_type: string
          id: number
          name: string
          slug: string
          unit: string
        }
        Insert: {
          alternative_name?: string | null
          category_id: number
          created_by?: string | null
          data_type?: string
          id?: number
          name?: string
          slug?: string
          unit?: string
        }
        Update: {
          alternative_name?: string | null
          category_id?: number
          created_by?: string | null
          data_type?: string
          id?: number
          name?: string
          slug?: string
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "property_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      property_categories: {
        Row: {
          created_by: string | null
          description: string
          id: number
          name: string
        }
        Insert: {
          created_by?: string | null
          description?: string
          id: number
          name?: string
        }
        Update: {
          created_by?: string | null
          description?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database["public"]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof Database
}
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof Database
}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof Database
}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof Database
}
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof Database
}
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
