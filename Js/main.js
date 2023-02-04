

getUserData();





































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

        renderHtml += `<li class="request-item" data-id="${user.id}"data-index="${dataLenght}">

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
        icon.addEventListener("click", () => {
            if (commentsLenght > 0) {
                const commentSection = icon.closest(".request-item").querySelector(".comment-text-section");
                commentSection.classList.toggle("toggleComments");
               
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