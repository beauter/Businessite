// Existing JavaScript code

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
