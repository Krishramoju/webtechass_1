document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let phone = document.querySelector("#phone").value.trim();
        let message = document.querySelector("#message").value.trim();
        
        if (!name || !email || !phone || !message) {
            event.preventDefault();
            alert("All fields are required!");
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            event.preventDefault();
            alert("Please enter a valid email address!");
        } else if (!/^\d{10}$/.test(phone)) {
            event.preventDefault();
            alert("Phone number must be 10 digits!");
        }
    });
});
