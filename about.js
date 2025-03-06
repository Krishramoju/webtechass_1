document.addEventListener("DOMContentLoaded", function () {
    let teamSection = document.querySelector(".team-section");

    window.addEventListener("scroll", function () {
        let position = teamSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            teamSection.classList.add("visible");
        }
    });
});
