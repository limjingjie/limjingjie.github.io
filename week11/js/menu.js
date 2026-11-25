const bugerButton = document.getElementById("buger");
const menu = document.getElementById("mobile-menu");

bugerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Change icon
    if (menu.classList.contains("active")) {
        bugerButton.innerHTML = "&times;"; // × (cross)
    } else {
        bugerButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }
});
