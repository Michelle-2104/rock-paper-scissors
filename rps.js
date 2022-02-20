const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
const computerScoreDisplay = document.getElementById("computer-score")
const userScoreDisplay = document.getElementById("user-score")
let userChoice 
let computerChoice 
let result
let computerScore = 0 
let userScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.textContent = userChoice
 generateComputerChoice()
 getResult()
 
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3)+1
        
    if (randomNumber === 1) {
        computerChoice = 'rock'
     }
     if (randomNumber === 2) {
         computerChoice = 'scissors'
     }
     if (randomNumber === 3) {
         computerChoice = 'paper'
     }
     computerChoiceDisplay.textContent = computerChoice
    }       
    
    function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
            
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
       
       
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!'
        
    }
    
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
        
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
        
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
        
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'
        
    }
    resultDisplay.textContent = result
          
   }       

