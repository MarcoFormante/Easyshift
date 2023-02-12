const notificationIcon = document.querySelector(".notification-icon-section");
const closebtnNotifications = document.querySelector(".notification-close-btn")




notificationIcon.addEventListener("click", toggleNotifications);



function toggleNotifications() {
    document.querySelector(".notification-section").classList.toggle("toggle-notifications");

    if ( document.querySelector(".notification-section.toggle-notifications")) {
        document.querySelector(".notification-icon-section").style.display = "none";
    } 

    const iconNotification = document.querySelector(".notification-icon");
    if (iconNotification.classList.contains("hasNotification")) {
        removeActiveNotification(userName,iconNotification);
}
 
   
}




closebtnNotifications.addEventListener("click", () => {
    
    document.querySelector(".notification-section").classList.toggle("toggle-notifications");
    document.querySelector(".notification-icon-section").style.display = "flex";
});





function removeActiveNotification(username,iconNotification) {
    try {

        $.ajax({
            methods: "POST",
            url: `https://trueappwork.000webhostapp.com/easyShiftRemoveActiveNotification.php?name=${username.toLowerCase()}`,

            success: function (response) {
                
                iconNotification.classList.remove("hasNotification");
            },

            error: function (error) {
               console.log(error);
            }

            
        })        
    } catch (error) {
        
    }
}




