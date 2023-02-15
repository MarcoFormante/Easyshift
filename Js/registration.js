const form = document.querySelector("#form-login");
const submitBtn = document.querySelector(".input-submit-login");
const inptName = document.querySelector("#name");
const inptPassword = document.querySelector("#password");

const iconloadingMickey = document.querySelector(".loading-mickey-container");
loadingMickeyDisplay(".body-page-login");
loadingMickeyDisplayNone(2000, ".body-page-login", null);


if (localStorage.length > 0) {
    location.href = "loginPage.html";
}

window.scrollTo(0, 0);

form.addEventListener("submit", submit);


inptName.addEventListener("focus", () => {
    document.querySelector("label[for=name]").classList.remove("inputError");
    document.querySelector("label[for=password]").classList.remove("inputError");
})


inptPassword.addEventListener("focus", () => {
    document.querySelector("label[for=name]").classList.remove("inputError");
    document.querySelector("label[for=password]").classList.remove("inputError");
})


function submit(e) {


    e.preventDefault();
    e.stopPropagation();

  
    inptName.value = inptName.value.trim();



    let nameIsValid = inptName.value.match("[A-Z a-z 0-9 .]");
    let nameIsShort = inptName.value.length <= 4;
    let passwordIsValid = inptPassword.value.length > 5;



    if (nameIsValid && passwordIsValid && !nameIsShort) {

        verifyAccounts(this,inptName.value,inptPassword.value);

    
    } else {

        if (!nameIsValid || nameIsShort) {
            document.querySelector("label[for=name]").classList.add("inputError");
        }

        if (!passwordIsValid) {
            document.querySelector("label[for=password]").classList.add("inputError");
        }

    }
}





function verifyAccounts(form,name,password) {
    
    createAccount(form, name, password);
    loadingMickeyDisplay(".body-page-login");

}


function createAccount(form,name,password) {
    
    try {
        $.ajax({
            methods: "POST",
            url: `https://trueappwork.000webhostapp.com/checkUsersEasyshiftLogin2.php?name=${name}&password=${password}`,
            
            success:function (response) {
                console.log(response);

                if (response === "exists") {
                    
                    alert("ce Nom est deja utilisé, choisir un nom different :)")
                    loadingMickeyDisplayNone(1000, ".body-page-login", "");
                    document.querySelector("#name").value = "";
                    document.querySelector("#password").value = "";
                
                } else if (response === "error") {
                    
                    alert("probleme de connection au server , essayer plus tard :( " + error);
                    loadingMickeyDisplayNone(1000, ".body-page-login", "");
                    document.querySelector("#name").value = "";
                    document.querySelector("#password").value = "";

                } else if (response === "success") {
                   
                    let confirm = window.confirm(` Nom = ${name} \n Mot de pass = ${password} \n confirmez-vous votre choix?`);

                    if (confirm) {
                        localStorage.setItem("userName", name);
                        loadingMickeyDisplayNone(2000, ".body-page-login",  location.href = "home.html");
                    } else {
                        document.querySelector("#name").value = "";
                        document.querySelector("#password").value = "";
                        loadingMickeyDisplayNone(2000, ".body-page-login", null);
                    }
                   
                   
                   
                }
            },

            error:function (error) {
                alert("probleme de connection au server , essayer plus tard :( " + error);
                document.querySelector("#name").value = "";
                    document.querySelector("#password").value = "";
            }
        })
    } catch (error) {
        alert("probleme de connection au server , essayer plus tard :( " + error)
        document.querySelector("#name").value = "";
        document.querySelector("#password").value = "";
    }
   
}




function loadingMickeyDisplay(bodypage) {
    iconloadingMickey.style.display = "block";
    document.querySelector("" + bodypage).style.display = "none";
}


async function loadingMickeyDisplayNone(time,bodypage,action) {
    setTimeout(() => {
        iconloadingMickey.style.display = "none";
        document.querySelector("" + bodypage).style.display = "block";
        action;
    }, time,false);
}

