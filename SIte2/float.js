// float.js
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar ul a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseout", function () {
            link.style.transform = "scale(1)";
            link.style.transition = "transform 0.3s ease";
        });
    });
});
