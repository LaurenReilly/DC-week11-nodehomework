class Strings {
    // Reverses a string.
    reverse(toReverse) {
        var stringArray = toReverse.split("");
        stringArray.reverse();
        return stringArray.join(""); 
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        var stringArray = toCheck.split("");
        stringArray.reverse();
        var palindrome = stringArray.join("");
        if (toCheck === palindrome) {
            return true;
        } else {
            return false;
        }
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
shift(toShift) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var message = "";
    for (var i = 0; i < toShift.length; i++) {
        var index = alphabet.indexOf(toShift[i]);
        if ((index + 1) >= 26) {
            message += alphabet[(index + 1) -26];
        } else if (index + 1 < 26 && index + 1 > 0) {
            message += alphabet[(index + 1)];
        } else {
            message += toShift[i];
        }
    }
    return message;
}


    // Checks to see if the target string is a number
    isNumber(toCheck) {
        if (Number.isInteger(toCheck)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Strings