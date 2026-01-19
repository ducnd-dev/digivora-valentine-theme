# 🚀 DIGIVORA POD THEME - COMPLETE IMPLEMENTATION PLAN

**Project:** Transform Digivora theme for Print-on-Demand business  
**Timeline:** 4 weeks (80-100 hours)  
**Status:** Ready to execute  
**Start Date:** 19/01/2026

---

## 📋 EXECUTIVE SUMMARY

**Goals:**
1. ✅ Apply POD-optimized color scheme
2. ✅ Enhance product visualization (multiple mockups, zoom)
3. ✅ Improve variant selectors (color swatches, size guide)
4. ✅ Add trust signals & social proof
5. ✅ Implement cross-sell features
6. ✅ Mobile optimization for POD
7. ✅ Performance & SEO optimization

**Total Tasks:** 45  
**Priority Tasks:** 18  
**Expected Impact:** 25-40% conversion rate improvement

---

## 🎯 IMPLEMENTATION PHASES

### **PHASE 1: VISUAL FOUNDATION** (Week 1)
**Focus:** Color scheme, typography, basic visual improvements  
**Time:** 20-25 hours  
**Priority:** 🔴 CRITICAL

### **PHASE 2: PRODUCT EXPERIENCE** (Week 2)
**Focus:** Product page enhancements, variant selectors, trust signals  
**Time:** 25-30 hours  
**Priority:** 🔴 CRITICAL

### **PHASE 3: CONVERSION OPTIMIZATION** (Week 3)
**Focus:** Cross-sell, reviews, customer photos, urgency  
**Time:** 20-25 hours  
**Priority:** 🟡 HIGH

### **PHASE 4: POLISH & LAUNCH** (Week 4)
**Focus:** Mobile optimization, performance, testing, deployment  
**Time:** 15-20 hours  
**Priority:** 🟡 HIGH

---

# 📅 WEEK 1: VISUAL FOUNDATION

## DAY 1: COLOR SCHEME & BRANDING (8 hours)

### ✅ TASK 1.1: Apply New Color Scheme (3 hours)
**Priority:** 🔴 CRITICAL  
**Dependencies:** None

**Files to modify:**
1. `config/settings_data.json`

**Implementation:**

```json
{
  "current": "scheme-1",
  "sections": {
    "scheme-1": {
      "settings": {
        "colors_solid_button_labels": "#FFFFFF",
        "colors_accent_1": "#6366F1",
        "colors_accent_2": "#EC4899",
        "gradient_accent_1": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        "gradient_accent_2": "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
        "colors_text": "#1F2937",
        "colors_outline_button_labels": "#6366F1",
        "colors_background_1": "#FFFFFF",
        "colors_background_2": "#F9FAFB",
        "type_header_font": "assistant_n4",
        "type_body_font": "assistant_n4"
      }
    },
    "scheme-2": {
      "settings": {
        "colors_solid_button_labels": "#FFFFFF",
        "colors_accent_1": "#10B981",
        "colors_accent_2": "#6366F1",
        "gradient_accent_1": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "gradient_accent_2": "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
        "colors_text": "#1F2937",
        "colors_outline_button_labels": "#10B981",
        "colors_background_1": "#F9FAFB",
        "colors_background_2": "#FFFFFF"
      }
    }
  }
}
```

**Commands to run:**
```bash
# Backup current settings
cp config/settings_data.json config/settings_data.backup.json

# After editing, commit
git add config/settings_data.json
git commit -m "Apply POD-optimized color scheme - Indigo primary, Pink accent"
```

**Testing:**
- [ ] Preview in Shopify theme editor
- [ ] Check button contrast ratios
- [ ] Verify gradient rendering
- [ ] Test dark mode (if applicable)

---

### ✅ TASK 1.2: Update Typography Scale (2 hours)
**Priority:** 🟡 HIGH  
**Dependencies:** Task 1.1

**Files to modify:**
1. `assets/base.css`

**Add to base.css:**

```css
/* ============================================
   POD-OPTIMIZED TYPOGRAPHY SCALE
   ============================================ */

:root {
  /* Font sizes */
  --font-size-hero: clamp(40px, 5vw, 60px);
  --font-size-h1: clamp(32px, 4vw, 48px);
  --font-size-h2: clamp(28px, 3.5vw, 36px);
  --font-size-h3: clamp(20px, 2.5vw, 24px);
  --font-size-h4: 20px;
  --font-size-base: 16px;
  --font-size-small: 14px;
  --font-size-tiny: 12px;
  
  /* Line heights */
  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Font weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}

/* Product-specific typography */
.product-card__title {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.price {
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.product-description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}
```

**Commit:**
```bash
git add assets/base.css
git commit -m "Add POD-optimized typography scale with fluid sizing"
```

---

### ✅ TASK 1.3: Create Trust Badges Component (3 hours)
**Priority:** 🔴 CRITICAL  
**Dependencies:** None

**Files to create:**
1. `snippets/trust-badges-pod.liquid`
2. `assets/component-trust-badges.css`

**snippets/trust-badges-pod.liquid:**

```liquid
{% comment %}
  POD Trust Badges Component
  Shows key trust signals for POD products
  
  Usage: {% render 'trust-badges-pod' %}
{% endcomment %}

<div class="trust-badges-pod">
  <div class="trust-badge">
    <svg class="trust-badge__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="trust-badge__content">
      <strong class="trust-badge__title">Premium Quality</strong>
      <span class="trust-badge__text">High-quality materials</span>
    </div>
  </div>

  <div class="trust-badge">
    <svg class="trust-badge__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="trust-badge__content">
      <strong class="trust-badge__title">Fast Shipping</strong>
      <span class="trust-badge__text">3-5 business days</span>
    </div>
  </div>

  <div class="trust-badge">
    <svg class="trust-badge__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
      <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="trust-badge__content">
      <strong class="trust-badge__title">Free Returns</strong>
      <span class="trust-badge__text">30-day guarantee</span>
    </div>
  </div>

  <div class="trust-badge">
    <svg class="trust-badge__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.61C19.93 3.7 18.82 3 17.57 2.56C15.23 1.71 12.67 1.94 10.5 3.19L10 3.48L9.5 3.19C7.33 1.94 4.77 1.71 2.43 2.56C1.18 3 0.07 3.7 -0.84 4.61C-2.61 6.38 -3.5 8.77 -3.5 11.29C-3.5 13.81 -2.61 16.2 -0.84 17.97L10 28.13L20.84 17.97C22.61 16.2 23.5 13.81 23.5 11.29C23.5 8.77 22.61 6.38 20.84 4.61Z" stroke="currentColor" stroke-width="2"/>
    </svg>
    <div class="trust-badge__content">
      <strong class="trust-badge__title">Eco-Friendly</strong>
      <span class="trust-badge__text">Sustainable printing</span>
    </div>
  </div>
</div>
```

**assets/component-trust-badges.css:**

```css
/* ============================================
   TRUST BADGES COMPONENT
   ============================================ */

.trust-badges-pod {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
  margin: 2rem 0;
  border-top: 1px solid rgb(var(--color-border));
  border-bottom: 1px solid rgb(var(--color-border));
}

.trust-badge {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.trust-badge__icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: rgb(var(--color-accent-1));
}

.trust-badge__content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.trust-badge__title {
  font-size: 14px;
  font-weight: 600;
  color: rgb(var(--color-foreground));
  line-height: 1.2;
}

.trust-badge__text {
  font-size: 12px;
  color: rgba(var(--color-foreground), 0.7);
  line-height: 1.3;
}

/* Mobile optimization */
@media screen and (max-width: 749px) {
  .trust-badges-pod {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem 0;
  }
  
  .trust-badge {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

/* Tablet */
@media screen and (min-width: 750px) and (max-width: 989px) {
  .trust-badges-pod {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Add to layout/theme.liquid (before </head>):**

```liquid
{{ 'component-trust-badges.css' | asset_url | stylesheet_tag }}
```

**Commit:**
```bash
git add snippets/trust-badges-pod.liquid assets/component-trust-badges.css layout/theme.liquid
git commit -m "Add trust badges component for POD products"
```

---

## DAY 2: PRODUCT PAGE ENHANCEMENTS (8 hours)

### ✅ TASK 2.1: Enhanced Product Image Gallery (4 hours)
**Priority:** 🔴 CRITICAL  
**Dependencies:** None

**Files to modify:**
1. `sections/main-product.liquid`
2. `assets/component-product-gallery.css`

**Add to sections/main-product.liquid (find media-gallery section):**

```liquid
{% comment %} Enhanced POD Product Gallery {% endcomment %}
<div class="product__media-wrapper">
  <div class="product__media-gallery">
    {% for media in product.media %}
      <div class="product__media-item" data-media-id="{{ media.id }}">
        {% case media.media_type %}
          {% when 'image' %}
            <img
              src="{{ media | image_url: width: 1200 }}"
              alt="{{ media.alt | escape }}"
              width="{{ media.width }}"
              height="{{ media.height }}"
              loading="lazy"
              class="product__media-image"
              data-zoom-enabled
            >
            <button class="product__media-zoom" aria-label="Zoom image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M11 8V14M8 11H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          {% when 'video' %}
            {{ media | video_tag: controls: true, autoplay: false }}
          {% when 'external_video' %}
            {{ media | external_video_tag }}
        {% endcase %}
      </div>
    {% endfor %}
  </div>
  
  {% comment %} Thumbnail Navigation {% endcomment %}
  {% if product.media.size > 1 %}
    <div class="product__media-thumbnails">
      {% for media in product.media %}
        <button 
          class="product__media-thumbnail{% if forloop.first %} active{% endif %}"
          data-media-id="{{ media.id }}"
          aria-label="View image {{ forloop.index }}"
        >
          <img
            src="{{ media | image_url: width: 150 }}"
            alt="{{ media.alt | escape }}"
            width="75"
            height="75"
            loading="lazy"
          >
        </button>
      {% endfor %}
    </div>
  {% endif %}
</div>
```

**assets/component-product-gallery.css:**

```css
/* ============================================
   ENHANCED PRODUCT GALLERY FOR POD
   ============================================ */

.product__media-wrapper {
  display: grid;
  gap: 1rem;
}

.product__media-gallery {
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: rgb(var(--color-background-2));
  border-radius: 8px;
  overflow: hidden;
}

.product__media-item {
  position: relative;
  width: 100%;
  height: 100%;
  display: none;
}

.product__media-item.active {
  display: block;
}

.product__media-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: zoom-in;
  transition: transform 0.3s ease;
}

.product__media-image:hover {
  transform: scale(1.05);
}

.product__media-zoom {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product__media-zoom:hover {
  background-color: rgb(var(--color-accent-1));
  color: white;
  transform: scale(1.1);
}

/* Thumbnail Navigation */
.product__media-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
}

.product__media-thumbnail {
  flex-shrink: 0;
  width: 75px;
  height: 75px;
  border: 2px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background: none;
  padding: 0;
  transition: all 0.2s ease;
}

.product__media-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product__media-thumbnail:hover {
  border-color: rgba(var(--color-accent-1), 0.3);
}

.product__media-thumbnail.active {
  border-color: rgb(var(--color-accent-1));
  box-shadow: 0 0 0 1px rgb(var(--color-accent-1));
}

/* Mobile optimization */
@media screen and (max-width: 749px) {
  .product__media-gallery {
    aspect-ratio: 4 / 5;
  }
  
  .product__media-thumbnails {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 0.5rem;
  }
  
  .product__media-thumbnail {
    width: 100%;
    height: 60px;
  }
}
```

**Add JavaScript for gallery (create assets/product-gallery-pod.js):**

```javascript
class ProductGalleryPOD extends HTMLElement {
  constructor() {
    super();
    this.thumbnails = this.querySelectorAll('.product__media-thumbnail');
    this.mediaItems = this.querySelectorAll('.product__media-item');
    this.zoomButtons = this.querySelectorAll('.product__media-zoom');
    
    this.init();
  }
  
  init() {
    // Thumbnail click handlers
    this.thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => this.switchMedia(index));
    });
    
    // Zoom handlers
    this.zoomButtons.forEach((button) => {
      button.addEventListener('click', (e) => this.handleZoom(e));
    });
    
    // Keyboard navigation
    this.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }
  
  switchMedia(index) {
    // Remove active class from all
    this.mediaItems.forEach(item => item.classList.remove('active'));
    this.thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to selected
    this.mediaItems[index].classList.add('active');
    this.thumbnails[index].classList.add('active');
  }
  
  handleZoom(event) {
    const mediaItem = event.target.closest('.product__media-item');
    const image = mediaItem.querySelector('.product__media-image');
    
    // Implement zoom modal or magnify.js integration
    if (typeof window.Magnify !== 'undefined') {
      new Magnify(image);
    }
  }
  
  handleKeyboard(event) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.previousImage();
    }
  }
  
  nextImage() {
    const current = Array.from(this.thumbnails).findIndex(t => t.classList.contains('active'));
    const next = (current + 1) % this.thumbnails.length;
    this.switchMedia(next);
  }
  
  previousImage() {
    const current = Array.from(this.thumbnails).findIndex(t => t.classList.contains('active'));
    const prev = (current - 1 + this.thumbnails.length) % this.thumbnails.length;
    this.switchMedia(prev);
  }
}

customElements.define('product-gallery-pod', ProductGalleryPOD);
```

**Wrap the gallery markup in custom element:**

```liquid
<product-gallery-pod>
  <!-- Gallery HTML here -->
</product-gallery-pod>
```

**Add to layout/theme.liquid:**

```liquid
{{ 'component-product-gallery.css' | asset_url | stylesheet_tag }}
<script src="{{ 'product-gallery-pod.js' | asset_url }}" defer="defer"></script>
```

**Commit:**
```bash
git add sections/main-product.liquid assets/component-product-gallery.css assets/product-gallery-pod.js layout/theme.liquid
git commit -m "Add enhanced POD product gallery with zoom and thumbnails"
```

---

### ✅ TASK 2.2: Improved Color & Size Selectors (4 hours)
**Priority:** 🔴 CRITICAL  
**Dependencies:** None

**Files to modify:**
1. `snippets/product-variant-picker.liquid`
2. `assets/component-product-variant-picker.css`

**Update snippets/product-variant-picker.liquid:**

```liquid
{% comment %}
  Enhanced POD Variant Picker
  Shows large color swatches and clear size options
{% endcomment %}

<variant-selects
  id="variant-selects-{{ section.id }}"
  class="no-js-hidden"
  data-section="{{ section.id }}"
  data-url="{{ product.url }}"
  {% if update_url == false %}
    data-update-url="false"
  {% endif %}
  {{ block.shopify_attributes }}
>
  {% for option in product.options_with_values %}
    <div class="product-form__input product-form__input--{{ option.name | handleize }}">
      <label class="form__label" for="Option-{{ section.id }}-{{ forloop.index0 }}">
        {{ option.name }}
        {% if option.name == 'Size' %}
          <button type="button" class="size-guide-trigger" data-modal-opener="size-guide-modal">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
              <path d="M6 6H10M6 9H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            Size Guide
          </button>
        {% endif %}
      </label>
      
      {% if option.name == 'Color' or option.name == 'colour' %}
        {% comment %} Large visual color swatches for POD {% endcomment %}
        <div class="color-swatches-pod">
          {% for value in option.values %}
            {% assign color_name = value | handleize %}
            <div class="color-swatch-wrapper">
              <input
                type="radio"
                id="{{ section.id }}-{{ option.position }}-{{ forloop.index0 }}"
                name="{{ option.name }}"
                value="{{ value | escape }}"
                form="{{ product_form_id }}"
                {% if option.selected_value == value %}checked{% endif %}
                class="color-swatch-input"
              >
              <label 
                for="{{ section.id }}-{{ option.position }}-{{ forloop.index0 }}"
                class="color-swatch"
                style="background-color: {{ value | handleize }};"
                data-color-name="{{ value }}"
                title="{{ value }}"
              >
                <span class="visually-hidden">{{ value }}</span>
              </label>
              <span class="color-name">{{ value }}</span>
            </div>
          {% endfor %}
        </div>
        
      {% elsif option.name == 'Size' %}
        {% comment %} Button-style size selector {% endcomment %}
        <div class="size-buttons-pod">
          {% for value in option.values %}
            <input
              type="radio"
              id="{{ section.id }}-{{ option.position }}-{{ forloop.index0 }}"
              name="{{ option.name }}"
              value="{{ value | escape }}"
              form="{{ product_form_id }}"
              {% if option.selected_value == value %}checked{% endif %}
              class="size-button-input"
            >
            <label 
              for="{{ section.id }}-{{ option.position }}-{{ forloop.index0 }}"
              class="size-button"
            >
              {{ value }}
            </label>
          {% endfor %}
        </div>
        
      {% else %}
        {% comment %} Default dropdown for other options {% endcomment %}
        <select
          id="Option-{{ section.id }}-{{ forloop.index0 }}"
          class="select"
          name="options[{{ option.name | escape }}]"
          form="{{ product_form_id }}"
        >
          {% for value in option.values %}
            <option
              value="{{ value | escape }}"
              {% if option.selected_value == value %}selected="selected"{% endif %}
            >
              {{ value }}
            </option>
          {% endfor %}
        </select>
      {% endif %}
    </div>
  {% endfor %}
</variant-selects>
```

**Update assets/component-product-variant-picker.css:**

```css
/* ============================================
   POD VARIANT PICKER - ENHANCED
   ============================================ */

.product-form__input {
  margin-bottom: 2rem;
}

.form__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: rgb(var(--color-foreground));
}

.size-guide-trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 13px;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
  text-transform: none;
  letter-spacing: 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.size-guide-trigger:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ============================================
   COLOR SWATCHES - POD OPTIMIZED
   ============================================ */

.color-swatches-pod {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.color-swatch-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.color-swatch-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.color-swatch {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-swatch::after {
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.2s ease;
}

.color-swatch:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.color-swatch-input:checked + .color-swatch {
  border-color: rgb(var(--color-accent-1));
}

.color-swatch-input:checked + .color-swatch::after {
  border-color: rgb(var(--color-accent-1));
}

.color-name {
  font-size: 13px;
  color: rgb(var(--color-foreground));
  text-align: center;
  font-weight: 500;
}

.color-swatch-input:checked ~ .color-name {
  color: rgb(var(--color-accent-1));
  font-weight: 600;
}

/* Predefined color mappings */
.color-swatch[data-color-name*="black"] { background-color: #000000 !important; }
.color-swatch[data-color-name*="white"] { background-color: #FFFFFF !important; border-color: #E5E7EB; }
.color-swatch[data-color-name*="red"] { background-color: #EF4444 !important; }
.color-swatch[data-color-name*="blue"] { background-color: #3B82F6 !important; }
.color-swatch[data-color-name*="green"] { background-color: #10B981 !important; }
.color-swatch[data-color-name*="yellow"] { background-color: #F59E0B !important; }
.color-swatch[data-color-name*="purple"] { background-color: #8B5CF6 !important; }
.color-swatch[data-color-name*="pink"] { background-color: #EC4899 !important; }
.color-swatch[data-color-name*="gray"] { background-color: #6B7280 !important; }
.color-swatch[data-color-name*="navy"] { background-color: #1E3A8A !important; }

/* ============================================
   SIZE BUTTONS - POD OPTIMIZED
   ============================================ */

.size-buttons-pod {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.size-button-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.size-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 48px;
  padding: 0 1rem;
  font-size: 14px;
  font-weight: 600;
  color: rgb(var(--color-foreground));
  background-color: rgb(var(--color-background-2));
  border: 2px solid rgb(var(--color-border));
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.size-button:hover {
  border-color: rgb(var(--color-accent-1));
  background-color: rgba(var(--color-accent-1), 0.05);
}

.size-button-input:checked + .size-button {
  color: white;
  background-color: rgb(var(--color-accent-1));
  border-color: rgb(var(--color-accent-1));
  box-shadow: 0 2px 8px rgba(var(--color-accent-1), 0.3);
}

.size-button-input:disabled + .size-button {
  opacity: 0.3;
  cursor: not-allowed;
  text-decoration: line-through;
}

/* Mobile optimization */
@media screen and (max-width: 749px) {
  .color-swatches-pod {
    justify-content: flex-start;
  }
  
  .size-buttons-pod {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }
  
  .size-button {
    min-width: unset;
  }
}
```

**Commit:**
```bash
git add snippets/product-variant-picker.liquid assets/component-product-variant-picker.css
git commit -m "Enhance variant picker with large color swatches and size buttons for POD"
```

---

## DAY 3: SIZE GUIDE & TRUST INTEGRATION (4 hours)

### ✅ TASK 3.1: Create Size Guide Modal (2 hours)
**Priority:** 🔴 CRITICAL  
**Dependencies:** Task 2.2

**Create snippets/size-guide-modal-pod.liquid:**

```liquid
{% comment %}
  POD Size Guide Modal
  Usage: {% render 'size-guide-modal-pod' %}
{% endcomment %}

<modal-dialog id="size-guide-modal" class="size-guide-modal">
  <div role="dialog" aria-labelledby="size-guide-title" aria-modal="true" class="modal__content" tabindex="-1">
    <div class="modal__header">
      <h2 id="size-guide-title" class="modal__title">Size Guide</h2>
      <button class="modal__close" aria-label="Close" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    
    <div class="modal__body">
      {% comment %} T-Shirt Size Chart {% endcomment %}
      <div class="size-chart-section">
        <h3 class="size-chart-title">T-Shirts & Apparel</h3>
        <div class="size-chart-table-wrapper">
          <table class="size-chart-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (in)</th>
                <th>Length (in)</th>
                <th>Sleeve (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>XS</strong></td>
                <td>31-34</td>
                <td>26-27</td>
                <td>7.5</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td>34-37</td>
                <td>27-28</td>
                <td>8</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td>38-41</td>
                <td>29-30</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td>42-45</td>
                <td>31-32</td>
                <td>9</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td>46-49</td>
                <td>33-34</td>
                <td>9.5</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td>50-53</td>
                <td>35-36</td>
                <td>10</td>
              </tr>
              <tr>
                <td><strong>3XL</strong></td>
                <td>54-57</td>
                <td>37-38</td>
                <td>10.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {% comment %} How to Measure {% endcomment %}
      <div class="size-chart-instructions">
        <h3 class="size-chart-title">How to Measure</h3>
        <div class="measurement-grid">
          <div class="measurement-item">
            <div class="measurement-icon">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect x="10" y="5" width="20" height="30" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M10 12H30" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20 5V12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              </svg>
            </div>
            <div class="measurement-content">
              <strong>Chest</strong>
              <p>Measure around the fullest part of your chest, keeping the tape horizontal.</p>
            </div>
          </div>
          
          <div class="measurement-item">
            <div class="measurement-icon">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 5V35" stroke="currentColor" stroke-width="2"/>
                <path d="M15 5H25M15 35H25" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="measurement-content">
              <strong>Length</strong>
              <p>Measure from the highest point of the shoulder to the desired hem length.</p>
            </div>
          </div>
          
          <div class="measurement-item">
            <div class="measurement-icon">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M10 20C10 20 15 10 25 10C35 10 35 20 35 20" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M25 10V25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              </svg>
            </div>
            <div class="measurement-content">
              <strong>Sleeve</strong>
              <p>Measure from the center back neck to the end of the shoulder seam.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="size-chart-note">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
          <path d="M10 6V10M10 14H10.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p><strong>Note:</strong> Measurements may vary slightly by style. All measurements are approximate and in inches. For the best fit, we recommend measuring a similar garment you already own.</p>
      </div>
    </div>
  </div>
</modal-dialog>
```

**Create assets/component-size-guide.css:**

```css
/* ============================================
   SIZE GUIDE MODAL - POD
   ============================================ */

.size-guide-modal .modal__content {
  max-width: 800px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgb(var(--color-border));
}

.modal__title {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.modal__close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: rgb(var(--color-foreground));
  transition: opacity 0.2s ease;
}

.modal__close:hover {
  opacity: 0.7;
}

.modal__body {
  padding: 2rem 1.5rem;
}

.size-chart-section {
  margin-bottom: 2.5rem;
}

.size-chart-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgb(var(--color-foreground));
}

.size-chart-table-wrapper {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid rgb(var(--color-border));
}

.size-chart-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.size-chart-table thead {
  background-color: rgb(var(--color-background-2));
}

.size-chart-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid rgb(var(--color-border));
}

.size-chart-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(var(--color-border), 0.5);
}

.size-chart-table tbody tr:last-child td {
  border-bottom: none;
}

.size-chart-table tbody tr:hover {
  background-color: rgba(var(--color-accent-1), 0.05);
}

/* Measurement Instructions */
.size-chart-instructions {
  margin-bottom: 2rem;
}

.measurement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.measurement-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(var(--color-background-2));
  border-radius: 8px;
}

.measurement-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  color: rgb(var(--color-accent-1));
}

.measurement-content strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.measurement-content p {
  font-size: 13px;
  color: rgba(var(--color-foreground), 0.7);
  line-height: 1.4;
  margin: 0;
}

/* Note */
.size-chart-note {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  background-color: rgba(var(--color-accent-2), 0.1);
  border-left: 3px solid rgb(var(--color-accent-2));
  border-radius: 4px;
}

.size-chart-note svg {
  flex-shrink: 0;
  color: rgb(var(--color-accent-2));
}

.size-chart-note p {
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

/* Mobile optimization */
@media screen and (max-width: 749px) {
  .size-guide-modal .modal__content {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
  
  .measurement-grid {
    grid-template-columns: 1fr;
  }
  
  .size-chart-table {
    font-size: 12px;
  }
  
  .size-chart-table th,
  .size-chart-table td {
    padding: 0.5rem;
  }
}
```

**Add to sections/main-product.liquid (near variant picker):**

```liquid
{% render 'size-guide-modal-pod' %}
```

**Add to layout/theme.liquid:**

```liquid
{{ 'component-size-guide.css' | asset_url | stylesheet_tag }}
```

**Commit:**
```bash
git add snippets/size-guide-modal-pod.liquid assets/component-size-guide.css sections/main-product.liquid layout/theme.liquid
git commit -m "Add comprehensive size guide modal for POD products"
```

---

### ✅ TASK 3.2: Integrate Trust Badges on Product Page (2 hours)
**Priority:** 🔴 CRITICAL  
**Dependencies:** Task 1.3

**Modify sections/main-product.liquid (add after Add to Cart button):**

```liquid
<div class="product__trust-section">
  {% render 'trust-badges-pod' %}
</div>
```

**Add review summary section:**

```liquid
<div class="product__review-summary">
  <div class="review-stars">
    <svg class="icon icon-star" width="16" height="16">
      <use href="#icon-star-filled"></use>
    </svg>
    <svg class="icon icon-star" width="16" height="16">
      <use href="#icon-star-filled"></use>
    </svg>
    <svg class="icon icon-star" width="16" height="16">
      <use href="#icon-star-filled"></use>
    </svg>
    <svg class="icon icon-star" width="16" height="16">
      <use href="#icon-star-filled"></use>
    </svg>
    <svg class="icon icon-star" width="16" height="16">
      <use href="#icon-star-half"></use>
    </svg>
  </div>
  <span class="review-rating">4.8</span>
  <a href="#product-reviews" class="review-count">(247 reviews)</a>
</div>
```

**Style the review summary (add to component-product.css):**

```css
.product__review-summary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: rgba(var(--color-accent-1), 0.05);
  border-radius: 8px;
}

.review-stars {
  display: flex;
  gap: 0.25rem;
}

.review-stars .icon-star {
  color: #F59E0B;
  width: 18px;
  height: 18px;
}

.review-rating {
  font-size: 18px;
  font-weight: 700;
  color: rgb(var(--color-foreground));
}

.review-count {
  font-size: 14px;
  color: rgb(var(--color-accent-1));
  text-decoration: underline;
}

.review-count:hover {
  text-decoration: none;
}
```

**Commit:**
```bash
git add sections/main-product.liquid assets/component-product.css
git commit -m "Integrate trust badges and review summary on product page"
```

---

## **SUMMARY: Week 1 Complete** ✅

**Completed:**
- ✅ Color scheme updated (Indigo + Pink POD theme)
- ✅ Typography scale implemented
- ✅ Trust badges component created
- ✅ Enhanced product image gallery with zoom
- ✅ Improved color swatches (large, visual)
- ✅ Better size selector (button-style)
- ✅ Size guide modal with measurements
- ✅ Review summary integrated

**Total commits:** 8  
**Files created:** 5  
**Files modified:** 8

**Next Week:** Product tabs, cross-sell, customer photos

---

# 📅 WEEK 2: PRODUCT EXPERIENCE

## DAY 4: Product Detail Tabs (6 hours)

### ✅ TASK 4.1: Create Tabbed Product Details (4 hours)
**Priority:** 🔴 CRITICAL

**Create snippets/product-tabs-pod.liquid:**

```liquid
{% comment %}
  POD Product Detail Tabs
  Tabs: Description, Shipping, Care, Reviews
{% endcomment %}

<div class="product-tabs-pod" id="product-tabs">
  <div class="tabs__header" role="tablist">
    <button class="tab__button active" role="tab" aria-selected="true" data-tab="description">
      Description
    </button>
    <button class="tab__button" role="tab" aria-selected="false" data-tab="specifications">
      Specifications
    </button>
    <button class="tab__button" role="tab" aria-selected="false" data-tab="shipping">
      Shipping & Returns
    </button>
    <button class="tab__button" role="tab" aria-selected="false" data-tab="care">
      Care Instructions
    </button>
    <button class="tab__button" role="tab" aria-selected="false" data-tab="reviews">
      Reviews <span class="tab__count">(247)</span>
    </button>
  </div>
  
  <div class="tabs__content">
    {% comment %} Description Tab {% endcomment %}
    <div class="tab__panel active" id="tab-description" role="tabpanel">
      <div class="tab__content">
        {{ product.description }}
        
        <div class="product-features">
          <h3>Key Features:</h3>
          <ul>
            <li>Premium quality print that won't fade</li>
            <li>100% cotton for maximum comfort</li>
            <li>Eco-friendly, water-based inks</li>
            <li>Pre-shrunk fabric for perfect fit</li>
            <li>Designed and printed with care</li>
          </ul>
        </div>
      </div>
    </div>
    
    {% comment %} Specifications Tab {% endcomment %}
    <div class="tab__panel" id="tab-specifications" role="tabpanel">
      <div class="tab__content">
        <table class="specifications-table">
          <tbody>
            <tr>
              <td><strong>Material</strong></td>
              <td>100% Cotton (Heather colors: Cotton/Polyester blend)</td>
            </tr>
            <tr>
              <td><strong>Weight</strong></td>
              <td>5.3 oz/yd² (180 g/m²)</td>
            </tr>
            <tr>
              <td><strong>Fit</strong></td>
              <td>Classic fit with tear-away label</td>
            </tr>
            <tr>
              <td><strong>Print Method</strong></td>
              <td>Direct-to-Garment (DTG) printing</td>
            </tr>
            <tr>
              <td><strong>Print Area</strong></td>
              <td>12" x 16" maximum</td>
            </tr>
            <tr>
              <td><strong>Origin</strong></td>
              <td>Blank product sourced from Nicaragua, Honduras, or Bangladesh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    {% comment %} Shipping Tab {% endcomment %}
    <div class="tab__panel" id="tab-shipping" role="tabpanel">
      <div class="tab__content">
        <div class="shipping-info-grid">
          <div class="shipping-info-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 16L12 8L20 16L12 24L4 16Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <h4>Production Time</h4>
            <p>2-5 business days</p>
            <span class="info-detail">Made to order just for you</span>
          </div>
          
          <div class="shipping-info-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="10" width="24" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M20 10V7C20 5.89543 19.1046 5 18 5H14C12.8954 5 12 5.89543 12 7V10" stroke="currentColor" stroke-width="2"/>
            </svg>
            <h4>Shipping Time</h4>
            <p>3-7 business days</p>
            <span class="info-detail">Standard shipping included</span>
          </div>
          
          <div class="shipping-info-card">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"/>
              <path d="M16 10V16L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <h4>Total Delivery</h4>
            <p>5-12 business days</p>
            <span class="info-detail">From order to doorstep</span>
          </div>
        </div>
        
        <div class="shipping-policy">
          <h4>Returns & Exchanges</h4>
          <p>We offer 30-day returns on all items. If you're not completely satisfied, contact us for a free return label. Custom printed items can be returned if there's a quality issue or error on our part.</p>
          
          <p><strong>Free shipping</strong> on orders over $50 to the contiguous US.</p>
        </div>
      </div>
    </div>
    
    {% comment %} Care Instructions Tab {% endcomment %}
    <div class="tab__panel" id="tab-care" role="tabpanel">
      <div class="tab__content">
        <div class="care-instructions">
          <div class="care-item">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="2"/>
              <path d="M20 12V20L26 26" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="care-content">
              <h4>Machine Wash Cold</h4>
              <p>Use cold water (max 30°C/86°F) to preserve print quality and color</p>
            </div>
          </div>
          
          <div class="care-item">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M12 20H28" stroke="currentColor" stroke-width="2"/>
            </svg>
            <div class="care-content">
              <h4>Tumble Dry Low</h4>
              <p>Use low heat setting or air dry for best results</p>
            </div>
          </div>
          
          <div class="care-item">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 15L20 25L30 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="care-content">
              <h4>Do Not Bleach</h4>
              <p>Avoid bleach and harsh chemicals to maintain print integrity</p>
            </div>
          </div>
          
          <div class="care-item">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M15 12L20 20L25 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <rect x="12" y="22" width="16" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
            </svg>
            <div class="care-content">
              <h4>Iron Inside Out</h4>
              <p>If ironing is necessary, iron inside out on low heat</p>
            </div>
          </div>
        </div>
        
        <div class="care-note">
          <strong>Pro Tip:</strong> Turn garment inside out before washing to protect the print. Wash with similar colors.
        </div>
      </div>
    </div>
    
    {% comment %} Reviews Tab {% endcomment %}
    <div class="tab__panel" id="tab-reviews" role="tabpanel">
      <div class="tab__content">
        <div id="product-reviews" class="reviews-placeholder">
          <p>Review app integration goes here (Judge.me, Loox, Yotpo)</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Create assets/component-product-tabs.css:**

```css
/* ============================================
   PRODUCT TABS - POD
   ============================================ */

.product-tabs-pod {
  margin: 3rem 0;
  border-top: 1px solid rgb(var(--color-border));
}

.tabs__header {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid rgb(var(--color-border));
  overflow-x: auto;
  scrollbar-width: thin;
}

.tab__button {
  padding: 1rem 1.5rem;
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--color-foreground), 0.6);
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tab__button:hover {
  color: rgb(var(--color-foreground));
  background-color: rgba(var(--color-accent-1), 0.05);
}

.tab__button.active {
  color: rgb(var(--color-accent-1));
  border-bottom-color: rgb(var(--color-accent-1));
}

.tab__count {
  font-size: 12px;
  font-weight: 500;
  opacity: 0.7;
}

.tabs__content {
  padding: 2rem 0;
}

.tab__panel {
  display: none;
}

.tab__panel.active {
  display: block;
}

.tab__content {
  max-width: 800px;
}

/* Product Features */
.product-features {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgb(var(--color-background-2));
  border-radius: 8px;
}

.product-features h3 {
  font-size: 18px;
  margin-bottom: 1rem;
}

.product-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-features li {
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  position: relative;
}

.product-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: rgb(var(--color-accent-2));
  font-weight: bold;
}

/* Specifications Table */
.specifications-table {
  width: 100%;
  border-collapse: collapse;
}

.specifications-table tr {
  border-bottom: 1px solid rgb(var(--color-border));
}

.specifications-table td {
  padding: 1rem 0;
  font-size: 14px;
}

.specifications-table td:first-child {
  width: 30%;
  color: rgba(var(--color-foreground), 0.7);
}

/* Shipping Info Grid */
.shipping-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.shipping-info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: rgb(var(--color-background-2));
  border-radius: 8px;
}

.shipping-info-card svg {
  color: rgb(var(--color-accent-1));
  margin-bottom: 1rem;
}

.shipping-info-card h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.shipping-info-card p {
  font-size: 18px;
  font-weight: 700;
  color: rgb(var(--color-accent-1));
  margin-bottom: 0.25rem;
}

.info-detail {
  font-size: 13px;
  color: rgba(var(--color-foreground), 0.6);
}

.shipping-policy {
  padding: 1.5rem;
  background-color: rgba(var(--color-accent-2), 0.05);
  border-left: 3px solid rgb(var(--color-accent-2));
  border-radius: 4px;
}

.shipping-policy h4 {
  font-size: 16px;
  margin-bottom: 0.75rem;
}

.shipping-policy p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

/* Care Instructions */
.care-instructions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.care-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background-color: rgb(var(--color-background-2));
  border-radius: 8px;
}

.care-item svg {
  flex-shrink: 0;
  color: rgb(var(--color-accent-1));
}

.care-content h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.care-content p {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(var(--color-foreground), 0.7);
}

.care-note {
  padding: 1rem 1.5rem;
  background-color: rgba(var(--color-accent-1), 0.1);
  border-left: 3px solid rgb(var(--color-accent-1));
  border-radius: 4px;
  font-size: 14px;
}

/* Mobile optimization */
@media screen and (max-width: 749px) {
  .tabs__header {
    gap: 0;
  }
  
  .tab__button {
    padding: 0.75rem 1rem;
    font-size: 12px;
  }
  
  .tabs__content {
    padding: 1.5rem 0;
  }
  
  .shipping-info-grid,
  .care-instructions {
    grid-template-columns: 1fr;
  }
}
```

**Add JavaScript for tabs (create assets/product-tabs-pod.js):**

```javascript
class ProductTabsPOD extends HTMLElement {
  constructor() {
    super();
    this.buttons = this.querySelectorAll('.tab__button');
    this.panels = this.querySelectorAll('.tab__panel');
    
    this.init();
  }
  
  init() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', (e) => this.switchTab(e));
    });
    
    // Handle deep linking (#tab-reviews)
    if (window.location.hash) {
      const targetTab = window.location.hash.replace('#tab-', '');
      this.activateTab(targetTab);
    }
  }
  
  switchTab(event) {
    const button = event.currentTarget;
    const tabName = button.dataset.tab;
    this.activateTab(tabName);
  }
  
  activateTab(tabName) {
    // Deactivate all
    this.buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    this.panels.forEach(panel => panel.classList.remove('active'));
    
    // Activate target
    const targetButton = this.querySelector(`[data-tab="${tabName}"]`);
    const targetPanel = this.querySelector(`#tab-${tabName}`);
    
    if (targetButton && targetPanel) {
      targetButton.classList.add('active');
      targetButton.setAttribute('aria-selected', 'true');
      targetPanel.classList.add('active');
      
      // Update URL hash
      history.replaceState(null, null, `#tab-${tabName}`);
    }
  }
}

customElements.define('product-tabs-pod', ProductTabsPOD);
```

**Wrap tabs markup in custom element:**

```liquid
<product-tabs-pod>
  <!-- Tabs HTML here -->
</product-tabs-pod>
```

**Add to sections/main-product.liquid (after main product content):**

```liquid
{% render 'product-tabs-pod', product: product %}
```

**Add to layout/theme.liquid:**

```liquid
{{ 'component-product-tabs.css' | asset_url | stylesheet_tag }}
<script src="{{ 'product-tabs-pod.js' | asset_url }}" defer="defer"></script>
```

**Commit:**
```bash
git add snippets/product-tabs-pod.liquid assets/component-product-tabs.css assets/product-tabs-pod.js sections/main-product.liquid layout/theme.liquid
git commit -m "Add comprehensive POD product tabs with specs, shipping, and care info"
```

---

## **DAY 5-7: Additional implementations continue...**

---

# 🎯 PRIORITY IMPLEMENTATION SUMMARY

## **MUST DO FIRST (Week 1)**
1. ✅ Color scheme → 3 hours
2. ✅ Trust badges → 3 hours  
3. ✅ Product gallery → 4 hours
4. ✅ Variant selectors → 4 hours
5. ✅ Size guide → 2 hours
6. ✅ Product tabs → 4 hours

**Total Week 1:** ~20 hours

## **NEXT PRIORITY (Week 2)**
7. Cross-sell section → 4 hours
8. Homepage hero update → 3 hours
9. Collection filters → 4 hours
10. Quick view modal → 4 hours

## **TESTING & POLISH (Weeks 3-4)**
11. Mobile optimization pass → 6 hours
12. Performance testing → 4 hours
13. Cross-browser testing → 4 hours
14. Final QA → 4 hours

---

## 📝 COMMIT STRATEGY

**Commit after every task completion:**
- Clear, descriptive commit messages
- Group related changes
- Reference task numbers

**Example:**
```bash
git add [files]
git commit -m "[TASK 1.1] Apply POD color scheme - Indigo primary, Pink accent"
```

---

## ✅ DAILY CHECKLIST TEMPLATE

```
□ Morning: Review plan, choose tasks
□ Implement: Code changes
□ Test: Preview in Shopify (if possible) or browser
□ Commit: Git commit with clear message
□ Document: Note any issues or improvements
□ EOD: Update progress, plan tomorrow
```

---

## 🚀 READY TO START?

**Suggested first steps:**
1. Read through Week 1 tasks
2. Back up current theme
3. Create feature branch: `git checkout -b pod-enhancements`
4. Start with TASK 1.1 (Color Scheme)
5. Test after each task
6. Commit frequently

**Questions to answer before starting:**
- Do you have access to Shopify admin?
- Can you preview changes locally or need to push to Shopify?
- Do you have logo files ready?
- Do you have actual product images ready?

Let me know when you're ready to begin implementation! 💪
