document.addEventListener("DOMContentLoaded", function () {
    // Navbar collapse on link click
    let navLinks = document.querySelectorAll(".nav-link");
    let navBar = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navBar.classList.remove("show");
        });
    });

    // Carousel Autoplay Speed
    let carousel = document.querySelector('.carousel');
    if (carousel) {
        let carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000 // Change slide every 3 seconds
        });
    }
});
