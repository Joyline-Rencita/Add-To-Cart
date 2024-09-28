// Select necessary elements
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const closeCartButton = document.getElementById('close-cart');
const cartOpenButton = document.querySelector('.cart-icon'); // The cart image
const quantityElement = document.querySelector('.quantity'); // Element to display item count
const emptyCartMessage = document.querySelector('.empty-cart-message'); // "Your cart is empty" message

// Initialize cart and total price
let cartItems = [];
let totalPrice = 0;
let itemCount = 0; // Variable to keep track of the number of items

// Function to open the cart
function openCart() {
    document.body.classList.add('cart-open'); // Add 'cart-open' class to the body
}

// Function to close the cart
function closeCart() {
    document.body.classList.remove('cart-open'); // Remove 'cart-open' class from the body
}

// Event listener for the cart image click
cartOpenButton.addEventListener('click', openCart);

// Event listener for the close button
closeCartButton.addEventListener('click', closeCart);

// Close the cart when clicking on the overlay
overlay.addEventListener('click', closeCart);

// Function to update the cart display
function updateCart() {
    const cartItemsTable = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');

    // Clear current cart items
    cartItemsTable.innerHTML = '';

    // Add items to cart display as table rows
    cartItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('cart-item');

        tr.innerHTML = `
            <td><img src="${item.imgUrl}" alt="${item.name}" style="width: 40px; height: 40px;"/></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="decrease" data-name="${item.name}">-</button>
                <span>${item.quantity}</span>
                <button class="increase" data-name="${item.name}">+</button>
            </td>
        `;
        cartItemsTable.appendChild(tr);
    });

    // Update total price
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    quantityElement.textContent = itemCount; // Update the quantity display

    // Add event listeners for increase and decrease buttons
    attachQuantityChangeListeners();
}

// Function to add item to cart
function addToCart(name, price, imgUrl) {
    const existingItem = cartItems.find(item => item.name === name);
    
    if (existingItem) {
        // Increment quantity if item already exists
        existingItem.quantity += 1;
    } else {
        // If it doesn't exist, add a new item with quantity 1
        cartItems.push({ name, price, imgUrl, quantity: 1 });
    }

    totalPrice += price;
    itemCount++; // Increment item count
    updateCart();
}

// Function to change quantity
function changeQuantity(name, change) {
    const item = cartItems.find(item => item.name === name);

    if (item) {
        if (change === 'increase') {
            item.quantity += 1;
            totalPrice += item.price;
            itemCount++; // Increment total item count
        } else if (change === 'decrease' && item.quantity > 0) {
            item.quantity -= 1;
            totalPrice -= item.price;
            itemCount--; // Decrement total item count
        }

        // Remove item from cart if quantity reaches 0
        if (item.quantity === 0) {
            cartItems = cartItems.filter(cartItem => cartItem.name !== name);
        }
        
        updateCart();
    }
}

// Attach listeners to quantity change buttons
function attachQuantityChangeListeners() {
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            changeQuantity(name, 'decrease');
        });
    });

    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            changeQuantity(name, 'increase');
        });
    });
}

// Event listener for add to cart buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.parentElement.querySelector('h3').textContent; // Get the name from the card
        const price = parseFloat(button.parentElement.querySelector('.price').textContent.replace('$', '')); // Get the price
        const imgUrl = button.parentElement.querySelector('.card-img').src; // Get the image URL

        addToCart(name, price, imgUrl);
    });
});

// Function to cancel the order and clear the cart
function cancelOrder() {
    cartItems = []; // Clear the cart items
    totalPrice = 0; // Reset the total price
    itemCount = 0; // Reset the item count
    updateCart(); // Update the cart display
    closeCart(); // Close the cart if it is open
}

// Event listener for the cancel button
document.getElementById('cancel-btn').addEventListener('click', cancelOrder);

// Function to handle billing process
function proceedToBilling() {
    if (cartItems.length === 0) {
        alert("Your cart is empty! Please add items to your cart before proceeding.");
        return; // Prevent proceeding if the cart is empty
    }

    // Create a summary of the cart items
    let billSummary = "Your Bill:\n\n";
    cartItems.forEach(item => {
        billSummary += `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    // Add total price to the summary
    billSummary += `\nTotal: $${totalPrice.toFixed(2)}`;

    // Optionally, you could redirect to a payment page or an external payment gateway here
    // For demonstration purposes, we'll just alert the bill summary
    alert(billSummary);

    // Clear the cart after billing
    cancelOrder(); // Reuse the cancelOrder function to clear the cart
}

// Event listener for the proceed button
document.getElementById('proceed-btn').addEventListener('click', proceedToBilling);
