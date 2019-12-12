var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener('click', function() {
		//  grab color of clickedSquare
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		//  compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color) {
	// loop through all squares and change each color to match pickedColor
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add number of random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push to array
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a red from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a red from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
