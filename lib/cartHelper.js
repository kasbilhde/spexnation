const CART_KEY = "cart";

// Read
function getCart() {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : { items: [], totalItems: 0, subtotal: 0, currency: "EUR", updatedAt: null };
}

// Write
function saveCart(cart) {
    cart.updatedAt = new Date().toISOString();
    cart.totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);
    cart.subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add to cart
function addToCart(newItem) {
    const cart = getCart();
    const existing = cart.items;
    const UpdateItems = [...existing, newItem];
    cart.items.push(newItem);
    saveCart(cart);
}

// Remove
function removeFromCart(cartItemId) {
    const cart = getCart();
    cart.items = cart.items.filter(i => i.cartItemId !== cartItemId);
    saveCart(cart);
}

// Update quantity
function updateQuantity(cartItemId, qty) {
    const cart = getCart();
    const item = cart.items.find(i => i.cartItemId === cartItemId);
    if (item) item.quantity = qty;
    saveCart(cart);
}

export { addToCart, getCart, removeFromCart, updateQuantity };

