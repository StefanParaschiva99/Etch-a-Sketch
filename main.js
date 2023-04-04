let color = "black"

createBoard(16)
const selectSize = document.querySelector(".btn-select")
selectSize.addEventListener("click", function(){
    let size = getSize()
    createBoard(size)
    resetBoard()
})
// This function use grid-template css property and a for-loop to create and append a grid to the container
function createBoard(size) {
    let board = document.querySelector(".container")

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;
// I use this eventListeners to make the divs changes color when I keep the mouse clicked
// and I move over divs.
    let isMouseDown = false;

board.addEventListener("mousedown", function() {
  isMouseDown = true;
});

board.addEventListener("mouseup", function() {
  isMouseDown = false;
});

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div")
        div.addEventListener("mousedown", colorDiv)
        div.addEventListener("mouseover", function(){
            if(isMouseDown){
                colorDiv.call(this)
                // Note that .call is used to set the "this" of the colorDiv function to the current div, so that this.style.backgroundColor can be used within the function to set the background color of the current div.
            }
        })
        board.appendChild(div)
    }
}
// This function ask the user for the size of the board
function getSize(){
    let input = prompt("Size of the board")
    let message = document.querySelector("#message")
    if(input == "" || input < 16 || input > 64){
        message.textContent = "Please insert a number between 16 and 64"
    } else{
        message.textContent = ""
        return input
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else{
        this.style.backgroundColor = "black"
    }
}

function setColor(colorChoice){
    color = colorChoice
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}