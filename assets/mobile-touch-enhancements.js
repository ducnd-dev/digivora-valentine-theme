/**
 * Mobile Touch Enhancements
 * Improves touch interactions and mobile UX for POD store
 */

class MobileTouchEnhancements {
  constructor() {
    this.init();
  }

  init() {
    if (!this.isMobileDevice()) return;

    this.enhanceProductImages();
    this.improveTouchTargets();
    this.addSwipeGestures();
    this.optimizeScrolling();
    this.addTouchFeedback();
  }

  /**
   * Check if device is mobile
   */
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth <= 749;
  }

  /**
   * Enhance product image interactions for touch
   */
  enhanceProductImages() {
    const productImages = document.querySelectorAll('.product__media img');
    
    productImages.forEach(img => {
      let touchStartX = 0;
      let touchStartY = 0;
      
      img.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });
      
      img.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = Math.abs(touchEndX - touchStartX);
        const deltaY = Math.abs(touchEndY - touchStartY);
        
        // If it's a tap (not a swipe), trigger zoom
        if (deltaX < 10 && deltaY < 10) {
          const zoomTrigger = document.querySelector('[data-product-zoom-trigger]');
          if (zoomTrigger) {
            zoomTrigger.click();
          }
        }
      });
    });
  }

  /**
   * Improve touch target sizes for mobile
   */
  improveTouchTargets() {
    // Ensure minimum 44x44px touch targets
    const smallButtons = document.querySelectorAll('button, a, input[type="checkbox"], input[type="radio"]');
    
    smallButtons.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      if (rect.width < 44 || rect.height < 44) {
        element.style.minWidth = '44px';
        element.style.minHeight = '44px';
        element.style.display = 'inline-flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
      }
    });
  }

  /**
   * Add swipe gestures for product gallery
   */
  addSwipeGestures() {
    const mediaGallery = document.querySelector('.product__media-list');
    if (!mediaGallery) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let currentIndex = 0;
    const items = mediaGallery.querySelectorAll('.product__media-item');
    
    mediaGallery.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    mediaGallery.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;
      this.handleSwipe(touchStartX, touchEndX, items, currentIndex);
    });
  }

  /**
   * Handle swipe gesture
   */
  handleSwipe(startX, endX, items, currentIndex) {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < items.length - 1) {
        // Swipe left - next image
        currentIndex++;
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right - previous image
        currentIndex--;
      }
      
      if (items[currentIndex]) {
        items[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  /**
   * Optimize scrolling performance
   */
  optimizeScrolling() {
    // Use passive event listeners for scroll events
    document.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
  }

  /**
   * Handle scroll event
   */
  handleScroll() {
    // Show/hide sticky elements based on scroll
    const stickyATC = document.querySelector('.sticky-atc-mobile');
    if (!stickyATC) return;

    if (window.scrollY > 300) {
      stickyATC.classList.add('visible');
    } else {
      stickyATC.classList.remove('visible');
    }
  }

  /**
   * Handle touch move event
   */
  handleTouchMove() {
    // Prevent body scroll when modal is open
    const openModals = document.querySelectorAll('dialog[open], .modal.active');
    if (openModals.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Add visual feedback for touch interactions
   */
  addTouchFeedback() {
    const interactiveElements = document.querySelectorAll('button, a, .card, .filter-option');
    
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', function() {
        this.style.transition = 'opacity 0.1s';
        this.style.opacity = '0.7';
      }, { passive: true });
      
      element.addEventListener('touchend', function() {
        setTimeout(() => {
          this.style.opacity = '';
        }, 100);
      }, { passive: true });
    });
  }

  /**
   * Prevent double-tap zoom on specific elements
   */
  preventDoubleTapZoom(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      let lastTap = 0;
      
      element.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 300 && tapLength > 0) {
          e.preventDefault();
        }
        
        lastTap = currentTime;
      });
    });
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MobileTouchEnhancements();
  });
} else {
  new MobileTouchEnhancements();
}

// Add mobile-specific CSS enhancements
const style = document.createElement('style');
style.textContent = `
  /* Mobile Touch Enhancements */
  @media screen and (max-width: 749px) {
    /* Larger touch targets */
    button, a, input[type="checkbox"], input[type="radio"] {
      min-width: 44px !important;
      min-height: 44px !important;
    }
    
    /* Smooth scrolling */
    html {
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
    }
    
    /* Prevent text selection on tap */
    .product__media img,
    .card-product,
    button {
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }
    
    /* Active state feedback */
    button:active,
    a:active,
    .card:active {
      opacity: 0.7;
      transform: scale(0.98);
    }
    
    /* Smooth transitions */
    * {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    /* Optimize image rendering */
    img {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    
    /* Prevent zoom on input focus */
    input, textarea, select {
      font-size: 16px !important;
    }
  }
`;
document.head.appendChild(style);
