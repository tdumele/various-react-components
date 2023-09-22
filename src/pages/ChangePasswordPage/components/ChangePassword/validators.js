import { _DEFAULT_RESTRICTED_MODEL } from "./Constantes";

export function _isValidPassword(password, restrictedModel = _DEFAULT_RESTRICTED_MODEL) {
    const respectPattern = _checkPattern(password);
    const notPalindrome = _checkPalindrome(password);
    const noSuccessiveChars = _checkSuccessiveChars(password);

    return respectPattern
        && notPalindrome
        && noSuccessiveChars
        && !restrictedModel.includes(password);
}

function _checkPattern(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.<>+&*-?%])[A-Za-zÀ-ÖØ-Þà-öø-þ.<>+&*-?%0-9]{8}$/;
    return pattern.test(password);
}

function _checkPalindrome(password) {
    return password?.split('').reverse().join('') !== password;
}

function _checkSuccessiveChars(password) {
    let previousChar = password[0];
    for (let i = 1; i < password.length; i++) {
        if (password[i] === previousChar) {
            return false;
        }

        previousChar = password[i];
    }

    return true;
}
