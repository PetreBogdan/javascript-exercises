const removeFromArray = function(arrayToRemove, ...elementToRemove) {
    for (const element of elementToRemove){
        while (arrayToRemove.indexOf(element) > -1){
            arrayToRemove.splice(arrayToRemove.indexOf(element), 1);
        }
    }
    return arrayToRemove
};

// Do not edit below this line
module.exports = removeFromArray;
