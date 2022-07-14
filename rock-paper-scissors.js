function computerPlay(){
    var pcChoice = 1 ;
    
    pcChoice = Math.round(Math.random()*10) % 3;
    if(pcChoice === 0){
        return "rock";
    }
    else if(pcChoice === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    var PC = computerSelection;
    var player = playerSelection;
    var roundWinner ="";

    if(PC === "rock" && player === "paper" || PC === "paper" && player === "scissors" || PC === "scissors" && player === "rock"){
        PlayerPoint++;
        return roundWinner="You win";
    }
    if(PC === "rock" && player === "scissors" || PC === "paper" && player === "rock" || PC === "scissors" && player === "paper"){
        PcPoint++;
        return roundWinner="You lose";
    }
    else{
        return roundWinner="Draw";
    }
}
   
var playerSelection = "";
var computerSelection = computerPlay();
var PlayerPoint = 0;
var PcPoint = 0;

function game(){
    for(let i = 1; i<=5; i++){
        do{
            playerSelection = prompt("Round "+i+"\n"+"rock paper scissors ?").toLowerCase();
        }
        while(playerSelection === "");
        console.log(playRound(playerSelection, computerSelection));
        computerSelection = computerPlay();
    }
    if(PlayerPoint > PcPoint){
        alert("You Win!!!"+"\n"+PlayerPoint+":"+PcPoint);
    }
    else if(PcPoint > PlayerPoint){
        alert("PC Win!!!"+"\n"+PlayerPoint+":"+PcPoint);
    }
    else{
        alert("Draw"+"\n"+PlayerPoint+":"+PcPoint);
    }
}

const btn = document.querySelectorAll("button");
btn.forEach(Element =>{
    Element.addEventListener("click", event=>{
         playerSelect(this); 
        })
    } 
);
//btn.forEach(Element.addEventListener("click", function(event){ alert("Hello"); }) );


function playerSelect(text){
    playerSelection = text.ineerText;
    console.log(1);
    return 0;
}
//game();
