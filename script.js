// Handle form submission and send email
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("message", message);

    fetch("/submit-form", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log server response
        const confirmationMessage = document.getElementById("confirmation-message");
        confirmationMessage.style.display = "block";
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

// Any other existing code you have
