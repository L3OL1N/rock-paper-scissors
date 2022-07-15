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
var winner = document.getElementsByClassName("winner");
console.log(winner[0].innerHTML);
function game(playerSelection, computerSelection){
    //console.log("You :"+playerSelection);
    //console.log("PC :"+computerSelection);
    playRound(playerSelection, computerSelection);
    
    if(PlayerPoint > PcPoint){
        return roundWinner = "You win";
    }
    else if(PcPoint > PlayerPoint){
        return roundWinner = "PC win";
    }
    else{
        return roundWinner = "DRAW";
    }
}

const btn = document.querySelectorAll("button");

btn.forEach(Element =>{
    Element.addEventListener("click", event=>{
         btnClick(Element); 
        })
    } 
);


function btnClick(Element){
    playerSelection = Element.value.toLowerCase();
    computerSelection = computerPlay();
    game(playerSelection, computerSelection);
    newDiv.innerHTML = PlayerPoint + "  -  " + PcPoint;
    winner[0].innerHTML = roundWinner;
}
var newDiv = document.createElement("div");

function addCount(){
    var mydiv = document.getElementsByClassName("wrap");
    var textNode = document.createTextNode("0  -  0");
    newDiv.appendChild(textNode);
    newDiv.classList.add("count");
    mydiv[0].appendChild(newDiv);
}

addCount();
