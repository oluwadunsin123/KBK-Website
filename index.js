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
    let name = document.getElementById("enter").value;
    let phone = "2348082703112";

    let message = "Hello, my name is " + name;
    let url = "https://wa.me/" + phone + "? text=" +
    encodeURIComponent(message);

    window.open(url, "_blank");
}