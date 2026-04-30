// ===== Bava Restaurant - App JS =====

// Menu Items Data
const menuItems = [
    // Main Dishes
    {
        id: 1, name: "Nyama Choma", price: 850, rating: 4.8, category: "mains",
        desc: "Grilled goat meat with kachumbari — Kenya's legendary BBQ.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop",
        badge: "POPULAR", badgeClass: "popular", model: "nyama-choma.glb"
    },
    {
        id: 2, name: "Kenyan Pilau", price: 450, rating: 4.7, category: "mains",
        desc: "Aromatic spiced rice with tender beef — Swahili classic.",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&h=350&fit=crop",
        badge: "", model: "pilau.glb"
    },
    {
        id: 3, name: "Grilled Chicken", price: 580, rating: 4.6, category: "mains",
        desc: "Succulent chicken marinated in Kenyan herbs & grilled to perfection.",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=350&fit=crop",
        badge: "", model: "grilled-chicken.glb"
    },
    {
        id: 4, name: "Beef Stew", price: 520, rating: 4.5, category: "mains",
        desc: "Tender beef slow-cooked with potatoes, carrots & traditional spices.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop",
        badge: "", model: "beef-stew.glb"
    },
    // Fast Food
    {
        id: 5, name: "Pizza (Medium)", price: 650, rating: 4.8, category: "fastfood",
        desc: "Classic pizza with mozzarella, tomato sauce & your choice of toppings.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
        badge: "BESTSELLER", badgeClass: "popular", model: "pizza.glb"
    },
    {
        id: 6, name: "Pizza (Large)", price: 850, rating: 4.8, category: "fastfood",
        desc: "Family-sized pizza perfect for sharing. Feeds 3-4 people.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
        badge: "", model: "pizza.glb"
    },
    {
        id: 7, name: "Chips (Fries)", price: 200, rating: 4.7, category: "fastfood",
        desc: "Golden crispy fries with our special seasoning.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=350&fit=crop",
        badge: "POPULAR", badgeClass: "popular", model: "chips.glb"
    },
    {
        id: 8, name: "Burger", price: 450, rating: 4.6, category: "fastfood",
        desc: "Juicy beef patty with fresh veggies, cheese & special sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop",
        badge: "", model: "burger.glb"
    },
    // Drinks - Soft
    {
        id: 9, name: "Coca-Cola", price: 80, rating: 4.5, category: "drinks",
        desc: "Classic refreshing Coca-Cola 330ml.",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=350&fit=crop",
        badge: "", model: "coke.glb"
    },
    {
        id: 10, name: "Fanta", price: 80, rating: 4.4, category: "drinks",
        desc: "Sweet orange Fanta 330ml.",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=350&fit=crop",
        badge: "", model: "fanta.glb"
    },
    {
        id: 11, name: "Sprite", price: 80, rating: 4.4, category: "drinks",
        desc: "Refreshing lemon-lime Sprite 330ml.",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=350&fit=crop",
        badge: "", model: "sprite.glb"
    },
    // Drinks - Hot
    {
        id: 12, name: "Coffee", price: 120, rating: 4.8, category: "drinks",
        desc: "Freshly brewed Kenyan coffee, rich and aromatic.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=350&fit=crop",
        badge: "BESTSELLER", badgeClass: "popular", model: "coffee.glb"
    },
    {
        id: 13, name: "Tea", price: 80, rating: 4.6, category: "drinks",
        desc: "Traditional Kenyan tea with milk and sugar.",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=350&fit=crop",
        badge: "", model: "tea.glb"
    },
    // Drinks - Others
    {
        id: 14, name: "Fresh Juice", price: 150, rating: 4.7, category: "drinks",
        desc: "Freshly squeezed mango, orange or pineapple.",
        image: "https://images.unsplash.com/photo-1623076282007-6c21e7bc038d?w=500&h=350&fit=crop",
        badge: "", model: "juice.glb"
    },
    {
        id: 15, name: "Mineral Water", price: 50, rating: 4.3, category: "drinks",
        desc: "Pure mineral water 500ml.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=350&fit=crop",
        badge: "", model: "water.glb"
    }
];

// DOM Elements
const loader = document.getElementById('loader');
const loaderProgress = document.getElementById('loaderProgress');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const featuredGrid = document.getElementById('featuredGrid');

// Modal Elements
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const comingSoonModal = document.getElementById('comingSoonModal');

// Page Loader - Cinematic
window.addEventListener('load', () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 400);
        }
        loaderProgress.style.width = progress + '%';
    }, 150);
});

// Navbar Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Auth Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

function closeAllModals() {
    signInModal.classList.remove('active');
    signUpModal.classList.remove('active');
    comingSoonModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Social Auth - Coming Soon
function showComingSoon(provider) {
    closeAllModals();
    setTimeout(() => {
        const comingSoonText = document.getElementById('comingSoonText');
        comingSoonText.textContent = `${provider} Sign-Up is coming soon`;
        comingSoonModal.classList.add('active');
    }, 200);
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeAllModals();
        }
    });
});

// Render Featured Items
function renderFeatured() {
    if (!featuredGrid) return;

    const featured = menuItems.slice(0, 8);
    featuredGrid.innerHTML = featured.map(item => `
        <div class="featured-card reveal">
            <div class="featured-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="featured-badge ${item.badgeClass || ''}">${item.badge}</span>` : ''}
            </div>
            <div class="featured-content">
                <div class="featured-header">
                    <h3 class="featured-name">${item.name}</h3>
                    <span class="featured-price">KES ${item.price}</span>
                </div>
                <p class="featured-desc">${item.desc}</p>
                <div class="featured-footer">
                    <span class="featured-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                    <div class="featured-actions">
                        <button class="featured-btn view-3d" onclick="openViewer('${item.name.toLowerCase().replace(/\s+/g, '-')}')">
                            <i class="fas fa-cube"></i> View in 3D
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    initRevealAnimations();
}

// Stats Counter Animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.dataset.target);
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const start = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;
            stat.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    });
}

// Reveal Animations
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

// Stats Animation on Scroll
const statsSection = document.querySelector('.stats-section');
let statsAnimated = false;

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    initRevealAnimations();
});

// Global functions for onclick handlers
window.openViewer = function(itemName) {
    const modelMap = {
        'nyama-choma': { name: 'Nyama Choma', model: 'nyama-choma.glb' },
        'kenyan-pilau': { name: 'Kenyan Pilau', model: 'pilau.glb' },
        'grilled-chicken': { name: 'Grilled Chicken', model: 'grilled-chicken.glb' },
        'beef-stew': { name: 'Beef Stew', model: 'beef-stew.glb' },
        'pizza': { name: 'Pizza', model: 'pizza.glb' },
        'chips': { name: 'Chips', model: 'chips.glb' },
        'burger': { name: 'Burger', model: 'burger.glb' },
        'coca-cola': { name: 'Coca-Cola', model: 'coke.glb' },
        'fanta': { name: 'Fanta', model: 'fanta.glb' },
        'sprite': { name: 'Sprite', model: 'sprite.glb' },
        'coffee': { name: 'Coffee', model: 'coffee.glb' },
        'tea': { name: 'Tea', model: 'tea.glb' },
        'fresh-juice': { name: 'Fresh Juice', model: 'juice.glb' },
        'mineral-water': { name: 'Mineral Water', model: 'water.glb' }
    };

    const item = modelMap[itemName] || { name: itemName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), model: `${itemName}.glb` };
    openViewerModal(item.name, item.model);
};

window.openViewerModal = function(itemName, modelFile) {
    const viewerModal = document.getElementById('viewerModal');
    const viewerTitle = document.getElementById('viewerTitle');
    const foodViewer = document.getElementById('foodViewer');
    const viewerProgress = document.getElementById('viewerProgress');

    viewerTitle.textContent = itemName;
    foodViewer.src = `assets/models/${modelFile}`;
    viewerProgress.classList.remove('hidden');
    viewerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeViewer = function() {
    const viewerModal = document.getElementById('viewerModal');
    viewerModal.classList.remove('active');
    document.body.style.overflow = '';
};

window.requestAR = function() {
    const foodViewer = document.getElementById('foodViewer');
    if (foodViewer.canActivateAR) {
        foodViewer.activateAR();
    } else {
        alert('AR is not supported on this device. Please try on a mobile device.');
    }
};

window.toggleAutoRotate = function() {
    const foodViewer = document.getElementById('foodViewer');
    const btn = document.getElementById('autoRotateBtn');
    foodViewer.autoRotate = !foodViewer.autoRotate;
    btn.classList.toggle('active', foodViewer.autoRotate);
};

window.resetCamera = function() {
    const foodViewer = document.getElementById('foodViewer');
    foodViewer.cameraControls = false;
    setTimeout(() => {
        foodViewer.cameraControls = true;
    }, 100);
};

// Expose modal functions globally
window.openModal = openModal;
window.closeModal = closeModal;
window.closeAllModals = closeAllModals;
window.showComingSoon = showComingSoon;