/**
 * Função principal que inicia o jogo "Pedra, Papel e Tesoura".
 * O jogo consiste em 5 rodadas, e ao final, o vencedor é declarado.
 */
const playGame = function() {
    let humanScore = 0;
    let computerScore = 0;

    /**
     * Função para obter a escolha aleatória do computador.
     * @returns {string} - A escolha do computador ("Rock", "Paper" ou "Scissors").
     */
    const getComputerChoice = function() {
        const options = ["Rock", "Paper", "Scissors"]; // Opções possíveis
        const i = Math.floor(Math.random() * options.length); // Índice aleatório
        return options[i]; // Retorna a escolha aleatória
    }

    /**
     * Função para obter a escolha do jogador humano.
     * @returns {string} - A escolha do jogador ("rock", "paper" ou "scissors").
     */
    const getHumanChoice = function() {
        let choice;
        while (true) {
            choice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase(); // Solicita a escolha do jogador
            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return choice; // Retorna a escolha se for válida
            } else {
                console.log("Invalid option, please choose between Rock, Paper, or Scissors: "); // Mensagem de erro para escolha inválida
            }
        }
    }

    /**
     * Função para jogar uma rodada do jogo.
     * @param {string} humanChoice - A escolha do jogador humano.
     * @param {string} computerChoice - A escolha do computador.
     */
    const playRound = function(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Empate!"); // Empate se as escolhas forem iguais
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`); // Jogador vence
            humanScore++;
        } else {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`); // Computador vence
            computerScore++;
        }
    }

    // Loop para jogar 5 rodadas
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice(); // Obtém a escolha do jogador
        const computerSelection = getComputerChoice(); // Obtém a escolha do computador
        playRound(humanSelection, computerSelection); // Joga a rodada
    }

    // Declara o vencedor após 5 rodadas
    if (humanScore > computerScore) {
        console.log("You win!"); // Jogador vence o jogo
    } else if (humanScore < computerScore) {
        console.log("You lose!"); // Computador vence o jogo
    } else {
        console.log("Draw!"); // Empate
    }
}

// Inicia o jogo
playGame();
