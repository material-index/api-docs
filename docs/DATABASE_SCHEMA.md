# Database Schema (Supabase)

This document is auto-generated from the current Supabase project. RLS indicates whether Row Level Security is enabled on the table.

## Tables

### public.property_categories (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (default '')
- created_by: uuid (nullable) → auth.users.id

Foreign Keys:
- material_properties.property_category → property_categories.id
- properties.category_id → property_categories.id

### public.properties (RLS: enabled)
- id: bigint (PK, identity, unique)
- slug: text (default '')
- name: text (default '')
- unit: text (default '')
- data_type: text (default '')
- category_id: bigint → property_categories.id
- created_by: uuid (nullable) → auth.users.id
- alternative_name: text (nullable)

Foreign Keys:
- material_properties.property_id → properties.id

### public.material_categories (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- tooltip: text (nullable, default '')
- parent_id: bigint (nullable) → material_categories.id
- created_by: uuid (nullable) → auth.users.id

Foreign Keys:
- materials.material_category_id → material_categories.id

### public.materials (RLS: enabled)
- id: bigint (PK)
- name: text (nullable)
- description: text (nullable)
- material_category_id: bigint (nullable) → material_categories.id
- alternative_names: text (nullable)
- scientific_name: text (nullable)
- distribution: text (nullable)
- variation_name: text (nullable)
- custom_id: uuid (nullable, default gen_random_uuid())
- version: double precision (nullable)
- is_verified: boolean
- source: text (nullable)
- ingredients: bigint[] (nullable)
- created_at: timestamp (nullable, default now() at time zone 'utc')
- updated_at: timestamp (nullable, default now() at time zone 'utc')
- created_by: uuid (nullable)
- slug: varchar (nullable)
- group_image_url: text (nullable) [comment: image URL if first in group]
- is_public: boolean (default true)

Foreign Keys (selection):
- material_co2e_factors.material_id → materials.id
- material_composition.material_id → materials.id
- material_edit_suggestions.material_id → materials.id
- material_process.material_id → materials.id
- material_landed.material_id → materials.id
- material_finish.material_id → materials.id
- material_images.material_id → materials.id
- material_properties.material_id → materials.id

### public.material_properties (RLS: enabled)
- id: bigint (PK, identity)
- material_id: bigint → materials.id
- property_id: bigint (nullable) → properties.id
- property_category: bigint (nullable) → property_categories.id
- value: numeric (nullable)
- value_min: numeric (nullable)
- value_max: numeric (nullable)
- unit: text (nullable)
- test_standard: text (nullable)
- notes: text (nullable)
- source: text (nullable)
- is_verified: boolean (nullable)
- created_at: timestamptz (nullable)
- updated_at: timestamptz (nullable)
- created_by: uuid (nullable)

### public.material_composition (RLS: enabled)
- id: bigint (PK)
- material_id: bigint (nullable) → materials.id
- ingredient_id: bigint[] (nullable)
- percentage: bigint (nullable)
- notes: text (nullable, default '')
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')
- created_by: uuid (nullable)

### public.material_co2e_factors (RLS: enabled)
- id: bigint (PK)
- material_id: bigint (nullable) → materials.id
- factor_name: text (nullable, default '')
- factor_value: double precision (nullable)
- unit: text (nullable)
- description: text (nullable)
- location: text (not null)
- source: text (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')
- created_by: uuid (nullable)

### public.material_images (RLS: enabled)
- id: integer (PK, default nextval)
- material_id: integer → materials.id
- filename: varchar
- original_filename: varchar
- file_path: varchar
- file_size: integer
- mime_type: varchar
- alt_text: text (nullable)
- is_primary: boolean (nullable, default false)
- created_at: timestamptz (nullable, default now())
- updated_at: timestamptz (nullable, default now())
- created_by: uuid (nullable)

### public.user_preferences (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- user_id: uuid (unique) → auth.users.id
- preferences: jsonb (default '{}')
- created_at: timestamptz (default now())
- updated_at: timestamptz (nullable, default now())

### public.user_roles (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- user_id: uuid (unique) → auth.users.id
- role: text (enum: admin|editor|user)
- created_at: timestamptz (default now())
- updated_at: timestamptz (nullable, default now())

### public.projects (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- title: text (not null)
- user_id: uuid (not null) → auth.users.id
- slug: text (nullable)
- total_co2: numeric (nullable)
- is_public: boolean (nullable, default false)
- created_at: timestamptz (nullable, default now())
- updated_at: timestamptz (nullable, default now())
- plus multiple EPD-related fields (declared_unit, functional_unit, reference_service_life, standards, etc.)

### public.project_materials (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- project_id: uuid → projects.id
- material_id: text (not null)
- instance_uuid: uuid (default gen_random_uuid())
- item_type: text (enum: material|group)
- quantity: numeric (default 1)
- unit: text (default 'unit')
- position: jsonb (nullable)
- size: jsonb (nullable)
- is_group_parent: boolean (nullable, default false)
- group_type: text (nullable)
- group_children_uuids: uuid[] (nullable)
- group_parent_uuid: uuid (nullable)
- created_at: timestamptz (default now())
- updated_at: timestamptz (nullable, default now())

### public.consent_types (RLS: enabled)
- id: text (PK)
- name: text (not null)
- description: text (not null)
- required: boolean (nullable, default false)
- category: text (enum: essential|analytics|marketing|functional|personalization)
- legal_basis: text (enum: consent|legitimate_interest|contract|legal_obligation)
- created_at: timestamptz (default now())
- updated_at: timestamptz (default now())

### public.user_consent (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- user_id: uuid (nullable) → auth.users.id
- session_id: text (nullable)
- consent_type_id: text → consent_types.id
- granted: boolean (not null)
- granted_at: timestamptz (nullable)
- withdrawn_at: timestamptz (nullable)
- ip_address: inet (nullable)
- user_agent: text (nullable)
- consent_version: text (default '1.0')
- created_at: timestamptz (default now())
- updated_at: timestamptz (default now())

### public.consent_audit_log (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- user_id: uuid (nullable) → auth.users.id
- session_id: text (nullable)
- action: text (enum: granted|withdrawn|updated)
- consent_type_id: text → consent_types.id
- previous_value: boolean (nullable)
- new_value: boolean (nullable)
- ip_address: inet (nullable)
- user_agent: text (nullable)
- created_at: timestamptz (nullable, default now())

### public.privacy_settings (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- user_id: uuid (unique) → auth.users.id
- consent_preferences: jsonb (default with flags)
- data_retention_preferences: jsonb (default values)
- communication_preferences: jsonb (default values)
- last_updated: timestamptz (nullable, default now())
- created_at: timestamptz (default now())
- updated_at: timestamptz (nullable, default now())

### public.user_profiles (RLS: enabled)
- user_id: uuid (PK) → auth.users.id
- plan: text (default 'free')
- stripe_customer_id: text (nullable)
- subscription_status: text (nullable)
- valid_until: timestamptz (nullable)
- created_at: timestamptz (default now())
- updated_at: timestamptz (default now())

### public.api_keys (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- user_id: uuid → auth.users.id
- key_hash: text (unique)
- prefix: text
- plan: text (default 'free')
- note: text (nullable)
- created_at: timestamptz (default now())
- revoked_at: timestamptz (nullable)

### public.rate_limits (RLS: enabled)
- user_id: uuid (PK)
- window_starts_at: timestamptz (PK)
- requests_count: integer (default 0)
- plan_snapshot: text

### public.finish_categories (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (nullable, default '')
- parent_id: bigint (nullable) → finish_categories.id
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.finishes (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (nullable, default '')
- finish_category_id: bigint (nullable) → finish_categories.id
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.material_finish (RLS: enabled)
- id: bigint (PK, identity)
- material_id: bigint → materials.id
- finish_id: bigint → finishes.id
- notes: text (nullable, default '')
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.landed_categories (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (nullable, default '')
- parent_id: bigint (nullable) → landed_categories.id
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.landed (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (nullable, default '')
- landed_category_id: bigint (nullable) → landed_categories.id
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.material_landed (RLS: enabled)
- id: bigint (PK, identity)
- material_id: bigint → materials.id
- landed_id: bigint → landed.id
- notes: text (nullable, default '')
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.process_categories (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (nullable, default '')
- parent_id: bigint (nullable) → process_categories.id
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.processes (RLS: enabled)
- id: bigint (PK)
- name: text (default '')
- description: text (nullable, default '')
- process_category_id: bigint (nullable) → process_categories.id
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.material_process (RLS: enabled)
- id: bigint (PK, identity)
- material_id: bigint → materials.id
- process_id: bigint → processes.id
- notes: text (nullable, default '')
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now() at time zone 'utc')
- updated_at: timestamptz (nullable, default now() at time zone 'utc')

### public.material_groups (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- name: text (not null)
- type: text (nullable, default 'custom') [enum: alloy|composite|variations|custom]
- description: text (nullable)
- image_url: text (nullable)
- material_ids: integer[] (not null)
- created_by: uuid (nullable)
- created_at: timestamptz (nullable, default now())
- updated_at: timestamptz (nullable, default now())

### public.material_edit_suggestions (RLS: enabled)
- id: uuid (PK, default gen_random_uuid())
- material_id: integer → materials.id
- suggested_by: uuid (nullable)
- suggested_by_email: text (nullable)
- suggestion_type: text (not null) [material_update|property_update|property_add|property_remove]
- material_changes: jsonb (nullable)
- property_changes: jsonb (nullable)
- status: text (nullable, default 'pending') [pending|approved|rejected|applied]
- admin_notes: text (nullable)
- reviewed_by: uuid (nullable)
- reviewed_at: timestamptz (nullable)
- generated_sql: text (nullable)
- created_at: timestamptz (nullable, default now())
- updated_at: timestamptz (nullable, default now())

---

If any discrepancies are found, regenerate this file from Supabase before publishing.
