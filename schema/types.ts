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
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      api_keys: {
        Row: {
          created_at: string
          id: string
          key_hash: string
          note: string | null
          plan: string
          prefix: string
          revoked_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key_hash: string
          note?: string | null
          plan?: string
          prefix: string
          revoked_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key_hash?: string
          note?: string | null
          plan?: string
          prefix?: string
          revoked_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      consent_audit_log: {
        Row: {
          action: string
          consent_type_id: string
          created_at: string | null
          id: string
          ip_address: unknown
          new_value: boolean | null
          previous_value: boolean | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          consent_type_id: string
          created_at?: string | null
          id?: string
          ip_address?: unknown
          new_value?: boolean | null
          previous_value?: boolean | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          consent_type_id?: string
          created_at?: string | null
          id?: string
          ip_address?: unknown
          new_value?: boolean | null
          previous_value?: boolean | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consent_audit_log_consent_type_id_fkey"
            columns: ["consent_type_id"]
            isOneToOne: false
            referencedRelation: "consent_types"
            referencedColumns: ["id"]
          },
        ]
      }
      consent_types: {
        Row: {
          category: string
          created_at: string | null
          description: string
          id: string
          legal_basis: string
          name: string
          required: boolean | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          id: string
          legal_basis: string
          name: string
          required?: boolean | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          legal_basis?: string
          name?: string
          required?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      data_subject_requests: {
        Row: {
          admin_notes: string | null
          completed_at: string | null
          created_at: string | null
          data_export_url: string | null
          description: string | null
          id: string
          ip_address: unknown
          request_type: string
          requested_at: string | null
          session_id: string | null
          status: string
          updated_at: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          admin_notes?: string | null
          completed_at?: string | null
          created_at?: string | null
          data_export_url?: string | null
          description?: string | null
          id?: string
          ip_address?: unknown
          request_type: string
          requested_at?: string | null
          session_id?: string | null
          status?: string
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          admin_notes?: string | null
          completed_at?: string | null
          created_at?: string | null
          data_export_url?: string | null
          description?: string | null
          id?: string
          ip_address?: unknown
          request_type?: string
          requested_at?: string | null
          session_id?: string | null
          status?: string
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      finish_categories: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string
          parent_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string
          parent_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string
          parent_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "finish_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "finish_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      finishes: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          finish_category_id: number | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          finish_category_id?: number | null
          id: number
          name?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          finish_category_id?: number | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "finishes_finish_category_id_fkey"
            columns: ["finish_category_id"]
            isOneToOne: false
            referencedRelation: "finish_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      landed: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          landed_category_id: number | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          landed_category_id?: number | null
          name?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          landed_category_id?: number | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "landed_landed_category_id_fkey"
            columns: ["landed_category_id"]
            isOneToOne: false
            referencedRelation: "landed_categories"
            referencedColumns: ["id"]
          },
        ]
      }
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
      material_co2e_factors: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          factor_name: string | null
          factor_value: number | null
          id: number
          location: string
          material_id: number | null
          source: string | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          factor_name?: string | null
          factor_value?: number | null
          id: number
          location: string
          material_id?: number | null
          source?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          factor_name?: string | null
          factor_value?: number | null
          id?: number
          location?: string
          material_id?: number | null
          source?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_co2e_factors_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      material_composition: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          ingredient_id: number[] | null
          material_id: number | null
          notes: string | null
          percentage: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          ingredient_id?: number[] | null
          material_id?: number | null
          notes?: string | null
          percentage?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          ingredient_id?: number[] | null
          material_id?: number | null
          notes?: string | null
          percentage?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_ingredients_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      material_edit_suggestions: {
        Row: {
          admin_notes: string | null
          created_at: string | null
          generated_sql: string | null
          id: string
          material_changes: Json | null
          material_id: number
          property_changes: Json | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          suggested_by: string | null
          suggested_by_email: string | null
          suggestion_type: string
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string | null
          generated_sql?: string | null
          id?: string
          material_changes?: Json | null
          material_id: number
          property_changes?: Json | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          suggested_by?: string | null
          suggested_by_email?: string | null
          suggestion_type: string
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          created_at?: string | null
          generated_sql?: string | null
          id?: string
          material_changes?: Json | null
          material_id?: number
          property_changes?: Json | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          suggested_by?: string | null
          suggested_by_email?: string | null
          suggestion_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_edit_suggestions_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      material_finish: {
        Row: {
          created_at: string | null
          created_by: string | null
          finish_id: number
          id: number
          material_id: number
          notes: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          finish_id: number
          id?: never
          material_id: number
          notes?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          finish_id?: number
          id?: never
          material_id?: number
          notes?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_finish_finish_id_fkey"
            columns: ["finish_id"]
            isOneToOne: false
            referencedRelation: "finishes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "material_finish_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      material_groups: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          image_url: string | null
          material_ids: number[]
          name: string
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          material_ids: number[]
          name: string
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          material_ids?: number[]
          name?: string
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      material_images: {
        Row: {
          alt_text: string | null
          created_at: string | null
          created_by: string | null
          file_path: string
          file_size: number
          filename: string
          id: number
          is_primary: boolean | null
          material_id: number
          mime_type: string
          original_filename: string
          updated_at: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string | null
          created_by?: string | null
          file_path: string
          file_size: number
          filename: string
          id?: number
          is_primary?: boolean | null
          material_id: number
          mime_type: string
          original_filename: string
          updated_at?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string | null
          created_by?: string | null
          file_path?: string
          file_size?: number
          filename?: string
          id?: number
          is_primary?: boolean | null
          material_id?: number
          mime_type?: string
          original_filename?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_material_images_material_id"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      material_landed: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          landed_id: number
          material_id: number
          notes: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: never
          landed_id: number
          material_id: number
          notes?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: never
          landed_id?: number
          material_id?: number
          notes?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_landed_landed_id_fkey"
            columns: ["landed_id"]
            isOneToOne: false
            referencedRelation: "landed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "material_landed_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
      material_process: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          material_id: number
          notes: string | null
          process_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: never
          material_id: number
          notes?: string | null
          process_id: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: never
          material_id?: number
          notes?: string | null
          process_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_process_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "material_process_process_id_fkey"
            columns: ["process_id"]
            isOneToOne: false
            referencedRelation: "processes"
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
      privacy_settings: {
        Row: {
          communication_preferences: Json
          consent_preferences: Json
          created_at: string | null
          data_retention_preferences: Json
          id: string
          last_updated: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          communication_preferences?: Json
          consent_preferences?: Json
          created_at?: string | null
          data_retention_preferences?: Json
          id?: string
          last_updated?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          communication_preferences?: Json
          consent_preferences?: Json
          created_at?: string | null
          data_retention_preferences?: Json
          id?: string
          last_updated?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      process_categories: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string
          parent_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string
          parent_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string
          parent_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "process_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "process_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      processes: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string
          process_category_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string
          process_category_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string
          process_category_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "processes_process_category_id_fkey"
            columns: ["process_category_id"]
            isOneToOne: false
            referencedRelation: "process_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      project_materials: {
        Row: {
          created_at: string | null
          group_children_uuids: string[] | null
          group_parent_uuid: string | null
          group_type: string | null
          id: string
          instance_uuid: string
          is_group_parent: boolean | null
          item_type: string
          material_id: string
          position: Json | null
          project_id: string
          quantity: number
          size: Json | null
          unit: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_children_uuids?: string[] | null
          group_parent_uuid?: string | null
          group_type?: string | null
          id?: string
          instance_uuid?: string
          is_group_parent?: boolean | null
          item_type: string
          material_id: string
          position?: Json | null
          project_id: string
          quantity?: number
          size?: Json | null
          unit?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_children_uuids?: string[] | null
          group_parent_uuid?: string | null
          group_type?: string | null
          id?: string
          instance_uuid?: string
          is_group_parent?: boolean | null
          item_type?: string
          material_id?: string
          position?: Json | null
          project_id?: string
          quantity?: number
          size?: Json | null
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_materials_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          allocation_principles: string | null
          conformity_statement: string | null
          created_at: string | null
          cut_off_rules: string | null
          dangerous_substances: string | null
          data_collection_period: string | null
          data_quality_requirements: string | null
          data_representativeness: string | null
          declared_unit: string | null
          declared_unit_custom: string | null
          description: string | null
          environmental_certification: string | null
          epd_date_of_issue: string | null
          epd_operator: string | null
          epd_programme: string | null
          epd_registration_number: string | null
          epd_type: string | null
          epd_validity_period: string | null
          epd_version: string | null
          epd_version_custom: string | null
          functional_unit: string | null
          functional_unit_custom: string | null
          geographical_scope: string | null
          id: string
          image_url: string | null
          is_public: boolean | null
          lca_data_sources: string | null
          manufacturer_address: string | null
          manufacturer_contact: string | null
          manufacturer_name: string | null
          product_category_rules: string | null
          reference_service_life: string | null
          reference_standards: string[] | null
          scenarios_assumptions: string | null
          slug: string | null
          system_boundaries: string | null
          technical_scope: string | null
          title: string
          total_co2: number | null
          updated_at: string | null
          user_id: string
          verification_date: string | null
          verification_evidence: string | null
          verifier_name: string | null
          verifier_organization: string | null
          verifier_signature: string | null
        }
        Insert: {
          allocation_principles?: string | null
          conformity_statement?: string | null
          created_at?: string | null
          cut_off_rules?: string | null
          dangerous_substances?: string | null
          data_collection_period?: string | null
          data_quality_requirements?: string | null
          data_representativeness?: string | null
          declared_unit?: string | null
          declared_unit_custom?: string | null
          description?: string | null
          environmental_certification?: string | null
          epd_date_of_issue?: string | null
          epd_operator?: string | null
          epd_programme?: string | null
          epd_registration_number?: string | null
          epd_type?: string | null
          epd_validity_period?: string | null
          epd_version?: string | null
          epd_version_custom?: string | null
          functional_unit?: string | null
          functional_unit_custom?: string | null
          geographical_scope?: string | null
          id?: string
          image_url?: string | null
          is_public?: boolean | null
          lca_data_sources?: string | null
          manufacturer_address?: string | null
          manufacturer_contact?: string | null
          manufacturer_name?: string | null
          product_category_rules?: string | null
          reference_service_life?: string | null
          reference_standards?: string[] | null
          scenarios_assumptions?: string | null
          slug?: string | null
          system_boundaries?: string | null
          technical_scope?: string | null
          title: string
          total_co2?: number | null
          updated_at?: string | null
          user_id: string
          verification_date?: string | null
          verification_evidence?: string | null
          verifier_name?: string | null
          verifier_organization?: string | null
          verifier_signature?: string | null
        }
        Update: {
          allocation_principles?: string | null
          conformity_statement?: string | null
          created_at?: string | null
          cut_off_rules?: string | null
          dangerous_substances?: string | null
          data_collection_period?: string | null
          data_quality_requirements?: string | null
          data_representativeness?: string | null
          declared_unit?: string | null
          declared_unit_custom?: string | null
          description?: string | null
          environmental_certification?: string | null
          epd_date_of_issue?: string | null
          epd_operator?: string | null
          epd_programme?: string | null
          epd_registration_number?: string | null
          epd_type?: string | null
          epd_validity_period?: string | null
          epd_version?: string | null
          epd_version_custom?: string | null
          functional_unit?: string | null
          functional_unit_custom?: string | null
          geographical_scope?: string | null
          id?: string
          image_url?: string | null
          is_public?: boolean | null
          lca_data_sources?: string | null
          manufacturer_address?: string | null
          manufacturer_contact?: string | null
          manufacturer_name?: string | null
          product_category rules?: string | null
          reference_service_life?: string | null
          reference_standards?: string[] | null
          scenarios_assumptions?: string | null
          slug?: string | null
          system_boundaries?: string | null
          technical_scope?: string | null
          title?: string
          total_co2?: number | null
          updated_at?: string | null
          user_id?: string
          verification_date?: string | null
          verification_evidence?: string | null
          verifier_name?: string | null
          verifier_organization?: string | null
          verifier_signature?: string | null
        }
        Relationships: []
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
      rate_limits: {
        Row: {
          plan_snapshot: string
          requests_count: number
          user_id: string
          window_starts_at: string
        }
        Insert: {
          plan_snapshot: string
          requests_count?: number
          user_id: string
          window_starts_at: string
        }
        Update: {
          plan_snapshot?: string
          requests_count?: number
          user_id?: string
          window_starts_at?: string
        }
        Relationships: []
      }
      user_consent: {
        Row: {
          consent_type_id: string
          consent_version: string
          created_at: string | null
          granted: boolean
          granted_at: string | null
          id: string
          ip_address: unknown
          session_id: string | null
          updated_at: string | null
          user_agent: string | null
          user_id: string | null
          withdrawn_at: string | null
        }
        Insert: {
          consent_type_id: string
          consent_version?: string
          created_at?: string | null
          granted: boolean
          granted_at?: string | null
          id?: string
          ip_address?: unknown
          session_id?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
          withdrawn_at?: string | null
        }
        Update: {
          consent_type_id?: string
          consent_version?: string
          created_at?: string | null
          granted?: boolean
          granted_at?: string | null
          id?: string
          ip_address?: unknown
          session_id?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
          withdrawn_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_consent_consent_type_id_fkey"
            columns: ["consent_type_id"]
            isOneToOne: false
            referencedRelation: "consent_types"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          created_at: string
          id: string
          preferences: Json
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          preferences?: Json
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          preferences?: Json
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string
          plan: string
          stripe_customer_id: string | null
          subscription_status: string | null
          updated_at: string
          user_id: string
          valid_until: string | null
        }
        Insert: {
          created_at?: string
          plan?: string
          stripe_customer_id?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id: string
          valid_until?: string | null
        }
        Update: {
          created_at?: string
          plan?: string
          stripe_customer_id?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id?: string
          valid_until?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      admin_edit_suggestions: {
        Row: {
          admin_notes: string | null
          created_at: string | null
          generated_sql: string | null
          id: string | null
          material_changes: Json | null
          material_id: number | null
          material_name: string | null
          property_changes: Json | null
          reviewed_at: string | null
          reviewed_by: string | null
          reviewer_email: string | null
          status: string | null
          suggested_by: string | null
          suggested_by_email: string | null
          suggester_email: string | null
          suggestion_type: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_edit_suggestions_material_id_fkey"
            columns: ["material_id"]
            isOneToOne: false
            referencedRelation: "materials"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      apply_material_edit_suggestion: {
        Args: { admin_user_id: string; suggestion_id: string }
        Returns: boolean
      }
      assign_user_role: {
        Args: { new_role: string; target_user_id: string }
        Returns: boolean
      }
      calculate_project_co2_impact: {
        Args: { project_uuid: string }
        Returns: number
      }
      generate_project_slug: { Args: { title: string }; Returns: string }
      generate_suggestion_sql: {
        Args: { suggestion_id: string }
        Returns: string
      }
      get_all_users_with_roles: {
        Args: never
        Returns: {
          created_at: string
          email: string
          last_sign_in at: string
          role: string
          user_id: string
        }[]
      }
      get_project_epd_compliance: {
        Args: { project_uuid: string }
        Returns: {
          completed_fields: number
          completion_percentage: number
          field_category: string
          total_fields: number
        }[]
      }
      get_user_consent_preferences: {
        Args: { p_session_id?: string; p_user_id?: string }
        Returns: Json
      }
      increment_rate_limit: {
        Args: { p_user_id: string; p_window_starts_at: string }
        Returns: {
          plan_snapshot: string
          requests_count: number
        }[]
      }
      is_current_user_admin: { Args: never; Returns: boolean }
      is_manufacturing_process: {
        Args: { material_name: string }
        Returns: boolean
      }
      record_consent: {
        Args: {
          p_consent_type_id: string
          p_granted: boolean
          p_ip_address?: unknown
          p_session_id?: string
          p_user_agent?: string
          p_user_id?: string
        }
        Returns: string
      }
      search_projects_by_epd: {
        Args: {
          epd_type_filter?: string
          manufacturer_filter?: string
          programme_filter?: string
          search_term?: string
        }
        Returns: {
          created_at: string
          description: string
          epd_programme: string
          epd_type: string
          id: string
          manufacturer_name: string
          title: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
