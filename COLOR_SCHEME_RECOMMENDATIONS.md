# 🎨 Color Scheme Recommendations for Digivora

## 📊 Current Status
Theme hiện tại đang dùng **Valentine theme** với màu hồng/đỏ romantic. Dưới đây là các đề xuất color schemes phù hợp hơn với thương hiệu Digivora.

---

## 🎯 Đề Xuất Color Schemes

### Option 1: Modern & Professional (Recommended)
**Phù hợp cho:** E-commerce đa ngành, professional, trustworthy

```json
"scheme-1": {
  "background": "#FFFFFF",
  "background_gradient": "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
  "text": "#1A1A1A",
  "button": "#2563EB",
  "button_label": "#FFFFFF",
  "secondary_button_label": "#2563EB"
}

"scheme-2": {
  "background": "#F8F9FA",
  "background_gradient": "linear-gradient(160deg, #EFF6FF 0%, #F8F9FA 50%, #FFFFFF 100%)",
  "text": "#374151",
  "button": "#1D4ED8",
  "button_label": "#FFFFFF"
}

"scheme-3": {
  "background": "#1F2937",
  "background_gradient": "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
  "text": "#F9FAFB",
  "button": "#3B82F6",
  "button_label": "#FFFFFF"
}
```

**Đặc điểm:**
- Blue: Trust, reliability, professional
- Clean whites & grays: Modern, minimalist
- Good contrast for readability

---

### Option 2: Vibrant & Energetic
**Phù hợp cho:** Tech products, young audience, bold brand

```json
"scheme-1": {
  "background": "#FFFFFF",
  "background_gradient": "linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 100%)",
  "text": "#1F2937",
  "button": "#F59E0B",
  "button_label": "#FFFFFF"
}

"scheme-2": {
  "background": "#FFFBEB",
  "background_gradient": "linear-gradient(160deg, #FEF3C7 0%, #FFFBEB 50%, #FFFFFF 100%)",
  "text": "#78350F",
  "button": "#D97706",
  "button_label": "#FFFFFF"
}

"scheme-3": {
  "background": "#78350F",
  "background_gradient": "linear-gradient(135deg, #78350F 0%, #92400E 100%)",
  "text": "#FEF3C7",
  "button": "#FBBF24",
  "button_label": "#78350F"
}
```

**Đặc điểm:**
- Orange/Amber: Energy, enthusiasm, action
- Warm tones: Friendly, approachable
- High visibility CTAs

---

### Option 3: Premium & Elegant
**Phù hợp cho:** Luxury products, premium brand, sophisticated

```json
"scheme-1": {
  "background": "#FFFFFF",
  "background_gradient": "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%)",
  "text": "#1A1A1A",
  "button": "#0F172A",
  "button_label": "#FFFFFF"
}

"scheme-2": {
  "background": "#F8F8F8",
  "background_gradient": "linear-gradient(160deg, #E5E5E5 0%, #F8F8F8 50%, #FFFFFF 100%)",
  "text": "#334155",
  "button": "#1E293B",
  "button_label": "#FFFFFF"
}

"scheme-3": {
  "background": "#0F172A",
  "background_gradient": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  "text": "#F1F5F9",
  "button": "#F8FAFC",
  "button_label": "#0F172A"
}
```

**Đặc điểm:**
- Black & gray: Premium, luxury
- Minimal colors: Sophisticated, elegant
- High contrast: Clear hierarchy

---

### Option 4: Fresh & Eco-Friendly
**Phù hợp cho:** Sustainable products, natural, health-focused

```json
"scheme-1": {
  "background": "#FFFFFF",
  "background_gradient": "linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)",
  "text": "#1A1A1A",
  "button": "#059669",
  "button_label": "#FFFFFF"
}

"scheme-2": {
  "background": "#F0FDF4",
  "background_gradient": "linear-gradient(160deg, #DCFCE7 0%, #F0FDF4 50%, #FFFFFF 100%)",
  "text": "#166534",
  "button": "#047857",
  "button_label": "#FFFFFF"
}

"scheme-3": {
  "background": "#14532D",
  "background_gradient": "linear-gradient(135deg, #14532D 0%, #166534 100%)",
  "text": "#DCFCE7",
  "button": "#22C55E",
  "button_label": "#14532D"
}
```

**Đặc điểm:**
- Green: Nature, growth, eco-friendly
- Fresh whites: Clean, pure
- Calming effect

---

## 🔧 Cách Thay Đổi Color Schemes

### Method 1: Trong Shopify Theme Editor (Recommended)
1. Vào **Shopify Admin** → **Online Store** → **Themes**
2. Click **Customize** trên theme
3. Click **Theme settings** (⚙️) → **Colors**
4. Chỉnh sửa từng Color scheme
5. Save changes

### Method 2: Sửa trực tiếp trong code
Edit file: `/config/settings_data.json`

```json
{
  "current": {
    "color_schemes": {
      "scheme-1": {
        "settings": {
          "background": "#FFFFFF",
          "background_gradient": "...",
          "text": "#1A1A1A",
          "button": "#2563EB",
          "button_label": "#FFFFFF",
          "secondary_button_label": "#2563EB",
          "shadow": "#1A1A1A"
        }
      }
    }
  }
}
```

---

## 📈 Brand Colors Suggestions for Digivora

Nếu Digivora đã có brand colors, sử dụng chúng. Nếu chưa, đây là đề xuất:

### Primary Brand Colors
- **Main:** `#2563EB` (Blue) - Trust & reliability
- **Accent:** `#F59E0B` (Amber) - Energy & action
- **Dark:** `#1E293B` (Slate) - Text & headers

### Supporting Colors
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Amber)
- **Error:** `#EF4444` (Red)
- **Info:** `#3B82F6` (Blue)

### Neutral Palette
- **White:** `#FFFFFF`
- **Light Gray:** `#F9FAFB`
- **Medium Gray:** `#6B7280`
- **Dark Gray:** `#1F2937`
- **Black:** `#0F172A`

---

## ✅ Recommendation

**Tôi đề xuất Option 1: Modern & Professional** vì:
- ✅ Universal appeal - phù hợp mọi sản phẩm
- ✅ Professional & trustworthy
- ✅ Good conversion rates (blue CTAs)
- ✅ Accessible & readable
- ✅ Không bị giới hạn vào niche cụ thể

---

## 🎨 Current Valentine Scheme (To Replace)

```json
"scheme-1": {
  "background": "#ffffff",
  "background_gradient": "linear-gradient(135deg, #FFF1F3 0%, #FFE5E9 100%)",
  "text": "#2B2D42",
  "button": "#E63946",
  "button_label": "#ffffff"
}
```

**Vấn đề:**
- ❌ Quá romantic/Valentine-specific
- ❌ Pink/red không phù hợp mọi product
- ❌ Limited brand positioning
- ❌ Có thể không appeal to male audience

---

## 📞 Next Steps

1. Chọn một trong 4 options trên (hoặc customize)
2. Test màu sắc trên staging site
3. Get feedback từ team/customers
4. Apply to production theme
5. Update brand guidelines

**Questions to Consider:**
- Digivora sells gì? (Fashion, tech, home goods, etc.)
- Target audience? (Age, gender, interests)
- Brand personality? (Fun, serious, premium, budget-friendly)
- Competitors dùng màu gì?

---

*Last updated: January 18, 2026*
