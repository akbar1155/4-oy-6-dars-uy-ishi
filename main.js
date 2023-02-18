let elcheck = document.querySelector(".check")
let elnumber = document.querySelector(".number")
let elguess = document.querySelector(".guess")
let elleft = document.querySelector(".left")
let elmessage = document.querySelector(".message")
let elrandom = Math.floor(Math.random() * 20);
// elmessage.innerHTM   L = elrandom


elleft.addEventListener("click", myfunction)
function myfunction() {
    if (elguess.value > elrandom) {
        elmessage.innerHTML = "Sizni soningizdan kichkina"
    }
    else if (elguess.value < elrandom) {
        elmessage.innerHTML = "Sizni soningizdan katta"
    }
    else {
        elmessage.innerHTML = "Tabriklaymiz siz topdiz"
        elnumber.innerHTML = elguess.value
    }
}
