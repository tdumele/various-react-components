const name = "James";
const restrictedModel = ["password", "qwerty", "1234", "qsdf"];

export function validateWithDefaultRules(password) {
    // TODO validate falsy 
    const pattern = checkPattern(password);
    const palindrome = checkPalindrome(password);
    const noSuccessiveChars = checkSuccessiveChars(password);
    const noPartOfName = checkNoPartOfName(password, 5);

    return pattern && palindrome && noSuccessiveChars && noPartOfName && !restrictedModel.includes(password);
}
function checkPattern(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.<>+&*-?%])[A-Za-zÀ-ÖØ-Þà-öø-þ.<>+&*-?%0-9]{8}$/;
    return pattern.test(password);
}
function checkPalindrome(password) {
    return password?.split('').reverse().join('') !== password;
}
function checkSuccessiveChars(password) {
    let previousChar = password[0];
    for (let i = 1; i < password.length; i++) {
        if (password[i] === previousChar) {
            return false;
        }

        previousChar = password[i];
    }

    return true;
}
function checkNoPartOfName(password, partSize) {
    if (name.length < partSize && password.includes(name)) {
        return false;
    }
    for (let i = 0; i < name.length - 5; i++) {
        if (password.includes(name.substring(i, i + 5))) {
            return false;
        }
    }

    return true;
}
