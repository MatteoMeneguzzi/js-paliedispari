//
//
//
//
////Palidroma
////Chiedere all’utente di inserire una parola

// var userWord = prompt("Insert word to check if it's palindrome")
// 	.trim()
// 	.toLowerCase();
// console.log(userWord);

// //Creare una funzione per capire se la parola inserita è palindroma

// var wordPalindrome = checkPalindrome(userWord);

// if (userWord === wordPalindrome) {
// 	console.log("Palindrome");
// } else {
// 	console.log("not palindrome");
// }

// /**
//  *
//  * @param {word} word
//  */

// function checkPalindrome(word) {
// 	var palindrome = "";

// 	for (var i = word.length - 1; i >= 0; i--) {
// 		console.log(word[i]);

// 		palindrome += word[i];

// 		console.log(palindrome);
// 	}

// 	return palindrome;
// }

//
//
//
// Pari e Dispari
// L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.

var pariDispariUtente = prompt("Pari o dispari?").trim().toLowerCase();

while (pariDispariUtente != "pari" && pariDispariUtente != "dispari") {
	pariDispariUtente = prompt("Selezione non valida, scegli pari o dispari")
		.trim()
		.toLowerCase();
}
console.log(pariDispariUtente);

var numUtente = parseInt(
	prompt("Scegli un numero da uno a sei").trim().toLowerCase()
);

while (isNaN(numUtente) || numUtente > 5 || numUtente < 1) {
	numUtente = parseInt(
		prompt("Scegli un numero da uno a sei").trim().toLowerCase()
	);
}
console.log(numUtente);

//
//
//
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

var numComputer = genNumber(1, 5);
console.log(numComputer);

/**
 *
 * @param {num} num numero del computer
 */
function genNumber(min, max) {
	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber;
}

//
//
//
// Sommiamo i due numeri

var res = numUtente + numComputer;
console.log(res);

//
//
//
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariDispari(num) {
	if (num % 2 == 0) {
		return "pari";
	} else {
		return "dispari";
	}
}

var res = pariDispari(res);

console.log(res);

//
//
//
// Dichiariamo chi ha vinto.
//

if (res == pariDispariUtente) {
	console.log("Hai vinto!");
} else {
	console.log("Hai perso!");
}
