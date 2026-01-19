# 🎨 Hero POD Component

## Overview

Modern homepage hero section with gradient headline, product grid, trust features, and social proof. Visual-first design following Printful/Redbubble patterns.

**Location:** Homepage (replaces default banner)  
**Created:** Week 1, Day 1  
**File:** `sections/hero-pod.liquid`

---

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  LEFT COLUMN              RIGHT COLUMN          │
│                                                 │
│  ✨ Custom Designs        ┌───┬───┐            │
│                           │ 1 │ 2 │            │
│  DESIGN YOUR STYLE,       ├───┼───┤            │
│  WE PRINT IT             │   3   │            │
│  (gradient text)          └───────┘            │
│                                                 │
│  Description text         🎨 50,000+           │
│                           Happy Customers       │
│  [✓] Premium  [⚡] Fast                        │
│  [😊] Returns [♻️] Eco                         │
│                                                 │
│  [Shop All] [How It Works]                     │
│                                                 │
│  ★★★★★ 4.8 / 5                                 │
│  2,500+ reviews                                │
└─────────────────────────────────────────────────┘
```

---

## Visual Specifications

### Gradient Headline

```css
background: linear-gradient(135deg, 
  rgb(99, 102, 241) 0%,    /* Indigo */
  rgb(236, 72, 153) 50%,   /* Pink */
  rgb(16, 185, 129) 100%   /* Green */
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Product Grid

- **Layout**: 2x2 grid + 1 tall image
- **Images**: 3 product mockups
- **Border radius**: 16px
- **Shadow**: 0 8px 24px rgba(0,0,0,0.1)
- **Hover**: Scale 1.05, translateY(-8px)

### Trust Features

4 features with icons:
1. ✅ Premium Quality
2. ⚡ Fast Shipping
3. 😊 30-Day Returns
4. ♻️ Eco-Friendly

### Colors

- **Background**: Gradient (Indigo/Pink/Green at 3-5% opacity)
- **Badge**: `rgba(99, 102, 241, 0.1)` background
- **Text**: Default foreground
- **CTAs**: Indigo primary, white secondary

---

## Implementation

### Usage

```liquid
{%- section 'hero-pod' -%}
```

Or render snippet directly:

```liquid
{% render 'hero-pod' %}
```

### Shopify Section

**File:** `sections/hero-pod.liquid`

```json
{
  "name": "POD Hero Section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Design Your Style"
    },
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading",
      "default": "We Print It"
    }
  ]
}
```

---

## Files

1. **Section:** `sections/hero-pod.liquid` (70 lines)
2. **Snippet:** `snippets/hero-pod.liquid` (102 lines)
3. **Stylesheet:** `assets/section-hero-pod.css` (349 lines)

---

## Customization

### Change Headline

```liquid
<h1 class="hero-pod__heading">
  Your Custom Text,<br>
  <span class="hero-pod__heading--gradient">Gradient Part</span>
</h1>
```

### Change Product Images

```liquid
<img 
  src="YOUR_IMAGE_URL" 
  alt="Product description"
  loading="eager"
>
```

**Recommended:**
- Size: 600x600px minimum
- Format: WebP or JPEG
- Quality: High (for hero section)

### Change Social Proof

```liquid
<div class="hero-visual__badge">
  <span class="badge__icon">🎨</span>
  <div class="badge__content">
    <strong>100,000+</strong>
    <span>Products Sold</span>
  </div>
</div>
```

### Change CTAs

```liquid
<a href="/collections/all" class="button button--primary">
  Your CTA Text
</a>
```

---

## Responsive Behavior

### Desktop (990px+)
- 2-column layout (content + visual)
- 4-column trust features
- Product grid: 2x2 + tall

### Tablet (750-989px)
- 1-column layout
- Content centered
- 2-column trust features
- Product grid: Smaller

### Mobile (<750px)
- Full-width layout
- 1-column trust features
- Product grid: 3 stacked images
- Social proof: Below grid

---

## Animation

### Floating Badge

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-visual__badge {
  animation: float 3s ease-in-out infinite;
}
```

### Optional: Fade In on Load

```css
.hero-pod {
  animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## Testing Checklist

- [ ] Gradient text displays correctly
- [ ] All 3 images load
- [ ] Floating badge animates
- [ ] CTAs link correctly
- [ ] Mobile: Stack vertically
- [ ] Trust features display
- [ ] Social proof visible

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial hero section |

---

**Related:** [Trust Badges](trust-badges.md) • [Homepage Design Guide](../guides/homepage-design.md)
