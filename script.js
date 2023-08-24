// Sample product data
const products = [
    { name: "Product 1", description: "Description 1", price: 10 },
    { name: "Product 2", description: "Description 2", price: 20 },
    // Add more products here
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Submit form function
document.getElementById("enquiry-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    // Send email to the owner
    const subject = "New Enquiry from Businessite";
    const body = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;
    const emailLink = `mailto:officialbeauter@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;
});

// Display products when the page loads
displayProducts();
