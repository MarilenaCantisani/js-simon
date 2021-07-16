/* Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi.
(Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
(Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri,
il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati.
(Bonus: stampare in pagina il risultato, in alternativa all'alert.) */

//? #1: Generare 5 numeri casuali tutti diversi 
//? #2: Stampare i numeri generati in un alert 
//? #3: Al click ok dell'alert far partire un timer di 30 secondi 
//? #4: Terminati i secondi, chiedere x5 volte all'utenti di inserire un numero tra quelli visti precedentemente
//? #5: Controllare se i numeri scelti sono uguali a quelli randomimzzati 
//? #6: Stampare in un alert quanti e quali nueri sono stati indovinati

//* Create an array with five random numbers 
var numbersDrawn = [];
var totalNumbers = 5;

var userNumbers = [];


while (numbersDrawn.length < totalNumbers) {
    var randomNumbers = getRandomNumber(1, 100);
    console.log("Numero estratto: ", randomNumbers);
    if (!isInArray(randomNumbers, numbersDrawn)) {
        numbersDrawn.push(randomNumbers);
    }
}
console.log("Array numeri estratti: ", numbersDrawn);
alert("Memorizza i seguenti numeri: " + numbersDrawn);

setTimeout(function () {
    while (userNumbers.length < totalNumbers) {
        var chosenNumber = prompt("Dimmi un numero tra quelli visti in precedenza");
        if (isInArray(chosenNumber, numbersDrawn)) {
            alert("Hai vinto! hai indovinato " + userNumbers.length + " numeri");
        } else {
            if (isInArray(chosenNumber, userNumbers)) {
                alert("Numero già inserito, scegli un altro numero!");
            } else {
                userNumbers.push(chosenNumber);
            }
        }

    }

    console.log("Numeri scelti dall'utente", userNumbers);

}, 3000);





//**************************************** FUNCTION SECTION ****************************************//
//TODO Function that generates a random number
function getRandomNumber(min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

//TODO Function that controls the inclusion of an element in an array 
function isInArray(needle, haystack) {
    var found = false;
    var i = 0;
    while (!found & i < haystack.length) {
        if (needle === haystack[i]) {
            faund = true;
        }
        i++;
    }
    return found;
}
