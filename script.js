/* ============================================
   MBUYOTI KITCHEN - MAIN SCRIPT
   ============================================ */

// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: "Ugali with Sukuma Wiki",
        category: "mains",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
        description: "Creamy maize meal served with sautéed collard greens and tomatoes",
        ingredients: "Maize flour, collard greens, tomatoes, onions, garlic, vegetable oil, salt",
        nutrition: "Calories: 280 | Protein: 8g | Carbs: 42g | Fat: 8g",
        rating: "★★★★★",
        vegan: true
    },
    {
        id: 2,
        name: "Nyama Choma",
        category: "mains",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
        description: "Tender grilled meat served with ugali and vegetables",
        ingredients: "Beef sirloin, salt, pepper, garlic, lemon juice",
        nutrition: "Calories: 450 | Protein: 38g | Carbs: 35g | Fat: 18g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 3,
        name: "Githeri",
        category: "sides",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
        description: "Traditional maize and beans combination with herbs",
        ingredients: "Dried beans, maize kernels, tomatoes, onions, cilantro, spices",
        nutrition: "Calories: 210 | Protein: 12g | Carbs: 38g | Fat: 3g",
        rating: "★★★★☆",
        vegan: true
    },
    {
        id: 4,
        name: "Lentil Soup",
        category: "soups",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
        description: "Hearty red lentil soup with aromatic spices",
        ingredients: "Red lentils, carrots, celery, onions, garlic, vegetable broth, turmeric",
        nutrition: "Calories: 160 | Protein: 10g | Carbs: 28g | Fat: 2g",
        rating: "★★★★★",
        vegan: true
    },
    {
        id: 5,
        name: "Chapati",
        category: "sides",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1571407667199-2f4eb3efff29?w=400&q=80",
        description: "Soft, flaky flatbread perfect with any dish",
        ingredients: "Wheat flour, salt, water, vegetable oil",
        nutrition: "Calories: 180 | Protein: 4g | Carbs: 28g | Fat: 6g",
        rating: "★★★★☆",
        vegan: true
    },
    {
        id: 6,
        name: "Chicken Stew",
        category: "mains",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80",
        description: "Slow-cooked chicken in rich tomato gravy",
        ingredients: "Chicken breast, tomatoes, onions, peppers, garlic, ginger, spices",
        nutrition: "Calories: 320 | Protein: 32g | Carbs: 18g | Fat: 14g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 7,
        name: "Vegetable Stir-Fry",
        category: "vegan",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&q=80",
        description: "Fresh seasonal vegetables in aromatic sauce",
        ingredients: "Broccoli, carrots, bell peppers, snap peas, garlic, ginger, soy sauce",
        nutrition: "Calories: 140 | Protein: 6g | Carbs: 24g | Fat: 4g",
        rating: "★★★★☆",
        vegan: true
    },
    {
        id: 8,
        name: "Mulligatawny Soup",
        category: "soups",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1476124369162-f4978d6a2d31?w=400&q=80",
        description: "Spiced curry soup with lentils and coconut",
        ingredients: "Red lentils, coconut milk, curry spices, carrots, celery, onions, garlic",
        nutrition: "Calories: 220 | Protein: 11g | Carbs: 32g | Fat: 8g",
        rating: "★★★★★",
        vegan: true
    },
    {
        id: 9,
        name: "Samosas",
        category: "sides",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
        description: "Crispy pastry pockets filled with spiced potatoes",
        ingredients: "Wheat flour, potatoes, peas, onions, ginger, cumin, chili",
        nutrition: "Calories: 190 | Protein: 5g | Carbs: 26g | Fat: 8g",
        rating: "★★★★☆",
        vegan: true
    },
    {
        id: 10,
        name: "Fish Curry",
        category: "mains",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
        description: "Fresh fish in fragrant coconut curry sauce",
        ingredients: "Fresh tilapia, coconut milk, curry spices, tomatoes, onions, garlic",
        nutrition: "Calories: 380 | Protein: 35g | Carbs: 16g | Fat: 20g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 11,
        name: "Vegetable Biryani",
        category: "vegan",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1584584867022-b4b71a31ac5d?w=400&q=80",
        description: "Fragrant rice layered with spiced vegetables",
        ingredients: "Basmati rice, mixed vegetables, yogurt, onions, ginger, saffron, spices",
        nutrition: "Calories: 320 | Protein: 9g | Carbs: 58g | Fat: 6g",
        rating: "★★★★☆",
        vegan: false
    },
    {
        id: 12,
        name: "Sweet Potato Fries",
        category: "sides",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1585080198000-3debc3a20c30?w=400&q=80",
        description: "Crispy golden sweet potato fries with seasoning",
        ingredients: "Sweet potatoes, vegetable oil, sea salt, paprika, garlic powder",
        nutrition: "Calories: 210 | Protein: 3g | Carbs: 32g | Fat: 9g",
        rating: "★★★★★",
        vegan: true
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Food Enthusiast",
        avatar: "https://i.pravatar.cc/150?img=4",
        text: "Mbuyoti Kitchen has completely changed my weekday meals! The food is always fresh, hot, and incredibly delicious. My favorite is their Nyama Choma – it's simply the best!",
        rating: "★★★★★"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Busy Professional",
        avatar: "https://i.pravatar.cc/150?img=5",
        text: "Finally found healthy, authentic meals that fit my schedule. The delivery is always on time, and the portions are generous. Highly recommended!",
        rating: "★★★★★"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Health Coach",
        avatar: "https://i.pravatar.cc/150?img=6",
        text: "I recommend Mbuyoti Kitchen to all my clients. The nutritional info they provide is detailed and accurate. The vegan options are fantastic!",
        rating: "★★★★★"
    },
    {
        id: 4,
        name: "David Kim",
        role: "Chef",
        avatar: "https://i.pravatar.cc/150?img=7",
        text: "As someone in the food industry, I appreciate their commitment to quality and authenticity. Their recipes honor traditional cooking methods beautifully.",
        rating: "★★★★☆"
    },
    {
        id: 5,
        name: "Jessica Williams",
        role: "Student",
        avatar: "https://i.pravatar.cc/150?img=8",
        text: "Affordable, tasty, and convenient. I order at least twice a week. The Githeri is my go-to comfort meal!",
        rating: "★★★★★"
    }
];

// Global Cart
let cart = [];
let currentTestimonialIndex = 0;
let currentMenuFilter = 'all';
let currentModalItem = null;

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();
    renderTestimonials();
    setupEventListeners();
    setupScrollAnimations();
    autoSlideTestimonials();
});

/* ============================================
   EVENT LISTENERS
   ============================================ */

function setupEventListeners() {
    // Navbar scroll
    window.addEventListener('scroll', updateNavbar);

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');
    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterMenuItems(btn.dataset.filter);
        });
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);

    // Chatbot icon
    document.getElementById('chatbotIcon').addEventListener('click', () => {
        alert('💬 Chat feature coming soon! For now, call us at +1 (555) 123-4567');
    });

    // Close modal on background click
    document.getElementById('menuModal').addEventListener('click', (e) => {
        if (e.target.id === 'menuModal') {
            closeModal();
        }
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]');
        alert(`Thanks for subscribing with ${email.value}!`);
        email.value = '';
    });
}

/* ============================================
   MENU RENDERING & FILTERING
   ============================================ */

function renderMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    const filteredItems = currentMenuFilter === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === currentMenuFilter || 
                                  (currentMenuFilter === 'vegan' && item.vegan));

    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                <p class="menu-card-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">$${item.price}</span>
                    <span class="menu-card-rating">${item.rating}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        menuGrid.appendChild(card);
    });
}

function filterMenuItems(category) {
    currentMenuFilter = category;
    renderMenuItems();
}

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */

function openModal(item) {
    currentModalItem = item;
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalIngredients').textContent = item.ingredients;
    document.getElementById('modalNutrition').textContent = item.nutrition;
    document.getElementById('modalRating').textContent = item.rating;
    document.getElementById('modalPrice').textContent = `$${item.price}`;
    document.getElementById('quantity').value = 1;
    document.getElementById('menuModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('menuModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function increaseQuantity() {
    const quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
    updateModalPrice();
}

function decreaseQuantity() {
    const quantity = document.getElementById('quantity');
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
        updateModalPrice();
    }
}

function updateModalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = currentModalItem.price * quantity;
    document.getElementById('modalPrice').textContent = `$${price.toFixed(2)}`;
}

function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const item = { ...currentModalItem, quantity };

    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push(item);
    }

    updateCartCount();
    animateCartIcon();
    closeModal();
    showNotification(`${currentModalItem.name} added to cart!`);
}

/* ============================================
   CART FUNCTIONALITY
   ============================================ */

function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

function animateCartIcon() {
    const cartCount = document.getElementById('cartCount');
    cartCount.classList.add('bounce');
    setTimeout(() => cartCount.classList.remove('bounce'), 600);
}

/* ============================================
   TESTIMONIALS CAROUSEL
   ============================================ */

function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('carouselDots');

    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        // Create card
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-content">
                <p>${testimonial.text}</p>
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-meta">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-rating">${testimonial.rating}</div>
        `;
        track.appendChild(card);

        // Create dot
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToTestimonial(index));
        dotsContainer.appendChild(dot);
    });

    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    const track = document.getElementById('testimonialsTrack');
    const offset = -currentTestimonialIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialIndex);
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialPosition();
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialPosition();
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateTestimonialPosition();
}

function autoSlideTestimonials() {
    setInterval(nextTestimonial, 5000);
}

/* ============================================
   FORM VALIDATION
   ============================================ */

function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validate name
    if (!name || name.length < 3) {
        showError('nameError', 'Please enter a valid name');
        isValid = false;
    } else {
        clearError('nameError');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    } else {
        clearError('emailError');
    }

    // Validate phone
    const phoneRegex = /^\d{10,}$/;
    if (!phone || !phoneRegex.test(phone.replace(/\D/g, ''))) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    } else {
        clearError('phoneError');
    }

    // Validate subject
    if (!subject || subject.length < 3) {
        showError('subjectError', 'Please enter a subject');
        isValid = false;
    } else {
        clearError('subjectError');
    }

    // Validate message
    if (!message || message.length < 10) {
        showError('messageError', 'Please enter a message (at least 10 characters)');
        isValid = false;
    } else {
        clearError('messageError');
    }

    if (isValid) {
        showNotification('Message sent successfully! We\'ll get back to you soon.');
        e.target.reset();
    }
}

function showError(elementId, message) {
    const error = document.getElementById(elementId);
    error.textContent = message;
    error.classList.add('show');
}

function clearError(elementId) {
    const error = document.getElementById(elementId);
    error.classList.remove('show');
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

function updateNavbar() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/* ============================================
   UTILITIES
   ============================================ */

function showNotification(message) {
    // Simple notification using alert (can be replaced with a custom toast)
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2D5016;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add slide animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   CLOSE MODAL ON ESC KEY
   ============================================ */

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('✨ Mbuyoti Kitchen website loaded successfully!');
