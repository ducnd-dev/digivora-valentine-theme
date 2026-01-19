# 🎨 CSS Variables Reference

## Overview

Complete reference for CSS custom properties used in the Digivora POD theme. All variables are defined in [assets/base.css](../../../assets/base.css).

---

## Color Variables

### POD Primary Colors

```css
:root {
  /* Primary brand colors (RGB format for opacity) */
  --color-primary: 99, 102, 241;      /* Indigo #6366F1 */
  --color-secondary: 236, 72, 153;     /* Pink #EC4899 */
  --color-accent: 16, 185, 129;        /* Green #10B981 */
  
  /* Usage */
  /* background: rgb(var(--color-primary)); */
  /* background: rgba(var(--color-primary), 0.1); */
}
```

**Usage Examples:**

```css
.button--primary {
  background-color: rgb(var(--color-primary));
}

.button--secondary {
  background-color: rgb(var(--color-secondary));
}

.badge--success {
  background-color: rgb(var(--color-accent));
}

/* With opacity */
.overlay {
  background-color: rgba(var(--color-primary), 0.8);
}
```

### Semantic Colors

```css
:root {
  /* State colors */
  --color-success: 16, 185, 129;       /* Green */
  --color-warning: 245, 158, 11;       /* Amber */
  --color-error: 239, 68, 68;          /* Red */
  --color-info: 59, 130, 246;          /* Blue */
}
```

**Usage:**

```css
.alert--success {
  background-color: rgba(var(--color-success), 0.1);
  border-color: rgb(var(--color-success));
}
```

### Shopify Color Schemes

Generated from `config/settings_data.json`:

```css
/* Per color scheme (scheme-1 to scheme-5) */
--color-base-text: R, G, B;           /* Foreground color */
--color-base-background-1: R, G, B;   /* Primary background */
--color-base-background-2: R, G, B;   /* Secondary background */
--color-base-solid-button-labels: R, G, B;
--color-base-outline-button-labels: R, G, B;
--color-base-accent-1: R, G, B;       /* Primary accent */
--color-base-accent-2: R, G, B;       /* Secondary accent */
```

**Usage:**

```css
.page {
  background: rgb(var(--color-base-background-1));
  color: rgb(var(--color-base-text));
}
```

---

## Typography Variables

### Font Families

```css
:root {
  --font-heading-family: 'Assistant', sans-serif;
  --font-body-family: 'Assistant', sans-serif;
}
```

**Usage:**

```css
h1, h2, h3 {
  font-family: var(--font-heading-family);
}

body, p {
  font-family: var(--font-body-family);
}
```

### Font Sizes (Fluid Typography)

```css
:root {
  /* Hero section */
  --font-size-hero: clamp(40px, 5vw, 60px);
  
  /* Headings */
  --font-size-h1: clamp(32px, 4vw, 48px);
  --font-size-h2: clamp(28px, 3.5vw, 40px);
  --font-size-h3: clamp(24px, 3vw, 32px);
  --font-size-h4: clamp(20px, 2.5vw, 28px);
  --font-size-h5: clamp(18px, 2vw, 24px);
  --font-size-h6: clamp(16px, 1.5vw, 20px);
  
  /* Body text */
  --font-size-body: clamp(16px, 1vw, 18px);
  --font-size-small: clamp(14px, 0.875vw, 16px);
  --font-size-tiny: clamp(12px, 0.75vw, 14px);
}
```

**How clamp() works:**
```
clamp(MIN, PREFERRED, MAX)
- MIN: Minimum size (mobile)
- PREFERRED: Responsive size (viewport-based)
- MAX: Maximum size (desktop)
```

**Usage:**

```css
.hero__heading {
  font-size: var(--font-size-hero);
}

h1 {
  font-size: var(--font-size-h1);
}
```

### Font Weights

```css
:root {
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

### Line Heights

```css
:root {
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
  --line-height-loose: 2;
}
```

---

## Spacing Variables

### Spacing Scale

```css
:root {
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  --spacing-4xl: 6rem;      /* 96px */
  --spacing-5xl: 8rem;      /* 128px */
}
```

**Usage:**

```css
.component {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
  gap: var(--spacing-md);
}
```

### Section Spacing

```css
:root {
  --section-padding-vertical: 4rem;
  --section-padding-vertical-mobile: 2rem;
}
```

---

## Border Variables

### Border Radius

```css
:root {
  --border-radius-none: 0;
  --border-radius-sm: 8px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;
  --border-radius-full: 9999px;
}
```

**Usage:**

```css
.button {
  border-radius: var(--border-radius-sm);
}

.card {
  border-radius: var(--border-radius-md);
}

.avatar {
  border-radius: var(--border-radius-full);
}
```

### Border Width

```css
:root {
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;
}
```

---

## Shadow Variables

### Box Shadows

```css
:root {
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 20px 48px rgba(0, 0, 0, 0.2);
}
```

**Usage:**

```css
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.modal {
  box-shadow: var(--shadow-2xl);
}
```

---

## Layout Variables

### Container Widths

```css
:root {
  --page-width: 1440px;
  --page-width-narrow: 1200px;
  --page-width-wide: 1600px;
}
```

**Usage:**

```css
.page-width {
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### Breakpoints

**Note:** Breakpoints are not CSS variables (use in media queries directly)

```css
/* Mobile */
@media screen and (max-width: 749px) { }

/* Tablet */
@media screen and (min-width: 750px) and (max-width: 989px) { }

/* Desktop */
@media screen and (min-width: 990px) { }

/* Large desktop */
@media screen and (min-width: 1440px) { }
```

### Grid Variables

```css
:root {
  --grid-gap: 1rem;
  --grid-gap-mobile: 0.75rem;
  --grid-columns-desktop: 4;
  --grid-columns-tablet: 3;
  --grid-columns-mobile: 2;
}
```

---

## Animation Variables

### Transitions

```css
:root {
  --duration-short: 150ms;
  --duration-default: 300ms;
  --duration-long: 500ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Usage:**

```css
.button {
  transition: all var(--duration-default) var(--ease-in-out);
}

.modal {
  transition: opacity var(--duration-long) var(--ease-out);
}
```

---

## Component-Specific Variables

### Trust Badges

```css
.trust-badges-pod {
  --trust-badge-icon-size: 40px;
  --trust-badge-gap: 1.5rem;
  --trust-badge-padding: 1.5rem;
}
```

### Size Guide

```css
.size-guide-modal {
  --modal-width: 800px;
  --modal-max-height: 90vh;
  --header-height: 60px;
}
```

### Product Tabs

```css
.product-tabs-pod {
  --tab-padding: 1rem 1.5rem;
  --tab-border-width: 2px;
  --content-padding: 2rem;
}
```

### Variant Swatches

```css
.variant-swatch {
  --swatch-size-small: 36px;
  --swatch-size-default: 48px;
  --swatch-size-large: 60px;
}
```

---

## Z-Index Scale

```css
:root {
  --z-index-dropdown: 100;
  --z-index-sticky: 200;
  --z-index-modal-backdrop: 900;
  --z-index-modal: 1000;
  --z-index-notification: 1100;
}
```

**Usage:**

```css
.sticky-atc-mobile {
  z-index: var(--z-index-sticky);
}

.size-guide-modal {
  z-index: var(--z-index-modal);
}
```

---

## Gradients

### Predefined Gradients

```css
:root {
  /* POD gradient (Indigo → Pink → Green) */
  --gradient-pod: linear-gradient(135deg, 
    rgb(99, 102, 241) 0%, 
    rgb(236, 72, 153) 50%, 
    rgb(16, 185, 129) 100%
  );
  
  /* POD gradient subtle (with opacity) */
  --gradient-pod-subtle: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.03) 0%, 
    rgba(236, 72, 153, 0.03) 100%
  );
}
```

**Usage:**

```css
.hero__heading--gradient {
  background: var(--gradient-pod);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.trust-badges-pod {
  background: var(--gradient-pod-subtle);
}
```

---

## Responsive Variable Patterns

### Using CSS Variables in Media Queries

```css
:root {
  --button-padding: 0.75rem 1.5rem;
  --button-font-size: 16px;
}

@media screen and (max-width: 749px) {
  :root {
    --button-padding: 0.625rem 1.25rem;
    --button-font-size: 14px;
  }
}

.button {
  padding: var(--button-padding);
  font-size: var(--button-font-size);
}
```

---

## Customization Guide

### Override Variables

Create custom CSS file (`assets/custom.css`):

```css
:root {
  /* Override primary color */
  --color-primary: 59, 130, 246;  /* Blue instead of Indigo */
  
  /* Override font size */
  --font-size-body: clamp(15px, 1vw, 17px);
  
  /* Override spacing */
  --spacing-lg: 2rem;  /* Larger spacing */
}
```

### Component-Specific Overrides

```css
/* Override only for trust badges */
.trust-badges-pod {
  --trust-badge-gap: 2rem;  /* More spacing */
}

/* Override only for buttons */
.button {
  --button-padding: 1rem 2rem;  /* Larger buttons */
}
```

---

## Best Practices

### 1. Use Variables for Consistency

✅ **Good:**
```css
.component {
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
}
```

❌ **Bad:**
```css
.component {
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
```

### 2. Create Semantic Variables

```css
:root {
  /* Base variable */
  --color-primary: 99, 102, 241;
  
  /* Semantic usage */
  --button-primary-bg: rgb(var(--color-primary));
  --link-color: rgb(var(--color-primary));
}
```

### 3. Document Custom Variables

```css
:root {
  /* CUSTOM: Added for brand-specific styling */
  --brand-accent: 255, 100, 50;  /* Orange */
}
```

---

## Performance Considerations

### Variable Lookup Cost

CSS variables have minimal performance impact. Use freely for:
- Colors
- Spacing
- Typography
- Shadows

Avoid for:
- Complex calculations in animations (pre-calculate)
- Deeply nested overrides (keep hierarchy shallow)

---

## Browser Support

CSS Custom Properties supported in:
- ✅ Chrome 49+
- ✅ Firefox 31+
- ✅ Safari 9.1+
- ✅ Edge 15+
- ❌ IE 11 (no support)

**Fallback for IE11:**

```css
.button {
  background: #6366F1;  /* Fallback */
  background: rgb(var(--color-primary));  /* Modern browsers */
}
```

---

## Debugging Variables

### View Computed Value

Browser DevTools → Elements → Computed:

```
--color-primary: 99, 102, 241
```

### Output Variable in CSS

```css
body::before {
  content: var(--color-primary);
}
```

---

**Related:** [Liquid Snippets Reference](liquid-snippets.md) • [Customization Guide](../guides/customization.md)
