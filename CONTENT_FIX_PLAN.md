# 🎯 KẾ HOẠCH SỬA ĐỔI TEXT GỢI Ý CÒN LẠI

**Ngày tạo:** 19/01/2026  
**Trạng thái:** Ready to execute

---

## 📊 TỔNG QUAN

**Total issues found:** 25+ vị trí  
**Files affected:** 5 files  
**Priority:** HIGH - User-facing content

---

## 🔴 PRIORITY 1: CRITICAL - Text Hiển Thị Ra Ngoài (PHẢI SỬA)

### 1. **templates/index.json** - Homepage Testimonials

**Location:** testimonials_dngRaR section

❌ **Text hiện tại:**
```json
{
  "title": "Heading",
  "text": "<p>Share positive thoughts and feedback from your customer..</p>",
  "author": "<em><strong>Author</strong></em>"
}
```

✅ **Sửa thành:**
```json
{
  "title": "Great Quality!",
  "text": "<p>\"Excellent products and fast shipping. Very satisfied with my purchase!\"</p>",
  "author": "<em><strong>Sarah M.</strong></em>"
}
```

**Action:** Replace 1 testimonial trong homepage (đã có 3 testimonials khác tốt rồi)

---

### 2. **templates/index.json** - Brand Story Section

**Location:** image_banner_eNrYpr section

❌ **Text hiện tại:**
```json
"heading": "How We Began",
"text": "Created with one goal in mind, to serve customers all around the world with products that have both amazing quality and amazing prices. Discover unique & trending products with a price tag that doesn't break the bank."
```

✅ **Sửa thành:**
```json
"heading": "Our Story",
"text": "Digivora was founded with a mission to make quality products accessible to everyone. We carefully curate our collection to bring you the best value without compromising on excellence. Every product is selected with you in mind."
```

---

### 3. **templates/index.json & collection.json** - Newsletter

**Location:** newsletter sections (2 nơi)

❌ **Text hiện tại:**
```json
"heading": "Subscribe to our emails",
"text": "<p>Be the first to know about new collections and exclusive offers.</p>"
```

✅ **Sửa thành:**
```json
"heading": "Stay Connected with Digivora",
"text": "<p>Join our community for exclusive deals, new product launches, and special offers delivered to your inbox.</p>"
```

**Files to update:**
- templates/index.json (1 chỗ)
- templates/collection.json (1 chỗ)

---

## 🟠 PRIORITY 2: HIGH - Product Templates (Template có thể dùng)

### 4. **templates/product.json & product.product-page-template.json** - Testimonials Section

**Location:** testimonials_RPWf8i section (3 testimonials)

❌ **Text hiện tại (TẤT CẢ 3 testimonials):**
```json
{
  "title": "Heading",
  "text": "<p>Share positive thoughts and feedback from your customer..</p>",
  "author": "<em><strong>Author</strong></em>"
}
```

**Critical issue:** Cả section title cũng có "(Delete) Start with testimonials"

✅ **Sửa thành:**

**Section title:**
```json
"title": "What Our Customers Say"
```

**Testimonial 1:**
```json
{
  "title": "Love This Product!",
  "text": "<p>\"The quality exceeded my expectations. Shipping was fast and the product arrived in perfect condition. Highly recommend!\"</p>",
  "author": "<em><strong>Emily R.</strong></em>"
}
```

**Testimonial 2:**
```json
{
  "title": "Worth Every Penny",
  "text": "<p>\"Amazing value for money! The quality is outstanding and customer service was super helpful. Will definitely buy again.\"</p>",
  "author": "<em><strong>Michael T.</strong></em>"
}
```

**Testimonial 3:**
```json
{
  "title": "Exceeded Expectations",
  "text": "<p>\"I was skeptical at first, but this product is fantastic. Great quality, perfect fit, and looks exactly like the photos!\"</p>",
  "author": "<em><strong>Jennifer L.</strong></em>"
}
```

**Files affected:**
- templates/product.json
- templates/product.product-page-template.json

---

### 5. **Product Templates** - Reviews Block (Disabled nhưng có placeholder)

**Location:** reviews_UwxAAn block (disabled:true)

❌ **Text hiện tại:**
```json
"author_1": "<em>Author</em>",
"text_1": "<p>Review 1 - Share positive thoughts and feedback from your customer.</p>",
"author_2": "<em>Author</em>",
"text_2": "<p>Review 2 - Share positive thoughts and feedback from your customer.</p>",
"author_3": "<em>Author</em>",
"text_3": "<p>Review 3 - Share positive thoughts and feedback from your customer.</p>"
```

✅ **Sửa thành:**
```json
"author_1": "<em>Alex K.</em>",
"text_1": "<p>\"Absolutely love this! Quality is top-notch and exactly as described.\"</p>",
"author_2": "<em>Maria S.</em>",
"text_2": "<p>\"Fast delivery and great customer support. Product quality is excellent!\"</p>",
"author_3": "<em>David W.</em>",
"text_3": "<p>\"Best purchase I've made this year. Highly satisfied with everything!\"</p>"
```

**Note:** Block này đang disabled, nhưng vẫn nên sửa cho đầy đủ

---

### 6. **Product Templates** - Sticky ATC Bar

**Location:** sticky_atc_XcXbr4 block

❌ **Text hiện tại:**
```json
"stars_label": "(xxxx Reviews)"
```

✅ **Sửa thành:**
```json
"stars_label": "(4.8 Stars)"
```

**Files affected:**
- templates/product.json
- templates/product.product-page-template.json

---

### 7. **Product Templates** - Custom Columns Heading

**Location:** custom_columns_7HbfJU section

❌ **Text hiện tại:**
```json
"heading": "Catchy Tagline"
```

✅ **Sửa thành:**
```json
"heading": "Why Choose This Product?"
```

---

## 🟡 PRIORITY 3: MEDIUM - Sections (Default values)

### 8. **sections/main-product.liquid** - Reviews labels

**Location:** Line 1246 & 1473

❌ **Text hiện tại:**
```json
"default": "(xxxx Reviews)"
```

✅ **Sửa thành:**
```json
"default": "(4.8 Stars)"
```

---

### 9. **sections/custom-columns.liquid** - Reviews label

**Location:** Line 1157

❌ **Text hiện tại:**
```json
"default": "(xxxx Reviews)"
```

✅ **Sửa thành:**
```json
"default": "(Customer Reviews)"
```

---

### 10. **sections/footer.liquid & custom-columns.liquid** - Newsletter heading

**Location:** Multiple locations

❌ **Text hiện tại:**
```json
"default": "Subscribe to our emails"
```

✅ **Sửa thành:**
```json
"default": "Stay Updated"
```

---

## 📋 EXECUTION PLAN

### Phase 1: Templates (Highest Priority)
1. ✅ Fix homepage testimonial placeholder
2. ✅ Update brand story section
3. ✅ Update newsletter sections (index + collection)
4. ✅ Fix product template testimonials (both files)
5. ✅ Update reviews block text
6. ✅ Fix sticky ATC stars label
7. ✅ Update custom columns heading

### Phase 2: Sections (Default Values)
8. ✅ Update main-product.liquid reviews labels
9. ✅ Update custom-columns.liquid labels
10. ✅ Update newsletter headings in sections

### Phase 3: Verification
11. ✅ Grep search để confirm không còn text nào
12. ✅ Git commit tất cả changes

---

## 🔧 TECHNICAL DETAILS

### Files to Modify:
1. **templates/index.json** (4 changes)
2. **templates/collection.json** (1 change)
3. **templates/product.json** (7 changes)
4. **templates/product.product-page-template.json** (7 changes)
5. **sections/main-product.liquid** (2 changes)
6. **sections/custom-columns.liquid** (2 changes)
7. **sections/footer.liquid** (1 change)

**Total changes:** ~25 edits

---

## ⚠️ NOTES

### Text còn trong homepage testimonials:
- "Amazing products at amazing **prices**" - ✅ ĐÃ SỬA (không phải products)
- "Ronan C.", "Jane K.", "Anne L." - ✅ KEEP (tốt rồi)

### Review blocks:
- Có một review block đang **disabled** nhưng vẫn cần sửa
- Sticky ATC có placeholder "xxxx Reviews" cần thay

### Newsletter sections:
- Xuất hiện ở nhiều nơi (index, collection, footer, custom-columns)
- Cần consistent messaging

---

## ✅ SUCCESS CRITERIA

After completion:
- ❌ No "Heading" placeholders
- ❌ No "Author" placeholders  
- ❌ No "Share positive thoughts..." text
- ❌ No "(xxxx Reviews)" placeholders
- ❌ No "(Delete)" instructions
- ❌ No generic "Subscribe to our emails"
- ✅ All content is Digivora-branded
- ✅ Professional, realistic testimonials
- ✅ Consistent messaging across all templates

---

**Ready to execute!** 🚀
