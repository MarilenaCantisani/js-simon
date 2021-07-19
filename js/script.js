/* Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi.
(Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
(Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri,
il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati.
(Bonus: stampare in pagina il risultato, in alternativa all'alert.) */

/* --------------------------- Game preparation --------------------------- */
var numbersDrawn = [];
var totalNumbers = 5;

//* Create an array with five random numbers 
while (numbersDrawn.length < totalNumbers) {
    var randomNumbers = getRandomNumber(1, 100);
    console.log("Numero estratto: ", randomNumbers);

    // Check if it is already present in the array and indert it
    if (!isInArray(randomNumbers, numbersDrawn)) {
        numbersDrawn.push(randomNumbers);
    }
}
console.log("Array numeri estratti: ", numbersDrawn);
alert("Memorizza i seguenti numeri: " + numbersDrawn);


/* ---------------------------------- Game --------------------------------- */
//* Enter a countdown before asking the user the numbers
setTimeout(function () {
    var userNumbers = [];
    var numbersGuessed = [];

    while (userNumbers.length < totalNumbers) {
        var chosenNumber = getUserNumber();

        // Check if the selected number was already entered
        if (!isInArray(chosenNumber, userNumbers)) {
            userNumbers.push(chosenNumber);
            // Check if it is present in the numbers to be guessed and insert it in the array of numbers guessed
            if (isInArray(chosenNumber, numbersDrawn)) {
                numbersGuessed.push(chosenNumber);
            }
        } else {
            alert("Hai già scelto questo numero, inserisci un numero diverso")
        }
    }
    // Check if the user has not guessed any number
    if (numbersGuessed.length === 0) {
        alert("Non hai indovinato nessun numero tra quelli precedenti!")
    }
    // Check if the user has only guessed a number
    if (numbersGuessed.length === 1) {
        alert("Hai indovinato " + numbersGuessed.length + " numero: " + numbersGuessed + "!");
    }
    // Print to the user how many and which numbers he guessed
    alert("Hai indovinato " + numbersGuessed.length + " numeri: " + numbersGuessed + "!");
}, 30000);





