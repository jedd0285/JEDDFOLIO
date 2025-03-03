document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                content.classList.add('show'); // Add fade-in effect
            } else {
                content.style.display = "none";
                content.classList.remove('show'); // Remove fade-in effect
            }
        });
    });

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = "none";
    });

    // Smooth scroll to sections
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const section = this.parentElement;
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Change header background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    contents.forEach(content => {
        observer.observe(content);
    });

    // Modal functionality
    const contactButton = document.querySelector('.contact-button');
    const modal = document.getElementById('contactModal');
    const closeButton = document.querySelector('.close-button');

    contactButton.addEventListener('click', function() {
        modal.style.display = "block";
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});