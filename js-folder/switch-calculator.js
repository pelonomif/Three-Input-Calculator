let result;

let number1 = prompt("Please enter first number");
let number2 = prompt("Please enter second number");
let operator = prompt("Please enter the operator");


switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

 