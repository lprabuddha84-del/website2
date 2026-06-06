// Lanka Luxe E-Commerce Shared Engine (Luxury Redesign)

// 1. Mock Database
const products = [
    {
        id: 1,
        title: "Lanka Silk Heritage Saree",
        category: "Sarees",
        price: 18500,
        originalPrice: 22000,
        description: "Exquisitely hand-loomed Pure Sri Lankan Silk Saree featuring gold zari borderwork and timeless motifs. Crafted by master weavers in the central hills of Kandy, it represents the pinnacle of traditional artisan elegance.",
        colors: ["Royal Crimson", "Deep Emerald", "Golden Mustard"],
        sizes: ["Free Size"],
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=800&q=80"
        ],
        rating: 4.9,
        reviewsCount: 42
    },
    {
        id: 2,
        title: "Classic Linen Island Shirt",
        category: "Linen",
        price: 6800,
        originalPrice: 7500,
        description: "Lightweight, ultra-breathable organic linen shirt designed for the tropical climate. Features a relaxed tailored fit, smart spread collar, and sustainably sourced coconut shell buttons.",
        colors: ["Off-White", "Ocean Blue", "Sand Beige"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fcc103e86e?auto=format&fit=crop&w=800&q=80"
        ],
        rating: 4.7,
        reviewsCount: 28
    },
    {
        id: 3,
        title: "Misty Highlands Linen Dress",
        category: "Resort Wear",
        price: 12400,
        originalPrice: 12400,
        description: "Tiered linen midi dress featuring a soft wrap-around belt, dynamic side slits, and elegant balloon sleeves. Capture the cool sophistication of Nuwara Eliya afternoons.",
        colors: ["Olive Green", "Blush Pink", "Soft Alabaster"],
        sizes: ["XS", "S", "M", "L"],
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
        ],
        rating: 4.8,
        reviewsCount: 19
    },
    {
        id: 4,
        title: "Unawatuna Sun Kaftan",
        category: "Resort Wear",
        price: 9500,
        originalPrice: 11000,
        description: "Flowing premium silk-georgette kaftan featuring custom hand-batik tropical patterns. Features a breathable fit, side-tie gathers, and gold tassel details perfect for sunset beach walks.",
        colors: ["Indigo Blue", "Sunset Orange"],
        sizes: ["Free Size"],
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
        ],
        rating: 4.6,
        reviewsCount: 15
    },
    {
        id: 5,
        title: "Kandy Festive Kurta",
        category: "Festive",
        price: 8200,
        originalPrice: 9500,
        description: "Traditional cotton-silk blend Kurta for men with subtle neck and cuff embroidery. Tailored for comfort and cultural celebrations like Sinhala/Tamil New Year and weddings.",
        colors: ["Royal Blue", "Ivory White", "Maroon Gold"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        images: [
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=800&q=80"
        ],
        rating: 4.8,
        reviewsCount: 34
    },
    {
        id: 6,
        title: "Lotus Petal Handloom Sarong",
        category: "Heritage",
        price: 5400,
        originalPrice: 5400,
        description: "Hand-loomed premium cotton sarong with traditional checked layout and soft gold borders. Unites Sri Lankan heritage with modern resort comfort.",
        colors: ["Teal Check", "Ruby Red Check", "Charcoal Check"],
        sizes: ["Free Size"],
        images: [
            "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
        ],
        rating: 4.9,
        reviewsCount: 51
    }
];

// 2. Initialize State
let cart = JSON.parse(localStorage.getItem('lanka_luxe_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('lanka_luxe_wishlist')) || [];

// 3. Document Loaded Logic
document.addEventListener('DOMContentLoaded', () => {
    setupCommonElements();
    updateCartBadges();
    updateWishlistBadges();
    injectCartDrawer();
});

// Setup common elements like mobile menu, triggers, etc.
function setupCommonElements() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Connect trigger click to open cart drawer
    const cartTriggers = document.querySelectorAll('.open-cart-trigger');
    cartTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    });
}

// 4. Cart Engine
function addToCart(productId, quantity = 1, color = '', size = '') {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedColor = color || product.colors[0];
    const selectedSize = size || product.sizes[0];

    const existingItem = cart.find(item => 
        item.id === productId && 
        item.color === selectedColor && 
        item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.images[0],
            color: selectedColor,
            size: selectedSize,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadges();
    showToast(`Added ${product.title} to bag.`);
    renderCartItems();
    openCartDrawer();
}

function updateCartQty(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        updateCartBadges();
        renderCartItems();
        window.dispatchEvent(new Event('cartUpdated'));
    }
}

function removeFromCart(index) {
    if (cart[index]) {
        const title = cart[index].title;
        cart.splice(index, 1);
        saveCart();
        updateCartBadges();
        renderCartItems();
        showToast(`Removed ${title} from bag.`);
        window.dispatchEvent(new Event('cartUpdated'));
    }
}

function saveCart() {
    localStorage.setItem('lanka_luxe_cart', JSON.stringify(cart));
}

function updateCartBadges() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
        badge.textContent = totalItems;
        if (totalItems > 0) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
}

// 5. Wishlist Engine
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.indexOf(productId);
    let isAdded = false;

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`Removed ${product.title} from wishlist.`);
    } else {
        wishlist.push(productId);
        showToast(`Saved ${product.title} to wishlist.`);
        isAdded = true;
    }

    localStorage.setItem('lanka_luxe_wishlist', JSON.stringify(wishlist));
    updateWishlistBadges();
    updateWishlistButtons(productId, isAdded);
    window.dispatchEvent(new Event('wishlistUpdated'));
}

function updateWishlistBadges() {
    const count = wishlist.length;
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(badge => {
        badge.textContent = count;
        if (count > 0) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
}

function updateWishlistButtons(productId, isAdded) {
    const buttons = document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`);
    buttons.forEach(btn => {
        const icon = btn.querySelector('svg');
        if (isAdded) {
            icon.classList.add('text-red-500', 'fill-current');
            icon.classList.remove('text-stone-700', 'hover:text-red-500');
        } else {
            icon.classList.remove('text-red-500', 'fill-current');
            icon.classList.add('text-stone-700', 'hover:text-red-500');
        }
    });
}

// 6. Luxury Toast Notification System
function showToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'bg-stone-900 border-l-2 border-accent-400 text-stone-100 px-5 py-4 rounded-none shadow-2xl text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center gap-4 animate-slide-up pointer-events-auto transform translate-y-0 opacity-100 transition-all duration-300';
    
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2800);
}

// 7. Inject Cart Drawer HTML (Luxury Editorial Styling)
function injectCartDrawer() {
    if (document.getElementById('cart-drawer')) return;

    const drawerHTML = `
        <div id="cart-drawer" class="fixed inset-0 z-50 hidden transition-opacity duration-300">
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-stone-950/70 backdrop-blur-sm" onclick="closeCartDrawer()"></div>
            
            <!-- Content Wrapper -->
            <div class="fixed inset-y-0 right-0 max-w-full flex">
                <div class="w-screen max-w-md bg-stone-50 shadow-2xl flex flex-col border-l border-stone-200/50">
                    <!-- Header -->
                    <div class="px-6 py-6 border-b border-stone-200/70 flex items-center justify-between bg-stone-900 text-stone-100">
                        <div class="flex items-center gap-3">
                            <h2 class="text-sm font-semibold font-heading uppercase tracking-[0.25em]">Shopping bag (<span class="cart-count-badge font-mono">0</span>)</h2>
                        </div>
                        <button onclick="closeCartDrawer()" class="text-stone-400 hover:text-white transition-colors p-1" aria-label="Close drawer">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Items List -->
                    <div id="cart-drawer-items" class="flex-1 overflow-y-auto p-6 space-y-6">
                        <!-- Dynamic items -->
                    </div>

                    <!-- Footer -->
                    <div class="border-t border-stone-200 p-6 bg-white space-y-5">
                        <div class="flex justify-between text-stone-850 text-sm font-semibold uppercase tracking-[0.1em]">
                            <span>Subtotal</span>
                            <span id="cart-drawer-subtotal" class="font-mono text-accent-500">Rs. 0</span>
                        </div>
                        <p class="text-[10px] text-stone-400 leading-relaxed uppercase tracking-[0.05em]">Shipping, insurance, and taxes calculated at secure checkout step.</p>
                        <div class="space-y-3 pt-2">
                            <a href="checkout.html" class="w-full bg-stone-900 hover:bg-stone-850 text-stone-50 py-3.5 px-4 rounded-none text-xs font-semibold uppercase tracking-[0.2em] text-center block transition-all shadow-md">
                                Proceed to Checkout
                            </a>
                            <button onclick="closeCartDrawer()" class="w-full text-stone-400 hover:text-stone-800 py-1 text-xs uppercase tracking-[0.15em] text-center block transition-colors">
                                Close Bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);
    renderCartItems();
}

function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
        drawer.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
        drawer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-drawer-items');
    const subtotalText = document.getElementById('cart-drawer-subtotal');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center py-20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-stone-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p class="text-stone-800 text-xs font-bold uppercase tracking-[0.2em] mb-2">Your Bag is Empty</p>
                <p class="text-[11px] text-stone-400 max-w-xs px-6 leading-relaxed">Fill it with premium Sri Lankan designs and curated holiday linen collections.</p>
                <a href="shop.html" onclick="closeCartDrawer()" class="mt-8 inline-block bg-stone-900 text-white text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 shadow hover:bg-stone-800 transition-colors">
                    Explore Catalog
                </a>
            </div>
        `;
        if (subtotalText) subtotalText.textContent = "Rs. 0";
        return;
    }

    let itemsHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        itemsHTML += `
            <div class="flex items-start gap-4 border-b border-stone-200/60 pb-5 last:border-0 last:pb-0">
                <img src="${item.image}" alt="${item.title}" class="w-16 h-20 object-cover bg-stone-100 shadow-sm border border-stone-200/50">
                
                <div class="flex-1 min-w-0">
                    <h3 class="font-heading text-xs font-semibold text-stone-800 truncate">${item.title}</h3>
                    <p class="text-[10px] text-stone-400 mt-1 uppercase tracking-wider">Size: ${item.size} / Color: ${item.color}</p>
                    <p class="text-xs font-semibold text-stone-800 mt-3 font-mono">Rs. ${item.price.toLocaleString()}</p>
                    
                    <div class="flex items-center justify-between mt-3.5">
                        <div class="flex items-center border border-stone-300 rounded-none bg-white">
                            <button onclick="updateCartQty(${index}, -1)" class="px-2 py-0.5 text-stone-600 hover:bg-stone-100 transition-colors text-[10px] font-bold">-</button>
                            <span class="px-3 text-[10px] font-bold text-stone-800 font-mono">${item.quantity}</span>
                            <button onclick="updateCartQty(${index}, 1)" class="px-2 py-0.5 text-stone-600 hover:bg-stone-100 transition-colors text-[10px] font-bold">+</button>
                        </div>
                        
                        <button onclick="removeFromCart(${index})" class="text-[10px] text-stone-400 hover:text-red-500 font-bold uppercase tracking-widest transition-colors">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = itemsHTML;
    if (subtotalText) subtotalText.textContent = `Rs. ${subtotal.toLocaleString()}`;
}
