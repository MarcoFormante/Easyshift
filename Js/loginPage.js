let userName = localStorage.getItem("userName");




const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit", enterToHome);

function enterToHome(e) {
    e.preventDefault();
    e.stopPropagation();
    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    checkIfCanLogin(name,password);

    
}

    function checkIfCanLogin(name,password) {
        const username = name.value.trim();
        const pass = password.value.trim();
        console.log(username,pass);
        try {
            $.ajax({
                methods: "POST",
                url: `https://trueappwork.000webhostapp.com/checkUserEasyshift.php?name=${username}&password=${pass}`,
                    
                success: function (response) {
                    console.log(response);

                    if (response==="not exists") {
                        alert("Nom ou mot de pass inconnu , essayez encore une fois  :)")
                        document.querySelector("#name").value = "";
                        document.querySelector("#password").value = "";
                    
                    } else if (response==="error") {
                        alert("probleme de connection au server , essayer plus tard :( " + error);
                       
                        document.querySelector("#name").value = "";
                        document.querySelector("#password").value = "";
                    } else if (response ==="exists") {
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