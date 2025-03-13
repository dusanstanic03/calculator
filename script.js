let firstNumber = "";
let operator = "";
let secondNumber = "";
let isTypingSecondNumber = false;

const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const btnEquals = document.querySelector("#btnEquals");
const btnAc = document.querySelector("#btnAc");

let reset = false;




const sum = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    
    if (b === 0) {
        return "lol";
        
    }
    return a / b;

    
}

const operate = function(operator, firstNumber, secondNumber){
    let result;
    switch(operator){
        case "+": return sum(firstNumber, secondNumber);
        case "-": return subtract(firstNumber, secondNumber);
        case "*": return multiply(firstNumber, secondNumber);
        case "/": return divide(firstNumber, secondNumber);
    }

    if (result % 1 !== 0){
        result = parseFloat(result.toFixed(5));
    }
    return result;
}

digits.forEach(digit => {
    digit.addEventListener("click", function() {
        if(this.textContent === "."){
            reset = false;
        }
        if(reset){
            display.textContent = "";
            reset = false;
            firstNumber = "";
        }
        if(!isTypingSecondNumber){
            if(this.textContent === "." && firstNumber.includes(".")){
                return;
            }
            
            
            firstNumber += this.textContent;
            display.textContent = firstNumber;
        }
        else{

            if(this.textContent === "." && secondNumber.includes(".")){
                return;
            }
           

            secondNumber += this.textContent;
            display.textContent = secondNumber;
        }
        
        
    });
});

operators.forEach(op => {
    op.addEventListener("click", function() {
        if(firstNumber === "") return; // Don't allow operators before a number
        if(operator !== "" && secondNumber !== ""){
            firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
            secondNumber = "";
        }
        operator = this.textContent;
        isTypingSecondNumber = true;
        reset = false;
        // display.textContent = this.textContent;
    });
});

btnEquals.addEventListener("click", function() {
    if(firstNumber !== "" && operator !== "" && secondNumber !== ""){
        firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
        display.textContent = firstNumber;

        secondNumber = "";
        operator = "";
        isTypingSecondNumber = false;
        reset = true;

    }
})

btnAc.addEventListener("click", function(){
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isTypingSecondNumber = false;
    reset = false;
});


