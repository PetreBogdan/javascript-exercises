const sumAll = function(firstNumber, secondNumber) {
    
    let begining, end;
    if ((!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) || 
        (firstNumber < 0 || secondNumber < 0)) return 'ERROR';
    if (firstNumber > secondNumber) {[begining, end] = [secondNumber, firstNumber]}
    else {[begining, end] = [firstNumber, secondNumber]};
    let sum = 0;
    for (let i = begining; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
