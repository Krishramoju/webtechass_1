document.addEventListener("DOMContentLoaded", function () {
    let galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            document.getElementById("modal-img").src = this.src;
            let myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        });
    });
});
