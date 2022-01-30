
const resetState = () => {
 
newBoard = [null,null,null,null,null,null,null,null,null]

const playText = document.getElementById('playText')

const x_Player = "X";
const o_Player = "O";
let currentPlayer = x_Player

const boardElement = document.getElementById('board');
console.log('board', boardElement);

const renderBoard = () => {
      boardElement.innerHTML = '';

    for (let i = 0; i < newBoard.length; i++) {

    const squareElement = document.createElement('div');    

    squareElement.className= 'square'; 

    boardElement.appendChild(squareElement);    

    squareElement.dataset.index = i;

    squareElement.addEventListener('click', squareClick);

    }

}
const squareClick = (e) => {
    const identifier = e.target.dataset.index; 
    if (!newBoard [identifier]) {
        newBoard [identifier] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerWins()){
            playText.innerText = `${currentPlayer} has won!`;
            return;
        }

        currentPlayer = currentPlayer === x_Player ? o_Player : x_Player;
    }
}

const playerWins = () => {
    if(newBoard[0]===currentPlayer){
        if(newBoard[1] ===currentPlayer && newBoard[2] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true;
        }
        if(newBoard[3] ===currentPlayer && newBoard[6] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true;
        }
        if(newBoard[4] ===currentPlayer && newBoard[8] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true;
        }
        } else if (newBoard[8]===currentPlayer){
        if(newBoard[7] ===currentPlayer && newBoard[6] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true;           
        }
        if(newBoard[5] ===currentPlayer && newBoard[2] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true; 
        }
        } else if (newBoard[4]===currentPlayer){
        if(newBoard[3] ===currentPlayer && newBoard[5] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true; 
        }
        if(newBoard[1] ===currentPlayer && newBoard[7] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true; 
        }
        if(newBoard[2] ===currentPlayer && newBoard[6] === currentPlayer){
            playText.innerHTML = `${currentPlayer} wins!`;
            return true; 
        }
    }
};

 renderBoard();
}

function playerNames() {

 let playerOne = document.getElementById('firstPlayer').value;
 let playerTwo = document.getElementById('secondPlayer').value;
  document.getElementById('xIs').innerHTML = `${playerOne} is X    `;
  document.getElementById('oIs').innerHTML = `${playerTwo} is O`;

   let whosFirst = document.getElementById("playersEntry")
   whosFirst.innerHTML = `${playerOne} will start the game`;
    setTimeout(function(){ 
      whosFirst.innerHTML = "";
  }, 2000);


resetState();
}

// ******************************* BOOTSTRAPPING *******************************
// resetState();
// renderBoard();

let newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener('click' , () => { // takes the assigned button and adds an event when clicked
     window.location.reload(true);   // event is that the window is reloaded 
  
    });

