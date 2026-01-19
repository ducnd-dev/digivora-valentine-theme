# 🧪 Digivora POD Theme - Testing Guide

**Project**: Digivora Valentine Theme  
**Version**: 1.2.0 POD Enhanced  
**Last Updated**: January 19, 2026

---

## 📋 TABLE OF CONTENTS

1. [Testing Overview](#testing-overview)
2. [Component Testing](#component-testing)
3. [User Flow Testing](#user-flow-testing)
4. [Performance Testing](#performance-testing)
5. [Mobile Testing](#mobile-testing)
6. [Browser Compatibility](#browser-compatibility)
7. [Accessibility Testing](#accessibility-testing)
8. [Bug Reporting](#bug-reporting)

---

## 🎯 TESTING OVERVIEW

### Testing Philosophy
- **User-Centric**: Test from customer perspective
- **Device-Agnostic**: Works on all devices and browsers
- **Performance-First**: Fast, smooth, responsive
- **Accessible**: WCAG 2.1 AA compliant

### Testing Environments
1. **Development**: Local/Staging Shopify store
2. **Staging**: Preview theme on test store
3. **Production**: Live store (post-launch monitoring)

---

## 🧩 COMPONENT TESTING

### Week 1 Components

#### ✅ Trust Badges (`trust-badges-pod.liquid`)
**Test Cases**:
1. [ ] All 4 badges display correctly
2. [ ] Icons render properly
3. [ ] Text is readable on all backgrounds
4. [ ] Responsive: stacks on mobile
5. [ ] Spacing consistent

**Test Data**: Visit any product page

**Expected Result**: 4 trust badges (Secure Checkout, Free Shipping, 100% Satisfaction, Easy Returns) display in a row on desktop, 2x2 grid on mobile.

---

#### ✅ Size Guide Modal (`size-guide-modal-pod.liquid`)
**Test Cases**:
1. [ ] Modal opens on "Size Guide" button click
2. [ ] Size chart table displays correctly
3. [ ] All measurements accurate
4. [ ] Close button works
5. [ ] Escape key closes modal
6. [ ] Click outside closes modal
7. [ ] Mobile: full-screen modal
8. [ ] Scroll works inside modal

**Test Steps**:
1. Go to any product page
2. Find variant picker section
3. Click "Size Guide" button
4. Verify table loads
5. Test close methods (X, ESC, outside click)
6. Test on mobile device

---

#### ✅ Product Tabs (`product-tabs-pod.liquid`)
**Test Cases**:
1. [ ] All 3 tabs clickable
2. [ ] Content switches correctly
3. [ ] Active tab highlighted
4. [ ] Timeline animations work (Shipping tab)
5. [ ] Care icons display properly
6. [ ] Mobile: tabs scroll horizontally if needed

**Test Steps**:
1. Go to product page
2. Scroll to tabs section
3. Click each tab: Details, Shipping, Care
4. Verify content changes
5. Check animations and icons

---

#### ✅ Review Summary (`review-summary-pod.liquid`)
**Test Cases**:
1. [ ] Star rating displays
2. [ ] Review count shows
3. [ ] Clickable to reviews section
4. [ ] Responsive sizing

---

#### ✅ Customer Photos (`customer-photos-pod.liquid`)
**Test Cases**:
1. [ ] Grid displays 6 photos
2. [ ] Hover overlay shows rating and username
3. [ ] Photos load properly (lazy load)
4. [ ] Responsive: 3→2→1 columns
5. [ ] CTA button works

---

### Week 2 Components

#### ✅ Cross-Sell Products (`cross-sell-products-pod.liquid`)
**Test Cases**:
1. [ ] 6 products display
2. [ ] Grid responsive (6→4→3→2 columns)
3. [ ] Quick view buttons work
4. [ ] Sale badges show correctly
5. [ ] Prices display
6. [ ] Links go to correct products

**Test Data**: Products with similar tags/collection

---

#### ✅ Urgency Indicators (`urgency-indicators-pod.liquid`)
**Test Cases**:
1. [ ] Low stock warning appears (<10 units)
2. [ ] Live viewer count animates (2-15 viewers)
3. [ ] Recent purchase notifications appear
4. [ ] Timers update correctly
5. [ ] Location names randomize
6. [ ] Mobile: indicators stack vertically

**Test Steps**:
1. Go to product page
2. Wait 30 seconds to see purchase notification
3. Observer viewer count changes every 8-12 seconds
4. Check mobile layout

---

#### ✅ Product Zoom/Lightbox (`product-zoom-pod.liquid`)
**Test Cases**:
1. [ ] Zoom button appears on product images
2. [ ] Click opens lightbox modal
3. [ ] Zoom in/out buttons work
4. [ ] Pan/drag functionality works
5. [ ] Mouse wheel zoom works
6. [ ] Arrow keys navigate images
7. [ ] ESC closes modal
8. [ ] Thumbnail strip shows all images
9. [ ] Image counter displays (1/N)
10. [ ] Mobile: pinch-to-zoom works

**Test Steps**:
1. Go to product page
2. Hover over main image
3. Click zoom icon
4. Test all zoom controls
5. Navigate through images
6. Test on mobile (touch gestures)

---

#### ✅ Quick Add from Collection (`quick-add-pod.liquid`)
**Test Cases**:
1. [ ] Quick Add button on product cards
2. [ ] Modal opens with product info
3. [ ] Variant selection works (colors, sizes)
4. [ ] Quantity +/- buttons work
5. [ ] Price updates on variant change
6. [ ] Add to Cart succeeds
7. [ ] Success message shows
8. [ ] Modal auto-closes after success
9. [ ] Cart count updates
10. [ ] Error handling (out of stock)

**Test Steps**:
1. Go to collection page
2. Click "Quick Add" on a product
3. Select variant
4. Change quantity
5. Add to cart
6. Verify cart updates
7. Test with out-of-stock variant

---

#### ✅ Collection Filters Enhanced (`collection-filters-pod.liquid`)
**Test Cases**:
1. [ ] Active filters bar shows
2. [ ] Filter tags removable individually
3. [ ] "Clear All" removes all filters
4. [ ] Checkbox filters work
5. [ ] Price range inputs work
6. [ ] Sort options work
7. [ ] Auto-submit on change (debounced)
8. [ ] Mobile: filter drawer opens
9. [ ] Filter count badge shows on mobile
10. [ ] URL updates with filter params

---

### Week 3 Components

#### ✅ Gift Options (`gift-options-pod.liquid`)
**Test Cases**:
1. [ ] Gift wrapping checkbox toggles
2. [ ] Gift message field appears when checked
3. [ ] Character counter updates (0/200)
4. [ ] Personalization fields validate input
5. [ ] Special characters filtered out
6. [ ] Properties saved to cart
7. [ ] Gift wrapping price added (+$2.99)

**Test Steps**:
1. Go to product page
2. Check "Gift Wrapping"
3. Type gift message (test 200+ chars)
4. Fill personalization fields
5. Add to cart
6. View cart - verify properties show

---

#### ✅ Recently Viewed Products (`recently-viewed-pod.liquid`)
**Test Cases**:
1. [ ] Tracks product views (localStorage)
2. [ ] Shows up to 8 products
3. [ ] Filters out current product
4. [ ] "Clear History" button works
5. [ ] Persists across sessions
6. [ ] Responsive grid
7. [ ] Links to correct products

**Test Steps**:
1. Visit 5 different product pages
2. Return to any product page
3. Scroll down to "Recently Viewed"
4. Verify 4 products show (excluding current)
5. Click "Clear History"
6. Verify section disappears
7. Test in incognito (should be empty)

---

### Week 4 Components

#### ✅ Mobile Touch Enhancements (`mobile-touch-enhancements.js`)
**Test Cases** (Mobile Only):
1. [ ] Tap product image opens zoom
2. [ ] Touch targets min 44x44px
3. [ ] Swipe gestures work on gallery
4. [ ] Active state feedback on tap
5. [ ] Smooth scrolling enabled
6. [ ] No zoom on input focus
7. [ ] Sticky ATC shows on scroll

---

#### ✅ Lazy Load Images (`lazy-load-images-pod.liquid`)
**Test Cases**:
1. [ ] Images load as they scroll into view
2. [ ] Blur-up effect while loading
3. [ ] Critical images preload (hero, first 4 products)
4. [ ] Skeleton loader shows
5. [ ] Works on dynamic content (quick add)

**Test Steps**:
1. Open network tab (throttle to "Slow 3G")
2. Scroll collection page
3. Observe images load progressively
4. Check blur effect
5. Verify first 4 products load immediately

---

#### ✅ Mobile Bottom Navigation (`mobile-bottom-nav-pod.liquid`)
**Test Cases** (Mobile Only):
1. [ ] Nav bar fixed at bottom
2. [ ] 5 items: Home, Shop, Search, Account, Cart
3. [ ] Active state highlights current page
4. [ ] Cart count badge updates
5. [ ] Safe area insets respected (iOS notch)
6. [ ] Search button opens search
7. [ ] Cart button opens cart drawer

---

## 🛒 USER FLOW TESTING

### Flow 1: Browse → Add to Cart → Checkout
**User Story**: Customer finds a Valentine's t-shirt and buys it

**Steps**:
1. [ ] Land on homepage
2. [ ] See hero section with Valentine products
3. [ ] Click "Shop Valentine's Day"
4. [ ] Browse collection page
5. [ ] Use filters (size: M, color: Red)
6. [ ] Click product card
7. [ ] View product images (zoom)
8. [ ] Read product tabs (details, shipping)
9. [ ] Select variant (size M, red)
10. [ ] Check gift options (add gift wrapping)
11. [ ] Add to cart
12. [ ] View cart (verify gift wrapping)
13. [ ] Proceed to checkout
14. [ ] Complete purchase

**Expected Time**: 2-3 minutes  
**Success Criteria**: No errors, smooth experience

---

### Flow 2: Quick Add from Collection
**User Story**: Customer adds multiple items quickly

**Steps**:
1. [ ] Go to collection page
2. [ ] Click "Quick Add" on product 1
3. [ ] Select size in modal
4. [ ] Add to cart (modal closes)
5. [ ] Click "Quick Add" on product 2
6. [ ] Repeat
7. [ ] Open cart drawer
8. [ ] Verify both items present

**Expected Time**: 30 seconds  
**Success Criteria**: Fast, no page reloads

---

### Flow 3: Mobile Shopping Experience
**User Story**: Customer shops on iPhone

**Steps**:
1. [ ] Open site on mobile
2. [ ] Use bottom navigation
3. [ ] Tap search icon
4. [ ] Search for "couples t-shirt"
5. [ ] Filter results
6. [ ] View product
7. [ ] Pinch-to-zoom image
8. [ ] Swipe through images
9. [ ] Add to cart (sticky ATC)
10. [ ] Checkout

---

## ⚡ PERFORMANCE TESTING

### Lighthouse Audit
**Target Scores**:
- Performance: >80
- Accessibility: >90
- Best Practices: >90
- SEO: >90

**Run Test**:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Mobile" mode
4. Click "Analyze page load"
5. Review results

**Common Issues**:
- Large images: Compress and use WebP
- Render-blocking resources: Defer/async scripts
- Unused CSS: Remove or inline critical CSS

---

### WebPageTest
**Run Test**: https://www.webpagetest.org/

**Target Metrics**:
- First Contentful Paint: <2s
- Speed Index: <3s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Total Blocking Time: <300ms

---

### Image Performance
**Test**:
1. [ ] All product images <200KB
2. [ ] Hero images <300KB
3. [ ] Lazy loading works
4. [ ] WebP format used
5. [ ] Responsive images (srcset)

**Tools**:
- TinyPNG (compression)
- Squoosh (WebP conversion)
- ImageOptim (Mac optimization)

---

## 📱 MOBILE TESTING

### Device Matrix
| Device | OS | Screen Size | Test Status |
|--------|-----|-------------|-------------|
| iPhone 14 Pro | iOS 17 | 393x852 | [ ] |
| iPhone 13 | iOS 16 | 390x844 | [ ] |
| iPhone SE | iOS 15 | 375x667 | [ ] |
| Samsung Galaxy S23 | Android 13 | 360x800 | [ ] |
| iPad Pro 12.9" | iPadOS 17 | 1024x1366 | [ ] |
| iPad Mini | iPadOS 16 | 768x1024 | [ ] |

### Mobile-Specific Tests
1. [ ] Touch targets >44px
2. [ ] Bottom nav doesn't block content
3. [ ] Forms don't zoom on focus
4. [ ] Swipe gestures work
5. [ ] Pinch-to-zoom works
6. [ ] Landscape orientation works
7. [ ] Safe area insets respected
8. [ ] No horizontal scroll
9. [ ] Sticky elements position correctly
10. [ ] Modals are full-screen on mobile

---

## 🌐 BROWSER COMPATIBILITY

### Desktop Browsers
| Browser | Version | Test Status |
|---------|---------|-------------|
| Chrome | Latest (120+) | [ ] |
| Firefox | Latest (121+) | [ ] |
| Safari | Latest (17+) | [ ] |
| Edge | Latest (120+) | [ ] |

### Mobile Browsers
| Browser | OS | Test Status |
|---------|-----|-------------|
| Safari | iOS 15+ | [ ] |
| Chrome | iOS 15+ | [ ] |
| Chrome | Android 10+ | [ ] |
| Samsung Internet | Android 10+ | [ ] |

### Known Issues
- **Safari <15**: IntersectionObserver may need polyfill
- **IE11**: Not supported (usage <1%)

---

## ♿ ACCESSIBILITY TESTING

### Tools
1. **WAVE**: https://wave.webaim.org/
2. **axe DevTools**: Browser extension
3. **Lighthouse**: Accessibility audit
4. **Screen Reader**: VoiceOver (Mac), NVDA (Windows)

### Keyboard Navigation Test
1. [ ] Tab through entire page
2. [ ] All interactive elements focusable
3. [ ] Focus indicators visible
4. [ ] Modal traps focus correctly
5. [ ] ESC closes modals
6. [ ] Arrow keys work (image gallery, tabs)
7. [ ] Enter/Space activates buttons
8. [ ] Skip to content link works

### Screen Reader Test
1. [ ] Images have alt text
2. [ ] ARIA labels present
3. [ ] Form labels associated
4. [ ] Headings in logical order
5. [ ] Error messages announced

### Color Contrast
**Tool**: https://webaim.org/resources/contrastchecker/

**Test**:
1. [ ] Primary text: >4.5:1
2. [ ] Button text: >4.5:1
3. [ ] Link text: >4.5:1
4. [ ] Icon contrast: >3:1

---

## 🐛 BUG REPORTING

### Bug Template

```markdown
**Title**: [Component] Brief description

**Severity**: Critical / High / Medium / Low

**Environment**:
- Device: iPhone 13
- OS: iOS 17
- Browser: Safari 17.1
- Theme Version: 1.2.0

**Steps to Reproduce**:
1. Go to product page
2. Click "Quick Add"
3. Select variant
4. Click "Add to Cart"

**Expected Behavior**:
Modal should close and cart should update

**Actual Behavior**:
Error message shows "Failed to add"

**Screenshots/Video**:
[Attach]

**Console Errors**:
```
TypeError: Cannot read property 'id' of undefined
```

**Additional Context**:
Only happens with products that have 3+ variants
```

### Bug Priority
- **P0 - Critical**: Site down, checkout broken
- **P1 - High**: Core feature broken, impacts >50% users
- **P2 - Medium**: Non-critical feature broken, workaround exists
- **P3 - Low**: Cosmetic issue, edge case

---

## ✅ TEST COMPLETION CHECKLIST

### Before Launch
- [ ] All Week 1 components tested
- [ ] All Week 2 components tested
- [ ] All Week 3 components tested
- [ ] All Week 4 components tested
- [ ] User flows tested (3 main flows)
- [ ] Performance metrics meet targets
- [ ] Mobile testing complete (6 devices)
- [ ] Browser compatibility verified (4 browsers)
- [ ] Accessibility audit passed
- [ ] No P0/P1 bugs remaining

### Sign-Off
**Tester**: _______________  
**Date**: _______________  
**Notes**: _______________

---

**Document Version**: 1.0  
**Last Updated**: January 19, 2026
