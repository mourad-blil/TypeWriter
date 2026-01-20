/**
 * Typewriter Effect - A reusable, self-contained typewriter animation
 * Perfect for embedding in Bubble.io or any website
 * 
 * @version 1.0.0
 * @license MIT
 */

class Typewriter {
  constructor(element, options = {}) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    
    if (!this.element) {
      console.error('Typewriter: Element not found');
      return;
    }

    // Default options
    this.options = {
      texts: options.texts || ['Hello World!'],
      typeSpeed: options.typeSpeed || 100,
      deleteSpeed: options.deleteSpeed || 50,
      pauseTime: options.pauseTime || 2000,
      loop: options.loop !== undefined ? options.loop : true,
      cursor: options.cursor !== undefined ? options.cursor : true,
      cursorChar: options.cursorChar || '|',
      startDelay: options.startDelay || 0,
      onComplete: options.onComplete || null,
      onType: options.onType || null,
      onDelete: options.onDelete || null
    };

    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isRunning = false;
    this.currentText = '';
    
    this.init();
  }

  init() {
    // Add cursor if enabled
    if (this.options.cursor) {
      this.element.classList.add('typewriter-cursor');
      this.element.style.setProperty('--cursor-char', `"${this.options.cursorChar}"`);
    }

    // Start typing after delay
    if (this.options.startDelay > 0) {
      setTimeout(() => this.start(), this.options.startDelay);
    } else {
      this.start();
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.type();
  }

  stop() {
    this.isRunning = false;
  }

  type() {
    if (!this.isRunning) return;

    const currentFullText = this.options.texts[this.textIndex];
    
    if (this.isDeleting) {
      this.currentText = currentFullText.substring(0, this.charIndex - 1);
      this.charIndex--;
      
      if (this.options.onDelete) {
        this.options.onDelete(this.currentText);
      }
    } else {
      this.currentText = currentFullText.substring(0, this.charIndex + 1);
      this.charIndex++;
      
      if (this.options.onType) {
        this.options.onType(this.currentText);
      }
    }

    this.element.textContent = this.currentText;

    let typeDelay = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;

    // Add some variation to typing speed for more natural effect
    typeDelay += Math.random() * 50;

    if (!this.isDeleting && this.charIndex === currentFullText.length) {
      // Finished typing current text
      typeDelay = this.options.pauseTime;
      
      // Check if we should loop or move to next text
      if (this.textIndex === this.options.texts.length - 1 && !this.options.loop) {
        // Last text and not looping
        if (this.options.onComplete) {
          this.options.onComplete();
        }
        this.isRunning = false;
        return;
      }
      
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Finished deleting
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.options.texts.length;
      typeDelay = 500; // Brief pause before starting next text
    }

    setTimeout(() => this.type(), typeDelay);
  }

  // Public methods for control
  updateTexts(texts) {
    this.options.texts = texts;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }

  destroy() {
    this.stop();
    this.element.textContent = '';
    this.element.classList.remove('typewriter-cursor');
  }
}

// Auto-initialize from HTML data attributes
function initTypewritersFromDOM() {
  const elements = document.querySelectorAll('[data-typewriter]');
  
  elements.forEach(element => {
    const texts = element.dataset.typewriterTexts 
      ? element.dataset.typewriterTexts.split('|') 
      : ['Hello World!'];
    
    const options = {
      texts: texts,
      typeSpeed: parseInt(element.dataset.typewriterSpeed) || 100,
      deleteSpeed: parseInt(element.dataset.typewriterDeleteSpeed) || 50,
      pauseTime: parseInt(element.dataset.typewriterPause) || 2000,
      loop: element.dataset.typewriterLoop !== 'false',
      cursor: element.dataset.typewriterCursor !== 'false',
      cursorChar: element.dataset.typewriterCursorChar || '|',
      startDelay: parseInt(element.dataset.typewriterDelay) || 0
    };

    new Typewriter(element, options);
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTypewritersFromDOM);
} else {
  initTypewritersFromDOM();
}

// Export for use as module or global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Typewriter;
} else {
  window.Typewriter = Typewriter;
}
