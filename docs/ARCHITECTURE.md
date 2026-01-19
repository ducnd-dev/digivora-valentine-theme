# 🏗️ Architecture - Digivora POD Theme

## Overview

This document describes the architectural decisions, patterns, and structure of the Digivora POD theme.

---

## 🎨 Design Philosophy

### POD-First Approach

The theme is built with Print on Demand businesses in mind:

1. **Visual Product Presentation**: Large images, multiple mockups, zoom functionality
2. **Variant Clarity**: 48px color swatches, clear size buttons, size guide
3. **Trust Building**: Badges, reviews, customer photos
4. **Information Rich**: Tabs for specs, shipping, care instructions
5. **Mobile Optimized**: Sticky ATC, responsive grids, touch-friendly

### Shopify 2.0 Standards

- **Section-based**: Modular, customizable via theme editor
- **JSON schemas**: Settings defined in `{% schema %}` blocks
- **No build process**: Pure Liquid + vanilla JS + CSS
- **Web Components**: Custom Elements for interactive features
- **Pub/Sub events**: Decoupled component communication

---

## 📂 File Structure

### Assets Directory

```
assets/
├── component-trust-badges.css           # Trust badges styling
├── component-size-guide.css            # Size guide modal
├── component-review-summary.css        # Review display
├── component-product-tabs.css          # Tab system
├── component-product-variant-picker.css # Enhanced variant picker
├── component-card-product-pod.css      # Product card enhancements
├── component-sticky-atc.css            # Sticky Add to Cart mobile
├── component-customer-photos.css       # Customer photo gallery
├── section-hero-pod.css               # Homepage hero
├── base.css                           # Global styles + POD typography
├── constants.js                       # Event constants
├── pubsub.js                         # Event system
└── global.js                         # Utilities
```

**Naming Convention:**
- `component-*.css` - Reusable UI components
- `section-*.css` - Section-specific styles
- `*.js` - JavaScript modules (no bundling)

### Snippets Directory

```
snippets/
├── trust-badges-pod.liquid          # 4 trust badges with icons
├── size-guide-modal-pod.liquid      # XS-3XL size chart
├── review-summary-pod.liquid        # Star rating display
├── product-tabs-pod.liquid          # 5-tab content system
├── hero-pod.liquid                  # Homepage hero content
├── sticky-atc-mobile.liquid         # Mobile sticky bar
├── customer-photos-pod.liquid       # Photo gallery
├── product-variant-picker.liquid    # Enhanced (48px swatches)
└── card-product.liquid             # Enhanced product card
```

**Usage Pattern:**
```liquid
{% render 'snippet-name', param: value %}
```

### Sections Directory

```
sections/
├── main-product.liquid              # Product page (enhanced with POD components)
├── hero-pod.liquid                  # POD homepage hero section
├── main-collection-product-grid.liquid
└── image-banner.liquid
```

**Integration Points:**
- `main-product.liquid` - All POD components integrated here
- `hero-pod.liquid` - New section for homepage

### Layout Directory

```
layout/
└── theme.liquid                     # Main layout file
```

**POD CSS loaded in `<head>`:**
```liquid
{%- comment -%} POD Components {%- endcomment -%}
{{ 'component-trust-badges.css' | asset_url | stylesheet_tag }}
{{ 'component-size-guide.css' | asset_url | stylesheet_tag }}
{{ 'component-review-summary.css' | asset_url | stylesheet_tag }}
{{ 'component-product-tabs.css' | asset_url | stylesheet_tag }}
{{ 'section-hero-pod.css' | asset_url | stylesheet_tag }}
{{ 'component-card-product-pod.css' | asset_url | stylesheet_tag }}
{{ 'component-sticky-atc.css' | asset_url | stylesheet_tag }}
{{ 'component-customer-photos.css' | asset_url | stylesheet_tag }}
```

---

## 🎯 Component Architecture

### Component Anatomy

Each POD component follows this structure:

```
1. Liquid Snippet (snippets/*.liquid)
   ├── Parameters/props
   ├── HTML markup
   ├── Inline <script> if needed
   └── Comment documentation

2. CSS File (assets/component-*.css)
   ├── Component styles
   ├── Responsive breakpoints
   ├── Hover/interaction states
   └── Mobile optimization

3. Integration (sections/*.liquid)
   └── {% render 'component', props %}
```

### Example: Trust Badges

**File:** `snippets/trust-badges-pod.liquid`
```liquid
{% comment %}
  Trust Badges Component
  Displays 4 key trust signals
  Usage: {% render 'trust-badges-pod' %}
{% endcomment %}

<div class="trust-badges-pod">
  <!-- SVG icons + text -->
</div>
```

**File:** `assets/component-trust-badges.css`
```css
.trust-badges-pod {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* ... responsive styles */
}
```

**File:** `sections/main-product.liquid`
```liquid
{%- comment -%} POD Trust Badges {%- endcomment -%}
{% render 'trust-badges-pod' %}
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary - Indigo (main CTAs, links) */
--color-pod-primary: rgb(99, 102, 241);      /* #6366F1 */
--color-pod-primary-hover: rgb(79, 82, 221); /* Darker */

/* Secondary - Pink (accents, secondary CTAs) */
--color-pod-secondary: rgb(236, 72, 153);    /* #EC4899 */

/* Accent - Green (trust, eco-friendly) */
--color-pod-accent: rgb(16, 185, 129);       /* #10B981 */

/* Neutral */
--color-foreground: /* Theme default */
--color-background: /* Theme default */
```

**Usage:**
- **Indigo**: Primary buttons, links, active states
- **Pink**: Sale badges, secondary CTAs, gradients
- **Green**: Trust badges, eco messaging, verified icons

### Typography Scale

```css
/* Fluid typography with clamp() */
--font-size-hero: clamp(40px, 5vw, 60px);    /* Homepage hero */
--font-size-h1: clamp(32px, 4vw, 48px);      /* Main headings */
--font-size-h2: clamp(24px, 3vw, 36px);      /* Section titles */
--font-size-h3: clamp(20px, 2.5vw, 28px);    /* Card titles */
--font-size-body: clamp(16px, 1vw, 18px);    /* Body text */
--font-size-small: clamp(13px, 0.9vw, 14px); /* Captions */

/* Line heights */
--line-height-tight: 1.2;    /* Headings */
--line-height-base: 1.5;     /* Body text */
--line-height-relaxed: 1.7;  /* Long-form content */

/* Font weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Spacing System

```css
/* Base: 0.25rem (4px) increments */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 0.75rem;  /* 12px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
--spacing-2xl: 3rem;    /* 48px */
--spacing-3xl: 4rem;    /* 64px */
```

### Breakpoints

```css
/* Mobile first approach */
@media screen and (max-width: 749px) {
  /* Mobile: < 750px */
}

@media screen and (min-width: 750px) and (max-width: 989px) {
  /* Tablet: 750-989px */
}

@media screen and (min-width: 990px) {
  /* Desktop: 990px+ */
}

@media screen and (min-width: 1200px) {
  /* Large desktop: 1200px+ */
}
```

**Shopify Standard:**
- Mobile: < 750px
- Tablet: 750-989px
- Desktop: 990px+

---

## 🔧 JavaScript Architecture

### Web Components Pattern

```javascript
class ComponentName extends HTMLElement {
  constructor() {
    super();
    // Initialize
  }
  
  connectedCallback() {
    // DOM ready
    this.setupEventListeners();
  }
  
  disconnectedCallback() {
    // Cleanup
  }
}

customElements.define('component-name', ComponentName);
```

### Pub/Sub Event System

**Constants** (`assets/constants.js`):
```javascript
const PUB_SUB_EVENTS = {
  cartUpdate: 'cart-update',
  quantityUpdate: 'quantity-update',
  variantChange: 'variant-change',
  cartError: 'cart-error'
};
```

**Publishing** (send event):
```javascript
publish(PUB_SUB_EVENTS.variantChange, {
  variant: selectedVariant,
  product: currentProduct
});
```

**Subscribing** (listen to event):
```javascript
subscribe(PUB_SUB_EVENTS.variantChange, (data) => {
  updatePrice(data.variant.price);
  updateInventory(data.variant.inventory);
});
```

### Script Load Order

**From** `layout/theme.liquid`:
```html
1. constants.js       <!-- Event constants -->
2. pubsub.js         <!-- Event system -->
3. global.js         <!-- Utilities -->
4. cart.js           <!-- Cart functionality -->
5. product-form.js   <!-- Product forms -->
6. [other modules]
```

**Why this order?**
- Constants must load first (used by all)
- Pub/Sub needed before components
- Global utilities before specific features

---

## 🎭 CSS Architecture

### Methodology

**BEM-inspired naming:**
```css
.component-name { }                    /* Block */
.component-name__element { }           /* Element */
.component-name__element--modifier { } /* Modifier */
```

**Example:**
```css
.product-tabs-pod { }                  /* Block */
.product-tabs-pod__header { }          /* Element */
.product-tabs-pod__button--active { }  /* Modifier */
```

### File Organization

```css
/* 1. Component base styles */
.component { }

/* 2. Element styles */
.component__element { }

/* 3. Modifiers */
.component--modifier { }

/* 4. States */
.component:hover { }
.component.is-active { }

/* 5. Responsive */
@media screen and (max-width: 749px) { }
```

### Mobile-First CSS

```css
/* Base styles (mobile) */
.component {
  padding: 1rem;
  font-size: 14px;
}

/* Tablet up */
@media screen and (min-width: 750px) {
  .component {
    padding: 1.5rem;
    font-size: 16px;
  }
}

/* Desktop up */
@media screen and (min-width: 990px) {
  .component {
    padding: 2rem;
    font-size: 18px;
  }
}
```

---

## 🔄 Data Flow

### Product Page Flow

```
1. User lands on product page
   ↓
2. main-product.liquid renders
   ↓
3. Components loaded:
   - Title
   - Review summary ({% render 'review-summary-pod' %})
   - Price
   - Variant picker ({% render 'product-variant-picker' %})
   - Size guide trigger
   - Buy buttons
   - Trust badges ({% render 'trust-badges-pod' %})
   ↓
4. User selects variant
   ↓
5. Variant picker publishes variantChange event
   ↓
6. Subscribers update:
   - Price display
   - Inventory status
   - Sticky ATC price
   - Buy button state
   ↓
7. User clicks "Add to Cart"
   ↓
8. Cart publishes cartUpdate event
   ↓
9. Subscribers update:
   - Cart count
   - Cart drawer
   - Cart notification
```

### Modal Flow

```
1. User clicks "Size Guide"
   ↓
2. JavaScript: document.getElementById('SizeGuideModal').show()
   ↓
3. <dialog> element opens
   ↓
4. User views size chart
   ↓
5. User clicks "Close" or backdrop
   ↓
6. <dialog> closes via .close()
```

---

## 🚀 Performance Considerations

### Image Optimization

```liquid
{%- capture sizes -%}
  (min-width: 990px) {{ settings.page_width | minus: 130 | divided_by: 4 }}px,
  (min-width: 750px) calc((100vw - 120px) / 3),
  calc((100vw - 35px) / 2)
{%- endcapture -%}

{{ product.featured_media | image_url: width: 1066 | image_tag:
  sizes: sizes,
  widths: '165, 360, 533, 720, 940, 1066',
  loading: 'lazy'
}}
```

### CSS Loading Strategy

**Critical CSS inline** (minimal)
**Component CSS loaded** in `<head>`
**No CSS-in-JS** (pure CSS files)

### JavaScript Strategy

**No bundling** (Shopify serves raw files)
**Defer loading** where possible
**Event delegation** for dynamic content
**IntersectionObserver** for lazy features

### Lazy Loading

```liquid
<!-- Images -->
loading="lazy"

<!-- Sections (Shopify 2.0) -->
<section {% if section.index > 2 %}loading="lazy"{% endif %}>
```

---

## 🧪 Testing Strategy

### Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

### Responsive Testing

**Breakpoints to test:**
- 375px (iPhone SE)
- 768px (iPad Portrait)
- 1024px (iPad Landscape)
- 1440px (Desktop)
- 1920px (Large Desktop)

### Component Testing

**Each component should be tested for:**
1. ✅ Visual correctness
2. ✅ Mobile responsiveness
3. ✅ Hover states
4. ✅ Click interactions
5. ✅ Loading states
6. ✅ Error states

---

## 📈 Scalability

### Adding New Components

```bash
1. Create snippet: snippets/component-name-pod.liquid
2. Create CSS: assets/component-name-pod.css
3. Add CSS to theme.liquid: {{ 'component-name-pod.css' | asset_url | stylesheet_tag }}
4. Integrate: {% render 'component-name-pod', props %}
5. Document: docs/components/component-name.md
6. Test: All breakpoints
7. Commit: git commit -m "[COMPONENT] Add component-name"
```

### Customization Points

**Settings** (`config/settings_schema.json`):
```json
{
  "type": "color",
  "id": "pod_primary_color",
  "label": "POD Primary Color",
  "default": "#6366F1"
}
```

**Access in Liquid:**
```liquid
{{ settings.pod_primary_color }}
```

**Access in CSS:**
```css
:root {
  --color-pod-primary: {{ settings.pod_primary_color }};
}
```

---

## 🔒 Security Considerations

### XSS Prevention

```liquid
<!-- Always escape user input -->
{{ product.title | escape }}
{{ customer.name | escape }}

<!-- For HTML, use with caution -->
{{ product.description }}
```

### CSRF Protection

Shopify handles CSRF tokens automatically in forms.

### Content Security Policy

Theme follows Shopify's CSP requirements.

---

## 📊 Analytics Integration

### Event Tracking Points

```javascript
// Add to Cart
publish(PUB_SUB_EVENTS.cartUpdate, {
  product_id: productId,
  variant_id: variantId,
  quantity: quantity
});

// Variant Change
publish(PUB_SUB_EVENTS.variantChange, {
  variant: selectedVariant
});
```

**Recommended Analytics:**
- Google Analytics 4
- Facebook Pixel
- Klaviyo (email)
- Hotjar (heatmaps)

---

## 🎓 Learning Resources

### Shopify Development

- [Shopify Theme Architecture](https://shopify.dev/themes/architecture)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Theme Editor](https://shopify.dev/themes/tools/theme-editor)

### POD Best Practices

- [POD_COMPETITOR_ANALYSIS.md](../POD_COMPETITOR_ANALYSIS.md)
- Printful Design Guide
- Redbubble Seller Resources

---

**Next:** [Component Documentation](components/)
