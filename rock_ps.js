let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msq=document.querySelector("#msg");

const userScoreplus=document.querySelector("#userscore");
const compScoreplus=document.querySelector("#compscore");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
};

const draw=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw.Play again."
    msg.style.backgroundColor="green";
};


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreplus.innerText =userScore;
        console.log("YOU WIN!!");
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="blue";
    }
    else{
        compScore++;
        compScoreplus.innerText =compScore;
        console.log("YOU LOSE!!");
        msg.innerText = `YOU LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="yellow";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);
if(userChoice===compChoice){
    draw();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper" ?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"? fasle:true;
    }
    showWinner(userWin,userChoice,compChoice);
}


}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
})  