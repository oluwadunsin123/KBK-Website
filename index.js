const navLinks = document.querySelectorAll(".nav-menu .nav-links ");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// closemenu
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
   link.addEventListener("click", () => menuOpenButton.click());
})

function sendMsg() {
    let name = document.getElementById("Enter").value;
    let email = document.getElementById("Email").value;
    let msg = document.getElementById("Msg").value;
    let phone = "2348072677799";

    let message = "Hello, I am " + name + ". " + "My mail is : " + email + ". " + " and "+ msg;
    let url = "https://wa.me/" + phone + "? text=" +
    encodeURIComponent(message);

    window.open(url, "_blank");
}