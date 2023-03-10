const menuBtn = document.querySelector(".menu-container");
const userNameStorage = localStorage.getItem("userName").toLowerCase();
document.querySelector(".header-nav-link4").addEventListener("click", myRequest);

window.scrollTo(0, 0);

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
    document.querySelector(".search-bar-section").style.display = "none";

    if (Number(window.innerWidth) < 769 ) {
        toggleMenu();
    }

    

    e.target.parentNode.classList.add("header-nav-item--active");
    let personalCardLength = 0;

    const personalCards = allUsersCards.forEach(card => {
        

        const isPersonalCard = card.getAttribute("data-user").toLowerCase() === userNameStorage.toLowerCase();
        if (card.getAttribute("data-user").toLowerCase()!==userNameStorage) {
            card.style.display = "none";
            
        } else {
            personalCardLength++;
            
        }
    });
    checkPersonalCardLength(personalCardLength);
}


function  checkPersonalCardLength(personalCardsLenght) {
    if (personalCardsLenght < 1) {
        document.querySelector("#info-text-section-noCards").style.display = "block";
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
    
   
    // document.querySelector("main").classList.toggle("toggle-menu");
    if (headerNav.classList.contains("toggle-menu") && (document.querySelector(".notification-icon-section"))) {
        document.querySelector(".body-page").style.height = "100vh";
        document.querySelector(".notification-icon-section").style.display = "none";
        document.querySelector("main").classList.add("toggle-menu");
        
    } else {
        if (document.querySelector(".notification-icon-section")) {
            document.querySelector(".notification-icon-section").style.display = "block";
            document.querySelector(".body-page").style.height = "";
            document.querySelector("main").classList.remove("toggle-menu");
        }
       
    }
}








function loadingMyRequest() {
    const cardsContainer = document.querySelector(".request-list");
    cardsContainer.style.display = "none";

    setTimeout(() => {
        cardsContainer.style.display = "flex";
    }, 200);
}