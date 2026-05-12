/* ============================================
   MBUYOTI KITCHEN - MAIN SCRIPT
   ============================================ */

// Menu Items Data - Authentic SADC Region Dishes
const menuItems = [
    {
        id: 1,
        name: "Sadza ne Nyama",
        category: "mains",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
        description: "Creamy maize porridge served with succulent stewed beef and relish - Zimbabwe's national dish",
        ingredients: "Maize meal, beef, tomatoes, onions, garlic, Zimbabwean herbs, vegetable oil",
        nutrition: "Calories: 420 | Protein: 32g | Carbs: 45g | Fat: 16g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 2,
        name: "Biltong & Pap",
        category: "mains",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
        description: "Traditional South African dried cured meat served with creamy corn porridge",
        ingredients: "Dried beef biltong, maize meal, salt, spices, coriander",
        nutrition: "Calories: 480 | Protein: 42g | Carbs: 38g | Fat: 20g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 3,
        name: "Nshima & Relish",
        category: "sides",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
        description: "Zambian thick corn porridge with spiced tomato and leafy green relish",
        ingredients: "Maize flour, leafy greens, tomatoes, onions, garlic, traditional Zambian spices",
        nutrition: "Calories: 240 | Protein: 9g | Carbs: 42g | Fat: 5g",
        rating: "★★★★★",
        vegan: true
    },
    {
        id: 4,
        name: "Ufuta (Fish Soup)",
        category: "soups",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
        description: "Traditional SADC fish soup with fresh catch, coconut milk and aromatic spices",
        ingredients: "Fresh tilapia, coconut milk, carrots, celery, onions, garlic, ginger",
        nutrition: "Calories: 280 | Protein: 24g | Carbs: 22g | Fat: 14g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 5,
        name: "Boerewors",
        category: "mains",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        description: "South African spiced sausage grilled and served with pap and homemade chutney",
        ingredients: "Beef, pork, cumin, coriander, cloves, garlic, salt, pepper",
        nutrition: "Calories: 520 | Protein: 35g | Carbs: 28g | Fat: 32g",
        rating: "★★★★☆",
        vegan: false
    },
    {
        id: 6,
        name: "Seswaa",
        category: "mains",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
        description: "Botswana's pounded beef with peas, served with Bogobe (maize meal)",
        ingredients: "Beef, peas, corn meal, onions, salt, pepper, Botswana spices",
        nutrition: "Calories: 380 | Protein: 28g | Carbs: 40g | Fat: 15g",
        rating: "★★★★☆",
        vegan: false
    },
    {
        id: 7,
        name: "Muamba de Galinha",
        category: "mains",
        price: 11.49,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80",
        description: "Angolan chicken stew with okra, palm oil and traditional spices",
        ingredients: "Chicken, okra, palm oil, tomatoes, garlic, ginger, Angolan peppers",
        nutrition: "Calories: 420 | Protein: 36g | Carbs: 26g | Fat: 22g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 8,
        name: "Mozambique Peri-Peri Fish",
        category: "mains",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
        description: "Fresh grilled fish marinated in Mozambique's famous peri-peri sauce",
        ingredients: "Fresh fish, bird's eye chillies, garlic, lemon, oil, salt, Mozambique spices",
        nutrition: "Calories: 380 | Protein: 38g | Carbs: 12g | Fat: 20g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 9,
        name: "Vetkoek & Relish",
        category: "sides",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd94d20?w=400&q=80",
        description: "Fried dough bread served with spiced tomato relish - SADC comfort food",
        ingredients: "Wheat flour, salt, water, vegetable oil, tomatoes, onions, spices",
        nutrition: "Calories: 310 | Protein: 6g | Carbs: 38g | Fat: 14g",
        rating: "★★★★☆",
        vegan: true
    },
    {
        id: 10,
        name: "Bunny Chow",
        category: "mains",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1596040904057-e5f5a1d8bb93?w=400&q=80",
        description: "South African iconic - hollowed bread loaf filled with spiced curry",
        ingredients: "Bread loaf, chicken curry, onions, garlic, ginger, cumin, turmeric",
        nutrition: "Calories: 480 | Protein: 22g | Carbs: 56g | Fat: 18g",
        rating: "★★★★★",
        vegan: false
    },
    {
        id: 11,
        name: "Maize & Bean Stew",
        category: "sides",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
        description: "Traditional SADC maize and beans - protein-rich and nourishing",
        ingredients: "Maize kernels, beans, tomatoes, onions, garlic, vegetable oil, salt",
        nutrition: "Calories: 260 | Protein: 14g | Carbs: 44g | Fat: 4g",
        rating: "★★★★★",
        vegan: true
    },
    {
        id: 12,
        name: "Sosaties & Ugali",
        category: "mains",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
        description: "Cape Malay grilled meat and herb skewers served with maize meal",
        ingredients: "Beef chunks, turmeric, garlic, ginger, coriander, maize meal",
        nutrition: "Calories: 450 | Protein: 38g | Carbs: 40g | Fat: 18g",
        rating: "★★★★★",
        vegan: false
    }
];

// Testimonials Data - SADC Community Stories
const testimonials = [
    {
        id: 1,
        name: "Nomsa Ncube",
        role: "Marketing Professional, Zimbabwe",
        avatar: "https://i.pravatar.cc/150?img=10",
        text: "Mbuyoti Kudzwa brought back memories of my gogo's cooking! The sadza ne nyama tastes exactly how it should. Supporting local, authentic food has never been easier. Ishe Komborera (God bless)!",
        rating: "★★★★★"
    },
    {
        id: 2,
        name: "Thabo Khumalo",
        role: "Teacher, Botswana",
        avatar: "https://i.pravatar.cc/150?img=11",
        text: "The Seswaa is incredible - just like my mother used to make in Gaborone. Finally a place that respects our food heritage and supports local farmers. Highly recommend to all my colleagues!",
        rating: "★★★★★"
    },
    {
        id: 3,
        name: "Ayanda Dlamini",
        role: "Health Professional, South Africa",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "As a nutritionist, I appreciate their commitment to authentic, wholesome food. The Boerewors is perfectly seasoned and their pap is made the traditional way. Ubuntu at its finest!",
        rating: "★★★★★"
    },
    {
        id: 4,
        name: "Samuel Banda",
        role: "Chef & Food Blogger, Zambia",
        avatar: "https://i.pravatar.cc/150?img=13",
        text: "Their Nshima recipe honors our Zambian culinary traditions beautifully. I feature them on my blog regularly. This is authentic African food done right, with integrity and love.",
        rating: "★★★★★"
    },
    {
        id: 5,
        name: "Grace Moyo",
        role: "Student, Mozambique",
        avatar: "https://i.pravatar.cc/150?img=14",
        text: "The peri-peri fish takes me home every time! Affordable, delicious, and proudly SADC. I order twice a week and share with my roommates. This is how community food should taste!",
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
