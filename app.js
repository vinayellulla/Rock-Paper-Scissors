let userScore = 0;
let compScore = 0 ;
let drawnScore =0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawnScorePara = document.querySelector("#drawn-score");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];
    

}

const drawGame = () => {

     msg.innerText = "Game was Drawn"
     msg.style.backgroundColor = "#E0AB76"
     drawnScore++;
     drawnScorePara.innerText = drawnScore;
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        console.log("You win!");
        msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#4D6538"
    }else{
        compScore++;
        compScorePara.innerText =compScore;
        console.log("You lose");
        msg.innerText =`You lose !!  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "#DD0426"
    }
}

const playGame = (userChoice) => {
    console.log("user choice = " ,userChoice)
    //Genterate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors,paper
            userWin = compChoice ==="paper"? false : true;
        }
        else if(userChoice === "paper"){
            //Rock ,scissors
            userWin = compChoice === "scissors" ? false : true; 

        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ?false : true;
            }

            showWinner(userWin,userChoice,compChoice)
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
        
    })

})