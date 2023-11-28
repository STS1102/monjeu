// Variables globales
let scores, currentScore, activePlayer, isGamePlaying;

// Initialisation du jeu
function initGame() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    document.getElementById('global-score-1').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    document.getElementById('global-score-2').textContent = '0';
    document.getElementById('current-score-2').textContent = '0';
}

// Changement de joueur
function switchPlayer() {
    currentScore = 0;
    document.getElementById('current-score-' + (activePlayer + 1)).textContent = '0';

    activePlayer = activePlayer === 0 ? 1 : 0;

    document.getElementById('player1-panel').classList.toggle('active');
    document.getElementById('player2-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
}



// Lancer le dé
function rollDice() {
    if (isGamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/de' + dice + '.png'; // Mettre à jour avec le chemin relatif correct

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById('current-score-' + (activePlayer + 1)).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
}



// Retenir le score
function holdScore() {
    if (isGamePlaying) {
        scores[activePlayer] += currentScore;
        document.getElementById('global-score-' + (activePlayer + 1)).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            isGamePlaying = false;
            alert('Joueur ' + (activePlayer + 1) + ' gagne!');
        } else {
            switchPlayer();
        }
    }
}

// Écouteurs d'événements pour les boutons
document.getElementById('new-game').addEventListener('click', initGame);
document.getElementById('roll-dice').addEventListener('click', rollDice);
document.getElementById('hold').addEventListener('click', holdScore);

// Initialiser le jeu au chargement
initGame();
