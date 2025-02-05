/**
 * Função principal que inicia o jogo "Pedra, Papel e Tesoura".
 */
const playGame = function() {
    let humanScore = 0;
    let computerScore = 0;
    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');

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
     * Função para jogar uma rodada do jogo.
     * @param {string} humanChoice - A escolha do jogador humano.
     */
    const playRound = function(humanChoice) {
        const computerChoice = getComputerChoice();
        let result;

        if (humanChoice === computerChoice) {
            result = "Empate!";
        } else if (
            (humanChoice === "rock" && computerChoice === "Scissors") ||
            (humanChoice === "scissors" && computerChoice === "Paper") ||
            (humanChoice === "paper" && computerChoice === "Rock")
        ) {
            result = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            result = `You lost! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }

        resultsDiv.textContent = result;
        scoreDiv.textContent = `Score: Human - ${humanScore}, Computer - ${computerScore}`;

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                resultsDiv.textContent = "You win the game!";
            } else {
                resultsDiv.textContent = "You lose the game!";
            }
            // Desabilitar os botões após o jogo terminar
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }
    }

    // Adicionar event listeners aos botões
    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
}

// Inicia o jogo
playGame();
