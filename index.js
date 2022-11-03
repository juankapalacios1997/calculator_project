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
        screen.innerText = input1;
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
            if (operation == "add") {
                screen.innerText = parseInt(input2) + parseInt(input1);
            } else if (operation == "sub") {
                screen.innerText = parseInt(input2) - parseInt(input1);
            } else if (operation == "mul") {
                screen.innerText = parseInt(input2) * parseInt(input1);
            } else if (operation == "div") {
                screen.innerText = parseInt(input2) / parseInt(input1);
            }
        }
    })
})
