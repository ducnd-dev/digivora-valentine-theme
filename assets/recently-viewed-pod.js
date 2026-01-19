/**
 * Recently Viewed Products Tracker
 * Stores and displays products that the customer has recently viewed
 * Uses localStorage for persistence across sessions
 */

class RecentlyViewedProducts {
  constructor() {
    this.storageKey = 'digivora_recently_viewed';
    this.maxProducts = 8;
    this.currentProductId = this.getCurrentProductId();
    
    if (this.currentProductId) {
      this.saveProduct();
    }
    
    this.renderRecentlyViewed();
  }
  
  /**
   * Get current product ID from page
   */
  getCurrentProductId() {
    const productElement = document.querySelector('[data-product-id]');
    return productElement ? productElement.dataset.productId : null;
  }
  
  /**
   * Save current product to recently viewed list
   */
  saveProduct() {
    if (!this.currentProductId) return;
    
    const productData = {
      id: this.currentProductId,
      title: document.querySelector('.product__title')?.textContent.trim() || 'Product',
      url: window.location.pathname,
      image: document.querySelector('.product__media img')?.src || '',
      price: document.querySelector('.price__regular .price-item')?.textContent.trim() || '',
      timestamp: Date.now()
    };
    
    let recentProducts = this.getRecentProducts();
    
    // Remove current product if it already exists
    recentProducts = recentProducts.filter(p => p.id !== this.currentProductId);
    
    // Add current product to beginning
    recentProducts.unshift(productData);
    
    // Keep only max number of products
    recentProducts = recentProducts.slice(0, this.maxProducts);
    
    // Save to localStorage
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(recentProducts));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }
  
  /**
   * Get recently viewed products from localStorage
   */
  getRecentProducts() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
      return [];
    }
  }
  
  /**
   * Render recently viewed products section
   */
  renderRecentlyViewed() {
    const container = document.getElementById('recently-viewed-products');
    if (!container) return;
    
    const recentProducts = this.getRecentProducts();
    
    // Filter out current product
    const productsToShow = recentProducts.filter(p => p.id !== this.currentProductId);
    
    if (productsToShow.length === 0) {
      container.style.display = 'none';
      return;
    }
    
    const html = `
      <div class="recently-viewed-pod">
        <div class="recently-viewed-pod__header">
          <h2 class="recently-viewed-pod__title">Recently Viewed</h2>
          <button class="recently-viewed-pod__clear" data-clear-recently-viewed>
            Clear History
          </button>
        </div>
        
        <div class="recently-viewed-pod__grid">
          ${productsToShow.map(product => this.renderProductCard(product)).join('')}
        </div>
      </div>
    `;
    
    container.innerHTML = html;
    container.style.display = 'block';
    
    // Attach clear button event
    const clearButton = container.querySelector('[data-clear-recently-viewed]');
    if (clearButton) {
      clearButton.addEventListener('click', () => this.clearHistory());
    }
  }
  
  /**
   * Render individual product card
   */
  renderProductCard(product) {
    return `
      <a href="${product.url}" class="recently-viewed-card">
        <div class="recently-viewed-card__image">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
        </div>
        <div class="recently-viewed-card__info">
          <h3 class="recently-viewed-card__title">${product.title}</h3>
          <span class="recently-viewed-card__price">${product.price}</span>
        </div>
      </a>
    `;
  }
  
  /**
   * Clear recently viewed history
   */
  clearHistory() {
    try {
      localStorage.removeItem(this.storageKey);
      const container = document.getElementById('recently-viewed-products');
      if (container) {
        container.style.display = 'none';
      }
    } catch (e) {
      console.warn('Could not clear localStorage:', e);
    }
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new RecentlyViewedProducts();
  });
} else {
  new RecentlyViewedProducts();
}
