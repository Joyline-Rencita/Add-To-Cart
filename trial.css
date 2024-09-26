*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

html{
    scroll-behavior: smooth;
}

nav {
    width: 100%;
    height: 60px;
    background-color: #f6f6f6; /* Adjust color as needed */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000; /* Ensures the navbar stays on top */
    padding: 0 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional for subtle shadow */
}

nav ul{
    list-style: none;
}

nav ul li{
    display: inline-block;
    margin: 0 15px;
}

nav ul li a{
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 20px;
    transition: 0.1s;
}

nav ul li a::after{
    content: '';
    width: 0;
    height: 2px;
    background: #fb8c0e;
    display: block;
    transition: 0.2s linear;
}

nav ul li a:hover::after{
    width: 100%;
}

nav ul li a:hover{
    color: #fb8c0e;
}

.logo img {
    height: 40px; /* Adjust logo height */
}

.shopping {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 70px;   /* adjust the postion of the cart */
}

.shopping img {
    height: 40px; /* Adjust cart icon size */
    cursor: pointer;
}

.quantity {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    padding: 2px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Wrap the content in a container */
.content-wrapper {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    justify-content: center; /* Horizontally center content */
    align-items: center; /* Center align elements */
    width: 100%;
}

section {
    padding-top: 50px; /* Padding to move the content below the navbar */
}

h4 {
    font-size: 35px;
    color: #0F172B;
    margin: 20px 0 2px; /* Reduce bottom margin to reduce the gap  [top] [right/left] [bottom]   */  /* in general [top] [right] [bottom] [left]*/
}

h4 span {
    margin-left: 8px;
    color: #ffbd23;
    font-family: "MV Boli", cursive;
    line-height: 22px;
    font-size: 35px;
}

/*  Menu items :  */
.card {
    border: 1px solid #cecdcd;
    border-radius: 16px;
    width: 335px; /* Increase the width of the card */
    padding: 20px; /* Increase padding for more space */
    margin: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: 200ms;
    display: flex;
    flex-direction: column; /* Ensure content stacks vertically */
    justify-content: space-between; /* Ensures the content is spaced */
    align-items: center; /* Aligns content centrally */
}

.card:hover {
    transform: rotate(1deg);
    border: 1px solid rgb(225, 193, 255);
    border-radius: 22px;
}

.card-img {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 15px; /* Add space between the image and the paragraph */
}

.card h3 {
    font-size: 20px;
    margin: 10px 0; /* Add margin between the heading and text */
}

.card p {
    font-size: 16px;
    margin-bottom: 20px; /* Add space between the paragraph and button */
    text-align: center;
}
.price {
    font-size: 20px;
    font-weight: bold;
    color: #000000; /* Set the color for the price */
    margin-bottom: 15px; /* Add space below the price and above the button */
    text-align: center; /* Center the price text */
}

button {
    background-color: orange;
    align-self: center;
}

.btn {
    background-color: orange;
    color: rgb(255, 255, 255);
    border: none;
    padding: 12px 20px; /* Slightly increase button padding */
    border-radius: 9px;
    cursor: pointer;
    margin-top: auto; /* Push button to the bottom of the card */
}

.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2px;
}


/* MEDIA QUERIES  */ 

@media (max-width: 576px) {
    nav {
        width: 100%; /* Make it a top navigation on mobile */
        height: auto;
        flex-direction: row;
        align-items: center;
        padding: 10px;
    }

    ul {
        display: none; /* Hide the menu items for small screens */
        flex-direction: column;
        background-color: #333;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        padding: 20px;
    }

    nav.active ul {
        display: flex; /* Show menu on toggle (with JS) */
    }

    ul li {
        margin: 10px 0;
    }

    .shopping {
        margin-left: auto; /* Move cart to the right in the top bar */
    }

    .menu-toggle {
        display: block; /* Show menu toggle button */
        cursor: pointer;
        font-size: 24px;
        color: white;
    }
}

/* Hide the toggle button on larger screens */
.menu-toggle {
    display: none;
}

/* media query for section and h4 */
/* Media query for small screens (up to 768px) */
@media (max-width: 768px) {
    section {
        padding-top: 100px; /* Increased padding to create space for the nav bar */
    }

    h4 {
        font-size: 24px; /* Reduce font size for smaller screens */
        margin: 15px; /* Adjust margin */
    }

    h4 span {
        font-size: 24px; /* Adjust span font size */
    }
}

/* Media query for very small screens (up to 480px) */
@media (max-width: 480px) {
    section {
        padding-top: 80px; /* Further adjust padding */
    }

    h4 {
        font-size: 20px; /* Further reduce font size */
        margin: 10px; /* Reduce margin */
    }

    h4 span {
        font-size: 20px; /* Adjust span font size */
    }
}

    /* ***************************************  ADD TO CART ************************************** */

/* Style for the cart sidebar */
.cart-sidebar {
    position: fixed;
    right: -500px; /* Start off-screen */
    top: 0;
    width: 500px; /* Increased width of the sidebar */
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease; /* Smooth transition for opening/closing */
    padding: 20px;
    z-index: 1000; /* Higher z-index to ensure it appears in front */
}

/* When the cart is open, slide the sidebar into view */
body.cart-open .cart-sidebar {
    right: 0; /* Move to visible position */
}

.cart-sidebar h2 {
    margin: 8px 0 10px; /* Add space above (20px) and below (10px) the heading */
    padding: 2px; /* Uniform padding on all sides */
    text-align: center; /* Center the text */
}

.cart-sidebar-header {
    display: flex; /* Use flexbox for alignment */
    justify-content: space-between; /* Space between title and close button */
    align-items: center; /* Center items vertically */
    text-align: center;
}

button.increase, button.decrease {
    background-color: transparent; /* Remove yellow background */
    border: none; /* Remove any border */
    color: black; /* Change text color if needed */
    padding: 5px; /* Adjust padding for better spacing */
    cursor: pointer; /* Add pointer cursor */
    font-size: 16px; /* Adjust font size for readability */
}
button.increase:hover, button.decrease:hover {
    color: #051a30; /* Optional: Change color on hover (e.g., blue) */
}

.cart-items {
    margin-top: 25px;
}

/* Overlay when cart is open */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 999; /* Make sure the overlay is below the sidebar but above content */
}

body.cart-open .cart-sidebar {
    right: 0; /* Move the sidebar into view */
}

body.cart-open .overlay {
    display: block; /* Show the overlay when cart is open */
}

/* Ensure no margin on the shopping icon */
.shopping {
    margin-right: 0; /* Remove margin to eliminate space */
}

/* Close button for the sidebar */
#close-cart {
    background: none;
    border: none;
    font-size: 1.5rem; /* Size of the close button */
    cursor: pointer;
    padding: 0; /* Remove default padding */
}
/*  styling cart table  */
.cart-items-table {
    width: 100%;
    border-collapse: collapse;
}

.cart-items-table th, .cart-items-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.cart-items-table img {
    vertical-align: middle;
}

.cart-items-table th, .cart-items-table td {
    text-align: center; /* Centers all content within the table cells */
    vertical-align: middle; /* Ensures content is vertically centered */
}
.cart-items-table td.quantity-control {
    display: flex;
    justify-content: space-between; /* Space between buttons and quantity */
    align-items: center; /* Center vertically */
    gap: 15px; /* Adjust the space between the buttons and quantity */
}

.total {
    font-size: 20px; /* Total size */
    font-weight: bold; /* Bold total text */
    margin-top: 20px; /* Space above total */
    text-align: center; /* Center the text */
}

/* Large Devices (Desktops and larger screens) */
@media screen and (min-width: 1024px) {
    .cart-sidebar {
        width: 400px; /* Set specific width for larger screens */
    }
}

/* Medium Devices (Tablets) */
@media screen and (max-width: 1024px) {
    .cart-sidebar {
        width: 100%; /* Full width for tablets */
    }

    .cart-items-table th, 
    .cart-items-table td {
        font-size: 0.9em; /* Slightly smaller font */
    }

    .cart-sidebar-header {
        padding: 15px; /* Adjust padding */
    }

    .checkOut {
        padding: 15px;
        font-size: 1.1em; /* Adjust font size */
    }
}

/* Small Devices (Landscape Phones) */
@media screen and (max-width: 768px) {
    .cart-sidebar {
        width: 100%; /* Use full width on small devices */
        right: -100%; /* Start completely off-screen */
    }

    .cart-items-table th, .cart-items-table td {
        font-size: 0.8em; /* Further reduce font size */
        padding: 8px; /* Adjust padding */
    }

    .cart-items-table img {
        width: 40px; /* Smaller image size */
    }

    .cart-sidebar-header {
        padding: 10px; /* Adjust padding */
    }

    .checkOut {
        padding: 10px;
        font-size: 1em; /* Adjust font size */
    }
}
.cart-sidebar.open {
    transform: translateX(-100%); /* Slide in from the right */
}

/* Extra Small Devices (Portrait Phones) */
@media screen and (max-width: 480px) {
    .cart-sidebar-header {
        flex-direction: column; /* Stack title and close button */
        text-align: center; /* Center-align header text */
    }

    .cart-items-table th, .cart-items-table td {
        font-size: 0.7em; /* Smallest font size */
        padding: 6px; /* Further reduce padding */
    }

    .cart-items-table img {
        width: 30px; /* Smallest image size */
    }

    .checkOut {
        padding: 8px;
        font-size: 0.9em; /* Smaller font size */
    }
}
