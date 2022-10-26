let gridContainer = document.getElementById('grid-container');
let gridWidth = 16;
let gridSize = gridWidth**2;
let count = 1;
let cellSize = 960 / gridWidth;
let gridSizeButton = document.getElementById('grid-size');

gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridWidth}, ${cellSize}px)`;


function createGrid(gridSize) {
    for(count; count <= gridSize; count++) {
        let gridElement = document.createElement('div');
        gridContainer.appendChild(gridElement);
        gridElement.addEventListener('mouseenter', function() {
            this.classList.add('cell-shaded');
        });
    }
}

gridSizeButton.addEventListener('click', function() {
    count = 1;
    gridContainer.replaceChildren();
    gridWidth = prompt('How many squares per side would you like the grid to be?');
    gridWidth = validateInput(gridWidth);
    gridSize = gridWidth**2;
    cellSize = 960 / gridWidth;
    gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridWidth}, ${cellSize}px)`;
    createGrid(gridSize);
});

function validateInput(gridWidth) {
    let keepGoing = true;
    while(keepGoing) {
        if(gridWidth > 100 || !parseInt(gridWidth)) {
            gridWidth = prompt('Please enter a number equal to or less than 100');
        } else {
            keepGoing = false;
            gridWidth;
        }
    }
    return gridWidth;

}

createGrid(gridSize);