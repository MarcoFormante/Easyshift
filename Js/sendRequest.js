const formSendRequest = document.querySelector("#form-newRequest");

formSendRequest.addEventListener("submit",sendRequest)


function sendRequest(e) {
    e.preventDefault();
    e.stopPropagation();

    const name = "Marco";
    const date = document.querySelector("#date-inpt").value;
    const shift = document.querySelector("#shift-inpt").value;
    const request = document.querySelector("#request-inpt").value;
    const s = "https://trueappwork.000webhostapp.com/";
    console.log(name,date,shift,request);

    $.ajax({
        methods: "POST",
        url: s + `easyShiftNewRequest.php?name=${name}&date=${date}&shift=${shift}&request=${request}`,
        
        success: function (response) {
            alert("Votre requete a ete envoyé au Server :) ");
            if (response === "error") {
                alert("erreur de connection , essayer plus tard :(")
            }
            
        },

        error: function (error) {
            alert("erreur de connection , essayer plus tard :(  " + error)
        }
        
         })
}

