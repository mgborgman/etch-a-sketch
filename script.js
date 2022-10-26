let gridContainer = document.getElementById('grid-container');
let gridWidth = 16;
let gridSize = gridWidth**2;
let count = 1;
let cellSize = 960 / gridWidth;
let gridSizeButton = document.getElementById('grid-size');
let plainEtchASketchButton = document.getElementById('plain');
let randomRGBEtchASketchButton = document.getElementById('randomRGB');

gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridWidth}, ${cellSize}px)`;


function createGrid(gridSize) {
    for(count; count <= gridSize; count++) {
        let gridElement = document.createElement('div');
        gridContainer.appendChild(gridElement);
        gridElement.addEventListener('mouseenter', function() {
            if(plainEtchASketchButton.classList.contains('clicked')) {
                this.classList.add('cell-shaded');
            } else if (randomRGBEtchASketchButton.classList.contains('clicked')) {
                let randomR = getRandomInt(256);
                let randomG = getRandomInt(256);
                let randomB = getRandomInt(256);
                this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            } else {
                this.classList.add('cell-shaded');
            }
            
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

plainEtchASketchButton.addEventListener('click', function() {
    if(this.classList.contains('clicked')) {
        this.classList.remove('clicked');
    } else {
        this.classList.add('clicked')
        randomRGBEtchASketchButton.classList.remove('clicked');
    }
    count = 1;
    gridContainer.replaceChildren();
    createGrid(gridSize);
});

randomRGBEtchASketchButton.addEventListener('click', function() {
    if(this.classList.contains('clicked')) {
        this.classList.remove('clicked');
    } else {
        this.classList.add('clicked')
        plainEtchASketchButton.classList.remove('clicked');
    }
    count = 1;
    gridContainer.replaceChildren();
    createGrid(gridSize);
});

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