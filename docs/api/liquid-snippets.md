# 📚 Liquid Snippets API Reference

## Overview

Complete reference for all Liquid snippets in the Digivora POD theme. Each snippet includes parameters, usage examples, and implementation notes.

---

## POD Components

### 1. Trust Badges POD

**File:** `snippets/trust-badges-pod.liquid`

**Description:** Displays 4 trust features (Premium Quality, Fast Shipping, 30-Day Returns, Eco-Friendly) with icons and descriptions.

**Parameters:** None (static component)

**Usage:**

```liquid
{% render 'trust-badges-pod' %}
```

**Output:** 
- 4-column grid on desktop (990px+)
- 2-column grid on mobile (<750px)
- Each badge: Icon + heading + description

**CSS Required:** `assets/component-trust-badges.css`

**Customization:**
- Edit snippet directly to change text
- Modify CSS for layout/colors

---

### 2. Size Guide Modal POD

**File:** `snippets/size-guide-modal-pod.liquid`

**Description:** Modal with product measurement tables, product type tabs, and in/cm conversion.

**Parameters:** None (self-contained)

**Usage:**

```liquid
{% render 'size-guide-modal-pod' %}
```

**Trigger Button:**

```liquid
<button 
  onclick="document.getElementById('size-guide-modal').showModal()"
  class="button button--secondary"
>
  Size Guide
</button>
```

**Features:**
- Native `<dialog>` element
- 3 tabs: T-Shirt, Hoodie, Pants
- Conversion toggle: Inches ↔ Centimeters
- Measurements for sizes XS-3XL

**CSS Required:** `assets/component-size-guide.css`

**JavaScript:** Inline tab switching and conversion

---

### 3. Review Summary POD

**File:** `snippets/review-summary-pod.liquid`

**Description:** Displays product rating (stars) and review count with verified badge.

**Parameters:**
- `rating` - Number (default: 4.8)
- `count` - Number (default: 247)

**Usage:**

```liquid
{%- render 'review-summary-pod', rating: 4.8, count: 247 -%}
```

**Dynamic Rating:**

```liquid
{%- render 'review-summary-pod', 
  rating: product.metafields.reviews.rating.value,
  count: product.metafields.reviews.rating_count
-%}
```

**Output:**
- Star icons (gold)
- Rating number
- Review count (clickable link to #product-reviews)
- Verified badge

**CSS Required:** `assets/component-review-summary.css`

---

### 4. Product Tabs POD

**File:** `snippets/product-tabs-pod.liquid`

**Description:** 5-tab content system for product information.

**Parameters:**
- `product` - Product object (required)
- `description` - Product description HTML (optional)

**Usage:**

```liquid
{% render 'product-tabs-pod', product: product, description: product.description %}
```

**Tabs:**
1. **Description** - Product overview
2. **Specifications** - Material, print method, etc.
3. **Shipping & Returns** - Processing time, return policy
4. **Care Instructions** - Washing, drying, ironing
5. **Reviews** - Rating breakdown + sample reviews

**Output:**
- Horizontal tab navigation (scrollable on mobile)
- Tab panels with content
- JavaScript tab switching (inline)

**CSS Required:** `assets/component-product-tabs.css`

---

### 5. Hero POD

**File:** `snippets/hero-pod.liquid`

**Description:** Homepage hero section with gradient headline, product grid, and CTAs.

**Parameters:** None (static content)

**Usage:**

```liquid
{% render 'hero-pod' %}
```

**As Section:**

```liquid
{%- section 'hero-pod' -%}
```

**Features:**
- Gradient headline
- 3-image product grid
- 4 trust features
- 2 CTAs (Shop All, How It Works)
- Social proof badge (floating)
- Rating display

**CSS Required:** `assets/section-hero-pod.css`

**Customization:** Edit snippet for text, images, links

---

### 6. Sticky ATC Mobile

**File:** `snippets/sticky-atc-mobile.liquid`

**Description:** Fixed bottom bar with product image, price, and Add to Cart button. Mobile only.

**Parameters:**
- `product` - Product object (required)

**Usage:**

```liquid
{% render 'sticky-atc-mobile', product: product %}
```

**Behavior:**
- Hidden when product info visible
- Shows when scrolling past product info (down)
- Syncs with variant changes (price update)
- Delegates click to main Add to Cart form

**Output:**
- Mobile only (<750px)
- Fixed position: bottom
- Contains: Image (60x60) + Name + Price + Button

**CSS Required:** `assets/component-sticky-atc.css`

**JavaScript:** Inline IntersectionObserver + Pub/Sub

---

### 7. Customer Photos POD

**File:** `snippets/customer-photos-pod.liquid`

**Description:** Instagram-style gallery with 6 customer photos, ratings, and usernames.

**Parameters:** None (static demo photos)

**Usage:**

```liquid
{% render 'customer-photos-pod' %}
```

**Dynamic Implementation:**

```liquid
{%- for review in product.metafields.reviews.images limit: 6 -%}
  <div class="customer-photo">
    <img src="{{ review.image | image_url: width: 400 }}" alt="Customer photo">
    <div class="customer-photo__overlay">
      <span class="customer-photo__rating">{{ review.rating_stars }}</span>
      <p class="customer-photo__author">@{{ review.author }}</p>
    </div>
  </div>
{%- endfor -%}
```

**Output:**
- 6-column grid (desktop)
- 4 columns (tablet)
- 3 columns (mobile)
- Hover overlay with rating + username
- CTA: "Share with #Digivora"

**CSS Required:** `assets/component-customer-photos.css`

---

## Enhanced Core Components

### 8. Product Variant Picker (Enhanced)

**File:** `snippets/product-variant-picker.liquid`

**Description:** Modified to show larger color swatches (48px) and size guide button.

**Parameters:**
- `product` - Product object
- `block` - Block settings
- `product_form_id` - Form ID for association
- `update_url` - Boolean for URL updates

**Usage:**

```liquid
{% render 'product-variant-picker',
  product: product,
  block: block,
  product_form_id: product_form_id,
  update_url: false
%}
```

**Enhancements:**
- Color swatches: 48px (was 36px)
- Size guide button auto-shows if "Size" variant exists
- Improved mobile layout

**CSS Required:** 
- `assets/component-product-variant-picker.css`
- `assets/component-swatch.css`

---

### 9. Product Card (Enhanced)

**File:** `snippets/card-product.liquid`

**Description:** Enhanced product cards with gradient overlay and larger size.

**Parameters:**
- `card_product` - Product object
- `media_aspect_ratio` - Aspect ratio setting
- `show_secondary_image` - Boolean
- `show_vendor` - Boolean
- `show_rating` - Boolean
- And others...

**Usage:**

```liquid
{% render 'card-product',
  card_product: product,
  media_aspect_ratio: 'portrait',
  show_secondary_image: true,
  show_rating: false
%}
```

**Enhancements:**
- Gradient overlay on hover
- Larger cards (better for POD product showcasing)
- Quick view support (if enabled)

**CSS Required:** `assets/component-card.css`

---

## Reusable Snippets

### Icon Snippets

**Pattern:** `snippets/icon-*.liquid`

**Examples:**
- `icon-cart.liquid`
- `icon-close.liquid`
- `icon-search.liquid`

**Usage:**

```liquid
{% render 'icon-cart' %}
```

**Parameters:** Most icons accept optional `class` parameter

```liquid
{% render 'icon-close', class: 'icon--large' %}
```

---

### Price Snippet

**File:** `snippets/price.liquid`

**Description:** Displays product price with compare-at price, sale badges.

**Parameters:**
- `product` - Product object
- `use_variant` - Boolean (use selected variant price)
- `show_badges` - Boolean (show sale badge)
- `price_class` - String (CSS class)

**Usage:**

```liquid
{% render 'price', 
  product: product,
  use_variant: true,
  show_badges: true
%}
```

---

### Loading Spinner

**File:** `snippets/loading-spinner.liquid`

**Description:** Animated loading indicator.

**Parameters:** None

**Usage:**

```liquid
{% render 'loading-spinner' %}
```

**Output:** SVG spinner with CSS animation

---

## Section-Level Rendering

### Main Product Section

**File:** `sections/main-product.liquid`

**Renders:**
1. Review summary (after title)
2. Product variant picker (enhanced)
3. Size guide button (conditional)
4. Trust badges (after buy button)
5. Product tabs (after media)
6. Customer photos (at bottom)
7. Sticky ATC mobile (mobile only)

**Schema:** Contains settings for layout, media, etc.

---

## Conditional Rendering

### Show Component Based on Variant

```liquid
{%- liquid
  assign has_size_variant = false
  for option in product.options_with_values
    if option.name == 'Size'
      assign has_size_variant = true
      break
    endif
  endfor
-%}

{%- if has_size_variant -%}
  <button onclick="document.getElementById('size-guide-modal').showModal()">
    Size Guide
  </button>
{%- endif -%}
```

### Show Component Based on Setting

```liquid
{% if settings.show_trust_badges %}
  {% render 'trust-badges-pod' %}
{% endif %}
```

---

## Performance Optimization

### Lazy Rendering

For components below the fold:

```liquid
<div class="lazy-component" data-component="customer-photos">
  {% render 'customer-photos-pod' %}
</div>
```

### Conditional CSS Loading

```liquid
{%- if template == 'product' -%}
  {{ 'component-size-guide.css' | asset_url | stylesheet_tag }}
  {{ 'component-product-tabs.css' | asset_url | stylesheet_tag }}
{%- endif -%}
```

---

## Error Handling

### Check if Product Exists

```liquid
{%- if product -%}
  {% render 'product-tabs-pod', product: product %}
{%- else -%}
  <p>Product not found</p>
{%- endif -%}
```

### Default Values

```liquid
{%- liquid
  assign rating = rating | default: 4.8
  assign count = count | default: 247
-%}
```

---

## Debugging Snippets

### Output Parameters

```liquid
<!-- DEBUG: Start -->
<div style="background: yellow; padding: 1rem;">
  <p>Product: {{ product.title }}</p>
  <p>Rating: {{ rating }}</p>
  <p>Count: {{ count }}</p>
</div>
<!-- DEBUG: End -->
```

### Check Liquid Variables

```liquid
{{ product | json }}
```

---

## Common Patterns

### Passing Multiple Parameters

```liquid
{% render 'component',
  param1: value1,
  param2: value2,
  param3: value3
%}
```

### Accessing Nested Data

```liquid
{% render 'component',
  title: product.title,
  price: product.variants.first.price,
  image: product.featured_image
%}
```

### Looping in Snippets

```liquid
{%- for item in collection -%}
  {% render 'card-product', card_product: item %}
{%- endfor -%}
```

---

## Best Practices

1. **Always provide defaults** for optional parameters
2. **Check object existence** before accessing properties
3. **Use liquid tag** for variable assignments (cleaner)
4. **Comment complex logic** for future developers
5. **Keep snippets focused** (single responsibility)
6. **Test with missing data** (e.g., no product description)

---

## Migration from Old Theme

### Replacing Old Components

**Old:**
```liquid
{% include 'product-price' %}
```

**New:**
```liquid
{% render 'price', product: product %}
```

**Note:** `include` is deprecated, use `render` instead.

---

**Related:** [CSS Variables Reference](css-variables.md) • [JavaScript Events](javascript-events.md)
