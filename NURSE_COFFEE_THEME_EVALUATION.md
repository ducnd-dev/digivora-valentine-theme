# Đánh giá theme cho ngách Nurse Coffee

## 1. Tổng quan theme hiện tại

Theme hiện tại là **Digivora Valentine** – tối ưu cho sự kiện Valentine với:

- **Bảng màu**: Đỏ (#e63946, #c9184a), hồng (#ff006e, #ffb3c1), gradient hồng/đỏ (#FFF1F3, #FFE5E9, #FFD6E0…)
- **Copy**: Toàn bộ hướng Valentine – giỏ hàng hết hạn, giao Valentine, couples, romantic
- **Gradient CSS**: `--gradient-valentine`, `--gradient-valentine-subtle` dùng ở hero, card, filter, gift options
- **Nội dung mặc định**: Slideshow, banner, FAQ, testimonial, rich text đều gắn Valentine/couples

**Kết luận**: Cần chỉnh **màu sắc**, **copy/messaging** và **một số default content** để phù hợp nurse coffee (ấm, tin cậy, thư giãn, self-care).

---

## 2. Ngách Nurse Coffee cần gì?

| Yếu tố | Valentine (hiện tại) | Nurse Coffee (mong muốn) |
|--------|----------------------|---------------------------|
| **Cảm xúc** | Lãng mạn, cặp đôi | Ấm áp, chăm sóc, thư giãn, self-care |
| **Màu** | Đỏ, hồng đậm | Mint, kem, hồng pastel nhạt, xanh lá/xanh dương nhẹ (sạch, tin cậy) |
| **Tone** | “Couples”, “Valentine’s delivery” | “Cho y tá”, “Coffee break”, “Cùng đồng nghiệp”, “Tự thưởng” |
| **Icon/visual** | Trái tim, romantic | Có thể giữ trái tim (care) hoặc đổi sang icon cà phê/leaf |

---

## 3. Những thay đổi cần làm

### 3.1. Màu sắc (Color schemes)

**File**: `config/settings_data.json` → `current` → `color_schemes`

- **scheme-1 (chính)**: Đổi từ nền hồng + button đỏ sang nền trắng/kem + button mint hoặc teal/xanh nhạt.
- **scheme-2, 3, 5**: Giảm đỏ/hồng đậm, thay bằng mint (#99D4C4, #7EC8A3), kem (#FFF8F0, #F5F0E8), xanh pastel (#B8D4E3), hồng rất nhạt (#FFE8EC) nếu vẫn muốn ấm.
- **scheme-4 (dark)**: Có thể giữ tối nhưng đổi accent từ hồng sang mint/teal nhạt.

Đã tạo file tham khảo: **`NURSE_COFFEE_COLOR_SCHEMES.json`** – có thể copy vào `settings_data.json`.

---

### 3.2. Copy & messaging (bắt buộc)

**File**: `config/settings_data.json`

| Vị trí | Hiện tại | Gợi ý Nurse Coffee |
|--------|----------|---------------------|
| `free_shipping_message` | "💝 Only $[amount] more for FREE Valentine's shipping!" | "☕ Thêm $[amount] nữa là freeship! Giao tận tay y tá bận rộn." |
| Cart drawer → countdown | "⏰ Valentine's cart expires in" | "⏰ Giỏ hàng giữ trong" |
| Cart drawer → free_shipping_bar | "💝 Only [amount] away from FREE Valentine's shipping!" | "☕ Còn [amount] nữa là freeship!" |
| Cart drawer → free_shipping_success_message | "Order by Feb 10 for Valentine's delivery!" | "Bạn đã được freeship! Cảm ơn đã ủng hộ." |
| Cart drawer → product_upsell | "❤️ Complete Your Valentine's Set" | "☕ Thêm món cho bữa coffee break" |
| Cart drawer → social_proof | "❤️ Loved by 1,300+ Happy Couples" | "☕ Được hơn 1.300+ y tá tin dùng" |

**Các section (default trong file .liquid)** – cần sửa trong Theme Editor hoặc trong schema default:

| Section | Default cần đổi |
|---------|------------------|
| **announcement-bar** | "Order by Feb 10 for Valentine's Delivery..." → "Free ship đơn từ $50 \| Giao nhanh cho y tá bận rộn" |
| **slideshow** | "Valentine's Day Collection Showcase", "Shop matching couples sets..." → headline + mô tả về nurse coffee / đồ uống / quà cho đồng nghiệp |
| **image-banner** | "Love What You Wear This Valentine's Day ❤️", "Custom couples tees..." → "Coffee break của bạn đáng được chăm sóc" / "Quà cho đồng nghiệp" |
| **rich-text** | "Show your love with custom apparel..." → đoạn giới thiệu về thương hiệu nurse coffee, sản phẩm, đối tượng y tá |
| **featured-collection** | "Valentine's Day Collection" → "Bộ sưu tập Nurse Coffee" / "Sản phẩm bán chạy" |
| **featured-blog** | "Valentine's Gift Guide & Style Tips" → "Tips cho y tá" / "Câu chuyện coffee break" |
| **email-signup-banner** | "Don't Miss Out on Valentine's Deals!" → "Đừng bỏ lỡ ưu đãi cho y tá!" |
| **testimonials** | "Perfect Valentine's Gift!", nội dung couples → "Đúng gu coffee break!", review từ khách nurse/đồng nghiệp |
| **collapsible-content (FAQ)** | "Valentine's Day FAQ", "Will my order arrive by Valentine's Day?" → "FAQ" chung, "Thời gian giao hàng?" |

**Snippet**:

- **gift-options-pod.liquid**: "Beautiful Valentine's themed wrapping" → "Gói quà theo chủ đề Nurse Coffee" hoặc bỏ nếu không bán quà.

---

### 3.3. Gradient & CSS (để đồng bộ với nurse coffee)

**File**: `assets/gradient-system-pod.css`

- Thêm hoặc đổi:
  - `--gradient-nurse-coffee`: ví dụ `linear-gradient(135deg, #99D4C4 0%, #B8E6D5 50%, #E8F5F0 100%)` (mint nhạt).
  - `--gradient-nurse-coffee-subtle`: phiên bản opacity thấp cho nền.
- Có thể **giữ** `--gradient-valentine` cho campaign khác, nhưng **đổi chỗ đang dùng** từ `gradient-valentine` / `gradient-valentine-subtle` sang `gradient-nurse-coffee` / `gradient-nurse-coffee-subtle` trong:
  - `assets/section-hero-pod.css`
  - `assets/component-card.css`
  - `assets/mobile-gradient-optimizations.css`
  - `snippets/gift-options-pod.liquid`
  - `snippets/collection-filters-pod.liquid`

Như vậy toàn site sẽ dùng tông mint/kem thay vì hồng Valentine.

---

### 3.4. Progress bar & accent trong Cart

**File**: `config/settings_data.json`

- `progress`: hiện "#8472ed" hoặc "#e63946" → đổi sang màu mint/teal (ví dụ `#5BA392` hoặc `#7EC8A3`) cho đồng bộ nurse coffee.
- Các block trong cart drawer (countdown, free shipping bar, upsell) đã nêu ở bảng copy trên; màu button trong block có thể đổi sang cùng tông mint/teal.

---

### 3.5. Typography (tùy chọn)

- **Hiện tại**: Madera (header), FS Koopman (body) – ổn cho nhiều niche.
- **Nurse coffee**: Có thể giữ; nếu muốn “ấm, dễ đọc” hơn có thể thử font tròn/soft hơn trong Theme settings (ví dụ font có round shape cho body).

---

### 3.6. Icon mặc định (tùy chọn)

- Trong schema nhiều section đang dùng icon/value `"heart"`. Với nurse coffee có thể:
  - **Giữ** heart (gắn với “care”, “yêu thương công việc”); hoặc
  - Đổi default sang icon khác (nếu theme có icon coffee/cup/leaf) trong: `main-product.liquid`, `featured-product.liquid`, `collapsible-content.liquid`.

---

## 4. Thứ tự thực hiện gợi ý

1. Backup `config/settings_data.json` và theme.
2. Áp dụng **color schemes** từ `NURSE_COFFEE_COLOR_SCHEMES.json` vào `settings_data.json`.
3. Sửa toàn bộ **copy** trong `settings_data.json` (free shipping, cart drawer blocks).
4. Thêm **gradient nurse coffee** trong `gradient-system-pod.css` và thay thế chỗ đang dùng `gradient-valentine` trong các file CSS/snippet.
5. Trong Theme Editor: chỉnh **announcement**, **slideshow**, **image banner**, **rich text**, **featured collection**, **blog**, **email signup**, **testimonials**, **FAQ** theo bảng trên.
6. Đổi **progress** và màu button cart drawer sang mint/teal.
7. (Tùy chọn) Chỉnh font, icon default nếu muốn.

---

## 5. Checklist nhanh

- [ ] Color schemes đổi sang mint/kem/pastel
- [ ] free_shipping_message, countdown, free shipping bar, upsell, social proof (copy)
- [ ] Progress bar color
- [ ] Gradient CSS: thêm nurse-coffee, thay chỗ dùng valentine
- [ ] Announcement bar text
- [ ] Slideshow, image-banner, rich-text, featured-collection, blog, email, testimonials, FAQ (default content)
- [ ] gift-options-pod.liquid copy
- [ ] (Tùy chọn) Icon default, font

Sau khi làm xong các mục trên, theme sẽ nhất quán về màu và messaging cho ngách nurse coffee (ấm, tin cậy, coffee break, self-care).
