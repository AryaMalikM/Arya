// Ambil elemen HTML
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Fungsi untuk toggle menu
function toggleMenu() {
    menuList.classList.toggle("hidden");
}

// Event listener untuk menu icon
menuIcon.addEventListener("click", toggleMenu);

// Event listener untuk tombol Home
const btnHome = document.getElementById("btn-nav-home");
btnHome.addEventListener("click", toggleMenu);

// Event listener untuk tombol Bidang
const btnBidang = document.getElementById("nav-btn-bidang");
btnBidang.addEventListener("click", toggleMenu);

// Event listener untuk navigasi ke halaman lain
const navigateButton = document.getElementById("navigateButton");
navigateButton.addEventListener("click", () => {
    window.location.href = "mpk-index.html";
});
