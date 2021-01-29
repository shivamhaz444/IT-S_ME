

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelector(".navlinks li");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
    
});