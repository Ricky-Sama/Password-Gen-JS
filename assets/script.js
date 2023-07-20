//Arrays for password 
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','~','<','>','?'];
var main = []

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompt and alert functions
function generatePassword() {
  var length = parseInt(prompt("Welcome! How many characters do you want your password to be? (8 - 128 characters)"));
  if (length < 8 || length > 128) {
    alert("Password length should be between 8 and 128 characters. Please try again:");
    return generatePassword();
  } 
  
  if (isNaN(length)) {
    alert("Please enter a number. Try using 'Generate Password' again:")
    return null;
  }
  
    //Confirmation dialogs
    var useUppercase = confirm("Do you want to include uppercase letters?");
    var useLowercase = confirm("Do you want to include lowercase letters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSymbols = confirm("Do you want to include symbols?");
    var userPicks = [];

    // If statements
    if (useUppercase) {
      userPicks = userPicks.concat(upperCase);
    }
   
    if (useLowercase) {
      userPicks = userPicks.concat(lowerCase);
    }

    if (useNumbers) {
      userPicks = userPicks.concat(numbers);
    }

    if (useSymbols) {
      userPicks = userPicks.concat(specialChar);
    }
  
    //for loop for password generation
    let finalPassword = "";
    for(var i = 0; i < length; i++) {
        var randomCharacter = Math.floor(Math.random() * userPicks.length);
        finalPassword += userPicks[randomCharacter];
    }

    return finalPassword;
}




