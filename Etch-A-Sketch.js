const gridContainer = document.querySelector('.gridContainer');
let sixteenBySixteen = 256;

for (let i = 0; i < sixteenBySixteen ; i++){
	const gridPixel = document.createElement('div');
	gridPixel.classList.add('gridPixel');
	gridContainer.appendChild(gridPixel);
}


