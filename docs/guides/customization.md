# 🎨 Customization Guide

## Overview

This guide covers how to customize the Digivora POD theme without breaking functionality. Learn to modify colors, typography, layouts, and components while maintaining the theme's architecture.

---

## Color Customization

### Method 1: Theme Editor (Recommended)

1. **Navigate to:** Customize Theme → Theme Settings → Colors
2. **Select scheme:** scheme-1 through scheme-5
3. **Modify colors:**
   - Background
   - Foreground (text)
   - Button primary
   - Button secondary
   - Accent colors

**No code required!**

### Method 2: CSS Variables

Edit `assets/base.css`:

```css
:root {
  /* Primary POD colors */
  --color-primary: 99, 102, 241;      /* Indigo */
  --color-secondary: 236, 72, 153;     /* Pink */
  --color-accent: 16, 185, 129;        /* Green */
  
  /* Semantic colors */
  --color-success: 16, 185, 129;       /* Green */
  --color-warning: 245, 158, 11;       /* Amber */
  --color-error: 239, 68, 68;          /* Red */
  --color-info: 59, 130, 246;          /* Blue */
}
```

**Usage in CSS:**
```css
.button--primary {
  background-color: rgb(var(--color-primary));
}
```

### Method 3: Individual Component Colors

Each component has its own color definitions:

**Trust Badges** (`assets/component-trust-badges.css`):
```css
.trust-badges-pod {
  background: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.03) 0%, 
    rgba(236, 72, 153, 0.03) 100%
  );
}
```

**Size Guide Modal** (`assets/component-size-guide.css`):
```css
.size-guide-modal__header {
  background: linear-gradient(135deg, 
    rgb(99, 102, 241) 0%, 
    rgb(236, 72, 153) 100%
  );
}
```

---

## Typography Customization

### Font Family

Edit `config/settings_schema.json`:

```json
{
  "type": "font_picker",
  "id": "type_header_font",
  "default": "assistant_n4",
  "label": "Heading font"
}
```

Or directly in CSS:

```css
:root {
  --font-heading-family: 'Your Font', sans-serif;
  --font-body-family: 'Your Font', sans-serif;
}
```

### Font Sizes

POD uses fluid typography with `clamp()`:

```css
:root {
  /* Hero section */
  --font-size-hero: clamp(40px, 5vw, 60px);
  
  /* Headings */
  --font-size-h1: clamp(32px, 4vw, 48px);
  --font-size-h2: clamp(28px, 3.5vw, 40px);
  --font-size-h3: clamp(24px, 3vw, 32px);
  
  /* Body */
  --font-size-body: clamp(16px, 1vw, 18px);
  --font-size-small: clamp(14px, 0.875vw, 16px);
}
```

**To adjust:**
- Change min value (mobile)
- Change max value (desktop)
- Adjust middle value (responsive scaling)

---

## Layout Customization

### Container Width

Edit `assets/base.css`:

```css
.page-width {
  max-width: 1400px; /* Default: 1440px */
  padding: 0 1.5rem;
  margin: 0 auto;
}
```

### Grid Columns

**Product Grid:**

```css
.collection .grid {
  grid-template-columns: repeat(4, 1fr); /* Default: 3 on desktop */
}

@media screen and (max-width: 989px) {
  .collection .grid {
    grid-template-columns: repeat(3, 1fr); /* Default: 2 on tablet */
  }
}
```

### Spacing Scale

```css
:root {
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
}
```

---

## Component Customization

### Trust Badges

**Change icons:**

Edit `snippets/trust-badges-pod.liquid`:

```liquid
<div class="trust-badge">
  <svg><!-- Your custom SVG icon --></svg>
  <div class="trust-badge__content">
    <strong>Your Heading</strong>
    <span>Your description</span>
  </div>
</div>
```

**Change layout (3 badges instead of 4):**

```css
.trust-badges-pod__grid {
  grid-template-columns: repeat(3, 1fr); /* Was 4 */
}
```

### Size Guide

**Add new size:**

Edit `snippets/size-guide-modal-pod.liquid`:

```liquid
<tr>
  <td>4XL</td>
  <td>48"</td>
  <td>32"</td>
  <td>23"</td>
</tr>
```

**Change measurements (inches to cm):**

```liquid
<tr>
  <td>S</td>
  <td>91cm</td> <!-- Was 36" -->
  <td>71cm</td> <!-- Was 28" -->
  <td>43cm</td> <!-- Was 17" -->
</tr>

<!-- Update label -->
<th>Chest (cm)</th> <!-- Was inches -->
```

### Product Tabs

**Add 6th tab:**

Edit `snippets/product-tabs-pod.liquid`:

```liquid
<!-- Navigation -->
<button class="tab-button" data-tab="custom">Custom Tab</button>

<!-- Content -->
<div class="tab-panel" id="tab-custom">
  <h3>Custom Heading</h3>
  <p>Your custom content...</p>
</div>
```

**Remove a tab:**

Delete both navigation button AND content panel.

**Change tab order:**

Rearrange `<button>` elements in navigation.

### Hero Section

**Change headline:**

Edit `snippets/hero-pod.liquid`:

```liquid
<h1 class="hero-pod__heading">
  Your Brand Message,<br>
  <span class="hero-pod__heading--gradient">Gradient Part</span>
</h1>
```

**Change product images:**

```liquid
<div class="hero-visual__grid">
  <img src="{{ 'your-image-1.jpg' | asset_url }}" alt="Product 1">
  <img src="{{ 'your-image-2.jpg' | asset_url }}" alt="Product 2">
  <img src="{{ 'your-image-3.jpg' | asset_url }}" alt="Product 3">
</div>
```

**Add 4th product image:**

```css
.hero-visual__grid {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); /* Was auto auto 1fr */
}
```

### Customer Photos

**Change photo count (8 instead of 6):**

```css
.customer-photos__grid {
  grid-template-columns: repeat(8, 1fr); /* Was 6 */
}
```

Edit visibility in media queries.

**Connect to Instagram API:**

Replace static photos with dynamic feed (requires custom app).

---

## Advanced Customization

### Gradient Adjustments

**Headline gradient:**

```css
.hero-pod__heading--gradient {
  background: linear-gradient(135deg, 
    rgb(59, 130, 246) 0%,    /* Blue */
    rgb(147, 51, 234) 50%,   /* Purple */
    rgb(236, 72, 153) 100%   /* Pink */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Background gradients:**

```css
.trust-badges-pod {
  background: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.05) 0%,  /* Adjust opacity */
    rgba(236, 72, 153, 0.05) 100%
  );
}
```

### Border Radius

POD uses consistent border radius:

```css
:root {
  --border-radius-sm: 8px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;
}
```

**To make more rounded:**

```css
:root {
  --border-radius-md: 20px; /* Was 12px */
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
  --shadow-xl: 0 12px 32px rgba(0,0,0,0.15);
}
```

### Animations

**Disable all animations:**

Edit `assets/base.css`:

```css
* {
  animation: none !important;
  transition: none !important;
}
```

**Adjust animation speed:**

```css
.customer-photo {
  transition: transform 0.5s ease; /* Was 0.3s */
}
```

---

## Mobile-Specific Customization

### Sticky ATC Bar Height

```css
.sticky-atc-mobile {
  padding: 1rem; /* Adjust height */
}
```

### Mobile Font Sizes

```css
@media screen and (max-width: 749px) {
  :root {
    --font-size-h1: 28px; /* Override clamp() */
    --font-size-body: 15px;
  }
}
```

### Mobile Grid

```css
@media screen and (max-width: 749px) {
  .collection .grid {
    grid-template-columns: 1fr; /* Single column */
  }
}
```

---

## Section Customization

### Add Component to Different Page

**Example: Add trust badges to cart page**

Edit `sections/main-cart-items.liquid`:

```liquid
<div class="cart__footer">
  {% render 'trust-badges-pod' %}
</div>
```

### Remove Component

**Example: Remove customer photos from product page**

Edit `sections/main-product.liquid`:

Find and delete:
```liquid
{% render 'customer-photos-pod' %}
```

### Reorder Components

In `sections/main-product.liquid`, rearrange render statements:

```liquid
{% render 'product-tabs-pod', product: product %}
{% render 'customer-photos-pod' %}
<!-- Moved photos after tabs -->
```

---

## Theme Settings Integration

### Add Custom Setting

Edit `config/settings_schema.json`:

```json
{
  "name": "POD Settings",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_trust_badges",
      "label": "Show trust badges on product page",
      "default": true
    }
  ]
}
```

**Use in Liquid:**

```liquid
{% if settings.show_trust_badges %}
  {% render 'trust-badges-pod' %}
{% endif %}
```

### Add Color Setting

```json
{
  "type": "color",
  "id": "pod_primary_color",
  "label": "POD Primary Color",
  "default": "#6366F1"
}
```

**Use in CSS:**

```liquid
<style>
  :root {
    --color-primary: {{ settings.pod_primary_color | color_to_rgb | remove: 'rgb(' | remove: ')' }};
  }
</style>
```

---

## Best Practices

### 1. Use CSS Variables

✅ **Good:**
```css
.button {
  background: rgb(var(--color-primary));
}
```

❌ **Bad:**
```css
.button {
  background: #6366F1; /* Hard-coded */
}
```

### 2. Maintain Responsive Breakpoints

Always customize for all breakpoints:

```css
/* Desktop */
.component { ... }

/* Tablet */
@media screen and (max-width: 989px) {
  .component { ... }
}

/* Mobile */
@media screen and (max-width: 749px) {
  .component { ... }
}
```

### 3. Document Custom Changes

Add comments:

```css
/* CUSTOM: Changed from 4 to 3 columns for brand requirements */
.trust-badges-pod__grid {
  grid-template-columns: repeat(3, 1fr);
}
```

### 4. Test After Changes

- ✅ Desktop (990px+)
- ✅ Tablet (750-989px)
- ✅ Mobile (<750px)
- ✅ Multiple browsers
- ✅ Theme editor preview

---

## Common Customization Tasks

### Change Button Style

```css
.button--primary {
  background: rgb(var(--color-primary));
  border-radius: 25px; /* More rounded */
  padding: 1rem 2rem;  /* Larger */
  font-weight: 700;    /* Bolder */
}
```

### Change Product Card Style

```css
.card {
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
```

### Change Variant Swatch Size

```css
.variant-swatch {
  width: 60px;  /* Was 48px */
  height: 60px;
}
```

---

## Rollback Changes

If something breaks:

### 1. Identify Exact Change

Check git diff:
```bash
git diff assets/base.css
```

### 2. Undo Specific Edit

```bash
git checkout assets/base.css
```

### 3. Restore Backup Theme

In Shopify Admin:
1. Go to Themes
2. Find backup theme
3. Publish backup

---

## Next Steps

- **Explore:** [Component Documentation](../components/)
- **Learn:** [Architecture Guide](../ARCHITECTURE.md)
- **Optimize:** [Performance Guide](performance.md)

---

**Need help?** Check [Troubleshooting](troubleshooting.md) or consult component-specific docs.
