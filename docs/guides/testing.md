# 🧪 Testing Guide

## Overview

Comprehensive testing checklist for the Digivora POD theme. Ensure all components work correctly across devices, browsers, and scenarios before launch.

---

## Testing Categories

1. **Functional Testing** - Features work as expected
2. **Visual Testing** - Design displays correctly
3. **Responsive Testing** - Works on all screen sizes
4. **Browser Testing** - Compatible across browsers
5. **Performance Testing** - Fast load times
6. **Accessibility Testing** - Usable by everyone
7. **User Acceptance Testing** - Real-world scenarios

---

## 1. Functional Testing

### Homepage

- [ ] Hero section displays
  - [ ] Headline visible with gradient
  - [ ] Product images load (3 images)
  - [ ] CTAs link correctly (Shop All, How It Works)
  - [ ] Trust features show (4 features)
  - [ ] Social proof badge visible
  - [ ] Rating stars display

- [ ] Navigation works
  - [ ] All menu items clickable
  - [ ] Dropdowns expand (if applicable)
  - [ ] Search bar functional
  - [ ] Cart icon shows count

- [ ] Featured collections display
  - [ ] Products load in grid
  - [ ] Images display correctly
  - [ ] Prices shown

### Product Page

- [ ] **Basic Information**
  - [ ] Product title displays
  - [ ] Price shows correctly
  - [ ] Review summary visible (4.8★, 247 reviews)
  - [ ] Description renders (if present)

- [ ] **Variant Selection**
  - [ ] Color swatches display (48px size)
  - [ ] Size options show (if applicable)
  - [ ] Selected variant updates price
  - [ ] Out-of-stock variants disabled

- [ ] **Size Guide**
  - [ ] Button visible (if Size variant exists)
  - [ ] Modal opens on click
  - [ ] Measurements display correctly
  - [ ] Tab switching works (T-Shirt, Hoodie, Pants)
  - [ ] Conversion toggle works (In/Cm)
  - [ ] Close button works

- [ ] **Trust Badges**
  - [ ] 4 badges visible
  - [ ] Icons display
  - [ ] Text readable
  - [ ] Layout correct (4 columns desktop, 2 mobile)

- [ ] **Product Tabs**
  - [ ] 5 tabs clickable
  - [ ] Only one active at a time
  - [ ] Content switches correctly
  - [ ] Tabs: Description, Specs, Shipping, Care, Reviews
  - [ ] All content displays

- [ ] **Customer Photos**
  - [ ] 6 photos visible (desktop)
  - [ ] Hover shows overlay (rating + username)
  - [ ] Grid responsive (4 tablet, 3 mobile)
  - [ ] CTA visible ("Share with #Digivora")

- [ ] **Add to Cart**
  - [ ] Button enabled (if in stock)
  - [ ] Button disabled (if out of stock)
  - [ ] Clicking adds to cart
  - [ ] Success feedback shows (drawer/notification)
  - [ ] Cart count updates

- [ ] **Mobile Sticky ATC**
  - [ ] Hidden when product info visible
  - [ ] Shows when scrolling past product info
  - [ ] Product image displays
  - [ ] Price updates on variant change
  - [ ] Add to Cart button works

### Collection Page

- [ ] Products display in grid
- [ ] Product cards show:
  - [ ] Image
  - [ ] Title
  - [ ] Price
  - [ ] Quick view (if applicable)
- [ ] Filtering works (if enabled)
- [ ] Sorting works (price, newest, etc.)
- [ ] Pagination works

### Cart

- [ ] Cart displays items
- [ ] Quantity can be adjusted
- [ ] Items can be removed
- [ ] Subtotal calculates correctly
- [ ] Promo code field works (if applicable)
- [ ] Checkout button links to checkout

### Checkout

- [ ] Checkout page loads
- [ ] Customer can enter information
- [ ] Shipping methods display
- [ ] Payment methods work
- [ ] Test order completes (use Shopify test payment)

---

## 2. Visual Testing

### Desktop (1440px)

- [ ] **Layout**
  - [ ] Page width correct (max-width: 1440px)
  - [ ] Content centered
  - [ ] No horizontal scroll

- [ ] **Typography**
  - [ ] Headings readable
  - [ ] Body text 16-18px
  - [ ] Line height comfortable (1.5-1.7)

- [ ] **Colors**
  - [ ] POD color scheme applied
  - [ ] Indigo primary (#6366F1)
  - [ ] Pink secondary (#EC4899)
  - [ ] Green accent (#10B981)
  - [ ] Gradients display smoothly

- [ ] **Components**
  - [ ] Trust badges: 4 columns, even spacing
  - [ ] Product tabs: Horizontal navigation
  - [ ] Customer photos: 6-column grid
  - [ ] Size guide: Modal 800px wide

### Tablet (768px)

- [ ] **Layout**
  - [ ] Content responsive
  - [ ] Grids adjust (2-3 columns)

- [ ] **Components**
  - [ ] Trust badges: 2 columns
  - [ ] Product tabs: Scrollable navigation
  - [ ] Customer photos: 4 photos visible
  - [ ] Variant swatches: Wrap nicely

### Mobile (375px)

- [ ] **Layout**
  - [ ] Single column where appropriate
  - [ ] No horizontal scroll
  - [ ] Touch targets 44px minimum

- [ ] **Components**
  - [ ] Hero: Stacks vertically
  - [ ] Trust badges: 2 columns
  - [ ] Product tabs: Horizontal scroll
  - [ ] Customer photos: 3 photos
  - [ ] Sticky ATC: Full width, bottom
  - [ ] Size guide: Full-screen modal

---

## 3. Responsive Testing

### Breakpoints

Test at these exact widths:

- [ ] **1920px** (Large desktop)
- [ ] **1440px** (Desktop)
- [ ] **1024px** (Small desktop)
- [ ] **990px** (Tablet breakpoint)
- [ ] **768px** (Tablet)
- [ ] **750px** (Mobile breakpoint)
- [ ] **414px** (iPhone Pro Max)
- [ ] **375px** (iPhone standard)
- [ ] **360px** (Android standard)
- [ ] **320px** (Small phones)

### Critical Components

For each breakpoint:

- [ ] Navigation (hamburger on mobile?)
- [ ] Hero section (layout changes?)
- [ ] Product grid (column count?)
- [ ] Product page (components stack?)
- [ ] Footer (links stack?)

---

## 4. Browser Testing

### Desktop Browsers

- [ ] **Chrome** (latest)
  - [ ] All features work
  - [ ] Gradients display
  - [ ] Animations smooth
  - [ ] No console errors

- [ ] **Safari** (macOS)
  - [ ] Webkit-specific CSS works
  - [ ] Fonts display correctly
  - [ ] Sticky positioning works

- [ ] **Firefox** (latest)
  - [ ] All features work
  - [ ] CSS grid displays correctly
  - [ ] No layout issues

- [ ] **Edge** (latest)
  - [ ] All features work
  - [ ] Chromium-based compatibility

### Mobile Browsers

- [ ] **Safari iOS** (iPhone)
  - [ ] Sticky ATC works
  - [ ] Modals full-screen
  - [ ] Touch targets appropriate size
  - [ ] No iOS-specific bugs

- [ ] **Chrome Mobile** (Android)
  - [ ] All features work
  - [ ] Viewport correct
  - [ ] No Android-specific bugs

### Cross-Browser Issues to Check

- [ ] CSS Grid support
- [ ] Flexbox support
- [ ] CSS Variables (`:root`)
- [ ] `clamp()` function (typography)
- [ ] Backdrop filter (modals)
- [ ] Sticky positioning

---

## 5. Performance Testing

### PageSpeed Insights

Run test: https://pagespeed.web.dev/

**Desktop:**
- [ ] Score: 80+ (green)
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

**Mobile:**
- [ ] Score: 60+ (orange/green)
- [ ] LCP < 3s
- [ ] FID < 100ms
- [ ] CLS < 0.1

### Load Time Testing

Use browser DevTools Network tab:

- [ ] **Homepage**
  - [ ] Load time < 3s
  - [ ] Total size < 2MB

- [ ] **Product Page**
  - [ ] Load time < 3s
  - [ ] Total size < 3MB

- [ ] **Collection Page**
  - [ ] Load time < 3s
  - [ ] Total size < 2.5MB

### Image Optimization

- [ ] All images compressed
- [ ] WebP format where supported
- [ ] Lazy loading enabled
- [ ] Appropriate dimensions (no 5000px images for 300px slots)

### JavaScript Performance

- [ ] No blocking scripts
- [ ] Scripts deferred (`defer="defer"`)
- [ ] No excessive bundle sizes
- [ ] Web Components load quickly

---

## 6. Accessibility Testing

### Keyboard Navigation

- [ ] All interactive elements focusable (TAB key)
- [ ] Focus visible (outline/ring)
- [ ] Modals trappable (can't TAB outside)
- [ ] Close buttons accessible (ESC key)
- [ ] Skip to content link (for screen readers)

### Screen Reader Testing

Test with:
- **macOS**: VoiceOver (Cmd+F5)
- **Windows**: NVDA (free)
- **Chrome**: ChromeVox extension

Check:
- [ ] All images have alt text
- [ ] Buttons have aria-labels
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Forms have labels
- [ ] Error messages announced

### Color Contrast

Use WebAIM Contrast Checker:

- [ ] Text vs background: 4.5:1 minimum
- [ ] Large text (18px+): 3:1 minimum
- [ ] Buttons: 4.5:1
- [ ] Links: Distinguishable from text

### ARIA Attributes

- [ ] Modals have `role="dialog"` and `aria-modal="true"`
- [ ] Buttons have `aria-label` (if no visible text)
- [ ] Tabs have `role="tablist"` and `aria-selected`
- [ ] Hidden content has `aria-hidden="true"`

---

## 7. User Acceptance Testing

### Real-World Scenarios

#### Scenario 1: New Customer Browses and Buys

1. **Lands on homepage**
   - [ ] Understands what store sells (POD products)
   - [ ] Sees trust signals (badges, reviews)
   - [ ] Clicks "Shop All"

2. **Browses collection**
   - [ ] Finds products interesting
   - [ ] Clicks on a product

3. **Views product page**
   - [ ] Sees clear images
   - [ ] Reads description in Product Tabs
   - [ ] Checks size guide (for sizing)
   - [ ] Reads reviews
   - [ ] Sees trust badges (30-day returns, etc.)

4. **Adds to cart**
   - [ ] Selects color
   - [ ] Selects size
   - [ ] Clicks Add to Cart
   - [ ] Sees confirmation (drawer/notification)

5. **Checks out**
   - [ ] Reviews cart
   - [ ] Proceeds to checkout
   - [ ] Completes purchase

**Questions:**
- Was process smooth?
- Any confusing elements?
- Any missing information?

#### Scenario 2: Mobile Shopper

1. **Opens site on phone**
   - [ ] Site loads quickly
   - [ ] Layout looks good
   - [ ] Can navigate easily

2. **Finds product**
   - [ ] Uses search or browses
   - [ ] Product images load

3. **Checks size**
   - [ ] Opens size guide (full-screen)
   - [ ] Finds correct size
   - [ ] Closes modal

4. **Scrolls page**
   - [ ] Sticky ATC appears
   - [ ] Clicks Sticky ATC
   - [ ] Product added

5. **Completes checkout**
   - [ ] Mobile checkout works
   - [ ] Payment successful

#### Scenario 3: Returning Customer

1. **Checks new arrivals**
   - [ ] Navigation works
   - [ ] Finds new products

2. **Reads customer photos**
   - [ ] Sees real customer photos
   - [ ] Builds trust
   - [ ] Decides to buy

3. **Quick checkout**
   - [ ] Saved payment info works
   - [ ] Faster checkout

---

## 8. Edge Case Testing

### Unusual Scenarios

- [ ] **Product with 20+ variants**
  - [ ] Variant selector doesn't break
  - [ ] Size guide still accessible

- [ ] **Very long product title**
  - [ ] Doesn't overflow container
  - [ ] Wraps appropriately

- [ ] **Product with no images**
  - [ ] Placeholder shows
  - [ ] No broken layout

- [ ] **Out of stock product**
  - [ ] All variants disabled
  - [ ] "Out of Stock" button
  - [ ] Notify me option (if enabled)

- [ ] **Product with no description**
  - [ ] Product tabs still work
  - [ ] Description tab shows placeholder

- [ ] **Slow internet connection**
  - [ ] Loading spinners show
  - [ ] Lazy loading works
  - [ ] Site doesn't break

---

## Testing Tools

### Automated Testing

- **Lighthouse** (Chrome DevTools)
  - Performance
  - Accessibility
  - Best Practices
  - SEO

- **WAVE** (Browser extension)
  - Accessibility errors
  - Contrast issues
  - ARIA validation

- **axe DevTools** (Chrome extension)
  - Accessibility testing
  - Detailed reports

### Manual Testing Tools

- **Responsive Design Mode** (Browser DevTools)
  - Test different screen sizes
  - Simulate devices

- **Network Throttling** (Chrome DevTools)
  - Simulate slow 3G
  - Test load performance

- **Screen Readers**
  - VoiceOver (Mac)
  - NVDA (Windows)
  - ChromeVox (Chrome)

---

## Bug Tracking

### When You Find a Bug

1. **Document**:
   - What happened
   - Expected behavior
   - Steps to reproduce
   - Screenshot/video
   - Device/browser

2. **Prioritize**:
   - **P0**: Breaks core functionality (can't checkout)
   - **P1**: Major issue (component doesn't show)
   - **P2**: Minor issue (styling off)
   - **P3**: Enhancement (nice to have)

3. **Fix**:
   - P0: Fix immediately
   - P1: Fix before launch
   - P2: Fix in Week 2
   - P3: Backlog

---

## Pre-Launch Testing Checklist

Final check before going live:

### Critical (Must Pass)

- [ ] Homepage loads without errors
- [ ] Product page displays all components
- [ ] Add to cart works
- [ ] Checkout completes (test order)
- [ ] Mobile site functional
- [ ] No console errors
- [ ] PageSpeed: 50+ mobile, 70+ desktop

### Important (Should Pass)

- [ ] All 5 product tabs work
- [ ] Size guide opens
- [ ] Sticky ATC shows on mobile
- [ ] Customer photos display
- [ ] Trust badges visible
- [ ] Review summary shows
- [ ] All browsers tested

### Nice to Have (Can Fix Post-Launch)

- [ ] Minor styling adjustments
- [ ] Optional features
- [ ] Content updates

---

## Post-Launch Monitoring

### Week 1

- [ ] Check error logs daily (Shopify admin)
- [ ] Monitor Google Analytics (traffic, bounce rate)
- [ ] Review customer feedback
- [ ] Test checkout daily
- [ ] Check mobile traffic (50%+ of users)

### Month 1

- [ ] Review conversion rate vs. previous theme
- [ ] Analyze component engagement
- [ ] Check PageSpeed weekly
- [ ] Read customer reviews
- [ ] Make data-driven improvements

---

## Testing Best Practices

1. **Test early, test often** - Don't wait until launch
2. **Test on real devices** - Emulators aren't enough
3. **Get user feedback** - Ask real customers to test
4. **Document everything** - Keep testing log
5. **Automate where possible** - Use Lighthouse, WAVE
6. **Test under load** - Simulate traffic spikes
7. **Test accessibility** - 15% of users have disabilities

---

**Related:** [Deployment Guide](deployment.md) • [Troubleshooting](troubleshooting.md) • [Performance Optimization](performance.md)
