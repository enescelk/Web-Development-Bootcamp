var playerOneName = prompt("Please enter player 1 ");
document.querySelectorAll("p")[0].innerHTML = playerOneName;

var playerTwoName = prompt("Please enter player 2");
document.querySelectorAll("p")[1].innerHTML = playerTwoName;

var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; // 1 den 6 ya kadar 6 dahil olmak uzere bir sayi dondurur;

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png;

var randomImageSource = "images/" + randomDiceImage ; // images/dice1.png;

var image1 = document.querySelectorAll("img")[0]; // [img0 , img1];

image1.setAttribute("src",randomImageSource); // html etiketimize sourcemuzu ekliyoruz;

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



// If Player 1 Wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = playerOneName + " Win 🚩";
// If Player 2 Wins
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = playerTwoName + " Win 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw !";
}