// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
/*
Name: validateCred
Parameter: An array of credit card numbers.
Return: A true or false value depending if the credit card numbers are valid or not.
Description:This function will apply the Luhn algorithm to an array of numbers 
            and determin if it is a valid or not.
*/
function validateCred(arry) {
    let temp = arry;
    temp = temp.slice(0, -1);
    temp = temp.reverse()
    temp = temp.map(
        (item, index) => index % 2 === 0 
            ? (item * 2 > 9 ) 
                ? item * 2 - 9 
                : (item * 2) 
            : item
    )
    temp = temp.concat(arry.at(-1))
    temp = temp.reduce((a,b) => a+b)
    return temp % 10 === 0 ? true : false;
}

/*
Name: findInvalidCards
Parameter: An array of nested arrays containing credit card numbers.
Return: Another nested array of invalid card numbers.
Description: A simple function to find invalid cards using the built in filter method of an array.
*/
const findInvalidCards = (arry) => arry.filter(subArry => !validateCred(subArry));

/*
Name: idInvalidCardCompanies
Parameter: An array of nested arrays containing credit card numbers.
Return: An array of credit card companies bases on card numbers given in parameter.
Description: Takes the first number of each card and gets a unique list of companies coresponding to the number.
*/
function idInvalidCardCompanies(arry) {
    return arry.map(subArry => 
        subArry[0] === 3
            ? 'Amex (American Express)'
        : subArry[0] === 4
            ? 'Visa'
        : subArry[0] === 5
            ? 'Mastercard'
        : subArry[0] === 6
            ? 'Discover'
        : 'Company not found'
    ).filter((item, pos, a) => a.indexOf(item) === pos);
}

//Test cases
//console.log(findInvalidCards(batch));
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));