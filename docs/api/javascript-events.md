# ⚡ JavaScript Events API Reference

## Overview

The Digivora POD theme uses a **Pub/Sub (Publish/Subscribe) event system** for component communication. This document covers all available events, their payloads, and usage patterns.

---

## Event System Architecture

### Core Files

1. **constants.js** - Defines all event constants
2. **pubsub.js** - Implements pub/sub pattern
3. **Individual components** - Subscribe and publish events

### Why Pub/Sub?

- **Decoupled components**: Components don't need direct references
- **Flexible communication**: Add subscribers without modifying publishers
- **Easier testing**: Mock events for testing
- **Better maintainability**: Clear event contracts

---

## Event Constants

Defined in [assets/constants.js](../../../assets/constants.js):

```javascript
const PUB_SUB_EVENTS = {
  // Cart events
  cartUpdate: 'cart-update',
  cartError: 'cart-error',
  
  // Product events
  variantChange: 'variant-change',
  quantityUpdate: 'quantity-update',
  
  // UI events
  modalOpen: 'modal-open',
  modalClose: 'modal-close',
  drawerOpen: 'drawer-open',
  drawerClose: 'drawer-close',
  
  // Search events
  searchResultsUpdate: 'search-results-update'
};
```

**Always use these constants** instead of string literals.

---

## Core Events

### 1. Cart Update Event

**Event:** `PUB_SUB_EVENTS.cartUpdate`

**When Published:**
- Item added to cart
- Item removed from cart
- Quantity changed in cart
- Cart cleared

**Payload:**

```javascript
{
  cart: {
    item_count: 3,
    items: [...],
    total_price: 8999,
    currency: 'USD'
  },
  source: 'product-form' | 'cart-page' | 'quick-add'
}
```

**Subscribe:**

```javascript
subscribe(PUB_SUB_EVENTS.cartUpdate, (data) => {
  console.log('Cart updated:', data.cart.item_count);
  updateCartCount(data.cart.item_count);
});
```

**Publish:**

```javascript
publish(PUB_SUB_EVENTS.cartUpdate, {
  cart: updatedCart,
  source: 'product-form'
});
```

**Subscribers:**
- Cart drawer
- Cart notification
- Cart count badge
- Sticky ATC mobile

---

### 2. Variant Change Event

**Event:** `PUB_SUB_EVENTS.variantChange`

**When Published:**
- User selects different color
- User selects different size
- URL parameter changes variant

**Payload:**

```javascript
{
  variant: {
    id: 12345678,
    title: 'Blue / Large',
    price: 2999,
    compare_at_price: 3999,
    available: true,
    featured_image: { src: '...' },
    options: ['Blue', 'Large']
  },
  product: {
    id: 87654321,
    title: 'Custom T-Shirt',
    // ... full product object
  }
}
```

**Subscribe:**

```javascript
subscribe(PUB_SUB_EVENTS.variantChange, (data) => {
  if (data.variant) {
    updatePrice(data.variant.price);
    updateAvailability(data.variant.available);
  }
});
```

**Publish:**

```javascript
publish(PUB_SUB_EVENTS.variantChange, {
  variant: selectedVariant,
  product: this.product
});
```

**Subscribers:**
- Price component
- Sticky ATC mobile (price update)
- Product form (availability)
- Media gallery (update image)
- SKU display

---

### 3. Quantity Update Event

**Event:** `PUB_SUB_EVENTS.quantityUpdate`

**When Published:**
- User changes quantity in product form
- User changes quantity in cart
- Quantity popover updated

**Payload:**

```javascript
{
  quantity: 3,
  source: 'product-form' | 'cart-item' | 'quick-add',
  itemId: '12345:67890' // For cart items
}
```

**Subscribe:**

```javascript
subscribe(PUB_SUB_EVENTS.quantityUpdate, (data) => {
  console.log('Quantity changed to:', data.quantity);
});
```

**Publish:**

```javascript
publish(PUB_SUB_EVENTS.quantityUpdate, {
  quantity: newQuantity,
  source: 'product-form'
});
```

---

### 4. Cart Error Event

**Event:** `PUB_SUB_EVENTS.cartError`

**When Published:**
- Add to cart fails
- Inventory insufficient
- Network error

**Payload:**

```javascript
{
  message: 'This product is sold out',
  description: 'Please check back later',
  source: 'product-form'
}
```

**Subscribe:**

```javascript
subscribe(PUB_SUB_EVENTS.cartError, (data) => {
  showErrorNotification(data.message);
});
```

**Publish:**

```javascript
publish(PUB_SUB_EVENTS.cartError, {
  message: error.message || 'Unable to add to cart',
  description: error.description,
  source: 'product-form'
});
```

---

## Modal & Drawer Events

### Modal Open

**Event:** `PUB_SUB_EVENTS.modalOpen`

**Payload:**

```javascript
{
  modalId: 'size-guide-modal',
  trigger: 'button' | 'link'
}
```

**Usage:**

```javascript
// Publish
document.getElementById('size-guide-btn').addEventListener('click', () => {
  publish(PUB_SUB_EVENTS.modalOpen, { modalId: 'size-guide-modal' });
});

// Subscribe
subscribe(PUB_SUB_EVENTS.modalOpen, (data) => {
  analytics.track('Modal Opened', { modal: data.modalId });
});
```

### Modal Close

**Event:** `PUB_SUB_EVENTS.modalClose`

**Similar pattern** to modalOpen.

---

## Search Events

### Search Results Update

**Event:** `PUB_SUB_EVENTS.searchResultsUpdate`

**Payload:**

```javascript
{
  query: 'blue shirt',
  results: [...],
  count: 12
}
```

---

## Pub/Sub API

Defined in [assets/pubsub.js](../../../assets/pubsub.js):

### subscribe()

Subscribe to an event.

**Signature:**

```javascript
subscribe(eventName, callback)
```

**Parameters:**
- `eventName` - String (use constants from `PUB_SUB_EVENTS`)
- `callback` - Function to call when event published

**Returns:** Subscription ID (for unsubscribing)

**Example:**

```javascript
const subscriptionId = subscribe(PUB_SUB_EVENTS.cartUpdate, (data) => {
  console.log('Cart updated:', data);
});
```

### publish()

Publish an event to all subscribers.

**Signature:**

```javascript
publish(eventName, data = {})
```

**Parameters:**
- `eventName` - String (use constants)
- `data` - Object with event payload

**Example:**

```javascript
publish(PUB_SUB_EVENTS.variantChange, {
  variant: selectedVariant,
  product: productData
});
```

### unsubscribe()

Remove a subscription.

**Signature:**

```javascript
unsubscribe(subscriptionId)
```

**Example:**

```javascript
const id = subscribe(PUB_SUB_EVENTS.cartUpdate, callback);

// Later...
unsubscribe(id);
```

---

## Component Implementation Patterns

### Subscribing in Web Components

```javascript
class ProductForm extends HTMLElement {
  connectedCallback() {
    // Subscribe when component mounts
    this.cartUpdateSubscription = subscribe(
      PUB_SUB_EVENTS.cartUpdate, 
      this.handleCartUpdate.bind(this)
    );
  }
  
  disconnectedCallback() {
    // Unsubscribe when component unmounts
    if (this.cartUpdateSubscription) {
      unsubscribe(this.cartUpdateSubscription);
    }
  }
  
  handleCartUpdate(data) {
    console.log('Cart updated:', data);
  }
}
```

### Publishing from Component

```javascript
class VariantPicker extends HTMLElement {
  onVariantChange(event) {
    const selectedVariant = this.getSelectedVariant();
    
    // Publish variant change
    publish(PUB_SUB_EVENTS.variantChange, {
      variant: selectedVariant,
      product: this.product
    });
  }
}
```

---

## Custom Events (DOM Events)

Some components also use native DOM custom events:

### Cart Drawer Events

```javascript
// Open cart drawer
document.dispatchEvent(new CustomEvent('cart:open'));

// Close cart drawer
document.dispatchEvent(new CustomEvent('cart:close'));

// Listen
document.addEventListener('cart:open', () => {
  console.log('Cart drawer opened');
});
```

### Size Guide Events

```javascript
// Open size guide
document.dispatchEvent(new CustomEvent('sizeGuide:open'));

// Tab changed
document.dispatchEvent(new CustomEvent('sizeGuide:tabChange', {
  detail: { tab: 'hoodie' }
}));
```

---

## Debugging Events

### Log All Events

```javascript
// In browser console
['cartUpdate', 'variantChange', 'quantityUpdate'].forEach(eventName => {
  subscribe(PUB_SUB_EVENTS[eventName], (data) => {
    console.log(`[${eventName}]`, data);
  });
});
```

### Inspect Event Data

```javascript
subscribe(PUB_SUB_EVENTS.cartUpdate, (data) => {
  console.table(data.cart.items);
  debugger; // Pause execution
});
```

---

## Best Practices

### 1. Always Use Constants

✅ **Good:**
```javascript
publish(PUB_SUB_EVENTS.cartUpdate, data);
```

❌ **Bad:**
```javascript
publish('cart-update', data); // Typo-prone
```

### 2. Provide Complete Payload

✅ **Good:**
```javascript
publish(PUB_SUB_EVENTS.variantChange, {
  variant: selectedVariant,
  product: productData,
  source: 'variant-picker'
});
```

❌ **Bad:**
```javascript
publish(PUB_SUB_EVENTS.variantChange, selectedVariant); // Missing context
```

### 3. Clean Up Subscriptions

```javascript
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.subscriptions = [];
    
    this.subscriptions.push(
      subscribe(PUB_SUB_EVENTS.cartUpdate, this.handleUpdate)
    );
  }
  
  disconnectedCallback() {
    this.subscriptions.forEach(unsubscribe);
  }
}
```

### 4. Handle Missing Data

```javascript
subscribe(PUB_SUB_EVENTS.variantChange, (data) => {
  if (!data || !data.variant) {
    console.warn('Variant data missing');
    return;
  }
  
  updateUI(data.variant);
});
```

### 5. Debounce Frequent Events

```javascript
let debounceTimer;

subscribe(PUB_SUB_EVENTS.quantityUpdate, (data) => {
  clearTimeout(debounceTimer);
  
  debounceTimer = setTimeout(() => {
    updateCart(data.quantity);
  }, ON_CHANGE_DEBOUNCE_TIMER); // 300ms from constants.js
});
```

---

## Creating Custom Events

### Define Event Constant

Edit `assets/constants.js`:

```javascript
const PUB_SUB_EVENTS = {
  // ... existing events
  
  // Your custom event
  customFeature: 'custom-feature-update'
};
```

### Publish Custom Event

```javascript
publish(PUB_SUB_EVENTS.customFeature, {
  customData: 'value',
  timestamp: Date.now()
});
```

### Subscribe to Custom Event

```javascript
subscribe(PUB_SUB_EVENTS.customFeature, (data) => {
  console.log('Custom feature:', data);
});
```

---

## Event Flow Examples

### Add to Cart Flow

1. **User clicks "Add to Cart"**
2. **Product form** submits to Shopify `/cart/add.js`
3. **On success**, product form publishes:
   ```javascript
   publish(PUB_SUB_EVENTS.cartUpdate, { cart: newCart });
   ```
4. **Subscribers react**:
   - Cart drawer opens
   - Cart count updates
   - Cart notification shows
   - Analytics tracks event

### Variant Change Flow

1. **User selects "Blue / Large"**
2. **Variant picker** calculates selected variant
3. **Publishes**:
   ```javascript
   publish(PUB_SUB_EVENTS.variantChange, { variant: selected });
   ```
4. **Subscribers react**:
   - Price updates
   - Sticky ATC updates price
   - Featured image changes
   - Availability updates
   - URL updates (if configured)

---

## Performance Considerations

### Event Frequency

- **High frequency**: quantity changes, scroll events
- **Medium frequency**: variant changes, search queries
- **Low frequency**: cart updates, modal opens

**Optimize high-frequency events** with debouncing:

```javascript
const debouncedUpdate = debounce((data) => {
  expensiveOperation(data);
}, 300);

subscribe(PUB_SUB_EVENTS.quantityUpdate, debouncedUpdate);
```

### Subscriber Count

- Keep subscriber count reasonable (<10 per event)
- Unsubscribe when components unmount
- Avoid duplicate subscriptions

---

## Testing Events

### Unit Testing

```javascript
// Mock subscribe/publish
const mockPublish = jest.fn();
const mockSubscribe = jest.fn();

global.publish = mockPublish;
global.subscribe = mockSubscribe;

// Test component publishes correctly
component.onVariantChange();
expect(mockPublish).toHaveBeenCalledWith(
  PUB_SUB_EVENTS.variantChange,
  expect.objectContaining({ variant: expect.any(Object) })
);
```

### Manual Testing

1. Open browser console
2. Monitor events:
   ```javascript
   subscribe(PUB_SUB_EVENTS.cartUpdate, console.log);
   ```
3. Trigger action (add to cart)
4. Verify event payload

---

## Troubleshooting

### Event Not Firing

**Check:**
1. `constants.js` loaded before component
2. `pubsub.js` loaded before component
3. Correct event name used (check for typos)
4. `publish()` actually called (add console.log)

### Subscriber Not Responding

**Check:**
1. Subscription registered correctly
2. Callback function defined
3. No errors in callback (check console)
4. Event payload matches expected structure

### Multiple Subscriptions

**Issue:** Event handler called multiple times

**Cause:** Component subscribing multiple times (e.g., in loop)

**Fix:** Subscribe once in `connectedCallback`, unsubscribe in `disconnectedCallback`

---

**Related:** [Liquid Snippets](liquid-snippets.md) • [CSS Variables](css-variables.md) • [Architecture](../ARCHITECTURE.md)
