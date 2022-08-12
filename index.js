// Create variables for the game state
let player1Score = 0
let player2Score = 0
let playerTurn = true
let gameMessages = ["Man this is intense", "Hopefully you dont have money on this game", "Who will win? Only time will tell", "Im sweating bullets over here", "Does your mother know you are losing?", "There can only be one winner", "Nothing like a classic standoff", "Im getting bored over here", "I think you are about to lose", "Honestly I am embarrassed for you", "Want to be friends?"]

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1
    
    let randomElement = gameMessages[Math.floor(Math.random() * gameMessages.length)];
    message.textContent = randomElement


    if (playerTurn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        
        player2Score += randomNumber2
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber2
        
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        player1Dice.classList.add("winner")
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        player2Dice.classList.add("winner")
        showResetButton()
    } if (player1Score >= 20 && player2Score >= 20) {
        player2Dice.classList.add("winner")
        message.textContent = "You tied! Play again"
        player1Dice.classList.add("winner")
        player2Dice.classList.add("winner")
        showResetButton()
    }
    
    
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    playerTurn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Roll the dice!"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("winner")
    player1Dice.classList.remove("winner")
}
