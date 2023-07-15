// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = parseInt(prompt("Please enter password. Must be at least 8 characters and no more than 128 characters:"));

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
