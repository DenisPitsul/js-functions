/**
 * @function getNumberFromPromptLessThan 
 * @param {number} maxNumber - Max number to input
 * @param {string} promptText - Prompt text
 * @returns {number} number if inputed value is number and less than maxNumber else input it again
 */
function getNumberFromPromptLessThan(maxNumber, promptText) {
    let number = null;
    do {
        number = +prompt(promptText);
        if(number >= maxNumber) {
            alert(`Inputed number must be less than ${maxNumber}`);
        }
    } while(!Number.isFinite(number) || number >= maxNumber)
    
    return number;
}

/**
 * @function getMarckupForProductCard
 * @param {string} name - Product name
 * @param {string} description - Product description
 * @param {string} imgUrl Product image url
 * @param {number} price - Product price
 * @param {string | undefined} discountPrice - Product discount price
 * @returns {string} markup for product card
 */
function getMarckupForProductCard(name, description, imgUrl, price, discountPrice) {
    const discount = ((1 - (discountPrice / price)) * 100).toFixed();
    return `
        <article class="card">
            <img class="img" src="${imgUrl}" alt="${name}">
            <h2 class="name">${name}</h2>
            <p class="description">${description}</p>
            <div class="price-wrapper">
                ${discountPrice 
                    ? 
                    `<p class="old-price">${price}$</p>
                    <div class="new-price-wrapper">
                        <p class="new-price">${discountPrice}$</p>
                        <p class="discount">${discount}%</p>
                    </div>`
                    :
                    `<p class="price">${price}$</p>`}
            </div>
        </article>
    `
}

const productName = prompt("Input product name");
const productDescription = prompt("Input product description");
const productImgUrl = prompt("Input product image url", "https://cdn-icons-png.flaticon.com/512/1170/1170679.png");
const productPrice = getNumberFromPrompt("Input product price");
const isDiscount = confirm("Has product discount?");

if (isDiscount) {
    const productDiscpuntPrice = getNumberFromPromptLessThan(productPrice, "Input product price with dicount");
    document.write(getMarckupForProductCard(productName, productDescription, productImgUrl, productPrice, productDiscpuntPrice));
} else {
    document.write(getMarckupForProductCard(productName, productDescription, productImgUrl, productPrice));
}