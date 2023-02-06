
const userName = "marco";
const menuBtn = document.querySelector(".menu-container");
let menuIsOpen = false;

getUserData();


document.querySelector(".header-nav-link4").addEventListener("click", myRequest);


menuBtn.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
    if (Number(window.innerWidth) > 768 && document.querySelector(".header-nav").classList.contains("toggle-menu")) {
        console.log("si");
        toggleMenu();
    }
})




























/*////////////////////////////////////////////////////////////////////////////////////////////
                                FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////*/


//GET USERS DATA FORM DATABASE (ASYNC)
async function getUserData() {

    try {
    
    const url = "users.json";
    const request = await fetch(url);

    if (!request.ok) {
        throw Error(request.statusText)
    } 

        const json = await request.json();

        //render data
        renderDataUser(json);


    } catch (error) {
        
        alert(error);
        
 }  
    
}



function renderDataUser(data) {
    let renderHtml = "";

    const requestsSection = document.querySelector(".request-list");

    let dataLenght = 0;
    data.forEach(user => {

        const name = user.nome;
        const firstLetter = name.slice(0, 1);
        const username = firstLetter + name.slice(1);

        renderHtml += `<li class="request-item" data-id="${user.id}"data-index="${dataLenght}" data-user="${user.nome}">

        <article class="request-card-container">
            <header class="card-header flex-row">
                <p class="card-first-letter">${firstLetter}</p>
                <p class="card-username">${username}</p>
                <div class="delete-icon">🗑</div>
            </header>

            <main class="card-main">

                <div class="card-main-upper flex-row align-center space-between">
                    <div>
                        <p>Date:</p>
                        <p class="card-date">${user.date}</p>
                    </div>
                    <div>
                        <p>Shift</p>
                        <time class="card-shift">${user.shift}</time>
                    </div>
                
                </div>
               
                <div class="card-main-down">
                    <p class="card-request-title">Request:</p>
                    <p class="card-main-request">${user.request}</p>
                </div>
               
            </main>

            <footer class="card-footer">

                <form action="#" class="card-form-comment">
                    <input type="text" name="card-input-comment" id="card-input-comment" placeholder="your comment..." maxlength="50">
                    <label for="card-input-comment" class="card-input-comments-btn-send">📤</label>
                </form>
               <p class="comment-lenght-info">max 50 characters</p> 

                    <div class="card-comments-container">
                        <div class="card-icon-comments-container">
                            <div class="card-icon-comments" data-cmts="${dataLenght}">✉️
                                <sup class="card-number-comments">3</sup>
                            </div>
                        </div>
                    </div>
            </footer>
        </article>

        <div class="comment-text-section">
                                    <ul class="comment-list">
                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex</p>
                                            </section>
                                        </li>

                                        <li class="comment-item">
                                            <section class="comment-header-section">
                                                <div class="comment-header-left">
                                                    <div class="comment-first-letter">M</div>
                                                    <div class="comment-username">Marco</div>
                                                </div>
                                               
                                                <div class="comment-blockBtn">🔒</div>
                                            </section>

                                            <section class="comment-body-section">
                                                <p class="comment-text">salut moi j ai un 15 si tu vuex jkhkj hjhh hjhj </p>
                                            </section>
                                        </li>
                                    </ul>
                                </div>

    </li>`
        
        dataLenght++;
    });

    requestsSection.innerHTML = renderHtml;

    toggleCommentsSection();

    lockCard();
    
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toogle comment section when icon - comment is clicked

function toggleCommentsSection() {
    const iconsComment = document.querySelectorAll(".card-icon-comments");
    
    
    iconsComment.forEach(icon => {
        const commentsLenght = icon.getAttribute("data-cmts");
        const targetCard = icon.closest(".request-item");
        const usernameCard = targetCard.getAttribute("data-user").toLowerCase();
        
        icon.addEventListener("click", () => {
            alert(usernameCard)
            if (commentsLenght > 0) {
                const commentSection = targetCard.querySelector(".comment-text-section");
                commentSection.classList.toggle("toggleComments");
            }
    
            let isUser = usernameCard === userName.toLowerCase();

            if (!isUser) {
                const lockBtns = targetCard.querySelectorAll(".comment-blockBtn");

                lockBtns.forEach(btn => {
                    btn.style.display = "none";
                })
            }
        })
    })
}


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//TOGGLE LOCK BTN WHEN ICON IS CLICKED & ADD CLASS TO PARENT CARD  SHOWING  YELLOW BOX SHADOW 

function lockCard() {
    const iconLock = document.querySelectorAll(".comment-blockBtn");
    

    iconLock.forEach(icon => {
        icon.addEventListener("click", (e) => {
            const parentCard = icon.closest(".request-item");

            if (!e.target.classList.contains("toggleLockBtn")) {
                parentCard.classList.add("toggleLockCard");

                const cardLockIcons = icon.closest(".request-item").querySelectorAll(".comment-blockBtn");
                    cardLockIcons.forEach(icons => {
                        icons.classList.remove("toggleLockBtn");
                       
                    })
                
                    e.target.classList.add("toggleLockBtn");
                
            } else {
                parentCard.classList.remove("toggleLockCard");
                e.target.classList.remove("toggleLockBtn");
            }

            
            
        })
        
    })
}



/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//
//
//MY REQUEST FUNCTION

function myRequest() {
    const allUsersCards = document.querySelectorAll(".request-item");
    
    loadingMyRequest();

    if (Number(window.innerWidth) < 769 ) {
        toggleMenu();
    }
    const personalCards = allUsersCards.forEach(card => {

        const isPersonalCard = card.getAttribute("data-user").toLowerCase() === "marco";
        if (card.getAttribute("data-user").toLowerCase()!=="marco") {
            card.style.display = "none";
        
        }
       
    });
    
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
    
}



function loadingMyRequest() {
    const cardsContainer = document.querySelector(".request-list");
    cardsContainer.style.display = "none";

    setTimeout(() => {
        cardsContainer.style.display = "flex";
    }, 200);
}
