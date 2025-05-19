let humanScore = 0;
let computerScore = 0;

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

function rodada(numero) {
    let rodada = numero;
    return rodada
}


function playRound(humanSelection, computerSelection) {
    if (humanSelection == "pedra" && computerSelection == "tesoura") {
        humanScore++;
    }
    else if (humanSelection == "papel" && computerSelection == "pedra") {
        humanScore++;
    }
    else if (humanSelection == "tesoura" && computerSelection == "papel") {
        humanScore++;
    }
    else {
        computerScore++;
    }
}
function playgame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        rodada(i)
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        alert("Rodada " + (i +1) + ": " + humanSelection + " x " + computerSelection + "\n" + "Pontuação:  Humano: " + humanScore + " x " + "Computador: " + computerScore);

    }
    if (humanScore > computerScore) {
        alert("-----Humano ganhou!----- " + "\n" + "------------" + humanScore + " x " + computerScore + "------------" );
    }
    else if (humanScore == computerScore) {
        alert("-----Empate!----- " + "\n" + "------------" + humanScore + " x " + computerScore + "------------");
    }
    else {
        alert("-----Computador ganhou!----- " + "\n" + "------------" + humanScore + " x " + computerScore + "------------"); 
    }
}   