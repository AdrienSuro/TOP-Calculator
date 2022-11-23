//Variables declaration : 
let userChoice = null ;
let userSecondChoice = null;
let userOperator = null;

//Query Selectors : 
let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let number3 = document.querySelector('.number3');
let number4 = document.querySelector('.number4');
let number5 = document.querySelector('.number5');
let number6 = document.querySelector('.number6');
let number7 = document.querySelector('.number7');
let number8 = document.querySelector('.number8');
let number9 = document.querySelector('.number9');
let number0 = document.querySelector('.number0');
let divideBtn = document.querySelector('.divide');
let multiplyBtn = document.querySelector('.multiply');
let substractBtn = document.querySelector('.substract');
let addBtn = document.querySelector('.add');
let resultBtn = document.querySelector('.equalsTo');


//Event Listeners : 
let number1click = number1.addEventListener('click', function(){storeUserChoice(1);});
let number2click = number2.addEventListener('click', function(){storeUserChoice(2);});
let number3click = number3.addEventListener('click', function(){storeUserChoice(3);});
let number4click = number4.addEventListener('click', function(){storeUserChoice(4);});
let number5click = number5.addEventListener('click', function(){storeUserChoice(5);});
let number6click = number6.addEventListener('click', function(){storeUserChoice(6);});
let number7click = number7.addEventListener('click', function(){storeUserChoice(7);});
let number8click = number8.addEventListener('click', function(){storeUserChoice(8);});
let number9click = number9.addEventListener('click', function(){storeUserChoice(9);});
let number0click = number0.addEventListener('click', function(){storeUserChoice(0);});
let divideclick = divideBtn.addEventListener('click', () => userOperator = "divide");
let multiplyclick = multiplyBtn.addEventListener('click', () => userOperator = "multiply");
let addclick = addBtn.addEventListener('click', () => userOperator = "add");
let substractclick = substractBtn.addEventListener('click', () => userOperator = "substract");
let resultclick = resultBtn.addEventListener('click', function(){operate(userOperator, userChoice, userSecondChoice);});

//Function for storing user clicks that will go to the number1click and so on : 
function storeUserChoice(num) {
    if (userOperator != null) { userSecondChoice += num;
    }
    else {
        userChoice += num;
    }
    console.log(`userChoice is ${userChoice}`)
    console.log(`userSecondChoice is ${userSecondChoice}`)
};


//Event Listeners : 
// number1.addEventListener("click", storeFirstValue)
// console.log(number1.innerHTML);
// console.log(parseInt(number2.innerHTML));
// console.log(typeof(number0.innerHTML));
//Basic operations functions : 

//ADD :
function add(a, b) {
    return (a + b); 
}

//SUBSTRACT : 
function substract(a, b) {
    return (a - b);
}

//MULTIPLY : 
function multiply(a, b) {
    return (a * b);
}

//DIVIDE : 
function divide(a, b) {
    return (a/b);
}

function operate(operator, a, b) {
    if (operator == "add") {
        console.log(add(a, b));
    }
    if (operator == "substract") {
        return substract(a, b);
    }
    if (operator == "multiply") {
        return multiply(a, b);
    }
    if (operator == "divide") {
        return divide(a, b);
    }
}

// let userChoice = addEventListener
// function userInput () {
//     if (a) {
        
//     }
// }