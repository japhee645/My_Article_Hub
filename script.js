// Wait for the HTML content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // 1. Select the form elements
    const contactForm = document.querySelector("#contact form");
    const nameInput = document.querySelector('#contact input[type="text"]');
    const emailInput = document.querySelector('#contact input[type="email"]');
    const messageInput = document.querySelector('#contact textarea');
    
    // 2. Select the new message display element
    const messageDisplay = document.querySelector("#form-message");

    // 3. Add the event listener
    contactForm.addEventListener("submit", function(event) {
        
        event.preventDefault(); // Stop the page from reloading
        
        // Clear any old message before running validation
        messageDisplay.textContent = "";

        // Check if any of the input fields are empty
        if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
            
            // Display an error message
            messageDisplay.textContent = "Error: Please fill out all fields before sending.";
            messageDisplay.style.color = "red"; // Make error messages red
            // The form content remains
            
        } else {
            
            // Display a success message
            messageDisplay.textContent = "Thank you! Your message has been received.";
            messageDisplay.style.color = "green"; // Make success messages green
            
            // The form content remains in the fields
        }
    });

});
