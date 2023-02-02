const btnHamburger  = document.querySelector("#btnhamburger");
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay");
const menu= document.querySelector(".header__menu")
const body= document.querySelector("body")


btnHamburger.addEventListener("click", function(){
    if( header.classList.contains("open")){
        header.classList.remove("open");
        //overlay
        overlay.classList.remove("fade-in");
         overlay.classList.add("fade-out");
        //menu
        menu.classList.add("fade-out");
        menu.classList.remove("fade-in")
        //no-scroll
        body.classList.remove("no-scroll")
    }
    else{
        header.classList.add("open");
        //overlay
        overlay.classList.add("fade-in")
        overlay.classList.remove("fade-out")
        //menu
        menu.classList.add("fade-in");
        menu.classList.remove("fade-out")
        //no-scroll
        body.classList.add("no-scroll")
    }
});

