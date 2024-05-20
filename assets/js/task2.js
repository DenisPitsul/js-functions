/**
 * @function checkMultiplicity
 * @param {number} firstNumber - Number that can be divided 
 * @param {number} secondNumber - Number to be divided by
 * @returns {boolean} Is firstNumber can divide to secondNumber without remainder
 */
const checkMultiplicity = function(firstNumber, secondNumber) {
    if(secondNumber === 0) {
        return false;
    }

    if(firstNumber % secondNumber === 0) {
        return true;
    } else {
        return false;
    }
}

const fisrtNumber1 = 25;
const secondNumber1 = 5;
console.log(`${fisrtNumber1} can divide to ${secondNumber1} without remainder:`, checkMultiplicity(fisrtNumber1, secondNumber1));

const fisrtNumber2 = 15;
const secondNumber2 = 3;
console.log(`${fisrtNumber2} can divide to ${secondNumber2} without remainder:`, checkMultiplicity(fisrtNumber2, secondNumber2));

const fisrtNumber3 = 15;
const secondNumber3 = 5;
console.log(`${fisrtNumber3} can divide to ${secondNumber3} without remainder:`, checkMultiplicity(fisrtNumber3, secondNumber3));

const fisrtNumber4 = 15;
const secondNumber4 = 4;
console.log(`${fisrtNumber1} can divide to ${secondNumber4} without remainder:`, checkMultiplicity(fisrtNumber4, secondNumber4));

const fisrtNumber5 = 12;
const secondNumber5 = 0;
console.log(`${fisrtNumber5} can divide to ${secondNumber5} without remainder:`, checkMultiplicity(fisrtNumber5, secondNumber5));

const userNumber1 = getNumberFromPrompt('Input first number');
const userNumber2 = getNumberFromPrompt('Input second number');
alert(`${userNumber1} can${checkMultiplicity(userNumber1, userNumber2) ? '' : ' not'} divide to ${userNumber2} without remainder`);
