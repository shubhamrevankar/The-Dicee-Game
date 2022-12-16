// Randomized first dice
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomImageSource1 = "images/dice"+randomNumber1+".png";
document.querySelector(".dice .img1").setAttribute("src",randomImageSource1);

// Randomized second dice
var randomNumber2 = Math.floor(Math.random()*6+1);
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelector(".dice .img2").setAttribute("src",randomImageSource2);

// Showing the result
if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
} else if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";
} else{
  document.querySelector(".container h1").innerHTML = "Draw!";
}
