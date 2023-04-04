createBoard(16)
const selectSize = document.querySelector(".btn-select")
selectSize.addEventListener("click", function(){
    let size = getSize()
    createBoard(size)
})
// This function use grid-template css property and a for-loop to create and append a grid to the container
function createBoard(size) {
    let board = document.querySelector(".container")

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div")
        div.addEventListener("click", function(event){
            div.style.backgroundColor = "black"
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