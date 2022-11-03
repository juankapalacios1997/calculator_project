
//para nuevas versiones de javascript
// const x=10;    //constantes, nunca cambian de valor


//let null;
//let null;
// typeof   ---para imprimir el tipo de variable

let number1 = null;
let number2 = null;
let operation = null;
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operation");
let screen = document.getElementById("screen");


numberButtons.forEach((number) => {
    number.addEventListener("click",() => {
    if (number1){
        number1 = number1 + number.innerText
    } else{
        number1 = number.innerText
    }
    screen.innerText = number1
    })
})
operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.id !== "equal") {
            screen.innerText = 0
            number2 = number1
            number1 = null
            operation = operator.id
        } else {
        if (operation == "add"){
            screen.innerText = parseInt(number2) + parseInt(number1)
        }
        if (operation == "sub"){
            screen.innerText = parseInt(number2) - parseInt(number1)
        }    
        if (operation == "mult"){
            screen.innerText = parseInt(number2) * parseInt(number1)
        }        
        if (operation == "div"){
            screen.innerText = parseInt(number2) / parseInt(number1)
        }
    }
})})
//function function1(number)
//console.log(number)

//func1 = (number)=>{
    //Console.log(number)