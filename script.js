function openMenu() {
const menu = document.querySelector(".menu_links")
const icon = document.querySelector(".mobile_icon")
menu.classList.toggle("open")
icon.classList.toggle("open")
}

function showModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}