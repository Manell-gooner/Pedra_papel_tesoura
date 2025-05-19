let humanScore = 0;
let currentHumanScore = 0;
let currentComputerScore = 0;
let computerScore = 0;
let rodada = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice <0.34) {
        let outracena1 = "pedra";
        console.log (outracena1);
        return "pedra";
    }
    if (choice > 0.34 && choice < 0.67) {
        let outracena2 = "papel";
        console.log (outracena2);
        return "papel";
        
    }
    else {
        let outracena = "tesoura";
        console.log (outracena);
        return "tesoura";
    }
}
function getHumanChoice()  {
    return prompt("Escreva pedra, papel ou tesoura");
}

function rodadacalc() {
    rodada ++;
    return rodada
}


function showResults(texto) {
    let fotb = "<br>" + texto + "<br>"; 
    document.getElementById("result").innerHTML = "Jogador: " + humanScore + "<br> Computador: " + computerScore;
    document.getElementById("result").innerHTML += fotb;
}




function playRound(humanSelection, computerSelection) {
    if (humanSelection == "pedra" && computerSelection == "tesoura") {
        currentHumanScore++;
        humanScore++;
    }
    else if (humanSelection == "papel" && computerSelection == "pedra") {
        humanScore++;
        currentHumanScore++;
    }
    else if (humanSelection == "tesoura" && computerSelection == "papel") {
        humanScore++;
        currentHumanScore++;
    }
    else {
        computerScore++;
        currentComputerScore++;
    }
}
function playgame() {
        let rodadaAtual = rodadacalc();
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        showResults();
        if (rodadaAtual < 5) {
            if (currentHumanScore > currentComputerScore) {
                showResults("Você ganhou a " + rodadaAtual + "ª rodada" );
                currentHumanScore = 0;
                currentComputerScore = 0; 
            } 
                else if (currentComputerScore > currentHumanScore) {      
                showResults("Você perdeu a " + rodadaAtual + "ª rodada");
                currentHumanScore = 0;
                currentComputerScore = 0; 
            } 
            else {
                showResults("Houve um empate na " + rodadaAtual + "ª rodada");
                currentHumanScore = 0;
                currentComputerScore = 0; 
            }
             
        }
        if (rodadaAtual == 5) {
            if (humanScore > computerScore) {
                showResults("Você ganhou!");    
                humanScore = 0;
                computerScore = 0;
                rodada = 0;
            } 
            else if (computerScore > humanScore) {      
                showResults("Você perdeu!");
                humanScore = 0;
                computerScore = 0;
                rodada = 0;
            } 
            else {
                showResults("Empate!");
                humanScore = 0;
                computerScore = 0;
                rodada = 0;
            }
        }
}   