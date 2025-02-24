let border = 0
img = document.querySelector(".img")
img.addEventListener("click", chekear)
function chekear (){
    if (border === 0) {
        border = border + 1;
        img.style.border = "2px solid red"
    }
    else{
        border = border - 1;
        img.style.border = "0px"
    }
}




