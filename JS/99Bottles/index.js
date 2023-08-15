// var numberOfBottles = 99;

// function bottles() {
//     var bottleWord = "bottle";
//     while (numberOfBottles >= 0) {
//         if (numberOfBottles === 1) {
//             bottleWord = "bottles";
//         }
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall " + numberOfBottles + " bottles of beer");
//         console.log("Take one down, pass it around," + (numberOfBottles - 1) + " bottles of beer on the wall");
//         numberOfBottles --;
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
//     }
//  }

// bottles();

// *************************************************

function bottlesFor() {
  var bottleWord = "bottle";
  for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
    if (numberOfBottles === 1) {
      bottleWord = "bottles";
    }
    console.log(
      numberOfBottles +
        " " +
        bottleWord +
        " of beer on the wall " +
        numberOfBottles +
        " bottles of beer"
    );
    console.log(
      "Take one down, pass it around," +
        (numberOfBottles - 1) +
        " bottles of beer on the wall"
    );
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
  }
}

// bottlesFor();
