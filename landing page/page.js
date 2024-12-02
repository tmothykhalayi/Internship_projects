// script.js

let cart = [];
let cartTotal = 0;

// Function to add items to the cart
function addToCart(productName, price) {
  cart.push({ productName, price });
  cartTotal += price;

  // Update cart display
  updateCart();
  openCart();  // Show cart modal when an item is added
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  // Clear current cart items
  cartItems.innerHTML = '';

  // Add updated cart items
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price}`;
    cartItems.appendChild(li);
  });

  // Update cart total
  cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

// Function to handle checkout (can be extended for a real payment process)
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  alert(`Proceeding to checkout. Total: $${cartTotal.toFixed(2)}`);
  // In a real-world scenario, here you would handle payment processing
}

// Function to open the cart modal
function openCart() {
  document.getElementById('cart-modal').style.display = 'block';
}

// Function to close the cart modal
function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

// Smooth scroll effect for navigation
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// ScrollReveal for animations on scroll
ScrollReveal().reveal('.service-item', { delay: 200, distance: '50px', origin: 'bottom', interval: 150 });
ScrollReveal().reveal('#shop', { delay: 400, distance: '50px', origin: 'bottom' });
