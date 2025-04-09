(function() {
        emailjs.init("p113sa_AqtamQCI02"); // Correct User ID

        // Event listener for form submission
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Sending form data using EmailJS
            emailjs.sendForm("service_dnm3t6l", "template_iv6x4n8", this)
                .then(() => {
                    alert("Message Sent Successfully!"); // Success message
                }, (err) => {
                    alert("Failed to Send Message: " + err); // Error message
                });
        });
    })();