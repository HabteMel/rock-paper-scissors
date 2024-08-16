function getComputerChoice(rock=1,paper=2,scissors=3){
    return Math.random() * (scissors - rock + 1)  + rock;

}
console.log(Math.floor(getComputerChoice()));