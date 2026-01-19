# ⭐ Review Summary Component

## Overview

Displays product rating (4.8★) and review count (247 reviews) with verified badge. Positioned directly below product title for maximum visibility.

**Location:** Product page, below title  
**Created:** Week 1, Day 1  
**File:** `snippets/review-summary-pod.liquid`

---

## Visual Specifications

### Layout

```
┌────────────────────────────────────────────┐
│ ★★★★★  4.8  (247 reviews)  ✓ Verified    │
└────────────────────────────────────────────┘
```

**Display:** Horizontal flex layout

### Colors

- **Stars**: `#F59E0B` (Gold)
- **Rating Number**: `rgb(var(--color-foreground))` (Black)
- **Review Link**: `rgb(99, 102, 241)` (Indigo)
- **Verified Badge**: `rgb(16, 185, 129)` (Green)
- **Background**: `rgba(99, 102, 241, 0.04)` (Light indigo tint)
- **Border**: `1px solid rgba(99, 102, 241, 0.1)`

### Typography

- **Stars**: 18px
- **Rating Number**: 18px, font-weight 700
- **Review Count**: 14px
- **Verified Badge**: 13px, font-weight 500

---

## Implementation

### Usage

```liquid
{%- render 'review-summary-pod', rating: 4.8, count: 247 -%}
```

**Parameters:**
- `rating` - Number (default: 4.8)
- `count` - Number (default: 247)

### Star Logic

```liquid
{%- liquid
  assign full_stars = rating | floor
  assign has_half_star = false
  assign decimal = rating | modulo: 1
  
  if decimal >= 0.25 and decimal < 0.75
    assign has_half_star = true
  elsif decimal >= 0.75
    assign full_stars = full_stars | plus: 1
  endif
-%}
```

**Examples:**
- 4.8 → ★★★★★ (5 full stars)
- 4.5 → ★★★★☆ (4 full + 1 half)
- 4.2 → ★★★★☆ (4 full + 1 half)
- 3.9 → ★★★★☆ (4 full stars)

---

## Files

1. **Liquid Template:** `snippets/review-summary-pod.liquid` (52 lines)
2. **Stylesheet:** `assets/component-review-summary.css` (97 lines)
3. **Integration:** `sections/main-product.liquid` (after title block)

---

## Customization

### Change Rating

```liquid
{%- render 'review-summary-pod', rating: 4.9, count: 350 -%}
```

### Dynamic Rating (from metafields)

```liquid
{%- render 'review-summary-pod', 
  rating: product.metafields.reviews.rating.value,
  count: product.metafields.reviews.rating_count
-%}
```

### Link to Reviews Tab

```liquid
<a href="#product-reviews" class="review-count">({{ count }} reviews)</a>
```

Smooth scroll to reviews tab in Product Tabs component.

---

## Responsive Behavior

### Desktop (990px+)

- All elements inline
- Full spacing (0.75rem gaps)

### Mobile (<750px)

- Verified badge wraps to new line
- Centered layout
- Smaller font sizes (16px rating, 13px count)

---

## Testing Checklist

- [ ] Stars render correctly (5 full, half, empty combinations)
- [ ] Rating number displays
- [ ] Review count displays and links to #product-reviews
- [ ] Verified badge shows
- [ ] Mobile: Wraps properly
- [ ] Hover: Review link changes color

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial implementation |

---

**Related:** [Product Tabs](product-tabs.md) (contains full reviews section)
