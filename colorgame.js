var numColors = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();   
  reset();
}

function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
	  modeButtons[0].classList.remove("selected");
	  modeButtons[1].classList.remove("selected");
	  this.classList.add("selected");
	  this.textContent === "Easy" ? numColors = 3 : numColors = 6;
	  reset();
	});
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //get the color of clicked square
      var clickedColor = this.style.backgroundColor;
	  //compare clicked color and picked color
	  if(clickedColor === pickedColor){
	    messageDisplay.textContent = "Correct !";
	    resetButton.textContent = "Play Again ?";
	    changeColor(clickedColor);
	    h2.style.backgroundColor = clickedColor;	
	  } else {
	    this.style.backgroundColor = "#232323";
	    messageDisplay.textContent = "Try Again !";
	  }
    });	
  }
}

function reset(){
  //generate random colors
  colors = generateRandomColor(numColors);
  //pick random color
  pickedColor = pickColor();
  //display picked random color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    if (colors[i]){
      squares[i].style.display = "block";
	  squares[i].style.backgroundColor = colors[i];
    } else {
	  squares[i].style.display = "none";
    }	
  }
  h2.style.backgroundColor = "steelblue";
}

//reset button
resetButton.addEventListener("click", function(){
  reset();
});

//generate random color
function generateRandomColor(num){  
  var arr = [];  
  for (var i = 0; i < num; i++){		
    arr.push(randomColor());
  }		
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b+ ")";
}

//pick random color 
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//after correct guess, change the color of all squares
function changeColor(color){
  for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = color;
  }
}