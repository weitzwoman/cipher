
var userInput = prompt("Enter a sentence: ");

var capitalizeFirstLetter = function(userInput) {
  return userInput.charAt(0).toUpperCase() + userInput.substr(userInput.length - 1).toUpperCase();
};

var reverseCaps = function(capitalizeFirstLetter) {
   return capitalizeFirstLetter.split("").reverse().join("");
};

alert(reverseCaps(capitalizeFirstLetter(userInput)));
