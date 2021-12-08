let dims = 16;

const container = document.getElementById('grid-container');
container.style.borderStyle = 'solid';
container.style.borderWidth = '1px;';
container.style.borderColor = '#d1d1d1';

for (let i=0; i<16; i++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    container.appendChild(gridRow);
}

let gridRows = document.querySelectorAll('.grid-row');
gridRows.forEach(row => {
    for (let i=0; i< 16; i++) {
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