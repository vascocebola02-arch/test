let hamburguer = document.getElementById("hamburguer");

hamburguer.addEventListener('click', () => {
    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
