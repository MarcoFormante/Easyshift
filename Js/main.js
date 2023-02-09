const searchBar = document.querySelector("#input-search-bar");
const searchBtn = document.querySelector("#search-btn");
const userName = "marco";
let keyDownCode = "";


getUserData();


searchBtn.addEventListener("click", searchBtnPressed);


















/*////////////////////////////////////////////////////////////////////////////////////////////
                                FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////*/


//GET USERS DATA FORM DATABASE (ASYNC)
async function getUserData() {

    try {
    const s = "https://trueappwork.000webhostapp.com/"
    const url = "getdatiEasyShift.php";
    const request = await fetch(s+url);

    if (!request.ok) {
        throw Error(request.statusText)
        } 
        
       

        const dataUsers = await (await request.text()).split("|").slice(0,-1);
        console.log(dataUsers);

        //render data
        renderDataUser(dataUsers);


    } catch (error) {
        
        alert(error);
        
 }  
    
}



function renderDataUser(data) {
    let renderHtml = "";

    const requestsSection = document.querySelector(".request-list");

    let dataLenght = 0;
    data.forEach(user => {

        const userDataCard = data[dataLenght].split("&&");
        console.log(userDataCard);

        const userInfoCard = {
            id:userDataCard[0],
            indexInArray:dataLenght,
            username: userDataCard[1],
            date:userDataCard[2],
            shift:userDataCard[3],
            request:userDataCard[4],
            iSblockedBy:userDataCard[5]
        }

        
        const firstLetter = userInfoCard.username.slice(0, 1);

        renderHtml += `<li class="request-item" data-id="${userInfoCard.id}"data-index="${dataLenght}" data-user="${userInfoCard.username}">

        <article class="request-card-container">
            <header class="card-header flex-row">
                <p class="card-first-letter">${firstLetter}</p>
                <p class="card-username">${userInfoCard.username}</p>
                <div class="delete-icon">🗑</div>
            </header>

            <main class="card-main">

                <div class="card-main-upper flex-row align-center space-between">
                    <div>
                        <p>Date:</p>
                        <p class="card-date">${userInfoCard.date}</p>
                    </div>
                    <div>
                        <p>Shift</p>
                        <time class="card-shift">${userInfoCard.shift}</time>
                    </div>
                
                </div>
               
                <div class="card-main-down">
                    <p class="card-request-title">Request:</p>
                    <p class="card-main-request">${userInfoCard.shift}</p>
                </div>
               
            </main>

            <footer class="card-footer">

                <form action="#" class="card-form-comment">
                    <input type="text" name="card-input-comment" id="card-input-comment" placeholder="your comment..." maxlength="50">
                    <div class="card-input-comments-btn-send">📤</div>
                </form>
               <p class="comment-lenght-info">max 50 characters</p> 

                    <div class="card-comments-container">
                        <div class="card-icon-comments-container">
                            <div class="card-icon-comments">✉️
                                <sup class="card-number-comments">0</sup>
                            </div>
                        </div>
                    </div>
            </footer>
        </article>

        <div class="comment-text-section">
                                    <ul class="comment-list" id="comment">
                                       
                                        

                                    </ul>
                                </div>

    </li>`
        
        dataLenght++;
      
    });

    requestsSection.innerHTML = renderHtml;

    toggleCommentsSection();

    
    showDeleteIcon();
    getComments();
    
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toogle comment section when icon - comment is clicked

function toggleCommentsSection() {
    const iconsComment = document.querySelectorAll(".card-icon-comments");
    
    
    iconsComment.forEach(icon => {
        const commentsLenght = 2;
        const targetCard = icon.closest(".request-item");
        const usernameCard = targetCard.getAttribute("data-user").toLowerCase();
        
        icon.addEventListener("click", () => {
           
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
// FUNCTION BTN SEARCH USER BY DATE


function searchBtnPressed(e) {
   

    if (e.target.innerText === "❌") {
        searchBar.value = "";
        e.target.innerText = "🔍";

        document.querySelectorAll(".request-item").forEach(card => {
            card.style.display = "block";
            
        })
    }
   
   
    if (document.querySelector("#input-search-bar").value !== "") {
        e.target.innerText = "❌";
    } 
  
}



function showDeleteIcon(username, cardIndex) {
    
    const iconsDeleteCard = document.querySelectorAll(".delete-icon");
   
    iconsDeleteCard.forEach(icon => {
        const parentCard = icon.closest(".request-item");
        const cardUserName = parentCard.getAttribute("data-user").toLowerCase();
            if (cardUserName !== userName.toLowerCase()) {
            parentCard.querySelector(".delete-icon").style.display = "none";
            }
        })}


async function getComments() {
    
    try {
        const s = "https://trueappwork.000webhostapp.com/"
        const url = "getcommentsEasyshift.php";
        const request = await fetch(s+url);
    
        if (!request.ok) {
            throw Error(request.statusText)
            } 
            
        const dataUsers = await (await request.text()).split("|").slice(0, -1);
    
            //render data
        renderComments(dataUsers);
    
    
        } catch (error) {
            
            alert(error);
            
     }  
}


function renderComments(comments) {
    console.log(comments);

   
    comments.forEach(comment => {
        const commentsArray = comment.split("&&");
        const cards = document.querySelectorAll(".request-item");
       
        const commentData = {
            id: commentsArray[0],
            name: "cd",
            body: commentsArray[2],
            idCard: commentsArray[3],
            firstLetter: commentsArray[1].slice(0,1),
            isBlocked: 1
        }
        
        cards.forEach(card => {

        
            if (card.getAttribute("data-id") === commentData.idCard) {

                const commentsContainer = card.querySelector(".comment-text-section > .comment-list"); 
                if (commentData.name.toLowerCase() !== userName.toLowerCase()) {
                   
                    commentsContainer.innerHTML += `
                    <li class="comment-item" data-comId="${commentData.id}" data-idCard="${commentData.idCard} data-block="1">
                        <section class="comment-header-section">
                            <div class="comment-header-left">
                                <div class="comment-first-letter">${commentData.firstLetter}</div>
                                <div class="comment-username">${commentData.name}</div>
                            </div> 
                            <div class="comment-blockBtn">🔒</div> 
                            </section>
   
                            <section class="comment-body-section">
                                <p class="comment-text">${commentData.body}</p>
                            </section>
                        </li>`;        
                } else {
                    commentsContainer.innerHTML += `
                    <li class="comment-item" data-comId="${commentData.id}" data-idCard="${commentData.idCard} data-block="1">
                        <section class="comment-header-section">
                            <div class="comment-header-left">
                                <div class="comment-first-letter">${commentData.firstLetter}</div>
                                <div class="comment-username">${commentData.name}</div>
                            </div> 
                           
                            </section>
   
                            <section class="comment-body-section">
                                <p class="comment-text">${commentData.body}</p>
                            </section>
                        </li>`; 
                    
                   
                }
                if (userName.toLowerCase() !== card.getAttribute("data-user").toLowerCase() ) {
                    card.querySelector("#comment .comment-item .comment-blockBtn").style.display = "none";
                }

                updateCommentsLength(card);

             }

        })
        lockCard();
        
       
    })
   
}


function updateCommentsLength(card) {
    let commentsLength = card.querySelector(".card-comments-container .card-number-comments");
    const f = card.querySelectorAll(".comment-text-section li");
    console.log(f.length);

    commentsLength.innerText = f.length;
}





//toggleLockBtn  card-number-comments