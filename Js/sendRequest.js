
let userName = localStorage.getItem("userName");




const formSendRequest = document.querySelector("#form-newRequest");

formSendRequest.addEventListener("submit",sendRequest)

document.querySelector("#username-inpt").setAttribute("placeholder",`${localStorage.getItem("userName")}`)

function sendRequest(e) {
    e.preventDefault();
    e.stopPropagation();

    const name = localStorage.getItem("userName");
    const date = document.querySelector("#date-inpt").value;
    const shift = document.querySelector("#shift-inpt").value;
    const request = document.querySelector("#request-inpt").value;
    const s = "https://trueappwork.000webhostapp.com/";
    console.log(name,date,shift,request);
    formSendRequest.style.display="none"
    $.ajax({
        methods: "POST",
        url: s + `easyShiftNewRequest.php?name=${name}&date=${date}&shift=${shift}&request=${request}`,
        
        success: function (response) {
            alert("Votre requete a ete envoyé au Server :) ");
            document.querySelector("#date-inpt").value = "";
            document.querySelector("#shift-inpt").value = "";
            document.querySelector("#request-inpt").value = "";
            location.href = "home.html";
            
            if (response === "error") {
                alert("Erreur de connection , rèessayez plus tard :(")
            }
            
        },

        error: function (error) {
            alert("Erreur de connection , rèessayer plus tard :(  " + error)
        }
        
         })
}

