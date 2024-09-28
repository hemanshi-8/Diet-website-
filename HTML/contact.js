document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name && email && subject && message) {
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console and show a success message
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});