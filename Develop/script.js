// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = parseInt(prompt("Welcome! Please enter at least 8 characters and no more than 128 characters to generate password:"));
  var uppercase = confirm("Would you like uppercase letters? Click OK to continue");
  var lowercase = confirm("Would you like lowercase letters? Click OK to continue");
  var symbols = confirm("Would you like symbols? Click OK to continue");
  var numbers = confirm("Would you like numbers? Click OK to continue");

  //1. Prompt user for PW criteria
  //   a. PW length at least 8 characters and no more than 128 characters
  //   b. Lowercase, uppercase, numbers, special characters
  //2. Validate the input.
  //3. Generate PW based on criteria.

  
  //4. Display PW to the page.
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
