function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice == 0){
        computerChoice = "rock";
    }else if(computerChoice == 1) {
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }

    console.log(`Computer Choice: ${computerChoice}`)
    return computerChoice;
}





function getHumanChoice(){
    let humanChoice=prompt("Please enters your choice: ");
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice){
        case 'rock':
        case 'paper':
        case 'scissors':
            console.log(`You choose: ${humanChoice}`);
            return humanChoice;
        default:
            console.log("Please choose valid choice!");
            return getHumanChoice();
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(){
        const humanChoice=getHumanChoice();
        const computerChoice=getComputerChoice();
                                            
        if (humanChoice === 'scissors' && computerChoice === 'paper' || 
            humanChoice === 'rock' && computerChoice === 'scissors' || 
            humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            console.log("You win this round!");
        }else if(humanChoice === computerChoice.toLowerCase()){
            alert("Draw");
        }else{
            computerScore++;
            console.log("You Lose this round!");
        }
    
    }

    for(let i = 0; i < 5; i++){
        playRound();
    }
}

playGame();