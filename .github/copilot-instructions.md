# Zendrop Shopify Theme - AI Coding Instructions

## Architecture Overview

This is a **Shopify 2.0 theme** (Zendrop v1.1.0) following Shopify's standard Liquid templating architecture with modular sections and reusable snippets.

### Directory Structure
- **`sections/`** - Modular, customizable sections with JSON schemas (e.g., `main-product.liquid`, `header.liquid`)
- **`snippets/`** - Reusable UI components (e.g., `icon-*.liquid`, `card-product.liquid`, `price.liquid`)
- **`layout/`** - Base page templates (`theme.liquid`, `password.liquid`)
- **`assets/`** - JS modules, CSS stylesheets, and static resources
- **`config/`** - Theme settings (`settings_schema.json`, `settings_data.json`)
- **`templates/`** - Page-level templates that compose sections
- **`locales/`** - Translation files for internationalization

### Key Architectural Patterns

#### 1. **Web Components Architecture**
JavaScript functionality uses native Web Components (Custom Elements):
```javascript
class CartDrawer extends HTMLElement { ... }
customElements.define('cart-drawer', CartDrawer);
```
Look for `customElements.define()` in [assets/*.js](assets/) files. Components are defined as classes extending `HTMLElement`.

#### 2. **Pub/Sub Event System**
Cross-component communication uses a centralized pub/sub pattern in [assets/pubsub.js](assets/pubsub.js):
```javascript
// Constants defined in assets/constants.js
const PUB_SUB_EVENTS = {
  cartUpdate: 'cart-update',
  quantityUpdate: 'quantity-update',
  variantChange: 'variant-change',
  cartError: 'cart-error'
};

// Usage pattern
subscribe(PUB_SUB_EVENTS.cartUpdate, callback);
publish(PUB_SUB_EVENTS.cartUpdate, data);
```
**Always use these event constants** for cart/product updates instead of direct DOM manipulation.

#### 3. **Section Schema Pattern**
All sections end with a `{% schema %}` block containing JSON configuration:
```liquid
{% schema %}
{
  "name": "Section Name",
  "settings": [...],
  "blocks": [...],
  "presets": [...]
}
{% endschema %}
```
This defines the Shopify theme editor UI. Check [config/settings_schema.json](config/settings_schema.json) for global theme settings.

## Development Conventions

### Liquid Templating
- **Snippet inclusion**: `{% render 'snippet-name', param: value %}`
- **Icon pattern**: Icons are SVG snippets in `snippets/icon-*.liquid` (e.g., `{% render 'icon-cart' %}`)
- **Translations**: Use `{{ 'key.path' | t }}` for all user-facing text (references `locales/*.json`)
- **Asset URLs**: `{{ 'filename.ext' | asset_url }}` for assets/, `{{ image | image_url: width: 300 }}` for images

### JavaScript Conventions
- **No build process**: Pure JavaScript, no bundling. Files loaded via `<script src="{{ 'file.js' | asset_url }}" defer="defer">`
- **Script load order** (see [layout/theme.liquid](layout/theme.liquid#L30-L38)):
  1. `constants.js` - Event constants and globals
  2. `pubsub.js` - Event system
  3. `global.js` - Utilities (focus traps, escape handlers)
  4. Feature-specific scripts (cart, product, etc.)
- **Debouncing**: Use `ON_CHANGE_DEBOUNCE_TIMER` (300ms) from `constants.js` for input handlers

### CSS Architecture
- **Naming**: BEM-inspired with component prefixes (`component-cart.css`, `section-footer.css`)
- **Global styles**: [assets/base.css](assets/base.css) for foundational styles
- **Settings-driven**: Many styles use CSS custom properties set from `settings_schema.json` (colors, spacing, typography)

### Cart Functionality
The theme supports **three cart types** (configured in settings):
1. **Drawer** (`cart-drawer.js`) - Slide-out panel
2. **Page** - Full page cart
3. **Notification** (`cart-notification.js`) - Toast notification

When modifying cart functionality, always:
- Publish `PUB_SUB_EVENTS.cartUpdate` after cart changes
- Handle loading states with `.loading-spinner` snippet
- Update cart count bubble via pub/sub, not direct DOM

### Component Communication
- **Parent-child**: Use `closest()` to find parent components, `querySelector()` for children
- **Sibling components**: Use pub/sub events from `constants.js`
- **Global state**: Cart state managed via Shopify's `/cart.js` endpoints

## Common Tasks

### Adding a New Section
1. Create `sections/your-section.liquid`
2. Add Liquid markup with BEM-style classes
3. End with `{% schema %}` block defining settings
4. Create `assets/section-your-section.css` if needed
5. Reference in templates with `{% section 'your-section' %}`

### Creating a Reusable Snippet
1. Create `snippets/component-name.liquid`
2. Accept parameters: `{% liquid assign param = param | default: 'default' %}`
3. Include documentation comment at top explaining parameters
4. Render with: `{% render 'component-name', param: value %}`

### Working with Product Forms
- Main product form in `sections/main-product.liquid`
- Variant selection in `snippets/product-variant-picker.liquid`
- Publish `variantChange` event when variant changes
- Use `product-form.js` class for add-to-cart functionality

### Modifying Theme Settings
- Global UI settings: [config/settings_schema.json](config/settings_schema.json)
- Organized by category: Colors, Typography, Layout, Buttons, Cards, etc.
- Settings accessed in Liquid: `{{ settings.setting_name }}`
- Supports ranges, color schemes, image pickers, checkboxes

## Localization & Accessibility
- All text strings must use translation keys: `{{ 'namespace.key' | t }}`
- ARIA labels required for interactive elements
- Focus management with `trapFocus()` utility from `global.js`
- Support for RTL languages via Liquid conditionals

## Testing & Debugging
- Test all three cart types (drawer/page/notification)
- Verify mobile responsive behavior (breakpoints in CSS)
- Check theme editor preview mode (`request.design_mode`)
- Test with animations enabled/disabled (`settings.animations_reveal_on_scroll`)

## Anti-Patterns to Avoid
- ❌ Don't manipulate cart DOM directly - use pub/sub events
- ❌ Don't inline JavaScript in Liquid files - use separate .js files
- ❌ Don't hardcode strings - use translation keys
- ❌ Don't create global variables - use Web Components or module pattern
- ❌ Don't use jQuery or other libraries - theme uses vanilla JS
