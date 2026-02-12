alert("Este Web Site está em desenvolvimento, atualizaçōes futuras virão, mas enquanto isso aproveite-o :)");

let logoIcon = document.getElementById("logo-icon");
logoIcon.addEventListener("click", () => {
    let subMenu = document.getElementById("sub-menu");
    if (subMenu.style.display === "none") {
        subMenu.style.display = "flex";
        logoIcon.innerText = "close"
    } else {
        subMenu.style.display = "none";
        logoIcon.innerText = "menu"
    }
})





//Parte da animacao

let 