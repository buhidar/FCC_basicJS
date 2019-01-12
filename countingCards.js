var count = 0;

function cc(card) {
  // Only change code below this line
  var betAdvice = "";
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card === 10) {
    count--;
  } else if (card === 'J') {
    count--;
  } else if (card === 'Q') {
    count--;
  } else if (card === 'K') {
    count--;
  } else if (card === 'A') {
    count--;
  }
  if (count > 0) {
    betAdvice = count + ' Bet';
  } else { betAdvice = count + ' Hold';
         }
  // Only change code above this line
  console.log(betAdvice);
  return betAdvice;
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log betAdvice;
