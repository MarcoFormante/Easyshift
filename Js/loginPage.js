const form = document.querySelector("form");
const nameInpt = document.querySelector(`.inpt-name-login`);

form.addEventListener("submit", (e) => {
   e.preventDefault()
    e.stopPropagation();

    getdataUsers();

    form.style.display = "none";
})
$("#form-registration").css("opacity","0").delay(1500).animate({opacity:1, backdropFilter:blur(10)},"slow");

$(".title-registration").css("position","relative").css("left","-50px").css("opacity","0");
$(".first-description-title-registration").css("position","relative").css("left","-50px").css("opacity","0");


$(".title-registration").animate({ left: 0, opacity: 1 }, 1000);

$(".first-description-title-registration").delay(1000).animate({left: 0, opacity:1},1000);





const getdataUsers = async function () {
  
   
    
    try {
       

        $.ajax({

            type: `GET`,
            url: `https://trueappwork.000webhostapp.com/checkUsersEasyshiftLogin.php`,
            async: true,
            crossDomain: true,
            

            success: function (data, status, xhr) {
                if (status !== "success") {
                    alert("check the internet connection, data not found")
                   
                } else {
                    const datas = data.split("|");
                    let sameName = datas.find(d => d.toLowerCase() === nameInpt.value.toLowerCase().trim());
                    if (sameName === undefined) {
                        sendLogin();
                    }
                    
                     }
                    
                  
                }
 
                ,
            error: function(){
                alert("check the internet connection, data not found");
               
                setInterval(() => {
                    alert("check the internet connection, data not found");

                }, 10000);
                }
        });
    } catch (error) {
        console.warn(error);
        alert("check the internet connection, data not found")
    }
    
    
}

function sendLogin() {
      
    try {
       

        $.ajax({

            type: `POST`,
            url: `https://trueappwork.000webhostapp.com/checkUsersEasyshiftLogin2.php?name=${nameInpt.value}&password=fhhg`,
            async: true,
            crossDomain: true,
            

            success: function (data, status, xhr) {
                if (status !== "success") {
                    alert("check the internet connection, data not found")
                   
                } else {
                    window.localStorage.setItem("storeName",nameInpt)
                    document.location.href = "home.html";
                    }
                  
                }

                ,
            error: function(){
                alert("check the internet connection, data not found");
               
                setInterval(() => {
                    alert("check the internet connection, data not found");

                }, 10000);
                }
        });
    } catch (error) {
        console.warn(error);
        alert("check the internet connection, data not found")
    }
    
    

}

// Call The Function getDAtaUSers



