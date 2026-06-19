document.addEventListener('DOMContentLoaded', () => {
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const eventType = document.getElementById('eventType').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Format message for WhatsApp
            const whatsappNumber = "917736743096"; // Contact number provided
            
            const text = `Hello Elyzia Events!\n\nMy Name: ${name}\nEvent Type: ${eventType}\n\nRequirements:\n${message}`;
            const encodedText = encodeURIComponent(text);
            
            // Redirect to WhatsApp API
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
