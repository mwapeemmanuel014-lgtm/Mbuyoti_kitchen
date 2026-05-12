# 🍳 Mbuyoti Kitchen - Website

A modern, fully-responsive website for Mbuyoti Kitchen featuring authentic African-inspired meals with stunning animations and interactive UI.

## 📋 Features

### 1. **Landing Page / Hero Section**
- Full-screen hero with background image
- Animated headline with fade-in effect
- Typewriter animation for subheading
- Animated CTA buttons with ripple effect
- Parallax scroll effect
- Responsive scroll indicator

### 2. **Navigation / Header**
- Transparent navbar that becomes solid on scroll
- Animated logo with hover effect
- Animated navigation links with underline effect
- Dynamic cart icon with item count and bounce animation
- Mobile hamburger menu with smooth slide-in transition
- Fixed positioning for accessibility

### 3. **Menu Section**
- Interactive dish cards with hover pop effect
- Dynamic filter system (All, Main Courses, Sides, Soups, Vegan)
- Smooth card transitions on filter change
- Click to open detailed modal with:
  - High-resolution dish image
  - Full description and ratings
  - Complete ingredient list
  - Nutritional information
  - Quantity selector with +/- buttons
  - Dynamic price calculation
  - Add to cart functionality

### 4. **About Us Section**
- Split-screen layout with image and content
- Mission and values statement
- Animated value cards (Freshness, Hygiene, Timely Delivery)
- Team member showcase with hover effects
- Round profile photos with animations

### 5. **Services / Features Section**
- 6 feature cards with icons and descriptions
- Hover effects with transforms
- 3D tilt animation on service icons
- Stats section with animated progress bars
- Displaying key metrics:
  - 99% Fresh Ingredients
  - 100% Customer Satisfaction
  - 5K+ Happy Customers

### 6. **Testimonials Section**
- Auto-sliding carousel with manual controls
- Previous/Next navigation buttons
- Interactive dot indicators
- Smooth slide transitions
- Auto-rotate every 5 seconds
- 5 real customer testimonials with ratings
- Avatar images and role information

### 7. **Call-to-Action Section**
- Full-width banner with contrasting colors
- Pulsing CTA button to grab attention
- Compelling offer message

### 8. **Contact Us Section**
- Split-screen layout (form + map)
- Real-time form validation
- Floating labels on focus
- Error message display
- All required fields validated:
  - Name (minimum 3 characters)
  - Email (valid format)
  - Phone (10+ digits)
  - Subject (minimum 3 characters)
  - Message (minimum 10 characters)
- Embedded Google Maps
- Contact information display
- Operating hours

### 9. **Chatbot Icon**
- Fixed floating icon at bottom-right
- Hover animation
- Pulse animation on load
- Placeholder for future chat integration

### 10. **Footer**
- Multi-column layout with organized content
- About section
- Quick links with smooth hover animations
- Social media icons
- Newsletter subscription form
- Copyright and credit information

## 🎨 Design & Animation Features

### Color Palette
- **Primary Orange**: `#E8621B` (main accent)
- **Dark Green**: `#2D5016` (secondary)
- **Gold/Accent**: `#F4A460` (highlights)
- **Cream**: `#F5F1EB` (background)
- **Dark**: `#1a1a1a` (text/dark elements)

### Typography
- **Headlines**: Montserrat (bold, 700-900 weight)
- **Body**: Roboto (400, 500, 700 weight)

### Animations & Effects
- Fade-in animations on page load
- Typewriter effect on hero subheading
- Smooth scroll behavior
- Parallax background zoom
- Hover transforms (scale, translateY)
- Bounce animations on cart updates
- Smooth transitions on filter changes
- Modal slide-up animation
- Auto-rotating testimonials carousel
- Scroll-triggered animations for elements
- Navbar color change on scroll
- Hover ripple effects on buttons

### Responsive Design
- **Desktop**: Full layout with all features
- **Tablet** (768px and below): Adjusted grid layouts
- **Mobile** (480px and below): Single column layouts, stacked navigation

## 📁 Project Structure

```
mbuyoti-kitchen/
├── index.html              # Main HTML file with all sections
├── styles.css              # Comprehensive styling and animations
├── script.js               # JavaScript for interactivity
├── assets/
│   ├── images/            # Folder for custom images
│   └── icons/             # Folder for custom icons
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required
- All external resources loaded from CDN

### Installation

1. **Clone or download the project:**
   ```bash
   git clone <repository-url>
   cd mbuyoti-kitchen
   ```

2. **Open in browser:**
   - Double-click `index.html` to open locally
   - Or use a live server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server installed)
     http-server
     ```

3. **Access the website:**
   - Local: `http://localhost:8000`
   - Or open `file:///path/to/index.html` in your browser

## 🔧 Customization

### Modify Menu Items
Edit the `menuItems` array in `script.js`:
```javascript
const menuItems = [
    {
        id: 1,
        name: "Dish Name",
        category: "mains", // or "sides", "soups", "vegan"
        price: 9.99,
        image: "image-url",
        description: "Dish description",
        ingredients: "Ingredient list",
        nutrition: "Nutritional info",
        rating: "★★★★★",
        vegan: true/false
    },
    // ... more items
];
```

### Modify Testimonials
Edit the `testimonials` array in `script.js`:
```javascript
const testimonials = [
    {
        id: 1,
        name: "Customer Name",
        role: "Role/Title",
        avatar: "avatar-url",
        text: "Testimonial text",
        rating: "★★★★★"
    },
    // ... more testimonials
];
```

### Change Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary: #E8621B;          /* Main color */
    --primary-dark: #D84315;     /* Darker shade */
    --secondary: #2D5016;        /* Secondary color */
    --accent: #F4A460;           /* Accent color */
    --neutral: #F5F1EB;          /* Background */
    /* ... more variables */
}
```

### Add Custom Fonts
Replace Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

## 📱 Features by Device

### Desktop Features
- Full navigation menu
- Hover effects on all interactive elements
- Parallax scrolling effects
- Full-sized images and layouts

### Mobile Features
- Hamburger menu navigation
- Touch-friendly buttons and controls
- Stacked layouts for better readability
- Optimized image sizes
- Readable text sizes (16px minimum)

## 🎯 Functionality Overview

### Cart System
- Add items to cart with quantity selector
- Cart count displays on navbar
- Bounce animation on item addition
- Item quantity tracking

### Form Validation
- Real-time validation on contact form
- Error messages for invalid inputs
- Success notification on form submission

### Testimonials Carousel
- Manual navigation with prev/next buttons
- Auto-rotation every 5 seconds
- Interactive dot indicators
- Smooth transitions between slides

### Scroll Animations
- Elements animate into view as you scroll
- Navbar color changes after 50px scroll
- Smooth scrolling to sections on link click

## 🌐 External Resources

The website uses the following CDN resources:
- **Google Fonts**: Montserrat & Roboto
- **Unsplash Images**: High-quality food and team photos
- **Pravatar**: Avatar images for team and testimonials
- **Google Maps Embed**: Location map (example)

## ✅ Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 SEO & Meta Tags

Consider adding these for production:
```html
<meta name="description" content="Fresh, delicious, home-styled meals delivered to your door. Order now!">
<meta name="keywords" content="food delivery, meals, African cuisine, restaurant">
<meta name="author" content="Mbuyoti Kitchen">
<meta property="og:title" content="Mbuyoti Kitchen - Fresh, Delicious, Delivered">
<meta property="og:description" content="Order authentic African-inspired meals online">
<meta property="og:image" content="og-image-url">
```

## 🔒 Security Notes

For production deployment:
1. Use HTTPS
2. Add CSRF protection to forms
3. Implement proper backend validation
4. Use environment variables for sensitive data
5. Add rate limiting to forms

## 📞 Support & Customization

### To Add New Features:
1. Create new HTML sections in `index.html`
2. Add corresponding CSS to `styles.css`
3. Add JavaScript functionality to `script.js`

### Common Customizations:
- Change restaurant name/logo
- Update menu items and prices
- Modify contact information
- Add/remove social media links
- Customize colors and fonts
- Add new team members
- Include your own images

## 🚀 Deployment

### Deploy on Netlify (Recommended)
1. Push to GitHub
2. Connect to Netlify
3. Automatic deployment on push

### Deploy on Vercel
1. Push to GitHub
2. Import project to Vercel
3. Auto-deploying

### Deploy on GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Access via `username.github.io/mbuyoti-kitchen`

## 📄 License

This project is open source. Feel free to use, modify, and distribute.

## 🎉 Enjoy!

Your Mbuyoti Kitchen website is ready to serve delicious meals online! 

**Happy cooking! 🍳**

---

For questions or customizations, refer to the code comments throughout the files.
