let firstCard = 7 
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() { 
    console.log('Triggers this')
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Yay! You've got BlackJack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!" 
        isAlive = false 
    }
    console.log(message) 
}





