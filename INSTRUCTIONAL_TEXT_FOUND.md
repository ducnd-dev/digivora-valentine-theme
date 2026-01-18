# 🔍 Instructional & Placeholder Text Found - Chi Tiết

## 📍 **templates/index.json** (Homepage Template)

### 1. **Featured Collection Section**
```
"description":"<p>(DELETE THIS AFTER READING) These products will be from the collection you mention above</p>"
```
**Location:** featured_collection section  
**Action needed:** Xóa hoặc thay bằng mô tả collection thật

---

### 2. **Image Banner - Collection Name**
```
"heading":"Name of collection of items below"
"text":"(optional) description of collection"
```
**Location:** image_banner_JXarTw section  
**Action needed:** Thay bằng tên collection thật

---

### 3. **Multicolumn - Benefits Section**
```
"text":"<p>We create & curate amazing products at amazing products that you can't find anywhere else.</p>"
```
Xuất hiện 3 lần trong:
- TOP QUALITY PRODUCTS
- WORLDWIDE SHIPPING  
- MONEY BACK GUARANTEE

**Issue:** "amazing products at amazing products" - typo lặp  
**Action needed:** Sửa thành "amazing products at amazing prices"

---

### 4. **Image with Text - Product Intro**
```
"heading":"This section is flavor text for the product below"
"text":"<p>(Optional) Text to describe or hype up the product below. Can be more testimonials, a story, or whatever you want to add</p>"
```
**Location:** image_with_text_WVC6Ch section  
**Action needed:** Thay bằng nội dung marketing thật

---

### 5. **Testimonials Section**
```
"title":"(Tailor these testimonials to the product above)"
```
**Location:** testimonials_dngRaR section  
**Action needed:** Xóa text hướng dẫn này

Testimonials content:
- "Share positive thoughts and feedback from your customer.." (generic placeholder)
- "Amazing products at amazing products" (typo)

---

## 📍 **templates/product.json & product.product-page-template.json**

### 6. **Comparison Table**
```
"title":"Catchy headline for an \"Us vs Them\" message"
"text":"<p>(Optional) Talk about how and why is your brand better than the others.</p>"
```
**Action needed:** Thay bằng value proposition thật

---

## 📍 **sections/image-with-text.liquid**

### 7. **Valentine-Specific Instructions (STILL PRESENT)**
```
Line 335: "default": "How To Order Your Perfect Valentine's Gift"
Line 417: "default": "<p>Step 1: Choose from our Valentine's collection of couples sets and romantic designs.<br><br>Step 2: Add personalization..."
```
**Action needed:** Thay bằng general instructions hoặc generic how-to content

---

## 📍 **config/settings_data.json**

### 8. **Brand Description**
```
"brand_description":"<p>We create & curate amazing products at amazing prices that you can't find anywhere else.</p>"
```
**Status:** OK - đã đúng "prices" không phải "products"  
**Optional:** Có thể viết lại cho unique hơn

---

## ✅ **Actions to Take**

### Priority 1: CRITICAL - Xóa instructional text
1. ✅ "(DELETE THIS AFTER READING)" trong index.json
2. ✅ "(Optional)" text trong index.json  
3. ✅ "(Tailor these testimonials...)" trong index.json
4. ✅ "flavor text" heading trong index.json

### Priority 2: HIGH - Fix typos
5. ✅ "amazing products at amazing products" → "amazing products at amazing prices" (3 chỗ trong index.json)

### Priority 3: MEDIUM - Update Valentine content
6. ✅ Image-with-text Valentine instructions
7. ✅ Comparison table instructional text

### Priority 4: LOW - Polish content
8. ⚠️ Update testimonials với content tốt hơn
9. ⚠️ Replace "Name of collection" với tên thật
10. ⚠️ Update brand description nếu muốn

---

## 📝 Summary

**Total instructional text found:** 10 locations  
**Files affected:** 
- templates/index.json (homepage) - 5 locations
- templates/product.json - 1 location
- templates/product.product-page-template.json - 1 location  
- sections/image-with-text.liquid - 1 location
- config/settings_data.json - 1 location (typo)

**Most critical:** Templates JSON files (user-facing content)
