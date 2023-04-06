// Default board
createBoard(16);

// this function creates a new board with the sizes indicated by the user. It also use the resetBoard function to clear the board.
const selectSize = document.querySelector(".btn-select")
selectSize.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
    resetBoard();
});
// This function defines the structure of the grid through CSS properties. NOTE: It doesn't really create the divs!
function createBoard(size) {
    let board = document.querySelector(".container");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;
// I use these eventListeners to make the divs changes color when I keep the mouse clicked
// and I move over divs.
    let isMouseDown = false;

board.addEventListener("mousedown", function() {
    isMouseDown = true;
});
board.addEventListener("mouseup", function() {
  isMouseDown = false;
});
// This is the basic operation of the program. It create as many divs as specified in the numDivs variable.
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mousedown", colorDiv);
        div.addEventListener("mouseover", function(){
            if(isMouseDown){
                colorDiv.call(this); // Note that .call is used to set the "this" of the colorDiv function to the current div, so that this.style.backgroundColor can be used within the function to set the background color of the current div
            };
        });
        board.appendChild(div);
    };
}
// This function ask the user for the size of the board.
function getSize(){
    let input = prompt("Size of the board");
    let message = document.querySelector("#message");
    if(input == "" || input < 16 || input > 64 || isNaN(input)){
        message.textContent = "Please insert a number between 16 and 64";
    } else{
        message.textContent = "";
        return input;
    };
};
// Default color
let color = "black";
// The function checks what the content of the variable is then set the color of the clicked div in a random color or black, based on the "color" variable's content.
function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = "black";
    };
};
// The function sets the value of the "color" variable to the color selected by the user.
function setColor(colorChoice){
    color = colorChoice;
};
// I use this to erease the board.
function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
};