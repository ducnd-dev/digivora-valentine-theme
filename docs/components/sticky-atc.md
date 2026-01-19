# 📱 Sticky Add to Cart Component

## Overview

Fixed bottom bar for mobile product pages. Displays product image, price, and Add to Cart button. Shows when main buy button scrolls out of view.

**Location:** Product page (mobile only)  
**Created:** Week 1, Day 2  
**File:** `snippets/sticky-atc-mobile.liquid`

---

## Visual Specifications

### Layout

```
┌─────────────────────────────────────────────┐
│ [img] Product Name        $29.99  [Add to  │
│       Small preview              Cart]       │
└─────────────────────────────────────────────┘
```

**Fixed position:** bottom: 0, full width

### Colors

- **Background**: White
- **Shadow**: `0 -4px 16px rgba(0,0,0,0.15)`
- **Button**: `rgb(99, 102, 241)` (Indigo)
- **Price**: `rgb(99, 102, 241)` (Indigo)

### Dimensions

- **Bar height**: ~92px (with padding)
- **Product image**: 60x60px
- **Button**: 0.875rem padding, 8px border-radius

---

## Implementation

### Usage

```liquid
{% render 'sticky-atc-mobile', product: product %}
```

**Parameters:**
- `product` - Product object (required)

### Show/Hide Logic

```javascript
const stickyBar = document.getElementById('sticky-atc-mobile');
const productInfo = document.querySelector('.product__info-wrapper');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stickyBar.classList.remove('show');
    } else if (window.scrollY > lastScroll) {
      stickyBar.classList.add('show');
    }
  });
}, { threshold: 0, rootMargin: '50px' });

observer.observe(productInfo);
```

**Logic:**
- When product info is visible → hide sticky bar
- When scrolled past product info (down) → show sticky bar
- When scrolling up → keep hidden

---

## Files

1. **Liquid Template:** `snippets/sticky-atc-mobile.liquid` (113 lines)
2. **Stylesheet:** `assets/component-sticky-atc.css` (106 lines)
3. **JavaScript:** Inline in snippet (IntersectionObserver)

---

## Variant Sync

### Price Update

```javascript
subscribe(PUB_SUB_EVENTS.variantChange, (data) => {
  const stickyPrice = document.getElementById('sticky-price');
  if (data.variant && stickyPrice) {
    stickyPrice.innerHTML = `<span class="price-item">${formatMoney(data.variant.price)}</span>`;
  }
});
```

### Availability Update

```javascript
if (data.variant.available) {
  stickyBtn.disabled = false;
  stickyBtn.textContent = 'Add to Cart';
} else {
  stickyBtn.disabled = true;
  stickyBtn.textContent = 'Sold Out';
}
```

---

## Customization

### Change Button Text

```liquid
<button 
  type="button" 
  class="button" 
  id="sticky-add-to-cart"
>
  Buy Now  <!-- Changed from "Add to Cart" -->
</button>
```

### Add Quantity Selector

```liquid
<div class="sticky-atc-mobile__quantity">
  <button onclick="decreaseQty()">-</button>
  <input type="number" value="1" min="1" id="sticky-qty">
  <button onclick="increaseQty()">+</button>
</div>
```

### Change Image Size

```css
.sticky-atc-mobile__image {
  width: 80px;  /* Was 60px */
  height: 80px;
}
```

---

## Responsive Behavior

### Mobile Only (<750px)

- Display: `block`
- Position: `fixed`
- Transition: `transform 0.3s ease`

### Tablet/Desktop (750px+)

- Display: `none !important`
- Never shows on larger screens

---

## Accessibility

### Keyboard Support

- Button focusable via TAB
- ENTER activates button
- Delegates click to main form

### Screen Reader

```liquid
<button 
  type="button"
  aria-label="Add {{ product.title }} to cart"
  id="sticky-add-to-cart"
>
  Add to Cart
</button>
```

---

## Performance

### IntersectionObserver

- Native API (no libraries)
- Efficient scroll tracking
- No expensive scroll listeners

### Load Time

- **HTML**: ~1.5KB
- **CSS**: 1.8KB
- **JavaScript**: ~1KB (inline)
- **Total**: ~4.3KB

---

## Testing Checklist

- [ ] Shows only on mobile (<750px)
- [ ] Hides when product info visible
- [ ] Shows when scrolling down past product info
- [ ] Price updates on variant change
- [ ] Button disabled when sold out
- [ ] Clicking button triggers main Add to Cart
- [ ] Product image loads correctly
- [ ] No layout shift on show/hide

---

## Analytics Tracking

```javascript
stickyButton.addEventListener('click', function() {
  // Track sticky ATC usage
  analytics.track('Sticky ATC Clicked', {
    product_id: productId,
    variant_id: selectedVariantId,
    source: 'sticky_mobile_bar'
  });
  
  // Trigger main ATC
  mainAddToCart.click();
});
```

---

## Troubleshooting

### Sticky Bar Not Showing

**Issue:** IntersectionObserver not detecting

**Fix:** Check productInfo selector

```javascript
const productInfo = document.querySelector('.product__info-wrapper');
// or
const productInfo = document.querySelector('[data-product-info]');
```

### Price Not Updating

**Issue:** Pub/Sub event not subscribed

**Fix:** Ensure constants.js loaded first

```liquid
{{ 'constants.js' | asset_url | script_tag }}
{{ 'pubsub.js' | asset_url | script_tag }}
```

### Button Not Working

**Issue:** Main form selector wrong

**Fix:** Update selector

```javascript
const mainAddToCart = document.querySelector('[name="add"]');
// or
const mainAddToCart = document.querySelector('#product-form [type="submit"]');
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial sticky ATC |

---

## Industry Context

**Statistics:**
- Mobile accounts for 60-70% of POD traffic
- Sticky ATC increases mobile conversion 10-15%
- Reduces scroll-to-top abandonment

**Competitors:**
- **Printful**: Sticky bar with variant selector
- **Redbubble**: Sticky bar + quick buy
- **Amazon**: Persistent sticky bar

---

**Related:** [Mobile Optimization Guide](../guides/mobile-optimization.md)
