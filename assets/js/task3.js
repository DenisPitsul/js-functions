/**
 * @function isTriangleCanExist
 * @param {number} a - First side of triangle
 * @param {number} b - Second side of triangle
 * @param {number} c - Third side of triangle
 * @returns {boolean} Is triangle with sides can exist
 */
const isTriangleCanExist = function(a, b, c) {
    if(a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    return a + b > c && a + c > b && b + c > a;
}

const side1 = getNumberFromPrompt('Enter first side of triangle');
const side2 = getNumberFromPrompt('Enter second side of triangle');
const side3 = getNumberFromPrompt('Enter third side of triangle');
alert(`Triangle with sides ${side1}, ${side2}, ${side3} can${isTriangleCanExist(side1, side2, side3) ? '' : ' not'} exist`);