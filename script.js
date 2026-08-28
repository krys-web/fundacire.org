document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Manejo del scroll para dar sombra/reducir la barra de navegación dinámicamente
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Control de envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por comunicarte con FUNDACIRE! Tu mensaje ha sido enviado exitosamente.');
            contactForm.reset();
        });
    }
});