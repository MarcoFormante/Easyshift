const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit", enterToHome);

function enterToHome(e) {
    e.preventDefault();
    e.stopPropagation();
    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    userCanAccess = name.value === "marco" && password.value === "marco";
        
    if (userCanAccess){
        document.location.href = "home.html";
    } else {
        alert("name or password not exists, try again!");
    }

    
}
