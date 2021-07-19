/* -------------------------------- Function -------------------------------- */
//TODO Function that generates a random number
function getRandomNumber(min, max) {
    max++;
    return randomNumber = Math.floor(Math.random() * (max - min) + min);
}

//TODO Function that controls the inclusion of an element in an array 
function isInArray(needle, haystack) {
    var found = false;
    var i = 0;
    while (!found & i < haystack.length) {
        if (needle === haystack[i]) {
            found = true;
        }
        i++;
    }
    return found;
}

//TODO Function that checks the validity of entered number
function isValidNumber(num) {
    if (!num || num.trim() === " " || isNaN(num)) {
        return false;
    }
    return true;
}

//TODO Function to ask the user a number and to verify that it is valid
function getUserNumber() {
    var num = prompt("Inserisci un numero tra quelli visti in precedenza");
    while (!isValidNumber(num) || num < 1 || num > 100) {
        alert("Il numero inserito non è valido");
        num = prompt("Scegli un altro numero");
    }
    return parseInt(num);
}