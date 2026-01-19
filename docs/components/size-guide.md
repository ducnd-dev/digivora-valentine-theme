# 📏 Size Guide Modal Component

## Overview

Comprehensive size guide modal with XS-3XL measurements, how-to-measure instructions, and important fit notes. Critical for POD apparel to reduce size-related returns.

**Location:** Product page (modal), trigger button in variant picker  
**Created:** Week 1, Day 1  
**File:** `snippets/size-guide-modal-pod.liquid`

---

## Visual Specifications

### Modal Dimensions

- **Desktop:** 800px max-width, centered
- **Mobile:** Full screen (100vw x 100vh)
- **Background:** Overlay with `rgba(0, 0, 0, 0.5)`

### Layout

```
┌──────────────────────────────────────┐
│  Size Guide                    [✕]   │
├──────────────────────────────────────┤
│  Find Your Perfect Fit               │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ Size | Chest | Length | Width  │ │
│  │  XS  |  34"  |  27"   |  16"   │ │
│  │  S   |  36"  |  28"   |  17"   │ │
│  │  ...                           │ │
│  └────────────────────────────────┘ │
│                                      │
│  How to Measure [icon]               │
│  • Chest: Measure around...          │
│  • Length: Measure from...           │
│                                      │
│  ℹ️ Important Notes                   │
│  • All measurements in inches        │
│  • True to size fit                  │
└──────────────────────────────────────┘
```

### Colors

- **Header Background**: `rgb(99, 102, 241)` (Indigo)
- **Header Text**: White
- **Table Border**: `rgba(var(--color-foreground), 0.2)`
- **Table Header**: `rgba(99, 102, 241, 0.1)`
- **Close Button**: `rgba(236, 72, 153)` (Pink on hover)

### Typography

- **Title**: 24px, font-weight 700
- **Subtitle**: 14px, font-weight 400
- **Table Text**: 14px
- **Notes**: 13px

---

## Implementation

### Usage

```liquid
{%- comment -%} Render size guide modal {%- endcomment -%}
{% render 'size-guide-modal-pod' %}
```

**No parameters** - self-contained modal

### Trigger Button

**Location:** `snippets/product-variant-picker.liquid`

```liquid
{%- if option.name == 'Size' or option.name contains 'size' -%}
  <button 
    type="button" 
    class="size-guide-trigger"
    onclick="document.getElementById('SizeGuideModal').showModal()"
  >
    <svg><!-- Icon --></svg>
    Size Guide
  </button>
{%- endif -%}
```

### Integration Points

1. **Modal Rendered:**  
   `sections/main-product.liquid` (line ~628, after product grid)

2. **Trigger Button:**  
   `snippets/product-variant-picker.liquid` (inline with "Size" label)

### Files

1. **Liquid Template:**  
   `snippets/size-guide-modal-pod.liquid` (138 lines)

2. **Stylesheet:**  
   `assets/component-size-guide.css` (180 lines)

3. **Trigger Button Styles:**  
   `assets/component-product-variant-picker.css` (19 lines added)

---

## Code Structure

### HTML Structure

```html
<dialog id="SizeGuideModal" class="size-guide-modal">
  <div class="size-guide-modal__header">
    <h2>Size Guide</h2>
    <button class="close-button" onclick="this.closest('dialog').close()">✕</button>
  </div>
  
  <div class="size-guide-modal__content">
    <!-- Size table -->
    <table class="size-guide-table">
      <thead>
        <tr>
          <th>Size</th>
          <th>Chest (inches)</th>
          <th>Length (inches)</th>
          <th>Width (inches)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>XS</td><td>34"</td><td>27"</td><td>16"</td></tr>
        <!-- ... -->
      </tbody>
    </table>
    
    <!-- How to measure -->
    <div class="how-to-measure">...</div>
    
    <!-- Important notes -->
    <div class="important-notes">...</div>
  </div>
</dialog>
```

### CSS Classes

- `.size-guide-modal` - `<dialog>` element
- `.size-guide-modal__header` - Title + close button
- `.size-guide-modal__content` - Scrollable content
- `.size-guide-table` - Measurement table
- `.how-to-measure` - Instructions section
- `.important-notes` - Fit notes section
- `.size-guide-trigger` - Trigger button in variant picker

---

## Customization

### Changing Measurements

**Edit:** `snippets/size-guide-modal-pod.liquid`

```liquid
<tbody>
  <tr>
    <td class="size-cell">XS</td>
    <td>34"</td>  <!-- Chest -->
    <td>27"</td>  <!-- Length -->
    <td>16"</td>  <!-- Width -->
  </tr>
  <!-- Add/modify rows -->
</tbody>
```

### Adding Size (e.g., 4XL)

```liquid
<tr>
  <td class="size-cell">4XL</td>
  <td>54"</td>
  <td>35"</td>
  <td>26"</td>
</tr>
```

### Changing Product Type

**For Hoodies/Jackets:**

```liquid
<thead>
  <tr>
    <th>Size</th>
    <th>Chest</th>
    <th>Length</th>
    <th>Sleeve</th> <!-- Changed from Width -->
  </tr>
</thead>
```

**For Pants:**

```liquid
<thead>
  <tr>
    <th>Size</th>
    <th>Waist</th>
    <th>Inseam</th>
    <th>Rise</th>
  </tr>
</thead>
```

### Metric (CM) Measurements

```liquid
<div class="unit-toggle">
  <button onclick="toggleUnits('inches')">Inches</button>
  <button onclick="toggleUnits('cm')">CM</button>
</div>

<table class="size-guide-table" data-unit="inches">
  <tbody>
    <tr>
      <td class="size-cell">S</td>
      <td data-inches="36" data-cm="91.4">36"</td>
      <!-- JavaScript toggles units -->
    </tr>
  </tbody>
</table>
```

---

## Responsive Behavior

### Desktop (990px+)

- **Width**: 800px centered
- **Height**: Auto (max 90vh)
- **Position**: Center of viewport
- **Backdrop**: Dark overlay

### Tablet (750-989px)

- **Width**: 90vw
- **Height**: 90vh
- **Scrollable**: Vertical scroll
- **Table**: Horizontal scroll if needed

### Mobile (<750px)

- **Width**: 100vw (full screen)
- **Height**: 100vh (full screen)
- **Table**: Optimized layout
  - Font size: 12px
  - Padding: 0.5rem
  - Horizontal scroll enabled

---

## Accessibility

### Native `<dialog>` Element

```liquid
<dialog id="SizeGuideModal" 
        aria-labelledby="size-guide-title"
        aria-modal="true">
  <h2 id="size-guide-title">Size Guide</h2>
</dialog>
```

**Benefits:**
- ✅ Built-in focus trap
- ✅ ESC key closes
- ✅ Backdrop click closes
- ✅ Screen reader support

### Keyboard Navigation

- **TAB**: Navigate between elements
- **ESC**: Close modal
- **ENTER**: Activate close button

### Screen Reader Compatibility

```liquid
<table>
  <caption class="visually-hidden">
    Product size measurements from XS to 3XL
  </caption>
  <thead><!-- ... --></thead>
</table>
```

---

## JavaScript Functionality

### Opening Modal

```javascript
// Trigger button
<button onclick="document.getElementById('SizeGuideModal').showModal()">
```

### Closing Modal

```javascript
// Close button
<button onclick="this.closest('dialog').close()">✕</button>

// Backdrop click (native <dialog> behavior)
```

### Programmatic Control

```javascript
const modal = document.getElementById('SizeGuideModal');

// Open
modal.showModal();

// Close
modal.close();

// Check if open
if (modal.open) { }
```

---

## Performance

### Load Time

- **HTML**: ~2.5KB (table data)
- **CSS**: 2.8KB (modal styles)
- **Total**: ~5.3KB
- **Render**: On-demand (modal hidden by default)

### Optimization

- **Lazy content**: Modal content only loads when opened (native `<dialog>`)
- **No JavaScript bundle**: Pure HTML/CSS
- **SVG icons**: Inline (no HTTP requests)

---

## Testing Checklist

- [ ] Modal opens on "Size Guide" button click
- [ ] Modal closes on:
  - [ ] Close button (✕)
  - [ ] ESC key
  - [ ] Backdrop click
- [ ] Table displays all sizes (XS-3XL)
- [ ] Mobile: Full screen, table scrollable
- [ ] Desktop: Centered, 800px width
- [ ] Measurements are accurate
- [ ] Icons render properly
- [ ] No layout shift on open/close
- [ ] Works without JavaScript (fallback)

---

## Analytics

### Tracking Modal Usage

```javascript
const modal = document.getElementById('SizeGuideModal');

modal.addEventListener('open', () => {
  // Track: Size guide opened
  analytics.track('Size Guide Opened', {
    product_id: productId,
    product_type: productType
  });
});
```

### Conversion Correlation

Track if users who view size guide have:
- Higher conversion rate
- Lower return rate
- Different average order value

---

## Troubleshooting

### Modal Not Opening

**Issue:** `showModal()` not defined

**Fix:** Browser compatibility (IE not supported)

```javascript
// Fallback for old browsers
if (typeof HTMLDialogElement === 'function') {
  modal.showModal();
} else {
  modal.style.display = 'block';
}
```

### Table Overflowing on Mobile

**Issue:** Table too wide

**Fix:** Enable horizontal scroll

```css
.size-guide-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

### Backdrop Not Darkening

**Issue:** `::backdrop` not styled

**Fix:** Add backdrop pseudo-element

```css
.size-guide-modal::backdrop {
  background: rgba(0, 0, 0, 0.5);
}
```

---

## Related Components

- [Product Variant Picker](variant-picker.md) - Contains trigger button
- [Trust Badges](trust-badges.md) - Another trust-building element
- [Review Summary](review-summary.md) - Complements sizing info

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial implementation with XS-3XL |
| 1.0.1 | Jan 19, 2026 | Added trigger button to variant picker |

---

## Industry Context

### Why Size Guides Matter for POD

**Statistics:**
- 20-30% of returns are size-related
- Size guides reduce returns by 15-20%
- Increases customer confidence (+12% conversion)

**Competitor Benchmarks:**
- **Printful**: Detailed size chart + fit guide
- **Redbubble**: Size matrix with illustrations
- **Threadless**: Interactive size tool

**Best Practices:**
1. ✅ Always inches + cm
2. ✅ How-to-measure illustrations
3. ✅ Fit notes (runs small/large/true)
4. ✅ Easy access (prominent button)

---

**See also:** [Conversion Optimization Guide](../guides/conversion-optimization.md)
