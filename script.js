
"use strict";

/* ==========================================================
   PROJECT: AMAZON CLONE
   DEVELOPER: HAILEYESUS
   FILE: script.js

   HTML = Structure
   CSS = Design
   JavaScript = Behavior

   FEATURES:
   1. Product data
   2. Product cards
   3. Today's Deals
   4. Search products
   5. Filter by category
   6. Sort products
   7. Add to cart
   8. Remove from cart
   9. Increase and decrease quantity
   10. Calculate cart subtotal
   11. Save cart in localStorage
   12. Six-image slider
   13. Automatic slider
   14. Slider dots
   15. Keyboard slider navigation
   16. Mobile menu
   17. Toast notifications
   18. Dynamic copyright year
   ========================================================== */


/* ==========================================================
   SECTION 1: PRODUCT DATA
   ========================================================== */

/*
   We store our products inside an array.

   An array holds multiple values.

   Each product is an object.

   An object stores related information
   using properties.

   Example:

   {
       id: 1,
       name: "Wireless Headphones",
       price: 49.99
   }

   id:
   A unique number for each product.

   name:
   The product name.

   category:
   The product category.

   price:
   The current selling price.

   originalPrice:
   The price before a discount.

   rating:
   A sample customer rating.

   image:
   The location of the product image.

   description:
   A short explanation of the product.

   These are DEMO products and prices.
   They are not live Amazon listings.
*/

const products = [

    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.5,
        image: "./assets/product-headphones.jpg",
        description: "Comfortable wireless headphones with clear sound."
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.6,
        image: "./assets/product-smartwatch.jpg",
        description: "Track daily activity and view phone notifications."
    },

    {
        id: 3,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 35.99,
        originalPrice: 49.99,
        rating: 4.4,
        image: "./assets/product-speaker.jpg",
        description: "Compact speaker for music at home or outdoors."
    },

    {
        id: 4,
        name: "Men's Casual Sneakers",
        category: "fashion",
        price: 45.00,
        originalPrice: 65.00,
        rating: 4.3,
        image: "./assets/product-sneakers.jpg",
        description: "Comfortable everyday shoes with a modern design."
    },

    {
        id: 5,
        name: "Women's Fashion Handbag",
        category: "fashion",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.5,
        image: "./assets/product-handbag.jpg",
        description: "Stylish handbag with useful storage space."
    },

    {
        id: 6,
        name: "Classic Cotton T-Shirt",
        category: "fashion",
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.2,
        image: "./assets/product-tshirt.jpg",
        description: "Soft cotton T-shirt for everyday comfort."
    },

    {
        id: 7,
        name: "Non-Stick Cooking Pan",
        category: "home",
        price: 29.99,
        originalPrice: 44.99,
        rating: 4.6,
        image: "./assets/product-pan.jpg",
        description: "Practical non-stick pan for daily cooking."
    },

    {
        id: 8,
        name: "Modern Table Lamp",
        category: "home",
        price: 34.99,
        originalPrice: 49.99,
        rating: 4.4,
        image: "./assets/product-lamp.jpg",
        description: "Modern lighting for bedrooms and workspaces."
    },

    {
        id: 9,
        name: "Kitchen Storage Container Set",
        category: "home",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.5,
        image: "./assets/product-containers.jpg",
        description: "Keep your kitchen ingredients organized."
    },

    {
        id: 10,
        name: "Skin Care Gift Set",
        category: "beauty",
        price: 32.99,
        originalPrice: 48.99,
        rating: 4.5,
        image: "./assets/product-skincare.jpg",
        description: "A simple collection of daily skincare products."
    },

    {
        id: 11,
        name: "Professional Makeup Brush Set",
        category: "beauty",
        price: 22.99,
        originalPrice: 34.99,
        rating: 4.4,
        image: "./assets/product-makeup.jpg",
        description: "A complete brush set for everyday makeup."
    },

    {
        id: 12,
        name: "Yoga Exercise Mat",
        category: "sports",
        price: 25.99,
        originalPrice: 39.99,
        rating: 4.7,
        image: "./assets/product-yoga.jpg",
        description: "Comfortable exercise mat for fitness and yoga."
    },

    {
        id: 13,
        name: "Stainless Steel Water Bottle",
        category: "sports",
        price: 18.99,
        originalPrice: 27.99,
        rating: 4.6,
        image: "./assets/product-bottle.jpg",
        description: "Reusable bottle for travel, sports, and work."
    },

    {
        id: 14,
        name: "Adjustable Dumbbell Set",
        category: "sports",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.5,
        image: "./assets/product-dumbbells.jpg",
        description: "Adjustable weights for home strength training."
    },

    {
        id: 15,
        name: "The Complete Web Development Guide",
        category: "books",
        price: 24.99,
        originalPrice: 39.99,
        rating: 4.8,
        image: "./assets/product-webbook.jpg",
        description: "Learn HTML, CSS, JavaScript, and web development."
    },

    {
        id: 16,
        name: "JavaScript Programming Handbook",
        category: "books",
        price: 21.99,
        originalPrice: 32.99,
        rating: 4.7,
        image: "./assets/product-jsbook.jpg",
        description: "Practice JavaScript concepts and coding examples."
    }

];


/* ==========================================================
   SECTION 2: SELECT HTML ELEMENTS
   ========================================================== */

/*
   document.getElementById() finds an HTML
   element using its id.

   document.querySelectorAll() selects
   multiple elements using a CSS selector.

   We save the elements in variables
   so we can reuse them later.
*/

// Product elements
const productGrid = document.getElementById("product-grid");
const dealsGrid = document.getElementById("deals-grid");
const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");

// Search elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchCategory = document.getElementById("search-category");

// Filter elements
const categoryFilter = document.getElementById("category-filter");
const sortFilter = document.getElementById("sort-filter");
const resetFiltersButton = document.getElementById("reset-filters");
const emptyResetButton = document.getElementById("empty-reset-button");
const categoryCards = document.querySelectorAll(".category-card");

// Cart elements
const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartItems = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartSummary = document.getElementById("cart-summary");
const cartCount = document.getElementById("cart-count");
const cartTotalItems = document.getElementById("cart-total-items");
const cartSubtotal = document.getElementById("cart-subtotal");
const continueShopping = document.getElementById("continue-shopping");
const checkoutButton = document.getElementById("checkout-button");

// Slider elements
const sliderContainer = document.getElementById("hero-slider");
const sliderTrack = document.getElementById("slider-track");
const slides = document.querySelectorAll(".slide");
const sliderDots = document.querySelectorAll(".slider-dot");
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Other elements
const toast = document.getElementById("toast");
const currentYear = document.getElementById("current-year");



/* ==========================================================
   SECTION 3: APPLICATION STATE
   ========================================================== */

/*
   State means the information our application
   needs to remember.

   We need to remember:

   - Search text
   - Selected category
   - Sort order
   - Shopping cart
   - Current slider image

   When state changes, we update the page.
*/

let searchQuery = "";
let selectedCategory = "all";
let selectedSort = "default";

// Load saved cart data from the browser.
let cart = loadCart();

// Start with the first slider image.
let currentSlide = 0;

// Store automatic slider timer.
let sliderInterval = null;

// Store toast timer.
let toastTimer = null;

// Remember where keyboard focus was before opening cart.
let previousFocusedElement = null;


/* ==========================================================
   SECTION 4: HELPER FUNCTIONS
   ========================================================== */

/*
   Helper functions perform small reusable tasks.

   This prevents us from writing
   the same code many times.
*/


/* ----------------------------------------------------------
   FORMAT PRICE
   ---------------------------------------------------------- */

/*
   Intl.NumberFormat formats numbers
   according to a selected currency.

   We use USD for our demo project.

   Example:
   49.99 becomes $49.99
*/

function formatPrice(amount) {

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);

}


/* ----------------------------------------------------------
   FIND PRODUCT BY ID
   ---------------------------------------------------------- */

/*
   Array.find() searches an array.

   It returns the first item
   that matches our condition.
*/

function findProduct(productId) {

    return products.find(function (product) {
        return product.id === Number(productId);
    });

}


/* ----------------------------------------------------------
   FORMAT PRODUCT RATING
   ---------------------------------------------------------- */

/*
   We create a simple star rating.

   Math.round() rounds a number
   to the nearest whole number.

   Example:
   4.6 becomes 5.

   We show five star positions.
*/

function createStars(rating) {

    const filledStars = Math.round(rating);

    const emptyStars = 5 - filledStars;

    return "★".repeat(filledStars) +
           "☆".repeat(emptyStars);

}


/* ----------------------------------------------------------
   CALCULATE DISCOUNT
   ---------------------------------------------------------- */

/*
   Discount percentage formula:

   (Original Price - Current Price)
   -------------------------------- * 100
            Original Price

   Math.round() gives a whole percentage.
*/

function calculateDiscount(product) {

    if (
        !product.originalPrice ||
        product.originalPrice <= product.price
    ) {
        return 0;
    }

    const discount =
        ((product.originalPrice - product.price) /
            product.originalPrice) * 100;

    return Math.round(discount);

}


/* ==========================================================
   SECTION 5: CREATE PRODUCT CARDS
   ========================================================== */

/*
   Instead of writing 16 product cards
   manually in HTML, we create them
   using JavaScript.

   This is called dynamic rendering.

   The advantage is that we can reuse
   one structure for many products.

   We use trusted local product data
   defined inside this JavaScript file.
*/

function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
        <div class="product-image">
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >
        </div>

        <p class="product-category">
            ${product.category}
        </p>

        <h3 class="product-title">
            ${product.name}
        </h3>

        <div class="product-rating">
            <span
                class="rating-stars"
                aria-label="${product.rating} out of 5 stars"
            >
                ${createStars(product.rating)}
            </span>

            <span class="rating-value">
                ${product.rating.toFixed(1)}
            </span>
        </div>

        <p class="product-price">
            ${formatPrice(product.price)}
        </p>

        <p class="product-description">
            ${product.description}
        </p>

        <button
            type="button"
            class="add-to-cart-button"
            data-add-to-cart="${product.id}"
            aria-label="Add ${product.name} to cart"
        >
            Add to Cart
        </button>
    `;

    return card;

}


/* ==========================================================
   SECTION 6: RENDER PRODUCTS
   ========================================================== */

/*
   Rendering means displaying data
   on the webpage.

   We first clear the old product cards.

   Then we create a new card
   for every matching product.
*/

function renderProducts(productList) {

    if (!productGrid) {
        return;
    }

    // Remove previous cards.
    productGrid.replaceChildren();

    // Create and add new cards.
    productList.forEach(function (product) {

        const card = createProductCard(product);

        productGrid.appendChild(card);

    });

    // Update the results message.
    if (resultsCount) {

        resultsCount.textContent =
            `${productList.length} product(s) found`;

    }

    // Show the empty message when no products match.
    if (emptyState) {

        emptyState.hidden = productList.length !== 0;

    }

}


/* ==========================================================
   SECTION 7: TODAY'S DEALS
   ========================================================== */

/*
   We use Array.filter() to find products
   that have a discounted price.

   Then we display the first four
   discounted products.

   The discount values are calculated
   from our demo product prices.
*/

function renderDeals() {

    if (!dealsGrid) {
        return;
    }

    dealsGrid.replaceChildren();

    const deals = products
        .filter(function (product) {

            return calculateDiscount(product) > 0;

        })
        .slice(0, 4);

    deals.forEach(function (product) {

        const discount = calculateDiscount(product);

        const card = document.createElement("article");

        card.className = "deal-card";

        card.innerHTML = `
            <span class="deal-badge">
                ${discount}% off
            </span>

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <h3>${product.name}</h3>

            <div class="deal-prices">
                <span class="deal-price">
                    ${formatPrice(product.price)}
                </span>

                <span class="original-price">
                    ${formatPrice(product.originalPrice)}
                </span>
            </div>

            <button
                type="button"
                class="add-to-cart-button"
                data-add-to-cart="${product.id}"
                aria-label="Add ${product.name} to cart"
            >
                Add to Cart
            </button>
        `;

        dealsGrid.appendChild(card);

    });

}


/* ==========================================================
   SECTION 8: SEARCH, FILTER, AND SORT
   ========================================================== */

/*
   We use one function to handle:

   1. Product search
   2. Category filtering
   3. Product sorting

   This is better than creating
   separate rendering systems.

   Every time a filter changes,
   we run this function again.
*/

function applyFilters() {

    // Create a copy of the product array.
    let filteredProducts = [...products];


    /* SEARCH BY NAME OR DESCRIPTION */

    if (searchQuery !== "") {

        filteredProducts = filteredProducts.filter(
            function (product) {

                const searchableText =
                    `${product.name} ${product.description}`
                        .toLowerCase();

                return searchableText.includes(searchQuery);

            }
        );

    }


    /* FILTER BY CATEGORY */

    if (selectedCategory !== "all") {

        filteredProducts = filteredProducts.filter(
            function (product) {

                return product.category === selectedCategory;

            }
        );

    }


    /* SORT PRODUCTS */

    switch (selectedSort) {

        case "price-low":

            filteredProducts.sort(function (a, b) {
                return a.price - b.price;
            });

            break;


        case "price-high":

            filteredProducts.sort(function (a, b) {
                return b.price - a.price;
            });

            break;


        case "rating":

            filteredProducts.sort(function (a, b) {
                return b.rating - a.rating;
            });

            break;


        case "name":

            filteredProducts.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

            break;


        default:
            // Keep the original product order.
            break;

    }


    // Display the final results.
    renderProducts(filteredProducts);

}


/* ==========================================================
   SECTION 9: SEARCH FORM EVENT
   ========================================================== */

/*
   The submit event happens when
   the user submits the search form.

   preventDefault() stops the browser
   from reloading the page.

   trim() removes extra spaces.

   toLowerCase() makes searching
   case-insensitive.
*/

if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            searchQuery = searchInput.value
                .trim()
                .toLowerCase();

            selectedCategory = searchCategory.value;

            // Keep the other category selector in sync.
            categoryFilter.value = selectedCategory;

            applyFilters();

            // Move to the product results.
            document.getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* ==========================================================
   SECTION 10: CATEGORY FILTER EVENT
   ========================================================== */

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        function () {

            selectedCategory = categoryFilter.value;

            searchCategory.value = selectedCategory;

            applyFilters();

        }
    );

}


/* ==========================================================
   SECTION 11: SORT EVENT
   ========================================================== */

if (sortFilter) {

    sortFilter.addEventListener(
        "change",
        function () {

            selectedSort = sortFilter.value;

            applyFilters();

        }
    );

}


/* ==========================================================
   SECTION 12: CATEGORY CARD EVENTS
   ========================================================== */

/*
   Each category card has a data-category attribute.

   dataset.category reads that value.

   Example:

   data-category="electronics"

   JavaScript reads:

   card.dataset.category
*/

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        selectedCategory = card.dataset.category;

        // Clear search when choosing a category card.
        searchQuery = "";
        searchInput.value = "";

        // Update both category selectors.
        categoryFilter.value = selectedCategory;
        searchCategory.value = selectedCategory;

        applyFilters();

        document.getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* ==========================================================
   SECTION 13: RESET FILTERS
   ========================================================== */

function resetFilters() {

    searchQuery = "";
    selectedCategory = "all";
    selectedSort = "default";

    searchInput.value = "";
    searchCategory.value = "all";
    categoryFilter.value = "all";
    sortFilter.value = "default";

    applyFilters();

}

if (resetFiltersButton) {

    resetFiltersButton.addEventListener(
        "click",
        resetFilters
    );

}

if (emptyResetButton) {

    emptyResetButton.addEventListener(
        "click",
        resetFilters
    );

}


/* ==========================================================
   SECTION 14: LOCAL STORAGE
   ========================================================== */

/*
   localStorage stores data in the browser.

   It allows us to remember the shopping cart
   after the page is refreshed.

   localStorage stores strings.

   JSON.stringify() converts JavaScript data
   into a string.

   JSON.parse() converts a JSON string
   back into JavaScript data.

   Important:
   localStorage is not a database.

   Real e-commerce applications normally
   store important cart and order data
   on a backend server.
*/

function loadCart() {

    try {

        const savedCart = localStorage.getItem(
            "amazonCloneCart"
        );

        if (!savedCart) {
            return [];
        }

        const parsedCart = JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        /*
           Keep only valid product IDs
           and valid quantities.

           This prevents broken saved data
           from causing problems.
        */

        return parsedCart.filter(function (item) {

            const validProduct = products.some(
                function (product) {
                    return product.id === item.id;
                }
            );

            return (
                validProduct &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0 &&
                item.quantity <= 99
            );

        });

    } catch (error) {

        console.warn(
            "Could not load saved cart:",
            error
        );

        return [];

    }

}


/* SAVE CART */

function saveCart() {

    try {

        localStorage.setItem(
            "amazonCloneCart",
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Could not save cart:",
            error
        );

    }

}


/* ==========================================================
   SECTION 15: ADD PRODUCT TO CART
   ========================================================== */

/*
   When users click Add to Cart:

   1. Find the product.
   2. Check whether it is already in the cart.
   3. Increase its quantity or add a new item.
   4. Save the cart.
   5. Update the page.
   6. Show a notification.
*/

function addToCart(productId) {

    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find(function (item) {
        return item.id === product.id;
    });

    if (existingItem) {

        if (existingItem.quantity >= 99) {

            showToast("Maximum quantity is 99.");
            return;

        }

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveCart();
    renderCart();

    showToast(`${product.name} added to cart.`);

}


/* ==========================================================
   SECTION 16: REMOVE PRODUCT FROM CART
   ========================================================== */

/*
   Array.filter() creates a new array.

   We keep every cart item except
   the item we want to remove.
*/

function removeFromCart(productId) {

    const product = findProduct(productId);

    cart = cart.filter(function (item) {
        return item.id !== Number(productId);
    });

    saveCart();
    renderCart();

    if (product) {
        showToast(`${product.name} removed from cart.`);
    }

}


/* ==========================================================
   SECTION 17: UPDATE PRODUCT QUANTITY
   ========================================================== */

/*
   The change value can be:

   +1 to increase quantity.
   -1 to decrease quantity.

   If quantity becomes zero,
   we remove the item.
*/

function updateCartQuantity(productId, change) {

    const item = cart.find(function (cartItem) {
        return cartItem.id === Number(productId);
    });

    if (!item) {
        return;
    }

    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {

        removeFromCart(productId);
        return;

    }

    if (newQuantity > 99) {

        showToast("Maximum quantity is 99.");
        return;

    }

    item.quantity = newQuantity;

    saveCart();
    renderCart();

}


/* ==========================================================
   SECTION 18: CALCULATE CART TOTALS
   ========================================================== */

/*
   Array.reduce() combines array values
   into one result.

   We use it to calculate:

   - Total number of items
   - Cart subtotal

   Subtotal formula:

   Product price * Quantity

   We add the result for every cart item.
*/

function calculateCartTotals() {

    let totalItems = 0;
    let subtotalCents = 0;

    cart.forEach(function (item) {

        const product = findProduct(item.id);

        if (!product) {
            return;
        }

        totalItems += item.quantity;

        /*
           Convert prices to cents before
           calculating totals.

           This helps reduce floating-point
           rounding problems.
        */

        const priceCents = Math.round(
            product.price * 100
        );

        subtotalCents += priceCents * item.quantity;

    });

    return {
        totalItems: totalItems,
        subtotal: subtotalCents / 100
    };

}


/* ==========================================================
   SECTION 19: RENDER SHOPPING CART
   ========================================================== */

/*
   This function updates the shopping cart.

   It displays:
   - Product image
   - Product name
   - Price
   - Quantity controls
   - Remove button
   - Total item count
   - Subtotal
*/

function renderCart() {

    if (!cartItems) {
        return;
    }

    cartItems.replaceChildren();

    const totals = calculateCartTotals();


    /* UPDATE NAVIGATION CART COUNT */

    cartCount.textContent = totals.totalItems;

    cartTotalItems.textContent = totals.totalItems;

    cartSubtotal.textContent = formatPrice(
        totals.subtotal
    );


    /* SHOW EMPTY CART MESSAGE */

    if (cart.length === 0) {

        cartEmpty.hidden = false;
        cartSummary.hidden = true;

        return;

    }


    /* SHOW CART SUMMARY */

    cartEmpty.hidden = true;
    cartSummary.hidden = false;


    /* CREATE CART ITEMS */

    cart.forEach(function (item) {

        const product = findProduct(item.id);

        if (!product) {
            return;
        }

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="cart-item-image"
            >

            <div class="cart-item-details">

                <h3 class="cart-item-title">
                    ${product.name}
                </h3>

                <p class="cart-item-price">
                    ${formatPrice(product.price)}
                </p>

                <div class="cart-quantity">

                    <button
                        type="button"
                        data-cart-action="decrease"
                        data-product-id="${product.id}"
                        aria-label="Decrease quantity of ${product.name}"
                    >
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        type="button"
                        data-cart-action="increase"
                        data-product-id="${product.id}"
                        aria-label="Increase quantity of ${product.name}"
                    >
                        +
                    </button>

                </div>

                <button
                    type="button"
                    class="remove-item"
                    data-cart-action="remove"
                    data-product-id="${product.id}"
                >
                    Remove
                </button>

            </div>
        `;

        cartItems.appendChild(cartItem);

    });

}


/* ==========================================================
   SECTION 20: EVENT DELEGATION
   ========================================================== */

/*
   Event delegation means adding one event
   listener to a parent element.

   We use it because product cards
   are created dynamically.

   event.target.closest() finds the nearest
   matching element.

   This allows one event listener
   to handle many Add to Cart buttons.
*/

document.addEventListener(
    "click",
    function (event) {

        const addButton = event.target.closest(
            "[data-add-to-cart]"
        );

        if (addButton) {

            const productId = Number(
                addButton.dataset.addToCart
            );

            addToCart(productId);

        }

    }
);


/* CART BUTTON EVENTS */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        function (event) {

            const actionButton = event.target.closest(
                "[data-cart-action]"
            );

            if (!actionButton) {
                return;
            }

            const productId = Number(
                actionButton.dataset.productId
            );

            const action = actionButton.dataset.cartAction;

            if (action === "increase") {

                updateCartQuantity(productId, 1);

            } else if (action === "decrease") {

                updateCartQuantity(productId, -1);

            } else if (action === "remove") {

                removeFromCart(productId);

            }

        }
    );

}


/* ==========================================================
   SECTION 21: OPEN AND CLOSE CART
   ========================================================== */

/*
   The cart is a dialog panel.

   When opening:
   - Show the overlay
   - Show the cart panel
   - Update aria-expanded
   - Prevent background scrolling
   - Move keyboard focus to the cart

   When closing:
   - Hide the overlay
   - Hide the cart panel
   - Restore background scrolling
   - Return keyboard focus
*/

function openCart() {

    previousFocusedElement = document.activeElement;

    cartOverlay.hidden = false;
    cartPanel.hidden = false;

    cartPanel.setAttribute("aria-hidden", "false");

    cartButton.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";

    cartClose.focus();

}


function closeCart() {

    cartOverlay.hidden = true;
    cartPanel.hidden = true;

    cartPanel.setAttribute("aria-hidden", "true");

    cartButton.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";

    if (
        previousFocusedElement &&
        typeof previousFocusedElement.focus === "function"
    ) {
        previousFocusedElement.focus();
    }

}


/* CART OPEN BUTTON */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


/* CART CLOSE BUTTON */

if (cartClose) {

    cartClose.addEventListener(
        "click",
        closeCart
    );

}


/* CART OVERLAY */

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


/* CONTINUE SHOPPING */

if (continueShopping) {

    continueShopping.addEventListener(
        "click",
        closeCart
    );

}


/* CLOSE CART WITH ESCAPE KEY */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            cartPanel &&
            !cartPanel.hidden
        ) {

            closeCart();

        }

    }
);


/* KEEP KEYBOARD FOCUS INSIDE OPEN CART */

if (cartPanel) {

    cartPanel.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Tab") {
                return;
            }

            const focusableElements =
                Array.from(
                    cartPanel.querySelectorAll(
                        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])'
                    )
                ).filter(function (element) {
                    return !element.closest("[hidden]");
                });

            if (focusableElements.length === 0) {
                return;
            }

            const first = focusableElements[0];

            const last =
                focusableElements[focusableElements.length - 1];

            if (
                event.shiftKey &&
                document.activeElement === first
            ) {

                event.preventDefault();
                last.focus();

            } else if (
                !event.shiftKey &&
                document.activeElement === last
            ) {

                event.preventDefault();
                first.focus();

            }

        }
    );

}


/* ==========================================================
   SECTION 22: CHECKOUT BUTTON
   ========================================================== */

/*
   Our project is a frontend demo.

   We do not process real payments.

   A production checkout requires
   a backend and a secure payment provider.

   We show an explanatory message instead.
*/

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            showToast(
                "Checkout is a demo. Real payments are not enabled."
            );

        }
    );

}


/* ==========================================================
   SECTION 23: HERO SLIDER
   ========================================================== */

/*
   The slider contains six images.

   We move the slider track horizontally
   using CSS transform.

   Each slide uses 100% of the slider width.

   Example:

   Slide 1: translateX(0%)
   Slide 2: translateX(-100%)
   Slide 3: translateX(-200%)
*/

const totalSlides = slides.length;

const sliderDelay = 5000;


/* SHOW A SPECIFIC SLIDE */

function showSlide(index) {

    if (!sliderTrack || totalSlides === 0) {
        return;
    }

    /*
       The modulo operator (%) helps
       keep the index inside the slide range.

       Adding totalSlides handles
       negative indexes.
    */

    currentSlide =
        ((index % totalSlides) + totalSlides) %
        totalSlides;


    /* MOVE SLIDER TRACK */

    sliderTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    /* UPDATE ACTIVE SLIDE */

    slides.forEach(function (slide, index) {

        const isActive = index === currentSlide;

        slide.classList.toggle(
            "active",
            isActive
        );

        slide.setAttribute(
            "aria-hidden",
            String(!isActive)
        );

    });


    /* UPDATE SLIDER DOTS */

    sliderDots.forEach(function (dot, index) {

        const isActive = index === currentSlide;

        dot.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {

            dot.setAttribute(
                "aria-current",
                "true"
            );

        } else {

            dot.removeAttribute(
                "aria-current"
            );

        }

    });

}


/* NEXT SLIDE */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* PREVIOUS SLIDE */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* START AUTOMATIC SLIDER */

function startSlider() {

    if (totalSlides < 2 || sliderInterval !== null) {
        return;
    }

    if (document.hidden) {
        return;
    }

    sliderInterval = setInterval(
        nextSlide,
        sliderDelay
    );

}


/* STOP AUTOMATIC SLIDER */

function stopSlider() {

    if (sliderInterval !== null) {

        clearInterval(sliderInterval);

        sliderInterval = null;

    }

}


/* RESTART SLIDER */

function restartSlider() {

    stopSlider();
    startSlider();

}


/* PREVIOUS BUTTON */

if (sliderPrev) {

    sliderPrev.addEventListener(
        "click",
        function () {

            previousSlide();
            restartSlider();

        }
    );

}


/* NEXT BUTTON */

if (sliderNext) {

    sliderNext.addEventListener(
        "click",
        function () {

            nextSlide();
            restartSlider();

        }
    );

}


/* SLIDER DOT BUTTONS */

sliderDots.forEach(function (dot) {

    dot.addEventListener(
        "click",
        function () {

            const slideIndex = Number(
                dot.dataset.slide
            );

            showSlide(slideIndex);

            restartSlider();

        }
    );

});


/* PAUSE SLIDER ON HOVER */

if (sliderContainer) {

    sliderContainer.addEventListener(
        "mouseenter",
        stopSlider
    );

    sliderContainer.addEventListener(
        "mouseleave",
        startSlider
    );

    /*
       Pause when keyboard focus enters
       the slider controls.
    */

    sliderContainer.addEventListener(
        "focusin",
        stopSlider
    );

    sliderContainer.addEventListener(
        "focusout",
        function (event) {

            if (
                !sliderContainer.contains(
                    event.relatedTarget
                )
            ) {
                startSlider();
            }

        }
    );

}


/* KEYBOARD SLIDER NAVIGATION */

if (sliderContainer) {

    sliderContainer.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "ArrowRight") {

                event.preventDefault();

                nextSlide();

            } else if (event.key === "ArrowLeft") {

                event.preventDefault();

                previousSlide();

            }

        }
    );

}


/* PAUSE WHEN BROWSER TAB IS HIDDEN */

document.addEventListener(
    "visibilitychange",
    function () {

        if (document.hidden) {

            stopSlider();

        } else {

            startSlider();

        }

    }
);


/* ==========================================================
   SECTION 24: MOBILE MENU
   ========================================================== */

/*
   The mobile menu is hidden by default.

   Clicking the All button opens it.

   Clicking again closes it.

   aria-expanded tells screen readers
   whether the menu is open.
*/

function closeMobileMenu() {

    if (!mobileMenu || !menuToggle) {
        return;
    }

    mobileMenu.hidden = true;

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen = !mobileMenu.hidden;

            mobileMenu.hidden = isOpen;

            menuToggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        }
    );


    /* CLOSE WHEN USER CLICKS A MENU LINK */

    mobileMenu.querySelectorAll("a").forEach(
        function (link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


    /* CLOSE WHEN USER CLICKS OUTSIDE */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !mobileMenu.hidden &&
                !mobileMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* CLOSE MOBILE MENU WITH ESCAPE */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            !mobileMenu.hidden
        ) {

            closeMobileMenu();
            menuToggle.focus();

        }

    }
);


/* ==========================================================
   SECTION 25: TOAST NOTIFICATIONS
   ========================================================== */

/*
   A toast is a small temporary message.

   We use it to inform users
   when something happens.

   Example:
   "Wireless Headphones added to cart."

   setTimeout() runs a function once
   after a specified time.

   We hide the message after 3 seconds.
*/

function showToast(message) {

    if (!toast) {
        return;
    }

    // Stop the previous timer.
    if (toastTimer !== null) {

        clearTimeout(toastTimer);

    }

    // Display the message safely.
    toast.textContent = message;

    // Show the toast.
    toast.hidden = false;

    // Hide it after 3 seconds.
    toastTimer = setTimeout(
        function () {

            toast.hidden = true;

            toastTimer = null;

        },
        3000
    );

}


/* ==========================================================
   SECTION 26: CURRENT COPYRIGHT YEAR
   ========================================================== */

/*
   new Date() creates a date object.

   getFullYear() returns the current year.

   This keeps the footer year updated
   automatically.
*/

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ==========================================================
   SECTION 27: INITIALIZE APPLICATION
   ========================================================== */

/*
   Initialization means preparing
   the application when the page loads.

   We render:
   - All products
   - Today's Deals
   - Saved shopping cart
   - First slider image

   Then we start the automatic slider.
*/

function initializeApp() {

    // Display the product catalog.
    applyFilters();

    // Display discounted products.
    renderDeals();

    // Display saved cart items.
    renderCart();

    // Prepare the first slide.
    showSlide(0);

    // Start automatic sliding.
    startSlider();

    // Display a debugging message.
    console.log(
        "Amazon Clone initialized successfully."
    );

    console.log(
        `Loaded ${products.length} demo products.`
    );

}


/* ==========================================================
   SECTION 28: START APPLICATION
   ========================================================== */

/*
   Our HTML uses:

   <script src="script.js" defer></script>

   defer ensures the HTML is parsed
   before this script runs.

   We can safely initialize the application here.
*/

initializeApp();


/* ==========================================================
   END OF SCRIPT.JS
   ========================================================== */

/*
   MAIN JAVASCRIPT CONCEPTS COVERED:

   1. Variables
   2. const and let
   3. Arrays
   4. Objects
   5. Functions
   6. Parameters
   7. Return values
   8. DOM selection
   9. DOM manipulation
   10. Event listeners
   11. Event delegation
   12. Conditional statements
   13. switch statements
   14. Array.find()
   15. Array.filter()
   16. Array.sort()
   17. Array.forEach()
   18. Array.some()
   19. Array.slice()
   20. Template literals
   21. String methods
   22. Math.round()
   23. localStorage
   24. JSON.stringify()
   25. JSON.parse()
   26. setInterval()
   27. clearInterval()
   28. setTimeout()
   29. clearTimeout()
   30. Error handling
   31. Accessibility attributes
   32. Dynamic product rendering
   33. Shopping cart state
   34. Search and filtering
   35. Responsive menu behavior

   PROFESSIONAL DEVELOPMENT PRINCIPLE:

   Keep product data separate from
   rendering and business logic.

   Reuse functions instead of
   repeating code.

   Validate data before using it.

   Never trust frontend prices
   for real payment processing.
*/
