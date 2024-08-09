document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');
});

// Highlight Page on Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar li a');

window.onscroll= () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
} 

