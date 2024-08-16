# Nim Game Simulator

[**Play the Nim Game Simulator**](https://TheViking733n.github.io/nim-game)

This is a simple Nim Game Simulator website that I created while learning about the Nim game and its strategies. The project allows users to play a simulated version of the classic Nim game against a computer opponent.

## Project Overview

The Nim Game is a mathematical game of strategy in which two players take turns removing stones from heaps or piles. On each turn, a player must remove at least one stone from one pile, and the player who takes the last stone loses the game. This project simulates the game and allows the user to configure the number of stones in each pile before starting the game.

### Features

- **Game Configuration:** Users can set the initial number of stones in each of the three piles.
- **Player vs. Computer:** After the user makes a move, the computer automatically makes the optimal move based on the Sprague-Grundy theorem.
- **Game Log:** The game log tracks the moves made by both the player and the computer.
- **Reset Button:** Reloads the page to start a new game.
- **Restart Button:** Restarts the game from the initial configuration.
- **Undo Button:** Allows the player to undo their last move.

### Optimal Strategy

The optimal strategy for Nim is based on the concept of the *Nim-sum*, which is the bitwise XOR of the number of stones in all piles. The key idea is:

- If the Nim-sum (XOR of all piles) is 0, the position is losing for the player about to move.
- If the Nim-sum is not 0, the position is winning, and there is a move that will force the Nim-sum to become 0.

In this simulator, the computer employs this strategy to always make the best possible move, ensuring a challenging game for the player.

### Learning Source

I created this project while reading about the Nim game and its underlying mathematical theory from the [CP-Algorithms website](https://cp-algorithms.com/game_theory/sprague-grundy-nim.html). The article explains the Sprague-Grundy theorem, which is fundamental in solving impartial combinatorial games like Nim.

### Technologies Used

- **HTML:** For structuring the web page.
- **CSS:** For styling the web page and making it visually appealing.
- **JavaScript:** For implementing the game logic and interactivity.

### How to Run

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Configure the number of stones in each pile and press the "Start Game" button to begin.

### Acknowledgments

- The [CP-Algorithms website](https://cp-algorithms.com) for providing detailed explanations on game theory and the Nim game.
  
Enjoy playing and learning with this Nim Game Simulator!
