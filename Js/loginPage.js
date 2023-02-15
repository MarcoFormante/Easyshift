let userName = localStorage.getItem("userName");
const iconloadingMickey = document.querySelector(".loading-mickey-container");
const closeBtnHelp = document.querySelector(".close-help-button");

sessionStorage.setItem("page", "login");
const connectionProblemeText = () => {
    alert("Probleme de connection , essayer plus tard");
    successDeleteAccountCounter = 0;
}
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



closeBtnHelp.addEventListener("click", () => {
    const helpSection = document.querySelector(".help-page-section");
    helpSection.classList.toggle("toggle-visibility");
})


document.querySelector(".help-login").addEventListener("click", () => {
    const helpSection = document.querySelector(".help-page-section");
    helpSection.classList.toggle("toggle-visibility");
})



document.querySelector(".help-list-item-delete-account").addEventListener("click", deleteAccount);

const s = "https://trueappwork.000webhostapp.com/";

let successDeleteAccountCounter = 0;


async function deleteAccount() {
    successDeleteAccountCounter = 0;
    
   let optionsDeleteAccount = window.confirm("Voulez-vous vraiment supprimer votre compte Easyshift?\n(commentaires ,requetes et notifications inclus)");
    
    if (optionsDeleteAccount === true) {

        let passwordToDelete = ""; 
    let nomToDelete = prompt("Inserez votre Nom");

    if (nomToDelete.length > 0) {
        passwordToDelete = prompt("Inserez votre Mot de Passe");
    }

    if (nomToDelete.length > 0 && passwordToDelete.length > 0) {
        
        localStorage.clear();
        loadingMickeyDisplay(".body-page-login");

        try {
    
            $.ajax({
                methods: "POST",
                url: s + "checkUsersEasyshiftBeforeDelete.php",

                data: {
                    name: nomToDelete.trim(),
                    password: passwordToDelete.trim()
                },
                
                success: function (response) {
                    console.log(response);
                    console.log("before");
                    successDeleteAccountCounter++;
                    console.log(successDeleteAccountCounter);

                    if (response === "user found") {
                       

                        if (successDeleteAccountCounter === 4) {
                            
                            deleteAccountDefinitely(nomToDelete,passwordToDelete);
                          
                        }


                        deleteAccountCards(nomToDelete,passwordToDelete.trim());
                        deleteAccountComments(nomToDelete,passwordToDelete.trim());
                        deleteAccountNotifications(nomToDelete,passwordToDelete.trim());

                    } else if (response === "User Not Found , Try Again") {
                        alert("User Not Found , Try Again");
                        loadingMickeyDisplayNone(2000, ".body-page-login");

                    }else {
                        alert("Probleme de connection , essayer plus tard");
                        loadingMickeyDisplayNone(2000, ".body-page-login");
                    }

                   
                },
        
                error:function (response) {
                    console.log(response);
                    alert("Probleme de connection , essayer plus tard");
                    loadingMickeyDisplayNone(2000, ".body-page-login");
                }
            })

        } catch (error) {
            connectionProblemeText();
            loadingMickeyDisplayNone(2000, ".body-page-login");
            }
    }
        
    }

 
}




async function deleteAccountCards(nomToDelete,passwordToDelete) {

    
    
    try {
        $.ajax({
            methods: "POST",
            url: s + "easyShiftDeleteAcoountCards.php",
            data: {
                name: nomToDelete.trim()
            },

            success: function (response) {

                successDeleteAccountCounter++;
                console.log(successDeleteAccountCounter);

                   
                if (response === "success") {
                
                    console.log("cards");
                    if (successDeleteAccountCounter === 4) {
                        console.log("cisono");
                            deleteAccountDefinitely(nomToDelete,passwordToDelete);
                          
                        }
               
               } else {
                    connectionProblemeText();
                    loadingMickeyDisplayNone(2000, ".body-page-login");
               }


            },

            error:function (error) {
                connectionProblemeText();
                loadingMickeyDisplayNone(2000, ".body-page-login");
            }
        })
        
    } catch (error) {
        connectionProblemeText();
        loadingMickeyDisplayNone(2000, ".body-page-login");
    }
}



async function deleteAccountComments(nomToDelete,passwordToDelete) {
    
    try {
        $.ajax({
            methods: "POST",
            url: s + "easyShiftDeleteAccountComments.php",
            data: {
                name: nomToDelete.trim()
            },

            success: function (response) {
                successDeleteAccountCounter++;
                console.log(successDeleteAccountCounter);

                if (response === "success") {
                          
                    console.log("comments");

                    
                    if (successDeleteAccountCounter === 4) {
                        console.log("cisono");
                        deleteAccountDefinitely(nomToDelete,passwordToDelete);
                       
                    }
               
               } else {
                    connectionProblemeText();
                    loadingMickeyDisplayNone(2000, ".body-page-login");
               }


            },

            error:function (error) {
                connectionProblemeText();
                loadingMickeyDisplayNone(2000, ".body-page-login");
            }
        })
        
    } catch (error) {
        connectionProblemeText();
        loadingMickeyDisplayNone(2000, ".body-page-login");
    }
}


async function deleteAccountNotifications(nomToDelete,passwordToDelete) {
    console.log(successDeleteAccountCounter);
    try {
        $.ajax({
            methods: "POST",
            url: s + "easyShiftDeleteAccountNotifications.php",
            data: {
                name: nomToDelete.trim()
            },

            success: function (response) {
                successDeleteAccountCounter++;
                console.log(successDeleteAccountCounter);

                if (response === "success") {
                    console.log("notif");
                  
                   
                    if (successDeleteAccountCounter === 4) {
                            deleteAccountDefinitely(nomToDelete,passwordToDelete);
                           console.log("cisono");

                        }
               
               } else {
                    connectionProblemeText();
                    loadingMickeyDisplayNone(2000, ".body-page-login");
               }


            },

            error:function (error) {
                connectionProblemeText();
                loadingMickeyDisplayNone(2000, ".body-page-login");
            }
        })
        
    } catch (error) {
        connectionProblemeText();
        loadingMickeyDisplayNone(2000, ".body-page-login");
    }
}



async function deleteAccountDefinitely(nomToDelete,passwordToDelete) {
    console.log(4);
    try {
        $.ajax({
            methods: "POST",
            url: s + "easyShiftDeleteAccountDefinitely.php",
            data: {
                name: nomToDelete.trim(),
                password: passwordToDelete.trim()
            },

            success: function (response) {
                if (response === "success") {
                    console.log("defini");
                    alert("Votre compte a ètè supprimé avec succès");
                    successDeleteAccountCounter = 0;
                    loadingMickeyDisplayNone(2000, ".body-page-login");
                    location.href = "index.html";

                   
               
               } else {
                    connectionProblemeText();
                    loadingMickeyDisplayNone(2000, ".body-page-login");
               }


            },

            error:function (error) {
                connectionProblemeText();
                loadingMickeyDisplayNone(2000, ".body-page-login");
            }
        })
        
    } catch (error) {
        connectionProblemeText();
        loadingMickeyDisplayNone(2000, ".body-page-login");
    }
}





