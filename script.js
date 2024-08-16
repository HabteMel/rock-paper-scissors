/*
Writing the logic to get the computer choice:

    {GET RANDOMIZED CHOICE USING MATH METHOD
    IF COMPUTERCHOICE IS EQUAL TO 0 :
        CHOOSE ROCK
    ELSE
        CHOOSE PAPER
    ELSE
        CHOOSE SCISSORS

    RETURN COMPUTERCHOICE;
    PRINT COMPUTERCHOICE;

*/

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




/*
    WRITE THE LOGIC TO GET THE HUMAN CHOICE
    ASK USER TO ENTER ITS CHOICE
    MAKE SURE TO CHECK IF THE USER ENTERS VALID RESPONSE
    DISPLAY WHAT THE USER ENTERS

*/

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

/*
    STORE WHAT THE COMPUTER AND HUMAN ENTERS BY MAKING THE DEFAULT 0
 */
/* WRITE A FUNCTION WHICH TAKES ARGUMENTS TO PLAY A SINGLE ROUND
* INCREMENT THE WINNERS SCORE 
* LOGS A WINNER ANNOUNCEMENT
*
* PLAYROUND FUNCTION CHECKS WHO WINS THEN PRINT A ROUND WINNER
*/
/**
 * WRITE A FOR LOOP WHICH RUNS THE PLAYROUND 5 TIMES TO PLAY 5 ROUNDS
*/

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