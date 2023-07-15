// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = parseInt(prompt("Welcome! Please choose a length of at least 8 characters and no more than 128 characters:"));
  if (length < 8 || length > 128) {
    alert("Password length should be between 8 and 128 characters. Please try again:");
    return generatePassword();
  } 
  
  if (isNaN(length)) {
    alert("Please enter a number. Try using 'Generate Password' again:")
    return null;
  }
  
  else {
    var useUppercase = confirm("Do you want to include uppercase letters?");
    var useLowercase = confirm("Do you want to include lowercase letters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSymbols = confirm("Do you want to include symbols?");
  
   
  }
 

  //1. Prompt user for PW criteria
  //   a. PW length at least 8 characters and no more than 128 characters
  //   b. Uppercase, lowercase, numbers, special characters
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
