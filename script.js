// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword(passwordLength, upper, lower, number, symbol);
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); // Add event listener to generate button

var passwordLength;
var userExit;
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var symbolChar = "!#$%&'()*+,-./:;<=>?@[]^_`~";
var upper;
var lower;
var number;
var symbol;

function lengthCheck(){ // Check if # of length is a correct input

passwordLength = prompt("How many characters would you like for your password?");
  if (isNaN(passwordLength)){
  alert(passwordLength + " is not a number.");
  return userExit = false;
  }
  else if (passwordLength < 8) {
  alert("Your password length must be at least 8 characters.")
  return userExit = false;
  }
  else if(passwordLength > 128){
  alert("Your password length must be no more than 128 characters.")
  return userExit = false;
  }
  else{
  passwordLength = +passwordLength;
  return passwordLength;
  }
}

function userPref(){ // Ask user for their preference

symbol = confirm("Click OK to confirm including SPECIAL characters.");
number = confirm("Click OK to confirm including NUMBERIC characters");
lower = confirm("Click OK to confirm including LOWERCASE characters");
upper = confirm("Click OK to confirm including UPPERCASE characters");

return symbol,number,lower,upper;
}


function generatePassword() { // Run when 'Generate Password' has been clicked

  lengthCheck(); // Ask user for the length of password
  
  if(userExit === false){ // Exit if the user has entered an invalid password length

    return '';
  }

  userPref(); // Ask user for their preference

  if(symbol + number + lower + upper === 0){ // Exit if no option was selected

    alert("Select at least one option.")
    return '';
  }


var acceptedChar = ''; // Combine all accepted characters into one variable
 if (upper) {
   acceptedChar = acceptedChar.concat(upperChar);
 }
 if (lower) {
  acceptedChar = acceptedChar.concat(lowerChar);
}
if (number) {
  acceptedChar = acceptedChar.concat(numberChar);
}
if (symbol) {
  acceptedChar = acceptedChar.concat(symbolChar);
}

var passwordCharacters='';

for (var i = 0; i < passwordLength; i++) { // Generate a random character individually
  var randomizeChar = Math.floor(Math.random() * acceptedChar.length);
  passwordCharacters += acceptedChar[randomizeChar];

}

return passwordCharacters; // Return randomized password
}
