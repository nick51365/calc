//Declare variables
let workingValue = "";
let displayValue = "";
let btnValue = "";
let operation = "";

//Prints displayValue to display element
const display = document.getElementById("display");
display.textContent = displayValue;

//Associates clear button with clearDisplay function
const clear = document.getElementById("clear");
clear.addEventListener("click", () => clearDisplay());

//Creates nodelist of operator buttons
const opButtons = document.querySelectorAll("button.opButton");

//Adds click event listeners to operator buttons
document.getElementById("btnDivide").addEventListener("click", () => defOperator(btnDivide));
document.getElementById("btnMultiply").addEventListener("click", () => defOperator(btnMultiply));
document.getElementById("btnAdd").addEventListener("click", () => defOperator(btnAdd));
document.getElementById("btnSubtract").addEventListener("click", () => defOperator(btnSubtract));

//Creates nodelist of number buttons
const numButtons = document.querySelectorAll("button.numBtn");

//Adds click event listeners to num buttons to add number to display element
for (i = 0; i < numButtons.length; i++){
    let btnValue = numButtons[i].value;
    numButtons[i].addEventListener("click", () => addDisplay(btnValue)); 
}

//Associates = button with equalsOperation function
let btnEquals = document.getElementById("btnEquals");
btnEquals.addEventListener("click", () => equalsOperation());

//Declare functions
function operate (operation, varA, varB){
    operator(varA, varB);
}
function add(a,b){
        console.log(a + b);
        return a + b;
    }

  function subtract(a ,b){
        console.log(a - b);
        return a - b;
    }

 function multiply(a ,b){
        console.log(a * b);
        return a * b;
    }
 function divide(a,b){
        console.log(a / b);
        return a / b;
    }

function addDisplay(btnValue){
    display.textContent += btnValue;
    displayValue += btnValue;
}
function defOperator(a){
    //Moves displayValue to workingValue, clears display
    workingValue = displayValue;
    displayValue = "";
    display.textContent = displayValue;

    //Defines operator to be used, stores as "operator"
    if (a === btnDivide){
        operation = "divide";
    }else if (a === btnMultiply){
        operation = "multiply";
    }else if (a === btnAdd){
        operation = "add";
    }else if (a === btnSubtract){
        operation = "subtract";
    }
    console.log(operation);
    console.log(workingValue);
}
function equalsOperation(){
    if (operation == "divide"){
         divide(workingValue, displayValue);
    }else if (operation == "multiply"){
        multiply(workingValue, displayValue);
    }else if (operation == "add"){
        add(parseInt(workingValue), parseInt(displayValue));
    }else if (operation == "subtract"){
        subtract(workingValue, displayValue);
    }
}
function clearDisplay(){
    displayValue = "";
    workingValue = "";
    operation = "";
    display.textContent = displayValue;
}
