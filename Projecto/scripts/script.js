//alert("Este Web Site está em desenvolvimento, atualizaçōes futuras virão, mas enquanto isso aproveite-o :)");
/*
:root {
     --dark: #444143;
     --gray: #A19E9D;
     --light: #E2E2DA;
     --white: #FFFFFF;
     --accent: #DCE8E7;
}
*/ 


function aparecer(){
    let subMenu = document.getElementById("sub-menu");
    if (subMenu.style.display == "flex") {
        subMenu.style.display = "none";
        logoIcon.innerText = "menu"
    } else {
        subMenu.style.display = "flex";
        logoIcon.innerText = "close"
    }
}

function mudarCorDeFundo() {
    //Sections e Header
    let header = document.getElementById("header");
    let mainHero = document.querySelector("#main-hero");
    let menuNav = document.getElementById("#menuNav");

    if(
        header.style.backgroundColor === "#444143"
    ) {
        header.style.backgroundColor = "#E2E2DA"
    }

    /*
    let botao1 = document.getElementById("button1")
    let botao2 = document.getElementById("button2")
    
    botao1.style.backgroundColor = "#DCE8E7";
    botao2.style.backgroundColor = "#DCE8E7";

    header.style.backgroundColor = '#E2E2DA';
    header.style.color = '#444143';

    mainHero.style.backgroundColor = "#444143";
    mainHero.style.color = "white";
        
    botao1.style.color = "#444143"
    botao2.style.color = "#444143"

    menuNav.style.backgroundColor = '#444143';
    //Buttons*/
}