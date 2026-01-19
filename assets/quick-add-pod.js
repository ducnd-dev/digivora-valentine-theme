// Quick Add to Cart functionality
class QuickAddPOD {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-quick-add-trigger]');
      if (trigger) {
        const productId = trigger.dataset.quickAddTrigger;
        this.openModal(productId);
      }

      const closeBtn = e.target.closest('[data-quick-add-close]');
      if (closeBtn) {
        const modal = closeBtn.closest('[data-quick-add-modal]');
        this.closeModal(modal);
      }

      const decreaseBtn = e.target.closest('[data-quantity-decrease]');
      if (decreaseBtn) {
        this.updateQuantity(decreaseBtn, -1);
      }

      const increaseBtn = e.target.closest('[data-quantity-increase]');
      if (increaseBtn) {
        this.updateQuantity(increaseBtn, 1);
      }
    });

    // Handle variant/option changes
    document.addEventListener('change', (e) => {
      const optionInput = e.target.closest('[data-quick-add-option]');
      if (optionInput) {
        this.handleVariantChange(optionInput);
      }
    });

    // Handle form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target.closest('[data-type="add-to-cart-form"]');
      if (form && form.closest('.quick-add-pod__form')) {
        e.preventDefault();
        this.handleAddToCart(form);
      }
    });

    // Close modal on backdrop click
    document.addEventListener('click', (e) => {
      const modal = e.target.closest('[data-quick-add-modal]');
      if (modal && e.target === modal) {
        this.closeModal(modal);
      }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('[data-quick-add-modal][open]');
        if (openModal) {
          this.closeModal(openModal);
        }
      }
    });
  }

  openModal(productId) {
    const modal = document.getElementById(`quick-add-modal-${productId}`);
    if (modal) {
      modal.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modal) {
    if (modal) {
      modal.close();
      document.body.style.overflow = '';
      
      // Reset form
      const form = modal.querySelector('form');
      if (form) {
        form.reset();
      }
      
      // Hide error
      const error = modal.querySelector('[data-quick-add-error]');
      if (error) {
        error.style.display = 'none';
      }
    }
  }

  updateQuantity(button, delta) {
    const modal = button.closest('[data-quick-add-modal]');
    const input = modal.querySelector('[data-quick-add-quantity]');
    
    if (input) {
      const currentValue = parseInt(input.value) || 1;
      const newValue = Math.max(1, currentValue + delta);
      input.value = newValue;
    }
  }

  handleVariantChange(input) {
    const form = input.closest('form');
    const modal = input.closest('[data-quick-add-modal]');
    
    if (!form || !modal) return;

    // Get all selected options
    const selectedOptions = [];
    const optionInputs = form.querySelectorAll('[data-quick-add-option]');
    
    optionInputs.forEach(input => {
      if (input.type === 'radio') {
        if (input.checked) {
          selectedOptions.push(input.value);
        }
      } else if (input.type === 'select-one') {
        selectedOptions.push(input.value);
      }
    });

    // Find matching variant
    this.findAndUpdateVariant(modal, selectedOptions);
  }

  async findAndUpdateVariant(modal, selectedOptions) {
    const productId = modal.id.replace('quick-add-modal-', '');
    
    try {
      // Fetch product data
      const response = await fetch(`/products/${productId}.js`);
      const product = await response.json();
      
      // Find variant that matches selected options
      const variant = product.variants.find(v => {
        const variantOptions = [v.option1, v.option2, v.option3].filter(Boolean);
        return JSON.stringify(variantOptions) === JSON.stringify(selectedOptions);
      });

      if (variant) {
        // Update variant ID
        const variantInput = modal.querySelector('[data-quick-add-variant-id]');
        if (variantInput) {
          variantInput.value = variant.id;
        }

        // Update price
        const priceEl = modal.querySelector('[data-quick-add-price]');
        if (priceEl) {
          priceEl.textContent = this.formatMoney(variant.price);
        }

        // Update button state
        const submitBtn = modal.querySelector('[data-quick-add-submit]');
        const btnText = modal.querySelector('[data-quick-add-button-text]');
        
        if (variant.available) {
          submitBtn.disabled = false;
          if (btnText) btnText.textContent = 'Add to Cart';
        } else {
          submitBtn.disabled = true;
          if (btnText) btnText.textContent = 'Sold Out';
        }
      }
    } catch (error) {
      console.error('Error fetching variant:', error);
    }
  }

  async handleAddToCart(form) {
    const modal = form.closest('[data-quick-add-modal]');
    const submitBtn = form.querySelector('[data-quick-add-submit]');
    const btnText = submitBtn.querySelector('[data-quick-add-button-text]');
    const spinner = submitBtn.querySelector('.loading-spinner');
    const errorEl = modal.querySelector('[data-quick-add-error]');

    // Show loading state
    btnText.style.display = 'none';
    spinner.style.display = 'block';
    submitBtn.disabled = true;

    // Hide previous errors
    errorEl.style.display = 'none';

    try {
      const formData = new FormData(form);
      
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      const data = await response.json();

      // Success! Update cart
      this.updateCart();

      // Show success feedback
      btnText.textContent = 'Added! ✓';
      btnText.style.display = 'block';
      spinner.style.display = 'none';

      // Close modal after 1 second
      setTimeout(() => {
        this.closeModal(modal);
        
        // Reset button text
        setTimeout(() => {
          btnText.textContent = 'Add to Cart';
          submitBtn.disabled = false;
        }, 300);
      }, 1000);

      // Publish cart update event
      if (typeof publish !== 'undefined' && typeof PUB_SUB_EVENTS !== 'undefined') {
        const cartResponse = await fetch('/cart.js');
        const cart = await cartResponse.json();
        
        publish(PUB_SUB_EVENTS.cartUpdate, {
          cart: cart,
          source: 'quick-add'
        });
      }

    } catch (error) {
      console.error('Error adding to cart:', error);
      
      // Show error
      errorEl.textContent = error.message || 'Failed to add to cart. Please try again.';
      errorEl.style.display = 'block';
      
      // Reset button
      btnText.style.display = 'block';
      spinner.style.display = 'none';
      submitBtn.disabled = false;
    }
  }

  async updateCart() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      // Update cart count
      const cartCountElements = document.querySelectorAll('[data-cart-count]');
      cartCountElements.forEach(el => {
        el.textContent = cart.item_count;
      });

      // Open cart drawer if it exists
      const cartDrawer = document.querySelector('cart-drawer');
      if (cartDrawer) {
        cartDrawer.open();
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  }

  formatMoney(cents) {
    const dollars = cents / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(dollars);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new QuickAddPOD());
} else {
  new QuickAddPOD();
}
