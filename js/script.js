//
//
//
//
////Palidroma
////Chiedere all’utente di inserire una parola

var userWord = prompt("Please, insert a word").trim().toLowerCase();
console.log(userWord);

//Creare una funzione per capire se la parola inserita è palindroma

var wordReverted = checkPalindrome(userWord);
console.log(wordReverted);

// if (wordReverted == userWord) {
// 	console.log("its palindrome");
// } else {
// 	console.log("not palindrome");
// }

/**
 *
 * @param {word} word
 */

function checkPalindrome(word) {
	var reverse = " ";

	for (var i = word.length - 1; i >= 0; i--) {
		console.log(word[i]);

		reverse += word[i];

		console.log(reverse);
	}

	return reverse;
}
