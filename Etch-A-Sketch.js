function gridColour(gridPixelColour) {
	gridPixelColour.style.backgroundColor = 'black';
}

// Creating the div grid
const gridContainer = document.querySelector('.gridContainer');
let gridSize;

const btnGridSize = document.querySelectorAll('button');
btnGridSize.forEach(button => {
	button.addEventListener('click', function() {
		// Creates the grid container
		gridSize = parseInt(button.value);
		gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;
		gridContainer.style.cssText = `grid-template-rows: repeat(${gridSize}, 1fr);`;
		
		// Generates the grid by creating all the nessecary divs
		for (let i = 0; i < gridSize; i++){
			const gridPixel = document.createElement('div');
			gridPixel.classList.add('gridPixel');
			gridContainer.appendChild(gridPixel);
		}
	});
});

//Colouring the div grid whenever mouse enters selected div
let pixel;

gridContainer.addEventListener('mouseover', function (e) {
	pixel = e.target;
	
	if (pixel.matches('.gridPixel')) {
		gridColour(pixel);
	}
});

// Reset button
const reset = document.querySelector('.resetBtn');

reset.addEventListener('click', function () {
	window.location.reload();
});

