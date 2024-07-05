document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('whatsAppButton').addEventListener('click', function() {
        // Your phone number (replace with your actual number)
        const phoneNumber = '50687384450';

        // Predefined message
        const message = 'Hello, I would like to know more about your services.';

        // WhatsApp API link
        // const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp chat in a new tab/window
        window.open(whatsappLink, '_blank');
    });
    console.log('WhatsApp event listeners added'); // Debugging log
});