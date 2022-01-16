// What is the starting state?
// How do I display the state of the game to the user?
// What controls/interface to I make available to the user?
// How does each interaction update the state?

//********************************* STATE *********************************************
// let state = {}; //starting the state as empty

const resetState = () => {
 
newBoard = [null,null,null,null,null,null,null,null,null]
    // console.log('state', state );
    // state.currentPlayerIdx = 1;

const x_Player = "X";
const o_Player = "O";
let currentPlayer = x_Player

  



// const whosTurn = `It is ${addPlayerNames ()}'s turn`
// ourPlayers.innerHTML = whosTurn;
// *********************************** DOM SELECTORS *********************************

const boardElement = document.getElementById('board');
console.log('board', boardElement);

const renderBoard = () => {
      boardElement.innerHTML = '';
    // reset the board
    for (let i = 0; i < newBoard.length; i++) {

//create a square element
    const squareElement = document.createElement('div');    
//give the square a class like "square"
    squareElement.className= 'square'; 
//attach the element to the parent container
    boardElement.appendChild(squareElement);    

    squareElement.dataset.index = i;

squareElement.addEventListener('click', squareClick);

}

}

const squareClick = (e) => {
    const identifier = e.target.dataset.index; 
    console.log("ASCSACSAC", identifier, "hahaha")
    console.log( "hi",currentPlayer );
    if (!newBoard [identifier]) {
        newBoard [identifier] = currentPlayer;
        e.target.innerText = currentPlayer;
        currentPlayer = currentPlayer === x_Player ? o_Player : x_Player;
    }

}

//  // ***************************** EVENT LISTENERS ********************************



 renderBoard();
}
// };
  function addPlayerNames(){
 //Selecting the input element and get its value 
    let playerX = document.getElementById ("xPlayer").value;
    let playerO = document.getElementById ("oPlayer").value;
       state.players = [playerX, playerO];
       ourPlayers.innerText = ` ${playerX} will start`
          console.log('play game clicked')
  }

// ******************************** HELPER FUNCTIONS **************************


  
// ******************************* BOOTSTRAPPING *******************************
resetState();
// renderBoard();

let newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener('click' , () => { // takes the assigned button and adds an event when clicked
     window.location.reload(true);   // event is that the window is reloaded 
  
    });

