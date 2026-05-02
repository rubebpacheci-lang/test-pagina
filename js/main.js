/**
 * PHR Ingeniería - Main JS
 */

document.addEventListener('DOMContentLoaded', () => {
    // Current Page Highlight in Navigation
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                // If we want to add 'active' class automatically
                // link.classList.add('active');
            }
        });
    }

    // Projects Filtering (Proyectos page)
    const filterCheckboxes = document.querySelectorAll('.filtro-item input[type="checkbox"]');
    if (filterCheckboxes.length > 0) {
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const id = e.target.id;
                
                // Logic for "Todos los proyectos"
                if (id === 'filtro-todos' && e.target.checked) {
                    filterCheckboxes.forEach(cb => {
                        if (cb.id !== 'filtro-todos') cb.checked = false;
                    });
                } else if (e.target.checked) {
                    document.getElementById('filtro-todos').checked = false;
                }

                // Filtering cards visually (simple simulation)
                const cards = document.querySelectorAll('.proyecto-card');
                cards.forEach((card, index) => {
                    // This is a simple visual simulation since we don't have real data attributes
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                    }, 300);
                });
            });
        });
    }
});
