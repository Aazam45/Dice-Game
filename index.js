var ramdomNumber1 = Math.floor(Math.random()*6) + 1; //1--6

var randomDiceImage = "dice" + ramdomNumber1 + ".png"; //dice1.png--dice2.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png--images/dice2.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

          // For Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


          //players wins heading change
if (randomImageSource > randomImageSource2) {
  //change randomNumber by randomImageSource then it worked
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
}

else if (randomImageSource2 > randomImageSource) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
