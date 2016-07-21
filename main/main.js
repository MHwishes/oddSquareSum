'use strict';
function printOddSquare(numbers) {

   const sum=numbers.filter(number=>number%2===1)
        .map(odd=>odd*odd)
        .reduce((pre,next)=>pre+next);

    console.log(sum);
}

module.exports={
    printOddSquare:printOddSquare
};