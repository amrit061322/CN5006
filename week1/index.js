console.log("This is my first program");
console.log("Welcome John, your monthly salary is 500000");

/*const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
} else if (number == 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}
*/

//given task to  Create a program that can perform addition, 
//subtraction, multiplication, and division of two or more numbers. 
function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : "Division by zero error";
        default:
            return "Invalid operation";
    }
}

console.log("Addition:", calculator(10, 5, 'add'));
console.log("Subtraction:", calculator(10, 5, 'subtract'));
console.log("Multiplication:", calculator(10, 5, 'multiply'));
console.log("Division:", calculator(10, 5, 'divide'));
