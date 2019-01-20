var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  var delta = strokes - par;
  var score = "";
  if (strokes == 1) {
    score = names[0];
  } else if (delta >= 3) {
    score = names[6];
  } else if (delta <= -2) {
    score = names[1];
  } else {
    score = names[delta + 3];
  }
  return score;

  // Only change code above this line
}

// Change these values to test

console.log(golfScore(5, 8));
console.log(golfScore(3, 2));
