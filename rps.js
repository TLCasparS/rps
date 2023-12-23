
function getComputerChoice(){


    let pick = Math.floor(Math.random() * 3);
    let choose  = ["rock", "paper", "scissors"];
    let opt = choose[pick];
    console.log(opt);
    return opt;

}



function playRound(playerSelection,computerSelection){
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    console.log(`player got ${ps} \n Computer got ${cs}`);
    if (ps === cs){
        console.log("this round is a draw!");
        return "Draw"
    }
    if (ps == "rock"){
        if(cs =="paper"){
            console.log("Computer wins this round");
            return "Computer wins";
        }
        else{
            console.log("Player wins this round");
        return "Player wins";
        }
    }
    if(ps == "paper"){
        if(cs == "scissors"){
            console.log("Computer wins this round");
        return "Computer wins";
         }else{
            console.log("Player wins this round");
            return "Player wins"
            }
    }   

   return "no"
}


function game(){
    
    let pscore = 0;
    let cscore = 0;

    for(let i = 0; i <5; i++){
        const playerSelection  = prompt("choose between rock, paper and scissors");
        const computerSelection = getComputerChoice();

        let roundwin = playRound(playerSelection, computerSelection)
        if (roundwin === "Player wins"){
            pscore ++
        }else if (roundwin === "Computer wins"){
            cscore ++;

            
        }
        
    }
    console.log(`Player final score:  ${pscore}`)
    console.log(`Computer final score:  ${cscore}`)
    if(pscore < cscore){
        console.log("Computer wins the game!");
        alert("Computer wins this game")
    } else if(pscore > cscore){
        console.log("Player wins the game!");
        alert("Player wins this game");
    }
    else{
        console.log("This game was a draw");
        alert("This game was a draw");
    }
}

game();