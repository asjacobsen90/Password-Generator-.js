// Assignment Code
var generateBtn = document.querySelector("#generate");
var sliderElement = document.getElementById("slider");
var sliderValueElement = document.getElementById("length");
var instructions = "Password must be at least 8 characters";

sliderElement.addEventListener("change", function onsliderChange(event) {
  // console.log(event.target.value) 
  // swap target value with string text "is the number"
  sliderValueElement.textContent = event.target.value + " is the number of characters";
  // add text for client (UI) slide the bar accross to choose number of characters
})

alert (instructions);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// slider display number? 
// let.addEventListener("slider").value = [8 < 128]

function slider () {
  let.slider(value = [any])
}
