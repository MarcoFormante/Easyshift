const form = document.querySelector("#form-login");
const submitBtn = document.querySelector(".input-submit-login");
const inptName = document.querySelector("#name");
const inptPassword = document.querySelector("#password");

localStorage.clear();

if (localStorage.length > 0) {
    location.href = "loginPage.html";
}

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
}


function createAccount(form,name,password) {

    try {
        $.ajax({
            methods: "POST",
            url: `https://trueappwork.000webhostapp.com/checkUsersEasyshiftLogin2.php?name=${name}&password=${password}`,
            
            success:function (response) {
                console.log(response);

                if (response==="exists") {
                    alert("ce Nom est deja utilisé, choisir un nom different :)")
                    document.querySelector("#name").value = "";
                    document.querySelector("#password").value = "";
                
                } else if (response==="error") {
                    alert("probleme de connection au server , essayer plus tard :( " + error);
                   
                    document.querySelector("#name").value = "";
                    document.querySelector("#password").value = "";
                } else if(response==="not exists"){
                    localStorage.setItem("userName", name);
                    location.href = "home.html";
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





