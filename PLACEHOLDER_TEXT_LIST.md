# Danh Sách Text Gợi Ý (Placeholder Text) Trong Theme

## 📋 Tổng Quan
File này liệt kê tất cả các text gợi ý/mẫu có trong theme để bạn có thể tùy chỉnh theo nội dung của Digivora.

---

## 🎯 SECTIONS - Text Mặc Định Cần Thay Đổi

### 1. **horizontal-ticker.liquid**
- Line 268: `"default": "Digivora"`  
  → Text chạy ngang, hiện tại đã là Digivora

### 2. **image-with-text.liquid**  
- Line 335: `"default": "How To Order Your Perfect Valentine's Gift"`
- Line 417: `"default": "<p>Step 1: Choose from our Valentine's collection..."`  
  → Hướng dẫn đặt hàng Valentine

### 3. **newsletter.liquid**
- Line 176: `"default": "Get 15% Off Your Valentine Order"`
- Line 209: `"default": "<p>Join our list and get 15% off your Valentine's Day order! Plus early access to new designs and exclusive deals.</p>"`  
  → Newsletter signup text

### 4. **rich-text.liquid**
- Line 193: `"default": "The Perfect Gift For Your Perfect Match"`  
  → Tiêu đề rich text section

### 5. **footer.liquid**
- Line 435: `"default": "<p>Share contact information, store details, and brand content with your customers.</p>"`  
  → Mô tả footer

### 6. **main-product.liquid**
- Line 1107, 1128, 1149: `"default": "<p>Share positive thoughts and feedback from your customer.</p>"`  
  → Testimonial placeholders (3 chỗ)
- Line 1215: `"default": "Add to Cart"`
- Line 1933: `"default": "Pairs well with"`

### 7. **featured-product.liquid**
- Line 881: `"default": "Share"`

### 8. **main-article.liquid**
- Line 385: `"default": "Share"`

### 9. **comparison-table.liquid**
- Line 235: `"default": "<p>Talk about how and why is your brand better than the others.</p>"`
- Line 495: `"default": "Benefit"`

### 10. **results.liquid**
- Line 240: `"default": "<p>Talk about results of your customers and how your product improved their life.</p>"`

### 11. **multirow.liquid**
- Line 367: `"default": "<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>"`

### 12. **custom-columns.liquid**
- Line 1444: `"default": "Add to Cart"`
- Line 2075: `"default": "<p>Pair text with an icon to focus on your chosen product, collection, or blog post</p>"`
- Line 2884: `"default": "<p>A short sentence encouraging customers to subscribe to your newsletter.</p>"`

### 13. **collage.liquid**
- Line 424: `"default": "Describe the video"`

### 14. **cart-drawer.liquid**
- Line 42: `"default": "Add these products to your cart"`
- Line 230: `"default": "1,300+ happy customers"`

### 15. **email-signup-banner.liquid**
- Line 345: `"default": "<p>Get 15% off your Valentine's order + exclusive early access to new designs. Join our VIP list!</p>"`

---

## 📄 TEMPLATES - Text Trong JSON Files

### **templates/product.json & product.product-page-template.json**
- `"title":"Feature\/benefit"` (xuất hiện 4 lần)
  → Text trong horizontal ticker của product page

### **templates/index.json** (Homepage)
Multiple placeholder texts:
- `"heading":"This section is flavor text for the product below"`
- `"text":"<p>(Optional) Text to describe or hype up the product below..."`
- `"title":"(Tailor these testimonials to the product above)"`
- Testimonials: "Amazing Products!", "Quality Was Perfect", "Shipping was Fast!"
- Newsletter: "Subscribe to our emails", "Be the first to know about new collections..."

---

## 🎨 CÁCH SỬA ĐỔI

### Phương pháp 1: Sửa trực tiếp trong Shopify Theme Editor
1. Vào Shopify Admin → Online Store → Themes
2. Click "Customize" 
3. Chọn section → Thay đổi text trong settings panel

### Phương pháp 2: Sửa trong code (cho developer)
1. Mở file section tương ứng
2. Tìm đến dòng có `"default": "..."`
3. Thay đổi text
4. Deploy lên Shopify

---

## ✅ ĐÃ THAY ĐỔI
- ✅ Tất cả "Zendrop" → "Digivora"
- ✅ Logo reference: zendrop_logo.png → digivora_logo.png
- ✅ Theme info & URLs → digivora.co

## 🔄 CẦN XEM XÉT THAY ĐỔI
- Newsletter content (Valentine themed)
- Image-with-text Valentine instructions
- Testimonials text
- "Feature/benefit" placeholders
- Generic instructional text

---

**Lưu ý**: Các text này là **default values** - chúng sẽ xuất hiện khi bạn thêm section mới trong theme editor. Content hiện tại trên trang đã có thể khác với các giá trị default này.

