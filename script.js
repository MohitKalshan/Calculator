var display = document.getElementById("display");
var buttons = document.getElementsByClassName("buttons");
var operand1 = 0;
var operand2 = null;
var operator = null;
var screenvalue = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "AC") {
      // operand1 = parseFloat(display.textContent);//
      var screenvalue = " ";
      display.innerText = screenvalue;
    } else if (value == "=") {
      // operand2 = parseFloat(display.textContent);
      // var ans = "operand1 + operand2";
      display.innerText = eval(display.textContent);
    } else {
      display.innerText += value;
    }
  });
}

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       screenvalue = eval(string);
//       document.getElementById("display").innerHTML = screenvalue;
//     } else if (e.target.innerHTML == "AC") {
//       screenvalue = "";
//       document.getElementById("display").innerHTML = screenvalue;
//     } else {
//       console.log(e.target);
//       screenvalue = screenvalue + e.target.innerHTML;
//       document.getElementById("display").innerHTML = screenvalue;
//     }
//   });
// });