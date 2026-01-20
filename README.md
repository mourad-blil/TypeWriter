# ⌨️ Typewriter Effect

A lightweight, self-contained typewriter animation effect perfect for embedding in **Bubble.io** or any website. No frameworks, no build tools, no dependencies—just vanilla JavaScript.

## ✨ Features

- 🎯 **Zero Dependencies** - Pure vanilla JavaScript
- 🚀 **Lightweight** - Less than 3KB minified
- 🎨 **Fully Customizable** - Speed, cursor, loop, and more
- 📱 **Responsive** - Works on all screen sizes
- 🔧 **Two Usage Methods** - HTML data attributes or JavaScript API
- 🎭 **Production Ready** - Clean, tested, and well-documented
- 🌐 **Bubble.io Optimized** - Easy to embed via HTML element

## 📦 Files Included

```
CCRM Typing/
├── typewriter.js          # Main JavaScript file
├── typewriter.css         # Styling and cursor animation
├── index.html            # Full demo with examples
├── bubble-embed.html     # Bubble.io embedding guide
└── README.md            # This file
```

## 🚀 Quick Start

### Method 1: HTML Data Attributes (Easiest)

```html
<!-- Include the files -->
<link rel="stylesheet" href="typewriter.css">
<script src="typewriter.js"></script>

<!-- Add to your HTML -->
<div 
  data-typewriter
  data-typewriter-texts="Hello World!|Welcome|Type away!"
  data-typewriter-speed="100">
</div>
```

### Method 2: JavaScript API (More Control)

```html
<div id="my-typewriter"></div>

<script>
  const typewriter = new Typewriter('#my-typewriter', {
    texts: ['Hello World!', 'Welcome!', 'Type away!'],
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseTime: 2000,
    loop: true,
    cursor: true,
    cursorChar: '|'
  });
</script>
```

## 🎮 Configuration Options

### HTML Data Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-typewriter` | - | - | Required to auto-initialize |
| `data-typewriter-texts` | string | "Hello World!" | Texts separated by `\|` |
| `data-typewriter-speed` | number | 100 | Typing speed (ms per character) |
| `data-typewriter-delete-speed` | number | 50 | Delete speed (ms per character) |
| `data-typewriter-pause` | number | 2000 | Pause after typing (ms) |
| `data-typewriter-loop` | boolean | true | Loop through texts |
| `data-typewriter-cursor` | boolean | true | Show blinking cursor |
| `data-typewriter-cursor-char` | string | "\|" | Cursor character |
| `data-typewriter-delay` | number | 0 | Start delay (ms) |

### JavaScript Options

```javascript
{
  texts: ['Text 1', 'Text 2'],        // Array of texts to type
  typeSpeed: 100,                      // Typing speed in ms
  deleteSpeed: 50,                     // Deleting speed in ms
  pauseTime: 2000,                     // Pause duration in ms
  loop: true,                          // Loop through texts
  cursor: true,                        // Show cursor
  cursorChar: '|',                     // Cursor character
  startDelay: 0,                       // Delay before start in ms
  onComplete: function() {},           // Callback when done
  onType: function(text) {},           // Callback on each type
  onDelete: function(text) {}          // Callback on each delete
}
```

## 🎯 Bubble.io Integration

### Option A: Single HTML Element (Recommended)

1. Add an **HTML element** to your Bubble page
2. Paste this complete code:

```html
<style>
  .typewriter-cursor::after {
    content: var(--cursor-char, '|');
    animation: typewriter-blink 0.7s step-end infinite;
    margin-left: 2px;
  }
  @keyframes typewriter-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .typewriter-container {
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    min-height: 1.5em;
    display: inline-block;
  }
</style>

<div 
  class="typewriter-container" 
  data-typewriter
  data-typewriter-texts="Your text|Another text|More text"
  data-typewriter-speed="100">
</div>

<script>
  // Paste the entire typewriter.js content here
  // (See typewriter.js file)
</script>
```

### Option B: External Files

1. Host `typewriter.js` and `typewriter.css` on a CDN or your server
2. Add to Bubble's **Settings → SEO/Metatags → Script/meta tags in header**:

```html
<link rel="stylesheet" href="https://your-domain.com/typewriter.css">
<script src="https://your-domain.com/typewriter.js"></script>
```

3. Add HTML element in your page:

```html
<div 
  class="typewriter-container" 
  data-typewriter
  data-typewriter-texts="Your text here"
  data-typewriter-speed="100">
</div>
```

### Option C: Dynamic with Workflows

Use Bubble's "Run JavaScript" action in workflows:

```javascript
const typewriter = new Typewriter('#my-typewriter', {
  texts: ['Dynamic text from Bubble!'],
  typeSpeed: 100,
  loop: true
});
```

## 🎨 Styling Examples

### Change Font and Size

```css
.typewriter-container {
  font-family: 'Arial', sans-serif;
  font-size: 32px;
  color: #333;
  font-weight: bold;
}
```

### Custom Cursor Style

```html
<div 
  data-typewriter
  data-typewriter-texts="Custom cursor!"
  data-typewriter-cursor-char="▊">
</div>
```

### Different Cursor Animations

```css
/* Block cursor */
.typewriter-cursor.cursor-block::after {
  background-color: currentColor;
  content: '\00a0';
}

/* Underline cursor */
.typewriter-cursor.cursor-underline::after {
  content: '_';
}
```

## 🔧 JavaScript API Methods

```javascript
const typewriter = new Typewriter('#element', options);

// Control methods
typewriter.start();                        // Start typing
typewriter.stop();                         // Stop typing
typewriter.updateTexts(['New text']);      // Change texts
typewriter.destroy();                      // Clean up
```

## 📱 Responsive Design

The typewriter automatically adapts to container size. For mobile:

```css
@media (max-width: 768px) {
  .typewriter-container {
    font-size: 18px;
  }
}
```

## 🎯 Use Cases

- Hero section animations
- Landing page headlines
- Call-to-action messages
- Dynamic testimonials
- Feature highlights
- Marketing copy
- Loading states

## 🐛 Troubleshooting

### Typewriter not starting?

- Ensure the element exists before initializing
- Check that `typewriter.js` is loaded
- Verify data attributes are spelled correctly

### Cursor not showing?

- Include `typewriter.css`
- Check that `cursor: true` or `data-typewriter-cursor` is not set to `false`

### Text not looping?

- Set `loop: true` or `data-typewriter-loop="true"`
- Check that you have multiple texts to cycle through

## 📄 License

MIT License - Free to use in personal and commercial projects.

## 🤝 Support

For issues or questions:
- Check the demo: `index.html`
- Review Bubble.io examples: `bubble-embed.html`
- Inspect the code: `typewriter.js`

## 🎉 Examples

Check out `index.html` for 6 live demos including:
1. Basic usage
2. Fast typing
3. Custom cursor
4. Single type (no loop)
5. JavaScript API control
6. Without cursor

---

Made with ❤️ for easy embedding anywhere, especially Bubble.io!
