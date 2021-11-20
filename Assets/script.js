// Assignment code here
//series of prompts for password criteria
var getPasswordPrompts = function () {
  var charLength = parseInt(prompt("please choose length of the password between 8 and 128 characters"));
  console.log(charLength);
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("please select a valid number between 8 and 128");
    getPasswordPrompts();
  }

  var lowerCase = confirm("do you want to include lower case characters");
  var upperCase = confirm("do you want to include upper case characters");
  var specialChar = confirm("do you want to include special characters");
  var numberInput = confirm("do you want to include numbers");

  var userInputObj = {
    charLength: charLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    specialChar: specialChar,
    numberInput: numberInput
  }

  while (lowerCase === false && upperCase === false && specialChar === false &&  numberInput === false){
    alert(" please select atleast one type of character");
    getPasswordPrompts();
  }
  return userInputObj;
}

var generatePassword = function(){

  var options = getPasswordPrompts();
  var output = [];
  var lowercasechars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  var uppercasechars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numberchars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialchars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

  for (i=0 ; i < options.charLength ; i++) {
    if (options.lowerCase) {
      var lowercaseinput = Math.floor(Math.random() * lowercasechars.length );
      output.push(lowercasechars[lowercaseinput]);
      options.charLength--;
    }
    if (options.upperCase) {
      var uppercaseinput = Math.floor(Math.random() * uppercasechars.length );
      output.push(uppercasechars[uppercaseinput]);
      options.charLength--;  
    }
    if (options.specialChar) {
      var specialcaseinput = Math.floor(Math.random() * specialchars.length );
      output.push(specialchars[specialcaseinput]);
      options.charLength--;      
    }
    if (options.numberInput) {
      var numberinput = Math.floor(Math.random() * numberchars.length );
      output.push(numberchars[numberinput]);
      options.charLength--;   
    }
  }
  var outputString = output.join("");
  console.log(outputString);
  return outputString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
