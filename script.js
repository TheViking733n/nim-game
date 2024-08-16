document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("move-btn").addEventListener("click", playerMove);
document.getElementById("reset-btn").addEventListener("click", () => location.reload());
document.getElementById("restart-btn").addEventListener("click", restartGame);
document.getElementById("undo-btn").addEventListener("click", undoMove);

let piles = [];
let history = [];
let log = document.getElementById("game-log");

function startGame() {
    const pile1 = parseInt(document.getElementById("pile1").value);
    const pile2 = parseInt(document.getElementById("pile2").value);
    const pile3 = parseInt(document.getElementById("pile3").value);

    piles = [pile1, pile2, pile3];
    history = [{ piles: [...piles], log: "Game Started!" }];
    document.querySelector(".game-config").classList.add("hidden");
    document.querySelector(".game-area").classList.remove("hidden");
    updateBoard();
    log.innerHTML = "Game Started! Your move.";
}

function updateBoard() {
    for (let i = 1; i <= 3; i++) {
        const pileStones = document.getElementById(`pile${i}-stones`);
        pileStones.innerHTML = "";
        for (let j = 0; j < piles[i - 1]; j++) {
            const stone = document.createElement("div");
            stone.classList.add("stone");
            pileStones.appendChild(stone);
        }
    }
}

function playerMove() {
    const pileIndex = parseInt(document.getElementById("move-pile").value) - 1;
    const stonesToRemove = parseInt(document.getElementById("move-stones").value);

    if (stonesToRemove > 0 && stonesToRemove <= piles[pileIndex]) {
        piles[pileIndex] -= stonesToRemove;
        logMove("You", pileIndex + 1, stonesToRemove);
        saveHistory();
        updateBoard();
        if (isGameOver()) {
            log.innerHTML += "<br>You win!";
            return;
        }
        setTimeout(computerMove, 500);
    } else {
        alert("Invalid move! Please select a valid number of stones.");
    }
}

function computerMove() {
    let moveMade = false;

    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > 0) {
            const stonesToRemove = Math.max(piles[i] - (piles[i] ^ piles.reduce((acc, val) => acc ^ val, 0)), 1);
            piles[i] -= stonesToRemove;
            logMove("Computer", i + 1, stonesToRemove);
            saveHistory();
            updateBoard();
            moveMade = true;
            break;
        }
    }

    if (isGameOver()) {
        log.innerHTML += "<br>Computer wins!";
    }
}

function logMove(player, pile, stones) {
    log.innerHTML += `<br>${player} removed ${stones} stone(s) from Pile ${pile}.`;
}

function isGameOver() {
    return piles.every(pile => pile === 0);
}

function saveHistory() {
    history.push({ piles: [...piles], log: log.innerHTML });
}

function _undoMove() {
    if (history.length > 1) {
        history.pop();
        const lastState = history[history.length - 1];
        piles = [...lastState.piles];
        log.innerHTML = lastState.log;
        updateBoard();
    }
}

function undoMove() {
    _undoMove();
    _undoMove();
}

function restartGame() {
    if (history.length > 0) {
        const initialState = history[0];
        piles = [...initialState.piles];
        log.innerHTML = initialState.log;
        history = [initialState];
        updateBoard();
    }
}

function changeOption(pile) {
    let select = document.getElementById("move-pile");
    select.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `Pile ${i}`;
        select.appendChild(option);
        if (i == pile) {
            option.selected = true;
        }
    }
    
}