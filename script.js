let firstNumber;
let operator;
let secondNumber;



const sum = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(array){
    return array.reduce((product, current) => product * current, 1);
}

const divide = function(a, b){
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

const operate = function(operator, firstNumber, secondNumber){
    if(operator === "sum"){
        return sum(firstNumber, secondNumber);
    }

    if(operator === "subtract"){
        return subtract(firstNumber, secondNumber);
    }

    if(operator === "multiply"){
        return multiply(firstNumber, secondNumber);
    }

    if(operator === "divide"){
        return divide(firstNumber, secondNumber);
    }

}

const digits = document.querySelectorAll(".digit");
digits.AddEventListener("click", () => {

})