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
    
    if(PC === "rock" && player === "paper" || PC === "paper" && player === "scissors" || PC === "scissors" && player === "rock"){
        PlayerPoint++;
        winnerColor = "green";
        return roundWinner="You win";
    }
    if(PC === "rock" && player === "scissors" || PC === "paper" && player === "rock" || PC === "scissors" && player === "paper"){
        PcPoint++;
        winnerColor = "red";
        return roundWinner="You lose";
    }
    else{
        winnerColor = "white";
        return roundWinner="Draw";
    }
}

var winnerColor = "";
var roundWinner = "";
var playerSelection = "";
var computerSelection = computerPlay();
var PlayerPoint = 0;
var PcPoint = 0;
var winner = document.getElementsByClassName("winner")[0];
var pcChoiceText = document.getElementById("PCchoice");
var newDiv = document.createElement("div");
const restartBtn = document.getElementById("restart");
const btn = document.querySelectorAll("button.btn");
const imgArrow = document.getElementById("arrow");

function game(){
    if(PlayerPoint >= 5){
        for(let i = 0; i<btn.length;i++){
            btn[i].removeEventListener("click",btnClick);
        }
        setTimeout(()=>{alert("You is winner!!!")},"300");
        imgArrow.style.display = "block";
    }
    else if(PcPoint >= 5) {
        for(let i = 0; i<btn.length;i++){
            btn[i].removeEventListener("click",btnClick);
        }
        setTimeout(()=>{alert("Pc is winner!!!")},"300");
        imgArrow.style.display = "block";
    }
}

function addCount(){
    var mydiv = document.getElementsByClassName("wrap")[0];
    var textNode = document.createTextNode("0  -  0");
    newDiv.appendChild(textNode);
    newDiv.classList.add("count");
    mydiv.appendChild(newDiv);
}

function btnClick(e){
    playerSelection = e.target.value.toLowerCase();
    computerSelection = computerPlay();
    pcChoiceText.innerHTML = "Computer choice : "+ computerSelection.toUpperCase();
    playRound(playerSelection, computerSelection);
    newDiv.innerHTML = PlayerPoint + "  -  " + PcPoint;
    winner.style.color = winnerColor;
    winner.innerHTML = roundWinner;
    game();
}

//restart button
restartBtn.addEventListener("click",function(){
    window.location.reload();
    return false;
});

//add eventl istener
for(let i = 0; i<btn.length;i++){
    btn[i].addEventListener("click",btnClick);
}

//add count div
addCount();