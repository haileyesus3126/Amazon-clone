
"use strict";

const product = {
    id: 1,
    name: "Headphones",
    price: 50
};

let cart = [];

const addButton = document.getElementById("btn-to-add-to-cart");

const cartCount = document.getElementById("cart-count");

const cartTotal = document.getElementById("cart-total");

function calculateTotal() {
    let total = 0;

    cart.forEach(function (item) {
        total = total + item.price;
    });

    return total;
}

function updateCartDisplay() {
    cartCount.textContent = cart.length;

    cartTotal.textContent = calculateTotal().toFixed(2);
}

function addToCart() {
    cart.push(product);

    updateCartDisplay();

    console.log("Product added:", product.name);
    console.log("Current cart:", cart);
}

addButton.addEventListener("click", function () {
    addToCart();
});

updateCartDisplay();
