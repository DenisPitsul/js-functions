/**
 * @function getNumberFromPrompt 
 * @param {string} promptText - Prompt text
 * @returns {number} number if inputed value is number else input it again
 */
function getNumberFromPrompt(promptText) {
    let number = null;
    do {
        number = +prompt(promptText);
    } while(!Number.isFinite(number))
    
    return number;
}