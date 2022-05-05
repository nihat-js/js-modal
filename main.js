const today = document.getElementById("today");
var date = new Date()
today.innerHTML =  date.toString().substring(0,15) ;

const check = document.getElementById("check");
const modal = document.querySelector(".modal");
const close = document.getElementById("close");
check.addEventListener("click",()=>{
    modal.style.display = "block ";
})
close.addEventListener("click",()=>{
    modal.style.display = "none";
})
