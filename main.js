// This function use grid-template css property to create a grid.
function createBoard(size) {
    let board = document.querySelector(".container")

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

createBoard(16)