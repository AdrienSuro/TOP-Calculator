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
    if (operator == add) {
        return add(a, b);
    }
    if (operator == substract) {
        return substract(a, b);
    }
    if (operator == multiply) {
        return multiply(a, b);
    }
    if (operator == divide) {
        return divide(a, b);
    }
}

console.log(operate(add, 10, 5));