const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let startNewNumber = false;

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        if(button.textContent === 'C') {
            display.value = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
            startNewNumber = false;
        } else if (button.textContent === '=') {
            if(operator === "" || startNewNumber) { return; }

            secondNumber = Number(display.value);
            
            if(operator === '+') {
                display.value = Number(firstNumber) + secondNumber;
            } else if(operator === '-') {
                display.value = Number(firstNumber) - secondNumber;
            } else if(operator === '*') {
                display.value = Number(firstNumber) * secondNumber;
            } else if(operator === '/') {
                if (secondNumber === 0) {
                    display.value = "Cannot divide by zero";
                } else {
                    display.value = Number(firstNumber) / secondNumber;
                }
            }
            startNewNumber = true;
        } else if (button.textContent === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "*" ||
            button.textContent === "/" 
        ) {
            firstNumber = display.value;
            operator = button.textContent;
            startNewNumber = true;

            console.log(firstNumber);
            console.log(operator);
        }
         else {
            if (button.textContent === '.' && display.value.includes(".")) { return; }

            if(startNewNumber) {
                if (button.textContent === '.') {
                    display.value = "0.";
                } else {
                    display.value = button.textContent;
                }
                startNewNumber = false;
            } else {
                display.value += button.textContent;
            }
        }
    });
});