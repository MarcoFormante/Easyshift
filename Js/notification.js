const notificationIcon = document.querySelector(".notification-icon-section");
const closebtnNotifications = document.querySelector(".notification-close-btn")








notificationIcon.addEventListener("click", toggleNotifications);

function toggleNotifications() {
    document.querySelector(".notification-section").classList.toggle("toggle-notifications")
}




closebtnNotifications.addEventListener("click", () => {
    document.querySelector(".notification-section").classList.toggle("toggle-notifications");
});




