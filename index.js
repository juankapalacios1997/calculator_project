let input1;
let operation;
let input2;
let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');
let screen = document.getElementById('input');

numberButtons.forEach(number => {
    number.addEventListener("click", () => {
        if (input1) {
            input1 = input1 + number.innerText;
        } else {
            input1 = number.innerText
        }
        console.log(input1);
        input1.length >= 16 ? screen.innerText = input1.substring((input1.length - 16), input1.length) : screen.innerText = input1;
    })
})

operationButtons.forEach(ops => {
    ops.addEventListener("click", () => {
        let opSymbol = ops.innerText;
        if (ops.id !== "equal") {
            if (ops.id === "C") {
                input1 = null;
                input2 = null;
                screen.innerText = 0;
            } else {
            screen.innerText = opSymbol;
            input2 = input1;
            input1 = null;
            operation = ops.id;
            }
        } else {
            let result;
            if (operation == "add") {
                result = parseInt(input2) + parseInt(input1);
                result >= 1000000000000000 ? screen.innerText = result.toExponential() : screen.innerText = result;
            } else if (operation == "sub") {
                result = parseInt(input2) - parseInt(input1);
                result >= 1000000000000000 ? screen.innerText = result.toExponential() : screen.innerText = result;
            } else if (operation == "mul") {
                result = parseInt(input2) * parseInt(input1);
                result >= 1000000000000000 ? screen.innerText = result.toExponential() : screen.innerText = result;
            } else if (operation == "div") {
                result = parseInt(input2) / parseInt(input1);
                result >= 1000000000000000 ? screen.innerText = result.toExponential() : screen.innerText = result;
            }
        }
    })
})


