//Variables declaration : 
let userChoice = '';
let userSecondChoice = '';
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
let resultScreen = document.querySelector('.result');
let clearBtn = document.querySelector(".clear").addEventListener('click', function(){clear();});


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
let divideclick = divideBtn.addEventListener('click', function(){userSelectsOperator("divide");});
let multiplyclick = multiplyBtn.addEventListener('click', function(){userSelectsOperator("multiply");});
let addclick = addBtn.addEventListener('click', function(){userSelectsOperator("add");});
let substractclick = substractBtn.addEventListener('click', function(){userSelectsOperator("substract");});
let resultclick = resultBtn.addEventListener('click', function(){operate(userOperator, parseInt(userChoice), parseInt(userSecondChoice));});

//Function for storing user clicks that will go to the number1click and so on : 

function userSelectsOperator(operator) {
    if (userOperator != null) {
        let middleResult = operate(userOperator, parseInt(userChoice), parseInt(userSecondChoice));
        userChoice = middleResult;
        userSecondChoice = '';
        userOperator = operator;
    }
    else {
        userOperator = operator;
    }
}

function storeUserChoice(num) {    
    if (userOperator != null) { 
        userSecondChoice += num.toString();
        resultScreen.innerHTML = `${userSecondChoice}`;
    }
    else {
        userChoice += num.toString();
        resultScreen.innerHTML = `${userChoice}`;
    }
};

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
        resultScreen.innerHTML = add(a, b);
        return add(a,b);
    }
    if (operator == "substract") {
        resultScreen.innerHTML = substract(a, b);
        return substract(a, b);
    }
    if (operator == "multiply") {
        resultScreen.innerHTML = multiply(a, b);
        return multiply(a, b);
    }
    if (operator == "divide") {
        resultScreen.innerHTML = divide(a, b);
        return divide(a, b);
    }
}

function clear() {
    userChoice = '' ;
    userSecondChoice = '';
    userOperator = null;
    resultScreen.removeChild(resultScreen.firstChild);
}