p = document.querySelector(".p")
numero1 = document.querySelector(".numero1")
numero2 = document.querySelector(".numero2")
numero3 = document.querySelector(".numero3")
calcular = document.querySelector(".button")
calcular.addEventListener("click", calc)
function calc (){
    let num1 = parseInt(numero1.value) || 0;
    let num2 = parseInt(numero2.value) || 0;
    let num3 = parseInt(numero3.value) || 0;
    let total = num1 + num2 + num3;
    if (total <= 10) {
        p.innerHTML = "Llevas " + total +  " stickers"
    }
    else {
        p.innerHTML = "Leevas demasiados stickers"
    }
}