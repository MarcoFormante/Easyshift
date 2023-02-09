const menuBtn = document.querySelector(".menu-container");

document.querySelector(".header-nav-link4").addEventListener("click", myRequest);


menuBtn.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
    if (Number(window.innerWidth) > 768 && document.querySelector(".header-nav").classList.contains("toggle-menu")) {
      
        toggleMenu();
    }
})



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
    let personalCardLength = 0;

    const personalCards = allUsersCards.forEach(card => {
        

        const isPersonalCard = card.getAttribute("data-user").toLowerCase() === "Marco".toLowerCase();
        if (card.getAttribute("data-user").toLowerCase()!=="marco") {
            card.style.display = "none";
            
        } else {
            personalCardLength++;
            
        }
    });
    checkPersonalCardLength(personalCardLength);
}


function  checkPersonalCardLength(personalCardsLenght) {
    if (personalCardsLenght < 1) {
        document.querySelector("#info-text-section-noCards").style.display="block"
    }
}


function toggleMenu() {

    const menuLines = document.querySelectorAll(".menu-line");
    const headerNav = document.querySelector(".header-nav");

    

    menuLines.forEach(line=> {
        line.classList.toggle("toggle-menu");
    });

    headerNav.classList.toggle("toggle-menu");

    console.log( Number(window.outerWidth));
   
    
    document.querySelector("main").classList.toggle("toggle-menu");
    if (headerNav.classList.contains("toggle-menu")) {
        document.querySelector(".notification-icon-section").style.display = "none";
    } else {
        document.querySelector(".notification-icon-section").style.display = "block";
    }
}








function loadingMyRequest() {
    const cardsContainer = document.querySelector(".request-list");
    cardsContainer.style.display = "none";

    setTimeout(() => {
        cardsContainer.style.display = "flex";
    }, 200);
}