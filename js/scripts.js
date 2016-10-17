
var userInput = prompt("Enter a sentence: ");

var capitalizeFirstLetter = function(userInput) {
  return userInput.charAt(0).toUpperCase() + userInput.substr(userInput.length - 1).toUpperCase();
};

//alert(capitalizeFirstLetter(userInput));

var reverseCaps = function(capitalizeFirstLetter) {
   return userInput + capitalizeFirstLetter.split("").reverse().join("");
};

var letterCount = function(reverseCaps) {
  var letterIndex = userInput.length/2;
  return userInput.charAt(letterIndex) + reverseCaps;
};

var reverseString = function(letterCount) {
   return letterCount.split("").reverse().join("");
};

alert(reverseString(letterCount(reverseCaps(capitalizeFirstLetter(userInput)))));

$(document).ready(function() {
  $("#kitten").click(function() {
    alert(userInput);
  });

  $("#tacocat").click(function() {
    alert(reverseString(letterCount(reverseCaps(capitalizeFirstLetter(userInput)))));
  });
});
