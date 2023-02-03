

getUserData();

//Get USer data Function (ASYNC)
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

    data.forEach(user => {

        const name = user.nome;
        const firstLetter = name.slice(0, 1);
        const username = firstLetter + name.slice(1);

        renderHtml += `<li class="request-item" data-info="${user.id},${user.index}">

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
                    <input type="text" name="card-input-comment" id="card-input-comment" placeholder="your comment...">
                    <label for="card-input-comment" class="card-input-comments-btn-send">📤</label>
                </form>

                    <div class="card-comments-container">
                        <div class="card-icon-comments-container">
                            <div class="card-icon-comments">✉️
                                <sup class="card-number-comments">3</sup>
                            </div>
                        </div>
                    </div>
            </footer>
        </article>

    </li>`
    });

    requestsSection.innerHTML = renderHtml;
}