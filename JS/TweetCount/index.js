//var tweet = prompt("Compose your tweet :");
//var tweetCount = tweet.length;

//alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");



// Used to Slice make Tweet Count

var tweet = prompt("Compose your Tweet : ");
var tweetCount = tweet.slice(0,140);
var tweetCountLength = tweetCount.length;


alert(tweetCount + " You have written \n" + tweetCountLength + " characters " + (140 - tweetCountLength) +" characters remaning" );