const menuBtn = document.querySelector(".menu-container");

document.querySelector(".header-nav-link4").addEventListener("click", myRequest);


menuBtn.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
    if (Number(window.innerWidth) > 768 && document.querySelector(".header-nav").classList.contains("toggle-menu")) {
        console.log("si");
        toggleMenu();
    }
})









function toggleMenu() {

    const menuLines = document.querySelectorAll(".menu-line");
    const headerNav = document.querySelector(".header-nav");

    

    menuLines.forEach(line=> {
        line.classList.toggle("toggle-menu");
    });

    headerNav.classList.toggle("toggle-menu");

    console.log( Number(window.outerWidth));
   
    
    document.querySelector("main").classList.toggle("toggle-menu");
    
}



function myRequest(e) {
    const allUsersCards = document.querySelectorAll(".request-item");
    const navItems = document.querySelectorAll(".header-nav-item");

    navItems.forEach(item => {
        item.classList.remove("header-nav-item--active")
    });
    
    loadingMyRequest();

    if (Number(window.innerWidth) < 769 ) {
        toggleMenu();
    }

    

    e.target.parentNode.classList.add("header-nav-item--active");
    console.log();
    const personalCards = allUsersCards.forEach(card => {

        const isPersonalCard = card.getAttribute("data-user").toLowerCase() === "marco";
        if (card.getAttribute("data-user").toLowerCase()!=="marco") {
            card.style.display = "none";
        
        }
       
    });
    
}




function loadingMyRequest() {
    const cardsContainer = document.querySelector(".request-list");
    cardsContainer.style.display = "none";

    setTimeout(() => {
        cardsContainer.style.display = "flex";
    }, 200);
}