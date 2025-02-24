num1 = document.querySelector(".a")
num2 = document.querySelector(".b")
num3 = document.querySelector(".c")
p = document.querySelector(".p")
let password1 = "911"
let password2 = "714"
button = document.querySelector(".button")
button.addEventListener("click", chekear)
function chekear (){
    let password = num1.value + num2.value + num3.value
    console.log(password)
    if (password == password1){
        p.innerHTML = "Password 1 correcto"
    }
    else if (password == password2){
        p.innerHTML = "Password 2 correcto"
    }
    else{
        p.innerHTML = "Password incorrecto"
    }
}