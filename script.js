// SPA Navegação
const links = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const page = link.dataset.page;

        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(page).classList.add('active');

        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        window.scrollTo(0, 0);
    });
});

// Menu Mobile
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Animações ao Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
