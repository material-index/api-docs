# Material Index Database - Sample Data

This directory contains **sample data only** for the Material Index API. The data is provided in JSON format and can be used for development, testing, and documentation purposes. These are example entries and do not represent the complete dataset available through the API.

## 📁 Directory Structure

```
data/
├── README.md                           # This file
└── sample/                            # Sample data files
    ├── material_categories.json      # Material category hierarchy
    ├── property_categories.json      # Property classification
    ├── properties.json               # Material property definitions
    ├── materials.json                # Sample materials
    └── material_properties.json      # Property values for materials
```

## 📊 Data Overview

### Material Categories (25 entries)
- **Hierarchical structure** with parent-child relationships
- **Top-level categories**: Metals, Polymers, Ceramics, Composites, Natural Materials, Smart Materials
- **Subcategories**: Steel, Aluminum Alloys, Thermoplastics, etc.

### Property Categories (10 entries)
- **Physical Properties**: Density, melting point, boiling point
- **Mechanical Properties**: Tensile strength, yield strength, elastic modulus
- **Thermal Properties**: Thermal conductivity, thermal expansion, heat capacity
- **Electrical Properties**: Electrical conductivity, resistivity, dielectric constant
- **Chemical Properties**: Corrosion resistance, pH stability
- **Optical Properties**: Refractive index, transmittance, reflectance
- **Magnetic Properties**: Magnetic permeability
- **Environmental Properties**: CO2 footprint, recyclability
- **Processing Properties**: Machinability, weldability
- **Surface Properties**: Surface roughness, friction coefficient

### Properties (25 entries)
- **Complete property definitions** with units and data types
- **Alternative names** for each property
- **Categorized by property type** for easy filtering

### Materials (10 entries)
- **Diverse material types**: Metals, polymers, ceramics, composites, natural materials
- **Complete material information**: Names, descriptions, scientific names, ingredients
- **Verification status** and source information
- **URL-friendly slugs** for API endpoints

### Material Properties (30 entries)
- **Real property values** with ranges and units
- **Test standards** and verification status
- **Source information** for data traceability
- **Property relationships** linking materials to their properties

## 🔗 Data Relationships

### Entity Relationship Diagram
```
materials (1) ←→ (N) material_properties (N) ←→ (1) properties
    ↓
material_categories (1) ←→ (N) materials

properties (N) ←→ (1) property_categories
```

### Key Relationships
1. **Materials → Material Categories**: Many-to-one
2. **Materials → Material Properties**: One-to-many
3. **Properties → Material Properties**: One-to-many
4. **Property Categories → Properties**: One-to-many
5. **Material Categories → Material Categories**: Self-referencing (hierarchy)

## 📈 Data Statistics

- **Materials**: 10 sample materials
- **Material Categories**: 25 categories (hierarchical)
- **Properties**: 25 property definitions
- **Property Categories**: 10 categories
- **Material Properties**: 30 property values
- **Total Records**: 100 data entries

## 🎯 Sample Materials Included

1. **Aluminum 6061-T6** - High-strength aluminum alloy
2. **Steel A36** - Low carbon structural steel
3. **Polyethylene (HDPE)** - High-density polyethylene
4. **Titanium Grade 5** - Ti-6Al-4V aerospace alloy
5. **Stainless Steel 316L** - Austenitic stainless steel
6. **Carbon Fiber (T300)** - High-strength carbon fiber
7. **Silicon Carbide (SiC)** - Advanced ceramic
8. **Borosilicate Glass** - Low expansion glass
9. **Oak Wood** - Natural hardwood
10. **Nitinol (NiTi)** - Shape memory alloy

## 🔧 Usage Examples

### Loading Data in JavaScript
```javascript
// Load material categories
const categories = require('./sample/material_categories.json');

// Load materials with properties
const materials = require('./sample/materials.json');
const materialProperties = require('./sample/material_properties.json');
const properties = require('./sample/properties.json');

// Find material properties
const aluminumProperties = materialProperties.filter(
  mp => mp.material_id === 1 // Aluminum 6061-T6
);
```

### Loading Data in Python
```python
import json

# Load material categories
with open('sample/material_categories.json', 'r') as f:
    categories = json.load(f)

# Load materials
with open('sample/materials.json', 'r') as f:
    materials = json.load(f)

# Find aluminum materials
aluminum_materials = [m for m in materials if 'aluminum' in m['name'].lower()]
```

## 📋 Data Validation

### Required Fields
- All materials must have: `id`, `name`, `material_category_id`
- All properties must have: `id`, `name`, `unit`, `data_type`, `category_id`
- All material properties must have: `material_id`, `property_id`, `value`

### Data Types
- **Numeric values**: Stored as numbers with appropriate units
- **Text values**: Stored as strings with validation
- **Boolean values**: Stored as true/false
- **Timestamps**: ISO 8601 format (UTC)

### Verification Status
- **is_verified**: Boolean indicating data verification status
- **source**: String indicating data source
- **test_standard**: String indicating testing standard used

## 🚀 Integration with API

This sample data can be used to:

1. **Populate development databases** for testing
2. **Generate API documentation** with real examples
3. **Create mock API responses** for frontend development
4. **Validate API endpoints** with known data
5. **Test data relationships** and constraints

## 📝 Data Updates

### Adding New Materials
1. Add material to `materials.json`
2. Add corresponding material properties to `material_properties.json`
3. Ensure category relationships are maintained
4. Update this README with new statistics

### Adding New Properties
1. Add property to `properties.json`
2. Add property category if needed to `property_categories.json`
3. Add material property values to `material_properties.json`
4. Update property relationships

## 🔗 Related Documentation

- [Database Schema](../docs/DATABASE_SCHEMA.md)
- [API Reference](../docs/API_REFERENCE.md)
- [Getting Started](../docs/GETTING_STARTED.md)

---

**Last Updated**: December 2024  
**Data Version**: 1.0.0  
**Total Records**: 100
