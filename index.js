// alert("hello");

// var toggleBtn = document.querySelector(".toggle_btn");
// var toggleBtnIcon = document.querySelector(".toggle_btn i");
// var dropdown = document.querySelector(".dropdown_menu");

// toggleBtn.addEventListener("click",function() {

// dropdown.classList.toggle("open");

// });
document.querySelector(".toggle_btn").addEventListener("click",function(){
    document.querySelector(".dropdown_menu").classList.toggle("open");
});