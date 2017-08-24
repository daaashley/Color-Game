var number = 9;
var colors = generateRandomColors(number);
var squares = document.querySelectorAll(".square");
var pickedNumber = randomColorPicker();
var colorDisplay = document.getElementById("colorDisplay")
var resetButton = document.querySelector("#reset");
var helpButton = document.querySelector("#help");

var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');

helpButton.addEventListener("click", function() {
	alert("The RGB color system is displayed as (RED, GREEN, BLUE).\
You have to try to guess which color is currently being displayed.")
})


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	number = 3;
	colors = generateRandomColors(number);
	
	pickedNumber = randomColorPicker();
	colorDisplay.textContent = pickedNumber;
	resetButton.textContent = 'New Colors';
	var msg = document.getElementById("message");
	msg.textContent = null;
	var topStyle = document.getElementById("top");
	topStyle.style.backgroundColor = "steelblue";
	
	for(var i = 0; i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];}
		else{
			squares[i].style.display = "none";
		}
}});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	
	number = 9;
	colors = generateRandomColors(number);
	pickedNumber = randomColorPicker();
	colorDisplay.textContent = pickedNumber;
	resetButton.textContent = 'New Colors';
	var msg = document.getElementById("message");
	msg.textContent = null;
	var topStyle = document.getElementById("top");
	topStyle.style.backgroundColor = "steelblue";
	
	for(var i = 0; i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
	
});



resetButton.addEventListener("click", function(){
	if(colors.length===9){
		number=9;
	}
	else{
		number=3;
	}
	
	colors = generateRandomColors(number);
	pickedNumber = randomColorPicker();
	colorDisplay.textContent = pickedNumber;
	resetButton.textContent = 'New Colors';
	var msg = document.getElementById("message");
	msg.textContent = null;
	var topStyle = document.getElementById("top");
	topStyle.style.backgroundColor = "steelblue";
	
	

	for(var i = 0; i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedNumber;

 for(var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = colors[i];

 	squares[i].addEventListener("click",function(){
 		var clickedColor = this.style.backgroundColor;

 		if(clickedColor === pickedNumber){
 			var messageDisplay = document.getElementById("message");
 			messageDisplay.textContent = "You won!";
 			changeColors(clickedColor);
 			var topStyle = document.getElementById('top');
 			topStyle.style.backgroundColor = pickedNumber;
 			resetButton.textContent = "Play Again?"

 				}
 		else {
 			console.log(clickedColor,pickedNumber)
 			this.style.backgroundColor = "#232323";
 			var messageDisplay = document.getElementById("message");
 			messageDisplay.textContent = "Try Again";
 		}


 	});
 } 

 function changeColors(color){
 	for(var i = 0; i < squares.length; i++) {
 			squares[i].style.backgroundColor = color;
 		}
 }

 function randomColorPicker(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateRandomColors(num){
 	var arr = [];

 	for(var i =0; i<num; i++){
 		var col = randomColor();
 		arr.push(col)
 	}
 	return arr;
 }

 function randomColor(){
 	var red = Math.floor(Math.random() * 256)
 	var green = Math.floor(Math.random() * 256)
 	var blue = Math.floor(Math.random() * 256)
 	var colorstring = 'rgb('+ red +', '+green+', '+blue+')';
 	return colorstring;

 }
