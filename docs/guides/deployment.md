# 🚀 Deployment Guide

## Overview

This guide covers deploying the Digivora POD theme to production, including pre-launch checks, deployment methods, and post-launch monitoring.

---

## Pre-Deployment Checklist

### Content Verification

- [ ] **All products added** with complete information
  - Title, description
  - At least 3 images per product
  - All variants (colors, sizes)
  - Correct pricing
  - Inventory levels set

- [ ] **Collections created** and populated
  - All Products
  - By product type (T-Shirts, Mugs, etc.)
  - Featured collections
  - New Arrivals

- [ ] **Pages created**
  - About Us
  - How It Works
  - Shipping & Returns
  - Size Guide
  - Contact
  - FAQ

- [ ] **Blog posts** (optional but recommended for SEO)

### Design Verification

- [ ] **Logo uploaded** and displays correctly
- [ ] **Favicon set** (appears in browser tab)
- [ ] **Color scheme** finalized
- [ ] **All components tested**:
  - Trust badges
  - Size guide modal
  - Product tabs
  - Review summary
  - Hero section
  - Sticky ATC mobile
  - Customer photos

### Functionality Testing

- [ ] **Navigation** works (all menu links)
- [ ] **Search** returns relevant results
- [ ] **Product pages** fully functional:
  - Variant selection (color, size)
  - Add to cart
  - Quantity adjustment
  - Size guide opens
- [ ] **Cart** works:
  - Add/remove items
  - Quantity adjustment
  - Promo codes (if applicable)
- [ ] **Checkout** process:
  - Test checkout (use Shopify test payment)
  - All payment methods enabled
  - Shipping rates configured
  - Tax calculations correct

### Mobile Testing

- [ ] **Responsive layout** on all pages
- [ ] **Mobile navigation** works (hamburger menu)
- [ ] **Product page** mobile-friendly:
  - Variant selection
  - Size guide full-screen
  - Sticky ATC appears on scroll
- [ ] **Cart and checkout** work on mobile

### Browser Testing

Test on:
- [ ] Chrome (Windows & Mac)
- [ ] Safari (Mac & iOS)
- [ ] Firefox
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing

- [ ] **PageSpeed Insights** score (aim for 60+ mobile, 80+ desktop)
- [ ] **Image optimization** (all images compressed)
- [ ] **Load time** under 3 seconds
- [ ] **No console errors** (check browser dev tools)

### SEO Setup

- [ ] **Meta titles** set for:
  - Homepage
  - Product pages
  - Collection pages
  - Static pages
- [ ] **Meta descriptions** written (155 characters max)
- [ ] **Alt text** for all images
- [ ] **URL structure** clean (no /products/product-1234)
- [ ] **Sitemap** accessible at /sitemap.xml
- [ ] **robots.txt** configured

### Analytics & Tracking

- [ ] **Google Analytics** installed
- [ ] **Facebook Pixel** (if using)
- [ ] **Google Tag Manager** (optional)
- [ ] **Conversion tracking** set up

### Legal & Compliance

- [ ] **Privacy Policy** published
- [ ] **Terms of Service** published
- [ ] **Refund Policy** published
- [ ] **Cookie notice** (if required by region)
- [ ] **GDPR compliance** (if targeting EU)
- [ ] **Store policies** linked in footer

### Email Configuration

- [ ] **Order confirmation** email customized
- [ ] **Shipping confirmation** email customized
- [ ] **Sender email** set (noreply@yourdomain.com)
- [ ] **Test emails** sent and received

---

## Deployment Methods

### Method 1: Direct Publish (Recommended)

**Best for:** First-time launches, major redesigns

1. **Backup Current Theme**
   ```
   Shopify Admin → Themes → [Current Theme] → Actions → Duplicate
   ```

2. **Preview POD Theme**
   ```
   Themes → [Digivora POD Theme] → Actions → Preview
   ```
   Test thoroughly in preview mode.

3. **Publish**
   ```
   Themes → [Digivora POD Theme] → Actions → Publish
   ```

**Rollback:** If issues occur, publish the backup theme immediately.

### Method 2: Shopify CLI

**Best for:** Developers with local setup

```bash
# 1. Pull current theme
shopify theme pull

# 2. Make final changes
# (edit files locally)

# 3. Push to development theme
shopify theme push --development

# 4. Preview
# Get preview URL from output

# 5. Push to live theme
shopify theme push --live
```

**Rollback:** 
```bash
shopify theme pull --theme-id=[BACKUP_THEME_ID]
shopify theme push --live
```

### Method 3: Theme Kit (Legacy)

```bash
# 1. Configure
theme configure --store=yourstore.myshopify.com

# 2. Download current theme
theme download

# 3. Upload POD theme
theme deploy

# 4. Publish via Shopify Admin
```

### Method 4: Git + CI/CD (Advanced)

For automated deployments:

```yaml
# .github/workflows/deploy.yml
name: Deploy Theme

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: pgrimaud/action-shopify@v1
        with:
          shopify-access-token: ${{ secrets.SHOPIFY_ACCESS_TOKEN }}
          shopify-store-url: ${{ secrets.SHOPIFY_STORE_URL }}
```

---

## Deployment Steps

### 1. Final Backup

Create backup of current live theme:

```
Themes → [Current Live Theme] → Actions → Duplicate
```

Rename: "Backup Pre-POD [Date]"

### 2. Last-Minute Checks

- [ ] All changes committed to git
- [ ] No test products visible
- [ ] No lorem ipsum text
- [ ] All links work
- [ ] Contact form works

### 3. Maintenance Mode (Optional)

If you need time between themes:

Create `sections/maintenance.liquid`:

```liquid
<div class="maintenance">
  <h1>We're Getting Better!</h1>
  <p>Our store is being updated. Check back in 30 minutes.</p>
</div>

<style>
.maintenance {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
```

Add password protection:
```
Settings → Preferences → Enable password
```

### 4. Publish Theme

```
Themes → [Digivora POD Theme] → Actions → Publish
```

**Confirmation:** Visit yourstore.com to verify.

### 5. Clear Caches

- **Browser cache:** Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- **CDN cache:** May take 5-10 minutes to propagate
- **Shopify cache:** Automatic, but can take 2-3 minutes

### 6. Immediate Post-Launch Checks

Within 5 minutes:

- [ ] Homepage loads correctly
- [ ] Product pages work
- [ ] Add to cart works
- [ ] Checkout works (place test order)
- [ ] Mobile site works

---

## Post-Launch Monitoring

### First Hour

- [ ] Monitor site performance (no 404 errors)
- [ ] Check Google Analytics (traffic tracking)
- [ ] Test checkout end-to-end
- [ ] Check mobile experience
- [ ] Monitor customer feedback

### First Day

- [ ] Review conversion rate (compare to baseline)
- [ ] Check for error reports (browser console)
- [ ] Monitor cart abandonment rate
- [ ] Analyze heatmaps (if using Hotjar/similar)
- [ ] Read customer feedback

### First Week

- [ ] Compare sales to previous week
- [ ] Review PageSpeed Insights weekly
- [ ] Analyze which components are used most
- [ ] Collect customer feedback
- [ ] Make minor adjustments based on data

---

## Rollback Procedure

If critical issues occur:

### Quick Rollback (5 minutes)

1. **Publish backup theme**:
   ```
   Themes → [Backup Theme] → Actions → Publish
   ```

2. **Verify**: Visit site to confirm

3. **Investigate** issue in POD theme

### Fix and Redeploy

1. **Identify issue** (check error logs, console)
2. **Fix in POD theme** (via theme editor or locally)
3. **Test in preview mode**
4. **Republish** POD theme

---

## Common Deployment Issues

### Issue: Components Not Showing

**Symptoms:** Trust badges, size guide missing

**Cause:** Files not uploaded

**Fix:**
1. Verify all files in `/snippets/` uploaded
2. Check `/assets/` for CSS files
3. Re-upload missing files

### Issue: Styling Broken

**Symptoms:** Colors wrong, layout broken

**Cause:** CSS not loaded or cached

**Fix:**
1. Hard refresh browser (Cmd+Shift+R)
2. Check CSS files uploaded correctly
3. Verify `settings_data.json` has POD schemes

### Issue: Images Not Loading

**Symptoms:** Product images show broken links

**Cause:** CDN propagation delay

**Fix:**
1. Wait 5-10 minutes for CDN
2. Check image URLs (should be cdn.shopify.com)
3. Verify images uploaded to product

### Issue: Slow Performance

**Symptoms:** PageSpeed score dropped

**Cause:** Unoptimized images

**Fix:**
1. Compress all images (use TinyPNG, ImageOptim)
2. Enable lazy loading (already in theme)
3. Minimize CSS/JS (optional)

---

## Deployment Timing

### Best Times to Deploy

- **Off-peak hours**: 2-4 AM store timezone
- **Weekdays**: Tuesday-Thursday (avoid Mondays, Fridays)
- **Avoid**: Black Friday, holidays, major sales

### Maintenance Window

Recommended: 2-4 hours for full deployment and testing

**Schedule:**
1. Hour 1: Final checks, backup, deploy
2. Hour 2: Monitor, test, verify
3. Hour 3-4: Buffer for issues

---

## Post-Deployment Tasks

### Day 1

- [ ] Send announcement email to customers
- [ ] Post on social media about new design
- [ ] Update Google Search Console (submit sitemap)
- [ ] Monitor analytics closely

### Week 1

- [ ] Compare conversion rate to baseline
- [ ] Collect customer feedback
- [ ] Make minor adjustments (colors, copy)
- [ ] Optimize based on data

### Month 1

- [ ] Review overall performance
- [ ] Analyze which components drive conversions
- [ ] Plan future improvements
- [ ] Update content (new products, collections)

---

## Metrics to Track

### Performance Metrics

- **PageSpeed Score**: 60+ mobile, 80+ desktop
- **Load Time**: Under 3 seconds
- **Bounce Rate**: Under 50%
- **Time on Site**: 2+ minutes average

### Conversion Metrics

- **Conversion Rate**: Track vs. previous theme
- **Add to Cart Rate**: % of visitors who add items
- **Cart Abandonment**: Under 70%
- **Average Order Value**: Track changes

### Component Engagement

- **Size Guide Opens**: Track via analytics
- **Product Tab Clicks**: Which tabs most popular
- **Customer Photos**: Engagement rate
- **Trust Badges**: Impact on conversion

---

## Continuous Improvement

### Weekly

- Review analytics
- Check for errors (console, Shopify logs)
- Monitor performance scores
- Read customer feedback

### Monthly

- Analyze conversion funnel
- Update product images
- Add new content (blog posts)
- Test new components (Week 2-4 features)

### Quarterly

- Full theme audit
- Performance optimization
- Content refresh
- Design updates based on trends

---

## Support Resources

- **Shopify Status**: status.shopify.com
- **Shopify Help Center**: help.shopify.com
- **Theme Documentation**: /docs folder
- **Community Forums**: community.shopify.com

---

## Emergency Contacts

Keep these handy:

- **Shopify Support**: 24/7 via admin
- **Your Developer**: [Contact info]
- **Hosting/DNS**: [Provider support]
- **Payment Gateway**: [Support contact]

---

**Next Steps After Deployment:**

1. **Monitor** performance for 24-48 hours
2. **Collect** customer feedback
3. **Optimize** based on data
4. **Plan** Week 2 features (if not yet implemented)

---

**Related:** [Testing Guide](testing.md) • [Performance Optimization](performance.md) • [Troubleshooting](troubleshooting.md)
