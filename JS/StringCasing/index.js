var whatIsYourName = prompt("What is your name :");

var firstWord = whatIsYourName.slice(0,1).toUpperCase();

var remainderWord = whatIsYourName.slice(1,whatIsYourName.length).toLowerCase();

var combineName = firstWord + remainderWord;

alert("Hello, "+ combineName);