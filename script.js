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

// Submit form function
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    // Send email to the owner
    const subject = "New Enquiry from YRN TECH KENYA";
    const body = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;
    const emailLink = `mailto:officialbeauter@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
    });
    // Existing JavaScript code

// Function to fetch image URLs from Google Drive folder
async function getImageUrls() {
    try {
        const response = await fetch('https://www.googleapis.com/drive/v3/files?q=%271NQ48QlkFNh7hufeN6K3zjMNiv7C6HXF3%27+in+parents&key=AIzaSyAs2D7hxO3SSy5RNvew_qx3kHqdTonllvc');
        const data = await response.json();
        const files = data.files;
        
        const imageUrls = files.map(file => `https://drive.google.com/uc?id=${file.id}`);
        return imageUrls;
    } catch (error) {
        console.error('Error fetching image URLs:', error);
        return [];
    }
}

// Function to display images
async function displayImages() {
    const imageUrls = await getImageUrls();
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = "";

    imageUrls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Product Image";
        productsSection.appendChild(img);
    });
}

// Submit form function (unchanged)

// Display images when the page loads
displayImages();
