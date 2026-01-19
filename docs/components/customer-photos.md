# 📸 Customer Photos Component

## Overview

Instagram-style photo gallery displaying user-generated content. 6-photo grid with hover overlays showing ratings and usernames. Encourages social sharing with #Digivora hashtag.

**Location:** Product page, after product tabs  
**Created:** Week 1, Day 2  
**File:** `snippets/customer-photos-pod.liquid`

---

## Visual Specifications

### Layout

```
┌─────────────────────────────────────┐
│      Customer Photos                │
│  Real customers, real results!      │
│                                     │
│  ┌────┬────┬────┬────┬────┬────┐  │
│  │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │  │
│  │★★★ │★★★ │★★★ │★★★ │★★★ │★★★ │  │
│  └────┴────┴────┴────┴────┴────┘  │
│                                     │
│  📸 Share with #Digivora            │
│  [View All Photos]                  │
└─────────────────────────────────────┘
```

### Grid Layout

- **Desktop**: 6 columns (1fr each)
- **Tablet**: 4 columns (hide last 2)
- **Mobile**: 3 columns (hide last 3)
- **Gap**: 1rem desktop, 0.75rem mobile
- **Aspect ratio**: 1:1 (square)

### Colors

- **Background**: `linear-gradient(135deg, rgba(99,102,241,0.03) 0%, rgba(236,72,153,0.03) 100%)`
- **Overlay**: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)`
- **Stars**: `#F59E0B` (Gold)
- **Username**: White

---

## Implementation

### Usage

```liquid
{% render 'customer-photos-pod' %}
```

**No parameters** - static demo photos

### Dynamic Implementation

```liquid
{%- for review in product.metafields.reviews.images limit: 6 -%}
  <div class="customer-photo">
    <img src="{{ review.image | image_url: width: 400 }}" alt="Customer photo">
    <div class="customer-photo__overlay">
      <div class="customer-photo__info">
        <span class="customer-photo__rating">{{ review.rating_stars }}</span>
        <p class="customer-photo__author">@{{ review.author }}</p>
      </div>
    </div>
  </div>
{%- endfor -%}
```

---

## Files

1. **Liquid Template:** `snippets/customer-photos-pod.liquid` (93 lines)
2. **Stylesheet:** `assets/component-customer-photos.css` (180 lines)

---

## Customization

### Change Photo Sources

```liquid
<img 
  src="YOUR_IMAGE_URL" 
  alt="Customer wearing product"
  loading="lazy"
>
```

**Recommended:**
- Size: 400x400px
- Format: WebP or JPEG
- Aspect ratio: 1:1 (square)

### Change Grid Columns

```css
.customer-photos__grid {
  grid-template-columns: repeat(8, 1fr); /* Was 6 */
}
```

### Change Hashtag

```liquid
<p class="cta__text">
  📸 Share your photo with <strong>#YourBrand</strong>
</p>
```

### Add Lightbox

```liquid
<div class="customer-photo" onclick="openLightbox(this)">
  <img src="..." data-full-size="URL_TO_LARGER_IMAGE">
</div>

<script>
function openLightbox(element) {
  const fullSize = element.querySelector('img').dataset.fullSize;
  // Open modal with full-size image
}
</script>
```

---

## Hover Effects

### Overlay Fade In

```css
.customer-photo__overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.customer-photo:hover .customer-photo__overlay {
  opacity: 1;
}
```

### Image Scale

```css
.customer-photo:hover {
  transform: scale(1.05);
  z-index: 1;
}
```

---

## Responsive Behavior

### Desktop (990px+)
- 6 photos visible
- All hover effects active
- Full overlay info

### Tablet (750-989px)
- 4 photos visible (`:nth-child(n+5)` hidden)
- Hover effects active
- Reduced gap (0.875rem)

### Mobile (<750px)
- 3 photos visible (`:nth-child(n+4)` hidden)
- Overlay always visible (opacity: 1)
- Compact info
- Gap: 0.75rem

---

## Integration with Review Apps

### Judge.me

```liquid
{%- assign review_photos = product | judge_me_review_photos -%}
{%- for photo in review_photos limit: 6 -%}
  <div class="customer-photo">
    <img src="{{ photo.url | image_url: width: 400 }}">
    <div class="customer-photo__overlay">
      <span class="customer-photo__rating">{{ photo.rating | times: '★' }}</span>
      <p class="customer-photo__author">{{ photo.reviewer_name }}</p>
    </div>
  </div>
{%- endfor -%}
```

### Loox

```liquid
<div id="loox-customer-photos"></div>

<script>
  // Loox widget
  loox.init({
    element: '#loox-customer-photos',
    product_id: {{ product.id }},
    limit: 6
  });
</script>
```

---

## Social Proof Strategy

### Instagram Integration

1. **Create branded hashtag**: #DigivoraDesigns
2. **User posts photo** with hashtag
3. **Curate photos** manually or via API
4. **Display in gallery**
5. **Link back** to Instagram profile

### UGC Rights

**Add disclaimer:**

```liquid
<p class="legal-text">
  By using #Digivora, you grant us permission to use your photo 
  for marketing purposes. See our <a href="/pages/ugc-policy">UGC Policy</a>.
</p>
```

---

## Testing Checklist

- [ ] 6 photos display on desktop
- [ ] 4 photos on tablet, 3 on mobile
- [ ] Hover shows overlay with rating + username
- [ ] Mobile overlay always visible
- [ ] Images load properly (lazy loading)
- [ ] Grid responsive (no overflow)
- [ ] CTA link works
- [ ] Border radius consistent (12px)

---

## Performance

### Lazy Loading

```liquid
<img 
  src="{{ photo.url | image_url: width: 400 }}" 
  loading="lazy"
  alt="Customer photo"
>
```

### WebP Format

```liquid
{%- capture srcset -%}
  {{ photo | image_url: width: 400, format: 'pjpg' }} 400w,
  {{ photo | image_url: width: 600, format: 'pjpg' }} 600w
{%- endcapture -%}

<img 
  srcset="{{ srcset }}"
  sizes="(min-width: 990px) 16vw, (min-width: 750px) 25vw, 33vw"
  src="{{ photo | image_url: width: 400 }}"
>
```

---

## Analytics

### Track Photo Clicks

```javascript
document.querySelectorAll('.customer-photo').forEach(photo => {
  photo.addEventListener('click', function() {
    analytics.track('Customer Photo Clicked', {
      photo_index: this.dataset.index,
      product_id: productId
    });
  });
});
```

---

## Troubleshooting

### Photos Not Aligned

**Issue:** Aspect ratios different

**Fix:** Force 1:1 ratio

```css
.customer-photo {
  aspect-ratio: 1;
  overflow: hidden;
}

.customer-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Grid Overflowing

**Issue:** Gap too large on mobile

**Fix:** Reduce gap in media query

```css
@media screen and (max-width: 749px) {
  .customer-photos__grid {
    gap: 0.5rem;
  }
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial 6-photo grid |

---

## Industry Context

**Statistics:**
- UGC increases conversion by 20-30%
- 79% of consumers say UGC highly impacts decisions
- Photos are 5x more likely to be trusted than brand photos

**Competitors:**
- **Glossier**: Instagram feed on product pages
- **Fashion Nova**: Customer photo galleries
- **ASOS**: "As Seen On Me" section

---

**Related:** [Social Media Strategy](../guides/social-media.md) • [UGC Best Practices](../guides/ugc-best-practices.md)
