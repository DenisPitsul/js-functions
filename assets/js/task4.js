/**
 * @function getAreaOfRectangular
 * @param {number} a - First rectangular side 
 * @param {number} b - Second rectangular side 
 * @returns {number | string} Area of rectangular or message if one of parameters is not more than 0
 */
function getAreaOfRectangular(a, b) {
    if(a <= 0 || b <= 0) {
        return 'Sides must be more than 0'
    }
    return a * b;
}

const length = getNumberFromPrompt('Enter length of rectangular');
const width = getNumberFromPrompt('Enter width of rectangular');
const area = getAreaOfRectangular(length, width);
if (typeof area === 'number') {
    alert(`Area of rectangular with sides ${length} and ${width} is ${getAreaOfRectangular(length, width)}`);
} else {
    alert(area);
}
