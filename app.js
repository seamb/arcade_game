// What is the starting state?
// How do I display the state of the game to the user?
// What controls/interface to I make available to the user?
// How does each interaction update the state?

//********************************* STATE *********************************************
let state = {}; //starting the state as empty

const resetState = () => {


    state.board = [
        
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
        {value: "null", squareMarked: false, markedBy: ""},
];
 
    console.log('state', state );
    state.currentPlayerIdx = 1;
}
 //    container where the player data is stored
 const ourPlayers = document.getElementById("playerInfo");


// *********************************** DOM SELECTORS *********************************

const boardElement = document.getElementById('board');
console.log('board', boardElement);

const renderBoard = () => {
      boardElement.innerHTML = '';
    // reset the board
    for (let i = 0; i < state.board.length; i++) {

//create a square element
    const squareElement = document.createElement('div');    
//give the square a class like "square"
    squareElement.className= 'square'; 
//attach the element to the parent container
    boardElement.appendChild(squareElement);    
    
    // console.log(state.board)

    squareElement.dataset.index = i;
    // const squareMarked = state.board[i].squareMarked;

//     if (squareMarked) {
//            squareElement.innerText = "X"; 
   
//     } else if (squareMarked ) { 
//            squareElement.innerText = "O"; 
//     } else {
//           squareElement.innerText = ""; 
//     }
// }     

}}

 //Define who is starting
  function getPlayerName(){
 //Selecting the input element and get its value 
    let playerX = document.getElementById ("xPlayer").value;
    let playerO = document.getElementById ("oPlayer").value;
       state.players = [playerX, playerO];
       ourPlayers.innerText = ` ${playerX} will start`
  }


let players = ["X", "O"]

boardElement.addEventListener("click",function(event){

    // players = [state.players [1], state.players[0]]

// if (event.target.innerText=== "null"){
//     event.target.innerText= "x";
// }

})
 // ***************************** EVENT LISTENERS ********************************

boardElement.addEventListener('click', function(event){
//an event happens when user clicks    

console.log(event.target.dataset.index, "clicked");
// const identifier = event.target.dataset.index; 
 
 const identifier = event.target.dataset.index; 
 console.log('identifier', identifier)

// if (state.currentPlayerIdx === 1) {
//  console.log('X marked');
//     identifier.innerText = "X"; 
// } else if (state.currentPlayerIdx === 0){
//     console.log('O marked')
//     identifier.innerText = "O"; 
// }

const whosTurn = `It is ${getCurrentPlayer ()}'s turn`
ourPlayers.innerHTML = whosTurn;



 renderBoard();
 changeTurn();

});

// ******************************** HELPER FUNCTIONS **************************

const getCurrentPlayer = () => {
    //console.log(state.players[state.currentPlayerIdx]) //will say Sean or Garrett
    return state.players[state.currentPlayerIdx];

}
const changeTurn = () => {
    
  state.currentPlayerIdx = state.currentPlayerIdx === 0 ? 1 : 0
  console.log( state.currentPlayerIdx); //0 or 1

}
  
// ******************************* BOOTSTRAPPING *******************************
resetState();
renderBoard();

let newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener('click' , () => { // takes the assigned button and adds an event when clicked
     window.location.reload(true);   // event is that the window is reloaded 
  
    });