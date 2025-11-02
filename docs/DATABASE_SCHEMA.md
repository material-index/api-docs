# Database Schema

This document describes the public database schema for the Material Index API. This schema covers the material-related tables accessible through the API.

## Public Tables

### property_categories
- id: bigint (PK)
- name: text (default '')
- description: text (default '')

Foreign Keys:
- material_properties.property_category → property_categories.id
- properties.category_id → property_categories.id

### properties
- id: bigint (PK, identity, unique)
- slug: text (default '')
- name: text (default '')
- unit: text (default '')
- data_type: text (default '')
- category_id: bigint → property_categories.id
- alternative_name: text (nullable)

Foreign Keys:
- material_properties.property_id → properties.id

### material_categories
- id: bigint (PK)
- name: text (default '')
- tooltip: text (nullable, default '')
- parent_id: bigint (nullable) → material_categories.id

Foreign Keys:
- materials.material_category_id → material_categories.id

### materials
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
- slug: varchar (nullable)
- group_image_url: text (nullable) [comment: image URL if first in group]
- is_public: boolean (default true)

Foreign Keys:
- material_properties.material_id → materials.id

### material_properties
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

## Relationships

- **Materials → Material Categories**: Many-to-one
- **Materials → Material Properties**: One-to-many
- **Properties → Material Properties**: One-to-many
- **Property Categories → Properties**: One-to-many
- **Material Categories → Material Categories**: Self-referencing (hierarchy)

---

**Note**: This schema represents only the public tables accessible through the Material Index API. Additional internal tables exist for user management, authentication, and administrative functions, but are not exposed through the public API.
