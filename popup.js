var popup = document.getElementById("popup")
var user = document.getElementById("popup-user")
var snack = document.getElementById("popup-snack")
var food = document.getElementById("popup-food")

function showPopupUser(){
    popup.style.display = "block"
 
    user.style.display  = "block"
    snack.style.display = "none"
    food.style.display = "none"
}

function showPopupSnack() {
    popup.style.display = "block" 

    user.style.display  = "none"
    snack.style.display = "block"
    food.style.display = "none"
}

function showPopupFood(){
    popup.style.display = "block" 
    user.style.display  = "none"
    snack.style.display = "none"
    food.style.display = "block"
}

function closePopUp() {
    popup.style.display = "none"
}