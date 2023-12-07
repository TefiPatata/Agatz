document.addEventListener("DOMContentLoaded", function () {
    const imgItems = document.querySelectorAll(".gallery-item:not(.video-item) img");
    const imgPopup = document.querySelector(".image-popup");
    const closeImgBtn = document.querySelector(".close-img");
    const popupImg = imgPopup.querySelector("img");

    // Función para abrir la imagen ampliada
    function openImage(url) {
        popupImg.src = url;
        imgPopup.classList.add("show-img-popup");
    }

    // Función para cerrar la imagen ampliada
    function closeImage() {
        imgPopup.classList.remove("show-img-popup");
    }

    // Asigna el evento de clic a cada elemento de imagen
    imgItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const imgSrc = this.src;
            openImage(imgSrc);
        });
    });

    // Asigna el evento de clic al botón de cerrar imagen
    closeImgBtn.addEventListener("click", closeImage);
});
