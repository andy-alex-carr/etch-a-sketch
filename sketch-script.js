const container = document.getElementById('container');

function createGrid(resolution, width, height) {
    const grid = document.createElement('div');
    grid.className = "grid";
    grid.style = `width: ${width}px; height: ${height}px; display: grid;`;

    for (let i = 1; i <= resolution * resolution; i++) {
        const gridBox = document.createElement('div');
        gridBox.className = "gridBox";
        grid.appendChild(gridBox);
    }

    grid.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
    
    container.appendChild(grid);

    const gridBoxes = document.querySelectorAll('.gridBox');

    gridBoxes.forEach(box => {
        box.addEventListener('mouseover', () => setRandomHSLColor(box));
    });
}

function removeGrid() {
    document.querySelector('.grid').remove();
}

let blackness = 10;

function setRandomHSLColor(square) {
    const h = Math.floor(Math.random() * 256);
    const s = Math.floor(Math.random() * 101);
    const l = 100 - blackness;
    
    if (blackness === 100) {
        blackness = 10;
    } else {
        blackness += 10;
    }

    square.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
}

function changeGrid() {
    const resolution = prompt("Enter a valid size number (greater than 0 and less than or equal to 100):");
    if (resolution > 0 && resolution <= 100) {
        removeGrid();
        createGrid(resolution, 900, 900);
    } else if (resolution <= 0 || resolution > 100) {
        alert("ERROR");
    }
}

document.getElementById('resolution').addEventListener('click', changeGrid);

createGrid(16, 900, 900);