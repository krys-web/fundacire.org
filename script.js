document.addEventListener('DOMContentLoaded', () => {
    // Detecta elementos por ID o por Clase
    const menuToggle = document.getElementById('menuToggle') || document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.navbar nav');
    const navbar = document.getElementById('navbar') || document.querySelector('.navbar');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Alterna la clase active en el contenedor del menú
            navMenu.classList.toggle('active');

            // Cambia el icono de barras a 'X'
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });

        // Cerrar al hacer clic en cualquier opción del menú
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });

        // Cerrar al hacer clic fuera del menú
        document.addEventListener('click', (e) => {
            if (navbar && !navbar.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        });
    }
});