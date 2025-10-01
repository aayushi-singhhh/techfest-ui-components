# TechFest IIT Bombay - Interactive UI Components

This project showcases three fully accessible, reusable UI components built with vanilla JavaScript for TechFest IIT Bombay 2025. The components demonstrate modern web development practices with comprehensive accessibility features and unit testing.

## 🎯 Project Overview

**TechFest IIT Bombay** is Asia's largest science and technology festival, attracting 1.5 lakh+ visitors and participants from 2000+ colleges. This project creates interactive UI components to enhance the digital experience for TechFest attendees.

### Event Details
- **Dates:** December 16-18, 2025
- **Venue:** IIT Bombay Campus, Powai, Mumbai
- **Theme:** Innovation Beyond Boundaries - Technology for Tomorrow
- **Competitions:** 50+ events across robotics, programming, design & engineering

## 🚀 Live Demo

**[🌐 View Live Demo](https://aayushi-singhhh.github.io/techfest-ui-components/)**

**[📁 GitHub Repository](https://github.com/aayushi-singhhh/techfest-ui-components)**

## 📦 Components

### 1. Modal Dialog Component
**Purpose:** TechFest event registration modal with full accessibility features.

**Features:**
- Focus trap management
- ESC key to close
- Click outside to dismiss
- Keyboard navigation
- ARIA attributes for screen readers
- Body scroll lock when open
- Returns focus to trigger element

**API:**
```javascript
const modal = new Modal({
  title: 'Modal Title',           // Modal header title
  content: 'HTML content',        // Modal body content (HTML string)
  onOpen: function() {},          // Callback when modal opens
  onClose: function() {},         // Callback when modal closes
  closeOnOverlay: true,           // Allow clicking overlay to close
  closeOnEsc: true                // Allow ESC key to close
});

// Methods
modal.open();                     // Open the modal
modal.close();                    // Close the modal
modal.destroy();                  // Remove modal from DOM
```

### 2. Tabs Component
**Purpose:** TechFest competition categories with keyboard navigation.

**Features:**
- Arrow key navigation (← / →)
- Home/End key support
- Automatic tab activation
- ARIA roles and attributes
- Smooth content transitions
- Responsive design

**API:**
```javascript
const tabs = new Tabs('#container', {
  tabs: [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' }
  ],
  defaultTab: 0,                  // Index of initially active tab
  onChange: function(index) {}    // Callback when tab changes
});

// Methods
tabs.switchTab(index);            // Switch to specific tab
tabs.getActiveIndex();            // Get current active tab index
tabs.destroy();                   // Remove component from DOM
```

### 3. Carousel Component
**Purpose:** TechFest highlights showcase with touch and keyboard support.

**Features:**
- Touch swipe gestures
- Keyboard navigation (← / →)
- Click indicators for direct navigation
- Infinite loop option
- Auto-play functionality
- Accessible button controls
- ARIA labels and roles

**API:**
```javascript
const carousel = new Carousel('#container', {
  slides: ['Slide 1', 'Slide 2'], // Array of slide content (HTML strings)
  infinite: true,                  // Enable infinite looping
  autoPlay: false,                 // Enable auto-play
  autoPlayInterval: 3000,          // Auto-play interval in ms
  onChange: function(index) {}     // Callback when slide changes
});

// Methods
carousel.next();                  // Go to next slide
carousel.prev();                  // Go to previous slide
carousel.goToSlide(index);        // Go to specific slide
carousel.getCurrentIndex();       // Get current slide index
carousel.startAutoPlay();         // Start auto-play
carousel.stopAutoPlay();          // Stop auto-play
carousel.destroy();               // Remove component from DOM
```

## 🧪 Testing

The project includes comprehensive unit tests for all components using a custom test runner:

### Test Coverage:
- **Modal Tests:** Initialization, open/close functionality, callback triggers
- **Tabs Tests:** Default tab selection, tab switching, onChange callbacks
- **Carousel Tests:** Navigation, infinite loop, boundary conditions, callbacks

### Running Tests:
Tests run automatically when the page loads. View results in the "Unit Test Results" section at the bottom of the page.

```javascript
// Example test structure
runner.test('Modal: Creates with default options', () => {
  const modal = new Modal();
  assert(modal.options.title === 'Modal Title', 'Default title should be set');
  assert(modal.isOpen === false, 'Modal should be closed initially');
  modal.destroy();
});
```

## ♿ Accessibility Features

All components follow WCAG 2.1 AA guidelines:

### Modal:
- Focus trap prevents tabbing outside modal
- Proper ARIA roles (`dialog`, `aria-modal`)
- Labeled controls (`aria-label`, `aria-labelledby`)
- Keyboard support (ESC to close, Tab navigation)

### Tabs:
- Semantic HTML with proper roles (`tablist`, `tab`, `tabpanel`)
- ARIA states (`aria-selected`, `aria-controls`, `aria-hidden`)
- Keyboard navigation with arrow keys
- Focus management with `tabindex`

### Carousel:
- ARIA roles (`group`, `aria-roledescription`)
- Slide labels (`aria-label` with position info)
- Keyboard navigation support
- Focus indicators on controls

## 🛠️ Setup & Installation

### Prerequisites:
- Modern web browser with ES6+ support
- Web server (for testing touch events and proper CORS handling)

### Local Development:
1. Clone the repository:
   ```bash
   git clone https://github.com/aayushi-singhhh/techfest-ui-components.git
   cd techfest-ui-components
   ```

2. Serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using Live Server (VS Code extension)
   # Right-click on techfest.html and select "Open with Live Server"
   ```

3. Open `http://localhost:8000/techfest.html` in your browser

### Testing:
- Open browser developer tools
- Check console for any errors
- View unit test results on the page
- Test keyboard navigation (Tab, Arrow keys, ESC)
- Test touch gestures on mobile devices

## 🚢 Deployment

### GitHub Pages:
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (main/master)
4. Access site at `https://username.github.io/repository-name`

### Netlify:
1. Connect GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel:
1. Import project from GitHub
2. Configure as static site
3. Deploy with automatic SSL and CDN

## 🔧 Customization

### Styling:
- Modify CSS variables in the `<style>` section
- TechFest brand colors: `#FF6B35`, `#F7931E`, `#FFD23F`
- Responsive breakpoints defined for mobile devices

### Content:
- Update modal content in the Modal initialization
- Modify tab content in the Tabs configuration
- Change carousel slides in the Carousel setup

### Behavior:
- Adjust auto-play intervals
- Modify swipe sensitivity thresholds
- Configure keyboard navigation options

## 📱 Browser Support

- **Modern Browsers:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile:** iOS Safari 12+, Chrome Mobile 60+
- **Features Used:** ES6 classes, CSS Grid, Flexbox, CSS custom properties

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 About TechFest IIT Bombay

TechFest is the annual science and technology festival of IIT Bombay, one of India's premier engineering institutions. Since its inception, TechFest has grown to become Asia's largest science and technology festival, attracting participants from around the world.

### Key Highlights:
- **Scale:** 1.5 lakh+ visitors annually
- **Reach:** 2000+ participating colleges
- **Competitions:** 50+ events across various domains
- **Prize Pool:** ₹50+ lakhs in total prizes
- **International Participation:** Teams from 40+ countries

For more information, visit [techfest.org](https://www.techfest.org)

---

**Built with ❤️ for TechFest IIT Bombay 2025**
