/**
 * @function isWorkingAgePerson
 * @param {number} age - Age to ckeck
 * @returns {boolean} Is age working
 */
function isWorkingAgePerson(age) {
    return age >= 16 && age <= 64;
}

const age1 = 20;
console.log(`Is age ${age1} working:`, isWorkingAgePerson(age1));

const age2 = 4;
console.log(`Is age ${age2} working:`, isWorkingAgePerson(age2));

const age3 = 88;
console.log(`Is age ${age3} working:`, isWorkingAgePerson(age3));

let userAge = getNumberFromPrompt('Input age');
alert(`Age ${userAge} is${isWorkingAgePerson(userAge) ? '' : ' not'} working age`);
