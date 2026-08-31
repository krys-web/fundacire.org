document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================================
    // MENÚ HAMBURGUESA RESPONSIVO
    // ===================================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Alterna la clase 'active' en el contenedor <nav id="navMenu">
            navMenu.classList.toggle('active');

            // Cambia el icono entre las tres barras (fa-bars) y la X (fa-xmark)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });

        // Cerrar el menú si el usuario hace clic fuera de la barra de navegación
        document.addEventListener('click', (e) => {
            if (navbar && !navbar.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // ===================================================
    // ANIMACIÓN AL HACER SCROLL (.about-row)
    // ===================================================
    const cards = document.querySelectorAll('.about-row');

    if (cards.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        cards.forEach(card => observer.observe(card));
    }
});