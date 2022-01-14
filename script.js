let dims = 16;

const button = document.getElementById('reset-grid');
button.onclick = () => {
    let dimsCheck = true;
    while (dimsCheck) {
        let newDims = prompt('Please enter a new grid width (from 10 to 100.');
        newDims = parseInt(newDims);
        if (newDims > 0 && newDims <= 100) {
            dims = newDims;
            clearGrid();
            drawGrid();
            dimsCheck = false;
        } else {
            continue;
        }
    }
    
}

function clearGrid() {
    let oldRows = document.querySelectorAll('.grid-row');
    oldRows.forEach((row) => row.remove());
}

function drawGrid() {

    const container = document.getElementById('grid-container');
    container.style.borderStyle = 'solid';
    container.style.borderWidth = '1px;';
    container.style.borderColor = '#d1d1d1';
    
    for (let i=0; i<dims; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
    }
    
    let gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach(row => {
        for (let i=0; i< dims; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            row.appendChild(gridSquare);
        };
    
        row.style.borderStyle = 'solid';
        row.style.borderWidth = '1px';
        row.style.borderColor = '#d1d1d1';
    })
    
    let gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.style.borderStyle = 'solid';
        square.style.borderWidth = '1px';
        square.style.borderColor = '#d1d1d1';
    })
    
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', e => e.target.style.backgroundColor = 'black')
    })

};

drawGrid();