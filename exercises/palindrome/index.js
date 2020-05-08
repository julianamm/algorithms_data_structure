// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// To TEST in the terminal run: node palindrome/test.js --watch

// // Solution #1 with .reverse()
// // 1. reverse str
// // 2. compare str with reversed
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }

// Solution #2 with .every()
// .every() it does a boolean check in every elem of an arr
// 1. Turn into an arr
// 2. compare the current elem with the near elem on the other side of the arr
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;
