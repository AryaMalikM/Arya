const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const btnHome = document.getElementById("btn-nav-home")
const navContainer = document.getElementById("nav-container");
const btnBidang = document.getElementById("nav-btn-bidang");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
});

btnHome.addEventListener("click", () =>{
    menuList.classList.toggle("hidden")
})

btnBidang.addEventListener("click", () =>{
    menuList.classList.toggle("hidden")
})


