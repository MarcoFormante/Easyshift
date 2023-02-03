const form = document.querySelector("#form-login");
const submitBtn = document.querySelector(".input-submit-login");
const inptName = document.querySelector("#name");
const inptPassword = document.querySelector("#password");


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

        createAccount(this,inptName.value,inptPassword.value);
     

        
    } else {


        if (!nameIsValid || nameIsShort) {
            document.querySelector("label[for=name]").classList.add("inputError");
        }



        if (!passwordIsValid) {
            document.querySelector("label[for=password]").classList.add("inputError");
        }


    }
}



function createAccount(form,name,password) {

    const formData = new FormData(form);

    formData.set(name, password)
    
    fetch(url, {
        method: "post",
        body: formData
    })
        .then(function (response) {
            if (response.status === 200) {
                document.location.href = "home.html";
            }      
        })
        .catch(function (error) {
            alert(error);
    })
}





