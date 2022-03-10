function gridColour(gridPixelColour) {
	gridPixelColour.style.backgroundColor = 'black';
}

// Creating the div grid
const gridContainer = document.querySelector('.gridContainer');
let sixteenBySixteen = 256;

for (let i = 0; i < sixteenBySixteen ; i++){
	const gridPixel = document.createElement('div');
	gridPixel.classList.add('gridPixel');
	gridContainer.appendChild(gridPixel);
}

//Colouring the div grid whenever mouse enters selected div
let pixel;

gridContainer.addEventListener('mouseover', function (e) {
	pixel = e.target;
	
	if (pixel.matches('.gridPixel')) {
		gridColour(pixel);
	}
});
