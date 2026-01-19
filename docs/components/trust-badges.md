# 🏆 Trust Badges Component

## Overview

Displays 4 key trust signals optimized for POD businesses: Premium Quality, Fast Shipping, Free Returns, and Eco-Friendly.

**Location:** Product page, below buy buttons  
**Created:** Week 1, Day 1  
**File:** `snippets/trust-badges-pod.liquid`

---

## Visual Specifications

### Layout

```
┌─────────────────────────────────────────┐
│  [✓] Premium    [📦] Fast     [🔄] Free  │
│     Quality         Shipping       Returns│
│                                           │
│  [♻️] Eco-Friendly                        │
└─────────────────────────────────────────┘
```

**Grid:**
- Desktop: 4 columns (1fr each)
- Tablet: 2 columns  
- Mobile: 2 columns

### Colors

- **Icon Color**: `rgb(99, 102, 241)` (Indigo)
- **Text Color**: `rgb(var(--color-foreground))`
- **Background**: `rgba(99, 102, 241, 0.04)` (subtle indigo tint)
- **Border**: `1px solid rgba(99, 102, 241, 0.1)`

### Typography

- **Badge Label**: 14px, font-weight 600
- **Line height**: 1.4

### Spacing

- **Container padding**: 1.5rem
- **Gap between badges**: 1.5rem (desktop), 1rem (mobile)
- **Badge padding**: 0.75rem

---

## Implementation

### Usage

```liquid
{%- comment -%} Render trust badges {%- endcomment -%}
{% render 'trust-badges-pod' %}
```

**No parameters required** - static content

### Integration Points

**Current:** `sections/main-product.liquid` (line ~472, after buy_buttons block)

```liquid
{%- when 'buy_buttons' -%}
  <!-- Buy button markup -->
{%- endwhen -%}

{%- comment -%} POD Trust Badges {%- endcomment -%}
{% render 'trust-badges-pod' %}
```

### Files

1. **Liquid Template:**  
   `snippets/trust-badges-pod.liquid` (51 lines)

2. **Stylesheet:**  
   `assets/component-trust-badges.css` (67 lines)

3. **CSS Loaded In:**  
   `layout/theme.liquid`
   ```liquid
   {{ 'component-trust-badges.css' | asset_url | stylesheet_tag }}
   ```

---

## Code Structure

### HTML Structure

```html
<div class="trust-badges-pod">
  <div class="trust-badge">
    <svg class="trust-badge__icon"><!-- SVG path --></svg>
    <span class="trust-badge__text">Premium Quality</span>
  </div>
  <!-- Repeat 4x -->
</div>
```

### CSS Classes

- `.trust-badges-pod` - Container (grid)
- `.trust-badge` - Individual badge
- `.trust-badge__icon` - SVG icon (24x24px)
- `.trust-badge__text` - Text label

---

## Customization

### Changing Badge Text

**Edit:** `snippets/trust-badges-pod.liquid`

```liquid
<span class="trust-badge__text">Your Custom Text</span>
```

### Changing Icon

Replace SVG `<path>` with new icon:

```liquid
<svg class="trust-badge__icon" width="24" height="24" viewBox="0 0 24 24">
  <path d="YOUR_PATH_DATA" stroke="currentColor" />
</svg>
```

**Icon Resources:**
- [Heroicons](https://heroicons.com)
- [Feather Icons](https://feathericons.com)

### Changing Colors

**Edit:** `assets/component-trust-badges.css`

```css
.trust-badges-pod {
  background-color: rgba(YOUR_COLOR, 0.04);
  border-color: rgba(YOUR_COLOR, 0.1);
}

.trust-badge__icon {
  color: YOUR_COLOR;
}
```

### Adding/Removing Badges

**Add 5th badge:**

1. Edit `snippets/trust-badges-pod.liquid` - duplicate badge block
2. Edit `assets/component-trust-badges.css` - update grid columns:
   ```css
   .trust-badges-pod {
     grid-template-columns: repeat(5, 1fr); /* Was 4 */
   }
   ```

---

## Responsive Behavior

### Desktop (990px+)

- 4 columns
- Full padding (1.5rem)
- All badges visible

### Tablet (750-989px)

- 2 columns, 2 rows
- Badges wrap naturally
- Reduced gap (1.25rem)

### Mobile (<750px)

- 2 columns
- Smaller text (13px)
- Smaller icons (20px)
- Compact padding (1rem)

---

## Accessibility

### ARIA Labels

Currently static text. Consider adding:

```liquid
<div class="trust-badge" role="img" aria-label="Premium Quality Guarantee">
  <!-- ... -->
</div>
```

### Screen Reader Text

```liquid
<span class="visually-hidden">Guaranteed Premium Quality</span>
```

---

## Performance

### Load Time

- **HTML**: ~1KB (inline SVGs)
- **CSS**: 1.2KB (minified)
- **Total**: ~2.2KB
- **Render**: Non-blocking (below fold)

### Image vs SVG

**Why SVG?**
- ✅ Scalable (retina-ready)
- ✅ Color customizable via CSS
- ✅ No HTTP requests
- ✅ ~10x smaller than PNG

---

## Testing Checklist

- [ ] Displays 4 badges in correct order
- [ ] Icons render properly (all browsers)
- [ ] Text is readable on all backgrounds
- [ ] Responsive: 4 cols → 2 cols → 2 cols
- [ ] Mobile: Text doesn't wrap awkwardly
- [ ] Color scheme matches POD branding
- [ ] No layout shift on load
- [ ] Works with/without JavaScript

---

## Troubleshooting

### Icons Not Showing

**Issue:** SVG paths not rendering

**Fix:** Check `viewBox` and `fill`/`stroke` attributes

```liquid
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
```

### Layout Breaking on Mobile

**Issue:** Grid not responsive

**Fix:** Verify media queries in CSS

```css
@media screen and (max-width: 749px) {
  .trust-badges-pod {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Background Color Not Visible

**Issue:** `rgba()` values wrong

**Fix:** Check alpha channel (4th value)

```css
/* Subtle tint */
background-color: rgba(99, 102, 241, 0.04); /* 4% opacity */
```

---

## Related Components

- [Size Guide Modal](size-guide.md) - Another trust-building element
- [Review Summary](review-summary.md) - Social proof component
- [Customer Photos](customer-photos.md) - User-generated trust signals

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial implementation |

---

## Next Steps

1. **A/B Test** badge copy (e.g., "30-Day Returns" vs "Free Returns")
2. **Track Conversions** before/after adding badges
3. **Consider Animation** on scroll (fade in)
4. **Multilingual** support via translation keys

**See also:** [Product Page Enhancement Strategy](../guides/conversion-optimization.md)
