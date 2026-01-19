# 📑 Product Tabs Component

## Overview

5-tab content system: Description, Specifications, Shipping & Returns, Care Instructions, and Reviews. Information-rich product pages following POD best practices.

**Location:** Product page, below buy buttons  
**Created:** Week 1, Day 1  
**File:** `snippets/product-tabs-pod.liquid`

---

## Tab Structure

### 1. Description Tab
- Product overview
- Custom printed design
- Made-to-order messaging
- Key features bullets

### 2. Specifications Tab
- Material (100% Cotton)
- Print method (DTG/Sublimation)
- Print quality (4800 DPI)
- Fit, weight, origin
- Sustainability info

### 3. Shipping & Returns Tab
- Processing time: 2-4 days
- Shipping estimates
- Return policy: 30 days
- Exchange information
- Quality guarantee

### 4. Care Instructions Tab
- Washing (cold, inside out)
- Drying (low heat)
- Ironing (avoid print)
- What to avoid
- Pro tips for longevity

### 5. Reviews Tab
- Rating summary (4.8★)
- Rating breakdown (5★: 82%, 4★: 12%, etc.)
- Sample reviews (3 reviews)
- Load more button

---

## Implementation

### Usage

```liquid
{% render 'product-tabs-pod', product: product, description: product.description %}
```

**Parameters:**
- `product` - Product object
- `description` - Product description HTML

### Tab Switching

```javascript
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.dataset.tab;
    
    // Remove active from all
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Add active to clicked
    button.classList.add('active');
    document.getElementById('tab-' + targetTab).classList.add('active');
  });
});
```

---

## Files

1. **Liquid Template:** `snippets/product-tabs-pod.liquid` (241 lines)
2. **Stylesheet:** `assets/component-product-tabs.css` (414 lines)
3. **JavaScript:** Inline in snippet (tab switching)

---

## Customization

### Adding New Tab

```liquid
<!-- In navigation -->
<button class="tab-button" data-tab="custom">Custom Tab</button>

<!-- In content -->
<div class="tab-panel" id="tab-custom">
  <p>Your custom content here</p>
</div>
```

Update JavaScript to handle new tab.

### Editing Specifications

```liquid
<div class="spec-item">
  <strong>Your Label:</strong>
  <span>Your Value</span>
</div>
```

### Dynamic Description

```liquid
<div class="tab-description">
  {%- if product.description != blank -%}
    {{ product.description }}
  {%- else -%}
    <p>Default description...</p>
  {%- endif -%}
</div>
```

---

## Responsive Behavior

### Desktop (990px+)
- Horizontal tab navigation
- All tabs visible

### Tablet (750-989px)
- Scrollable tab navigation
- 2-column spec grid

### Mobile (<750px)
- Scrollable tabs (horizontal scroll)
- 1-column layouts
- Compact padding

---

## Testing Checklist

- [ ] All 5 tabs clickable
- [ ] Only one tab active at a time
- [ ] Tab navigation scrollable on mobile
- [ ] Content switches correctly
- [ ] Deep link to reviews (#product-reviews)
- [ ] Spec grid responsive
- [ ] Care icons display

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 19, 2026 | Initial 5-tab system |

---

**Related:** [Review Summary](review-summary.md) • [Size Guide](size-guide.md)
