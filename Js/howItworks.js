const closeBtnHow = document.querySelector(".close-btn-how");


let pageTitle = sessionStorage.getItem("page");

let pageHtml = (pageTitle === "login") ? "loginPage.html" : "home.html";

closeBtnHow.addEventListener("click", goToRightPage);

function goToRightPage(pageTitle) {
    
    location.href = pageHtml;
}

