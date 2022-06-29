// Assignment Code // Add event listener to generate button
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Write Password Function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Generate Password Function
function generatePassword() {
  var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lengthValue;
  var confirmSpecial;
  var confirmNumber;
  var confirmUpperCase;
  var confirmLowerCase;
  var options;
  lengthValue =  (prompt("Specify the length of your password: (Between 8-128)"));
  if (lengthValue < 8 || lengthValue > 128){
    lengthValue = alert("You must choose between 8 and 128");
  } else {
    confirmSpecial = confirm("Click OK to add Special Characters to your password.")
    confirmNumber = confirm("Click OK to add Numbers to your Password.")
    confirmUpperCase = confirm("Click OK to add Upper Case Letters to your Password.")
    confirmLowerCase = confirm("Click OK to add Lower Case Letters to your Password.")
  };

  if(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumber === false) {
    alert("You must choose at least one parameter"); 
  } 
  // 4 Positive Parameters
  else if (confirmSpecial && confirmNumber && confirmUpperCase && confirmLowerCase) {
    options = special.concat(number, upperCase, lowerCase);
  }
  // 3 Positive Parameters
  else if (confirmSpecial && confirmNumber && confirmUpperCase) {
    options = special.concat(number, upperCase);
  }
  else if (confirmSpecial && confirmNumber && confirmLowerCase) {
    options = special.concat(number, lowerCase);
  }
  else if (confirmSpecial && confirmLowerCase&& confirmUpperCase) {
    options = special.concat(lowerCase, upperCase);
  }
  else if (confirmNumber && confirmLowerCase && confirmUpperCase) {
    options = number.concat(lowerCase, upperCase);
  }
  // 2 Positive Parameters
  else if (confirmSpecial && confirmNumber) {
    options = special.concat(number);
  }
  else if (confirmSpecial && confirmUpperCase){
  options = special.concat(upperCase);
  }
  else if (confirmSpecial && confirmLowerCase){
  options = special.concat(lowerCase);
  }
  else if (confirmLowerCase && confirmNumber) {
    options = lowerCase.concat(number);
  }
  else if (confirmLowerCase && confirmUpperCase) {
    options = lowerCase.concat(upperCase);
  }
  else if (confirmNumber && confirmUpperCase) {
    options = number.concat(upperCase);
  }
  //  1 Positive Parameter
  else if (confirmSpecial) {
    options = special;
  }
  else if (confirmNumber) {
    options = number;
  }
  else if (confirmUpperCase) {
    options = upperCase;
  }
  else if (confirmLowerCase) {
    options = lowerCase;
  };

  var password = [];
// Loop to give random password
  for (var i = 0; i < lengthValue; i++) {
  var chooseOptions = options[Math.floor(Math.random() * options.length)];
  password.push(chooseOptions);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
};

