# 🚀 Getting Started Guide

## Prerequisites

Before you begin, ensure you have:

- ✅ Shopify store (any plan)
- ✅ Access to theme code editor or local development environment
- ✅ Basic understanding of Liquid templating
- ✅ Git installed (optional, for version control)

---

## Installation Methods

### Method 1: Direct Upload (Recommended)

1. **Download theme files** from repository
2. **Zip the theme folder**
3. **Navigate to Shopify Admin** → Online Store → Themes
4. **Click "Add theme"** → Upload zip file
5. **Wait for upload** to complete
6. **Customize** via theme editor

### Method 2: Git Clone

```bash
git clone <repository-url>
cd digivora-valentine-theme
git checkout pod-enhancements
```

Then upload to Shopify via Theme Kit or CLI.

### Method 3: Shopify CLI

```bash
shopify theme pull
# Make changes
shopify theme push
shopify theme dev # Live preview
```

---

## Initial Setup

### 1. Backup Current Theme

**Important:** Always backup before making changes!

1. Go to **Online Store → Themes**
2. Find your current theme
3. Click **Actions → Duplicate**
4. Name it "Backup [Date]"

### 2. Install POD Theme

1. Upload/activate Digivora POD theme
2. **Don't publish yet** - preview first

### 3. Customize Theme Settings

Navigate to **Themes → Customize**

#### Color Scheme

The theme comes with 5 pre-configured color schemes:

**Scheme 1 (Default):**
- Background: White (#FFFFFF)
- Foreground: Black
- Button: Indigo (#6366F1)
- Gradient: Purple/pink subtle

**To customize:**
1. **Theme Settings** → Colors
2. Adjust scheme-1 through scheme-5
3. Or use POD defaults (already optimized)

#### Typography

POD typography scale already configured in `base.css`:

```css
--font-size-hero: clamp(40px, 5vw, 60px);
--font-size-h1: clamp(32px, 4vw, 48px);
--font-size-body: clamp(16px, 1vw, 18px);
```

**To change:**
Edit `assets/base.css` (search for "POD typography")

---

## Component Configuration

### Homepage Hero

1. **Add section:** Theme Editor → Template: Homepage
2. **Click "Add section"** → POD Hero Section
3. **Configure:**
   - Heading: "Design Your Style"
   - Subheading: "We Print It"
   - Primary CTA: Link to /collections/all
   - Secondary CTA: Link to /pages/how-it-works

### Product Page

Components auto-integrated. To verify:

1. **Preview any product**
2. **Check for:**
   - ✅ Review summary below title (4.8★)
   - ✅ Large color swatches (48px)
   - ✅ Size guide button (if Size variant exists)
   - ✅ Trust badges below buy button
   - ✅ Product tabs (5 tabs)
   - ✅ Customer photos section
3. **On mobile:**
   - ✅ Sticky Add to Cart appears when scrolling

### Trust Badges

Edit text in `snippets/trust-badges-pod.liquid`:

```liquid
<span class="trust-badge__text">Your Custom Text</span>
```

### Size Guide

Edit measurements in `snippets/size-guide-modal-pod.liquid`:

```liquid
<tr>
  <td>S</td>
  <td>36"</td> <!-- Chest -->
  <td>28"</td> <!-- Length -->
  <td>17"</td> <!-- Width -->
</tr>
```

---

## Content Setup

### 1. Add Products

For POD products, include:

- **Title**: Clear, descriptive
- **Description**: What makes it unique
- **Images**: At least 3 (front, back, lifestyle)
- **Variants**: Colors (create options)
- **Variants**: Sizes (XS, S, M, L, XL, 2XL, 3XL)
- **Price**: Competitive POD pricing

### 2. Create Collections

Recommended collections:

- **All Products** (`/collections/all`)
- **New Arrivals** (featured designs)
- **Best Sellers** (top products)
- **T-Shirts** (by product type)
- **Mugs** (by product type)
- **Home Decor** (by category)

### 3. Create Pages

Recommended pages:

**How It Works** (`/pages/how-it-works`):
```
1. Choose Your Design
2. Select Size & Color
3. We Print & Ship
4. You Love It!
```

**About Us** (`/pages/about`):
- Your story
- POD process
- Eco-friendly commitment

**Shipping & Returns** (`/pages/shipping`):
- Processing times (2-4 days)
- Shipping estimates
- Return policy (30 days)

**Size Guide** (optional separate page)

**Customer Gallery** (`/pages/customer-gallery`):
- Curated customer photos
- Instagram feed integration

---

## Testing Checklist

### Desktop Testing

- [ ] Homepage hero displays correctly
- [ ] Products show in grid (3-4 columns)
- [ ] Product page:
  - [ ] Review summary visible
  - [ ] Large color swatches (48px)
  - [ ] Size guide button clickable
  - [ ] Size guide modal opens
  - [ ] Trust badges display
  - [ ] Product tabs work (all 5 tabs)
  - [ ] Customer photos show (6 photos)
- [ ] Add to cart works
- [ ] Cart drawer/page displays

### Mobile Testing

- [ ] Homepage hero stacks vertically
- [ ] Product grid 2 columns
- [ ] Product page responsive:
  - [ ] Variant picker mobile-friendly
  - [ ] Size guide full-screen modal
  - [ ] Trust badges 2 columns
  - [ ] Product tabs scrollable
  - [ ] Customer photos 3 columns
  - [ ] Sticky Add to Cart shows on scroll
- [ ] Cart works on mobile

### Browser Testing

Test on:
- ✅ Chrome (latest)
- ✅ Safari (macOS + iOS)
- ✅ Firefox (latest)
- ✅ Edge (latest)

---

## Launch Checklist

Before going live:

### Content
- [ ] All products added with images
- [ ] Collections created and populated
- [ ] Pages created (About, Shipping, etc.)
- [ ] Blog posts (optional, for SEO)
- [ ] Footer links configured
- [ ] Navigation menu set up

### Settings
- [ ] Shipping rates configured
- [ ] Payment methods enabled
- [ ] Tax settings configured
- [ ] Email notifications customized
- [ ] Store policies added (Privacy, Terms, Refunds)

### SEO
- [ ] Meta titles set (products, collections, pages)
- [ ] Meta descriptions written
- [ ] Alt text for all images
- [ ] Favicon uploaded
- [ ] Google Analytics connected

### Design
- [ ] Logo uploaded
- [ ] Favicon set
- [ ] Color scheme finalized
- [ ] All components tested
- [ ] Mobile responsiveness verified

### Legal
- [ ] Privacy policy
- [ ] Terms of service
- [ ] Refund policy
- [ ] GDPR compliance (if EU customers)

---

## Going Live

### 1. Final Preview

1. **Preview theme** (don't publish yet)
2. **Test checkout** (use Shopify test payment)
3. **Verify emails** (order confirmation, etc.)
4. **Check mobile** one more time

### 2. Publish Theme

1. **Online Store → Themes**
2. **Find Digivora POD theme**
3. **Click "Publish"**
4. **Confirm** publish

### 3. Post-Launch

**Monitor:**
- Site speed (use Google PageSpeed Insights)
- Conversion rate
- Mobile vs desktop traffic
- Error reports (browser console)

**Optimize:**
- Image sizes (compress if needed)
- Remove unused code
- Add more products
- Collect customer feedback

---

## Next Steps

1. **Read:** [Customization Guide](customization.md)
2. **Explore:** [Component Documentation](../components/)
3. **Learn:** [Architecture Guide](../ARCHITECTURE.md)
4. **Optimize:** [Conversion Guide](conversion-optimization.md)

---

## Troubleshooting

### Components Not Showing

**Issue:** Trust badges, size guide, etc. not visible

**Fix:**
1. Check `layout/theme.liquid` for CSS links
2. Verify snippets exist in `/snippets/` folder
3. Check browser console for errors

### Styling Issues

**Issue:** Colors wrong, layout broken

**Fix:**
1. Clear browser cache
2. Verify `settings_data.json` has POD color schemes
3. Check CSS files uploaded correctly

### Mobile Issues

**Issue:** Sticky ATC not showing

**Fix:**
1. Verify screen width < 750px
2. Check JavaScript console for errors
3. Ensure `component-sticky-atc.css` loaded

---

## Support Resources

- **Documentation:** `/docs` folder
- **Shopify Help:** https://help.shopify.com
- **Liquid Reference:** https://shopify.dev/api/liquid
- **Community:** Shopify Community forums

---

**Ready to customize?** → [Customization Guide](customization.md)
