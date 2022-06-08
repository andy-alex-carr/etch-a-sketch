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
}


