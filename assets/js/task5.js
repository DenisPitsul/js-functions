/**
 * @function isPrime
 * @param {number} number - Number to check
 * @returns {boolean} Is number prime
 */
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const number = getNumberFromPrompt('Enter number');
alert(`Number ${number} is${isPrime(number) ? '' : ' not'} prime`);