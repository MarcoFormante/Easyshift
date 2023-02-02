
function submit() {
    const inptName = document.querySelector("#name");
    const inptPassword = document.querySelector("#password");
    const submit = document.querySelector(".input-submit-login");
    inptName.value = "marco";

    let nameIsValid = inptName.matches("/[A-Z]/g");
    console.log(nameIsValid);
    

    
}

submit();