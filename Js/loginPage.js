let userName = localStorage.getItem("userName");
const iconloadingMickey = document.querySelector(".loading-mickey-container");


window.scrollTo(0, 0);

const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit", enterToHome);

function enterToHome(e) {
    e.preventDefault();
    e.stopPropagation();
    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    checkIfCanLogin(name,password);

    loadingMickeyDisplay(".body-page-login");
}

    function checkIfCanLogin(name,password) {
        const username = name.value.trim();
        const pass = password.value.trim();
        console.log(username, pass);
        
        try {
            $.ajax({
                methods: "POST",
                url: `https://trueappwork.000webhostapp.com/checkUserEasyshift.php?name=${username}&password=${pass}`,
                    
                success: function (response) {
                    console.log(response);

                    if (response==="not exists") {
                        alert("Nom ou mot de pass inconnu , essayez encore une fois  :)")
                        loadingMickeyDisplayNone(2000, ".body-page-login");
                        document.querySelector("#name").value = "";
                        document.querySelector("#password").value = "";
                    
                    } else if (response === "error") {
                        
                        alert("probleme de connection au server , essayer plus tard :( " + error);
                        loadingMickeyDisplayNone(2000, ".body-page-login");
                        document.querySelector("#name").value = "";
                        document.querySelector("#password").value = "";
                    } else if (response === "exists") {
                        loadingMickeyDisplayNone(2000, ".body-page-login",false);
                        localStorage.setItem("userName", username);
                        location.href = "home.html";
                    }
                },

                error:function (error) {
                    console.log(error);
                    alert("probleme de connection au server , essayer plus tard :( " + error);
                }

            })
        } catch (error) {
            alert("probleme de connection au server , essayer plus tard :( " + error);
        }
}
    


function loadingMickeyDisplay(bodypage) {
    iconloadingMickey.style.display = "block";
    document.querySelector("" + bodypage).style.display = "none";
}


async function loadingMickeyDisplayNone(time,bodypage) {
    setTimeout(() => {
        iconloadingMickey.style.display = "none";
        document.querySelector("" + bodypage).style.display = "block";
    }, time,false);
}