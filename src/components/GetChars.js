
function GetChars(length, isUpper, isLower, isDigit, isSymbol) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "?_-@!~:.,{}[]^&%$#()*/\"'";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = '';
    let randString = '';

    if (length) {
        if (isDigit)
            randString += numbers;

        if (isLower)
            randString += lower;

        if (isSymbol)
            randString += symbols;

        if (isUpper)
            randString += upper;
    }

    if (randString !== '') {
        for (let i = 0; i < length; i++) {
            password = password + randString.charAt(Math.floor(Math.random() * Math.floor((randString.length) - 1)));
        } 
    }

    else {
        alert('Kindly select a password choice');   
    }

    return password;
}

export default GetChars