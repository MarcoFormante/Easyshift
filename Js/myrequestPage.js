
let userName = localStorage.getItem("userName");

const iconloadingMickey = document.querySelector(".loading-mickey-container");
loadingMickeyDisplay(".body-page");


let keyDownCode = "";


getUserData();
getNotifications();

getActiveNotification(userName);


window.scrollTo(0, 0);














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
        throw Error(request.statusText);
        alert("erreur de connection , essayer plus tard");
        }



        const dataUsers = (await request.text()).split("|").slice(0,-1);
       

        //render data
        renderDataUser(dataUsers);


    } catch (error) {

        alert("erreur de connection , essayer plus tard" + " error : "+ error);

 }

}



function renderDataUser(data) {
    let renderHtml = "";
    
    const requestsSection = document.querySelector(".request-list");

    let dataLenght = 0;
    let datalenght2 = 0;
    data.forEach(user => {
console.log(user);
        const userDataCard = data[dataLenght].split("&&");
       

        const userInfoCard = {
            id:userDataCard[0],
            indexInArray:dataLenght,
            username: userDataCard[1],
            date:userDataCard[2],
            shift:userDataCard[3],
            request:userDataCard[4],
            isblockedBy:userDataCard[5]
        }
       console.log(userInfoCard.username.toLowerCase());
        if (userInfoCard.username.toLowerCase() === userName.toLowerCase()) {
            
            const firstLetter = userInfoCard.username.slice(0, 1);
            renderHtml += `<li class="request-item" data-id="${userInfoCard.id}"data-index="${dataLenght}" data-user="${userInfoCard.username}" data-blocked="${userInfoCard.isblockedBy}">

            <article class="request-card-container">
                <header class="card-header flex-row">
                    <p class="card-first-letter">${firstLetter}</p>
                    <p class="card-username">${userInfoCard.username}</p>
                    <div class="delete-icon"></div>
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
                        <p class="card-main-request">${userInfoCard.request}</p>
                    </div>
    
                </main>
    
                <footer class="card-footer">
    
                    <div class="card-form-comment">
                        <input type="text" name="card-input-comment" id="card-input-comment" placeholder="your comment..." maxlength="50">
                        <div class="card-input-comments-btn-send"></div>
                    </div>
                   <p class="comment-lenght-info">max 50 characters</p>
    
                        <div class="card-comments-container">
                            <div class="card-icon-comments-container">
                                <div class="card-icon-comments">??????
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
       
    
        } else {
            const firstLetter = userInfoCard.username.slice(0, 1);
            renderHtml += `<li style="display:none" class="request-item" data-id="${userInfoCard.id}"data-index="${dataLenght}" data-user="${userInfoCard.username}" data-blocked="${userInfoCard.isblockedBy}">

            <article class="request-card-container">
                <header class="card-header flex-row">
                    <p class="card-first-letter">${firstLetter}</p>
                    <p class="card-username">${userInfoCard.username}</p>
                    <div class="delete-icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 500"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></div>
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
                        <p class="card-main-request">${userInfoCard.request}</p>
                    </div>
    
                </main>
    
                <footer class="card-footer">
    
                    <div class="card-form-comment">
                        <input type="text" name="card-input-comment" id="card-input-comment" placeholder="your comment..." maxlength="50">
                        <div class="card-input-comments-btn-send"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 500"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></div>
                    </div>
                   <p class="comment-lenght-info">max 50 characters</p>
    
                        <div class="card-comments-container">
                            <div class="card-icon-comments-container">
                                <div class="card-icon-comments">??????
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
        
        }

     
        dataLenght++;
        
    });
    
          
       
    
    
    requestsSection.innerHTML = renderHtml;
    showDeleteIcon();
    getComments();
    handleSendComments();

    for (let i = 0; i < document.querySelectorAll(".request-item").length; i++) {

        if (document.querySelectorAll(".request-item")[i].style.display!=="none") {
            datalenght2++;
        }
      
        
    }
       

    if (datalenght2 > 0 ) {
        document.querySelector("#info-text-section-noCards").style.display = "none";
      
    } else {
        document.querySelector("#info-text-section-noCards").style.display = "block";
    }

    loadingMickeyDisplayNone(2000,".body-page");
}


     

function handleSendComments() {
const commentBtn = document.querySelectorAll(".card-input-comments-btn-send");

    commentBtn.forEach(btn => {
        btn.addEventListener("click", sendComment);
    })
    
}

async function sendComment(e) {
    console.log(e.target.closest(".card-form-comment").querySelector("#card-input-comment").value);
    const commentInput = e.target.closest(".card-form-comment").querySelector("#card-input-comment").value;
    const idCard = e.target.closest(".request-item").getAttribute("data-id");
    const s = "https://trueappwork.000webhostapp.com/";
    let randomIDcommentArray = ["m", 2, "d", "o", "j", "g", "r", "l", 5, "v", "8", "x", "7", "z", "bn", "yhj", "i7", "bgj"];
    let IDrandom = "";
    for (let i = 0; i <= 10; i++) {
        IDrandom += randomIDcommentArray[Math.floor(Math.random()* 18)];
        console.log(IDrandom);
        
    }

    const commentsContainer = e.target.closest(".request-item").querySelector(".comment-text-section > .comment-list");
    
    if (commentInput !=="") {
        
        await $.ajax({
            methods: "POST",
            url: s + `easyShiftSendComment.php?comid=${IDrandom}&name=${userName.toLowerCase()}&comment=${commentInput}&idCard=${idCard}`,

            success: function (response) {
              
                
                const comments = [IDrandom + "&&" + userName.toLowerCase() + "&&" + commentInput + "&&" + idCard + "&&" + "Aujourd'hui"];
                e.target.closest(".card-form-comment").querySelector("#card-input-comment").value = "";
                alert("ton commentaire a ??t?? envoy??");

               
                renderCommentsAfter(comments);
                

                if (e.target.closest(".request-item").getAttribute("data-user").toLowerCase()!== userName.toLowerCase()) {
                    sendNotificationTo(userName, idCard, e.target.closest(".request-item").getAttribute("data-user").toLowerCase(), "a comment?? ton post");
                    console.log(userName, idCard, e.target.closest(".request-item").getAttribute("data-user").toLowerCase());
                    activeNotificationForusers(e.target.closest(".request-item").getAttribute("data-user").toLowerCase());
                }
            },

            error: function (error) {
                alert("Probleme de connection , essayer plus tard :( " + error)
            }


        })

    }
        
}

function renderCommentsAfter(comments) {
   


    comments.forEach(comment => {
        const commentsArray = comment.split("&&");
        const cards = document.querySelectorAll(".request-item");

        const commentData = {
            id: commentsArray[0],
            name: commentsArray[1],
            body: commentsArray[2],
            idCard: commentsArray[3],
            firstLetter: commentsArray[1].slice(0,1),
            isBlocked: "",
            time: commentsArray[4]
        }
        const time = commentData.time;


        

        cards.forEach(card => {


            if (card.getAttribute("data-id") === commentData.idCard) {

                const commentsContainer = card.querySelector(".comment-text-section > .comment-list");
                if (commentData.name.toLowerCase() !== userName.toLowerCase()) {

                    commentsContainer.innerHTML += `
                    <li class="comment-item" data-comId="${commentData.id}" data-idCard="${commentData.idCard}" data-block="${0}">
                        <section class="comment-header-section">
                            <div class="comment-header-left">
                                <div class="comment-first-letter">${commentData.firstLetter}</div>
                                <div class="comment-username">${commentData.name}</div>
                            </div>
                            <div class="comment-blockBtn">????</div>
                            </section>

                            <section class="comment-body-section">
                                <p class="comment-text">${commentData.body}</p>
                            </section>
                            <p class="date-comment">${time}<p>
                        </li>`;
                        
                        
                } else {
                    commentsContainer.innerHTML += `
                    <li class="comment-item" data-comId="${commentData.id}" data-idCard="${commentData.idCard}" data-block="${commentData.isBlocked}">
                        <section class="comment-header-section">
                            <div class="comment-header-left">
                                <div class="comment-first-letter">${commentData.firstLetter}</div>
                                <div class="comment-username">${commentData.name}</div>
                            </div>

                            </section>

                            <section class="comment-body-section">
                                <p class="comment-text">${commentData.body}</p>
                            </section>
                            <p class="date-comment">${time}<p>
                        </li>`;
                        


                }
                if (userName.toLowerCase() !== card.getAttribute("data-user").toLowerCase()) {
                    if (card.querySelector("#comment .comment-item .comment-header-section .comment-blockBtn")) {

                        card.querySelector("#comment .comment-item .comment-blockBtn").style.display = "none";
                    } else {
                        console.log("non ce");
                    }
                    
                
                }

                updateCommentsLength(card);
                
             }
             
        })
        

        
    })
    lockCard();
    checkBlockedComments();
    deleteComment();
    
}
    

// function sendnotificationtoAll(username,idCard,Allusercomments,bodynotif) {
    
//     Allusercomments.forEach(usercomment => {
//         const usernamecomment = usercomment.innerText;
//     if (usernamecomment.toLowerCase() !== userName.toLowerCase()) {
//         sendNotificationTo(username, idCard, usernamecomment, bodynotif);
//     }
       
//     });
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toogle comment section when icon - comment is clicked

function toggleCommentsSection() {
    const iconsComment = document.querySelectorAll(".card-icon-comments");


    iconsComment.forEach(icon => {
        const commentsLenght = 2;
        const targetCard = icon.closest(".request-item");
        const usernameCard = targetCard.getAttribute("data-user").toLowerCase();

        icon.addEventListener("click", () => {
            targetCard.scrollIntoView(true)
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

    let idComment = "";
    let idCard = "";

    iconLock.forEach(icon => {
        icon.addEventListener("click", (e) => {
            
            const parentCard = icon.closest(".request-item");
            const commentSection = icon.closest(".comment-item")
            

            if (!e.target.classList.contains("toggleLockBtn")) {
                parentCard.classList.add("toggleLockCard");
               

                const cardLockIcons = icon.closest(".request-item").querySelectorAll(".comment-blockBtn");
                cardLockIcons.forEach(icons => {
                    icons.classList.remove("toggleLockBtn");
                    icons.closest(".comment-item").classList.remove("comment-blocked")
                })

                e.target.classList.add("toggleLockBtn");
                commentSection.classList.add("comment-blocked")

                // collect idCArd and id comment for database
                
                idComment = e.target.closest(".comment-item").getAttribute("data-comId")
               
                idCard = icon.closest(".request-item").getAttribute("data-id");
                
                setLike(idComment, idCard,userName,icon.previousElementSibling.querySelector(".comment-username").innerText,`voudrait ton shift`);
               

            } else {
                parentCard.classList.remove("toggleLockCard");
                e.target.classList.remove("toggleLockBtn");
                commentSection.classList.remove("comment-blocked");

                idComment = 0;
                idCard = icon.closest(".request-item").getAttribute("data-id");

                setLike(idComment, idCard , userName ,icon.previousElementSibling.querySelector(".comment-username").innerText,`a chang?? d'avis sur sa requete`);
                
            }

        })

    })
}







async function setLike(idComment, idCard,userName,nameOfthecomment,bodynotif) {
    const s = "https://trueappwork.000webhostapp.com/";
    const url = "easyShiftLike.php";
    const idc = idCard;
    const bodyNotification = bodynotif;
    try {

        $.ajax({
            method: "POST",
            url: s+`easyShiftLike.php?commentId=${idComment}&cardId=${idCard}`,
           
            success: function(response){
               
                alert(`ton choix est envoy?? au Server`)
                sendNotificationTo(userName,idc,nameOfthecomment,bodyNotification);
            },
            error: function(xhr, status, error){
                alert("un erreur est survenu, rentez plus tard" + " error: " + error(error));
            }
        });

    
    
    } catch (error) {
    alert(error)
    }
    
}

//da finire
async function sendNotificationTo(username, idCard,nameOfthecomment,bodyNotification) {
    const s = "https://trueappwork.000webhostapp.com/";
    
    try {

       await $.ajax({
            method: "POST",
            url: s+`easyShiftSendNotification.php?notificationBy=${username}&name=${nameOfthecomment}&idCard=${idCard}&body=${bodyNotification}`,
           
            success: function(response){
                               
            },
            error: function(xhr, status, error){
                alert("un erreur est survenu, rentez plus tard" + " error: " + error(error));
            }
        });

    
    
    } catch (error) {
    alert(error)
    }
    
}



/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
// FUNCTION BTN SEARCH USER BY DATE


function searchBtnPressed(e) {


    if (e.target.innerText === "???") {
        searchBar.value = "";
        e.target.innerText = "????";

        document.querySelectorAll(".request-item").forEach(card => {
            card.style.display = "block";

        })
    }


    if (document.querySelector("#input-search-bar").value !== "") {
        e.target.innerText = "???";
    }

}



function showDeleteIcon(username, cardIndex) {

    const iconsDeleteCard = document.querySelectorAll(".delete-icon");

    iconsDeleteCard.forEach(icon => {
        const parentCard = icon.closest(".request-item");
        const cardUserName = parentCard.getAttribute("data-user").toLowerCase();
            if (cardUserName !== userName.toLowerCase()) {
            parentCard.querySelector(".delete-icon").style.display = "none";
            } else {
                parentCard.querySelector(".delete-icon").addEventListener("click",deleteCard)
            }
    })
}
 

function deleteCard(e) {
    const cardId = e.target.closest(".request-item").getAttribute("data-id")
    
    const s = "https://trueappwork.000webhostapp.com/";
    const url = "easyShiftLike.php";
    const optionsWindowDeleteCard = window.confirm("vous voulez vraiment supprimer cette requete?");

    if (optionsWindowDeleteCard) {

        $.ajax({
            method: "POST",
            url: s + `easyShiftDelete.php?id=${cardId}`,
            success:function (response) {
            
                deletecommentsOnDB(cardId);
                e.target.closest(".request-item").remove();
            },
            error: function (error) {
                alert("Erreur de Connection au Database , checker votre")
            }
        })
    }

   
}


function deletecommentsOnDB(cardid) {
    
    $.ajax({
        methods: "POST",
        url: `https://trueappwork.000webhostapp.com/easyShiftDeleteComments.php?idCard=${cardid}`,
        
        success:function(response) {
           
        },

        error: function (error) {
            alert("probleme de connection , essayer plus tard :( "+ error )
        }
    })
}


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
    


    comments.forEach(comment => {
        const commentsArray = comment.split("&&");
        const cards = document.querySelectorAll(".request-item");

        const commentData = {
            id: commentsArray[0],
            name: commentsArray[1],
            body: commentsArray[2],
            idCard: commentsArray[3],
            firstLetter: commentsArray[1].slice(0,1),
            isBlocked: "",
            time: commentsArray[4]
        }
        const time = commentData.time.slice(0,commentData.time.indexOf(" ")).split("-").join("/");
        const hour = " " + commentData.time.slice(commentData.time.indexOf(" "), -3);
        
        

        cards.forEach(card => {


            if (card.getAttribute("data-id") === commentData.idCard) {

                const commentsContainer = card.querySelector(".comment-text-section > .comment-list");
                if (commentData.name.toLowerCase() !== userName.toLowerCase()) {

                    commentsContainer.innerHTML += `
                    <li class="comment-item" data-comId="${commentData.id}" data-idCard="${commentData.idCard}" data-block="${0}">
                        <section class="comment-header-section">
                            <div class="comment-header-left">
                                <div class="comment-first-letter">${commentData.firstLetter}</div>
                                <div class="comment-username">${commentData.name}</div>
                            </div>
                            <div class="comment-blockBtn">????</div>
                            </section>

                            <section class="comment-body-section">
                                <p class="comment-text">${commentData.body}</p>
                            </section>
                            <p class="date-comment">${time+hour}<p>
                        </li>`;
                        
                        
                } else {
                    commentsContainer.innerHTML += `
                    <li class="comment-item" data-comId="${commentData.id}" data-idCard="${commentData.idCard}" data-block="${commentData.isBlocked}">
                        <section class="comment-header-section">
                            <div class="comment-header-left">
                                <div class="comment-first-letter">${commentData.firstLetter}</div>
                                <div class="comment-username">${commentData.name}</div>
                            </div>

                            </section>

                            <section class="comment-body-section">
                                <p class="comment-text">${commentData.body}</p>
                            </section>
                            <p class="date-comment">${time+hour}<p>
                        </li>`;
                        


                }
                if (userName.toLowerCase() !== card.getAttribute("data-user").toLowerCase()) {
                    if (card.querySelector("#comment .comment-item .comment-header-section .comment-blockBtn")) {

                        card.querySelector("#comment .comment-item .comment-blockBtn").style.display = "none";
                    } else {
                       
                    }
                    
                   
                }

                updateCommentsLength(card);
                
             }
             
        })
        

        
    })
    lockCard();
    checkBlockedComments();
    toggleCommentsSection();
    deleteComment();
}


function updateCommentsLength(card) {
    let commentsLength = card.querySelector(".card-comments-container .card-number-comments");
    const commentsList = card.querySelectorAll(".comment-text-section li");
    

    commentsLength.innerText = commentsList.length;
}



function checkBlockedComments() {
    const commentsList = document.querySelectorAll(".comment-item");
    
    commentsList.forEach(comment => {
  
        if (comment.getAttribute("data-comId") === comment.closest(".request-item").getAttribute("data-blocked") && comment.getAttribute("data-comId") !== "0") {
            comment.classList.add("comment-blocked");

           
            const parentCard = comment.closest(".request-item");
            
            
            if ( comment.querySelector(".comment-blockBtn")) {
              
                comment.querySelector(".comment-blockBtn").classList.add("toggleLockBtn");
                parentCard.classList.add("toggleLockCard");
            }
           
             
        }
    })
}


async function getNotifications() {
    

    try {
        const request = await fetch(`https://trueappwork.000webhostapp.com/getNotificationsEasyshift.php?name=${userName}`)
            

           if (!request.ok) {
           alert("probleme de connection :( essayez plus tard " + request.statusText)
        }
        
          const data = await (await request.text()).split("|");
        

         renderNotifications(data);
        
    } catch (error) {
         alert("probleme de connection :( essayez plus tard " + error)
     }
}

function renderNotifications(data) {
    const notificationsContainer = document.querySelector("#notification-inner");
   
    const notifications = data.slice(0, -1);
   
    let dataNotif = [];
    notifications.forEach(notification => {
        dataNotif = notification.split("&&");
       
        
        const notificationObject = {
            id: dataNotif[0],
            firstLetter: dataNotif[1][0],
            name: dataNotif[1],
            body: dataNotif[1] + " " + dataNotif[2],
            idCard: dataNotif[4],
            time: dataNotif[5]
        }

        const time = notificationObject.time.slice(0,notificationObject.time.indexOf(" ")).split("-").join("/");
        const hour = " " +  notificationObject.time.slice( notificationObject.time.indexOf(" "), -3);

       
         notificationsContainer.innerHTML += `
                             <figure class="notification-card" data-id="${notificationObject.id}" data-idCard="${notificationObject.idCard}">    
                                     <p class="notification-first-letter">${notificationObject.firstLetter}</p>
                                     <figcaption class="notification-body">${notificationObject.body}</figcaption>
                                     <div class="delete-notification"></div>
                                     
                             </figure>
                             <p class="dateNotification">${time+hour}<p>
                                     `

    })

    deleteNotification("");

    WatchNotification();
}


function deleteNotification(notifTarget) {
    
    if (notifTarget == "") {
        const comments = document.querySelectorAll(".notification-card");

    comments.forEach(comment => {
        const iconDeleteNotification = comment.querySelector(".delete-notification");
        iconDeleteNotification.addEventListener("click", (e) => {
            const idNotification = e.target.closest(".notification-card").getAttribute("data-id");

            const questionNotification = window.confirm("vous voulez vraiment effacer cette notification?");

            if (questionNotification) {
                try {
                    
                    $.ajax({
                        methods: "POST",
                        url: `https://trueappwork.000webhostapp.com/easyShiftDeleteNotifications.php?id=${idNotification}`,
                        
                        success: function (response) {
                           
                            e.target.closest(".notification-card").remove()
                        },
    
                        error: function (error) {
                            alert("probleme de connection , essayer plus tard :( " + error);
                        }
                    })
                } catch (error) {
                    alert("probleme de connection , essayer plus tard :( " + error);
                }
            }
            

           
        })
    });
        
    } else {
        try {
                    
            $.ajax({
                methods: "POST",
                url: `https://trueappwork.000webhostapp.com/easyShiftDeleteNotifications.php?id=${notifTarget}`,
                
                success: function (response) {
                    
                   
                },

                error: function (error) {
                    alert("probleme de connection , essayer plus tard :( " + error);
                }
            })
        } catch (error) {
            alert("probleme de connection , essayer plus tard :( " + error);
        }
    }
    
}


function  WatchNotification() {
    const notifications = document.querySelectorAll(".notification-card");

    notifications.forEach(notification => {
        notification.addEventListener("click", (e) => {
            if (!e.target.classList.contains("delete-notification")) {
                const cardTargetId = e.target.closest(".notification-card").getAttribute("data-idCard");
            
            const cards = document.querySelectorAll(".request-item");

            document.querySelector(".notification-section").classList.toggle("toggle-notifications");
          

            let cardcounter = 0;
            cards.forEach(card => {
                if (card.getAttribute("data-id") === cardTargetId) {
                    card.style.display = "block";
                    cardcounter++;
                } else {
                    card.style.display = "none";
                    
                }
                
            });
                document.querySelector(".button-close-watchNotification-container").style.display = "flex";
                document.querySelector(".notification-icon-section").style.display = "flex";
            if (cardcounter < 1) {
                alert("l'utilisateur a effacer cette requete");
                deleteNotification(e.target.closest(".notification-card").getAttribute("data-id"));
                notification.nextElementSibling.remove();
                notification.remove();
                
            }
            }
            
        })
    });
    
}



const closeBtnWatchNotification = document.querySelector(".button-close-watchNotification");

closeBtnWatchNotification.addEventListener("click", () => {
    loadingMyRequest(200)
    location.reload();
})

// myRequest()

// function myRequest() {
    
//     const allUsersCards = document.querySelectorAll(".request-item");
   

    
//     loadingMyRequest();

    
//     let personalCardLength = 0;

//     const personalCards = allUsersCards.forEach(card => {
        

//         const isPersonalCard = card.getAttribute("data-user").toLowerCase() === userNameStorage.toLowerCase();
//         if (card.getAttribute("data-user").toLowerCase()!==userNameStorage) {
//             card.style.display = "none";
            
//         } else {
//             personalCardLength++;
            
//         }
//     });
//     checkPersonalCardLength(personalCardLength);
// }


function  checkPersonalCardLength(personalCardsLenght) {
    if (personalCardsLenght < 1) {
        document.querySelector("#info-text-section-noCards").style.display="block"
    }
}





async function getActiveNotification(username) {
    
    try {
        const request = await fetch(`https://trueappwork.000webhostapp.com/getActiveNotificationEasyshift.php?name=${username.toLowerCase()}`);
        const response = await request.text();
    
        if (response == 1) {
            const iconNotification = document.querySelector(".notification-icon");
            iconNotification.classList.add("hasNotification");
    
            
        }
    } catch (error) {
        
    }
}
    


//loading mickey

function loadingMickeyDisplay(bodypage) {
    iconloadingMickey.style.display = "block";
    document.querySelector("" + bodypage).style.display = "none";
}


function loadingMickeyDisplayNone(time,bodypage) {
    setTimeout(() => {
        iconloadingMickey.style.display = "none";
        document.querySelector("" + bodypage).style.display = "block";
    }, time);
}


function deleteComment() {
    const comments = document.querySelectorAll(".comment-item");
    
  
    let timer = undefined;

    comments.forEach(comment => {
 
    
        if (window.innerWidth > 769) {
            comment.addEventListener("mousedown",(e) => {
                const commentName = e.currentTarget.querySelector(".comment-username").innerText.toLowerCase();
               
                const commentId = e.currentTarget.getAttribute("data-comid");
                const currentComment = e.currentTarget;
                let currentNumberOfComments = currentComment.closest(".request-item").querySelector(".card-number-comments");
                const commentText = currentComment.querySelector(".comment-text").innerText;
                
                if (commentName === userName.toLowerCase()) { 
                    currentComment.style.border = "2px solid red";
                }
              
                if (commentName === userName.toLowerCase()){
                    timer = setTimeout(() => {
                        
                        const optionsDeleteComments = window.confirm("Voulez-vous supprimer ce commentaire?"+ `\n ${commentName} : "${commentText}"`);
    
                        if (optionsDeleteComments) {
                            console.log(currentComment);
                        
                            currentComment.remove();
    
                            deletecommentsONLYOnDB(commentId);
                            console.log(commentId);
                            
                          
                            if (currentNumberOfComments.innerText !== "0") {
                                currentNumberOfComments.innerText = +currentNumberOfComments.innerText - 1;
                            }
    
                        } else {
                            currentComment.style.border = "";
                        }
                      
                      }, 1500);
                }
        
            })


            comment.addEventListener("mouseup", () => {
                setTimeout(() => {
                    clearTimeout(timer)
                    comment.style.border = "none";
                    timer = null;
                }, 5);
            })
    
        } else {

            comment.addEventListener("touchstart", (e) => {
                const commentName = e.currentTarget.querySelector(".comment-username").innerText.toLowerCase();
                
                const commentId = e.currentTarget.getAttribute("data-comid");
                const currentComment = e.currentTarget;
                let currentNumberOfComments = currentComment.closest(".request-item").querySelector(".card-number-comments");
                const commentText = currentComment.querySelector(".comment-text").innerText;
                
                if (commentName === userName.toLowerCase()) { 
                    currentComment.style.border = "2px solid red";
                }
              
                if (commentName === userName.toLowerCase()){
                    timer = setTimeout(() => {
                        
                        const optionsDeleteComments = window.confirm("Voulez-vous supprimer ce commentaire?"+ `${commentName}:${commentText}`);
    
                        if (optionsDeleteComments) {
                            console.log(currentComment);
                        
                            currentComment.remove();
    
                            deletecommentsONLYOnDB(commentId);
                            console.log(commentId);
                            
                          
                            if (currentNumberOfComments.innerText !== "0") {
                                currentNumberOfComments.innerText = +currentNumberOfComments.innerText - 1;
                            }
    
                        } else {
                            currentComment.style.border = "";
                        }
                      
                      }, 1500);
                }
            
                
            })
    
    
            
    
            comment.addEventListener("touchend", () => {
               
                    clearTimeout(timer)
                    comment.style.border = "none";
                    timer = 0;
              
            })
            
            } 
        
     
    })
}


function deletecommentsONLYOnDB(commentId) {
    
    $.ajax({
        methods: "POST",
        url: `https://trueappwork.000webhostapp.com/easyShiftDeleteOnlyComments.php?comid=${commentId}`,
        
        success:function(response) {
            alert("Le commentaire ?? et?? supprim??")
        },

        error: function (error) {
            alert("probl??me de connection , r??essayez plus tard :( "+ error )
        }
    })
}