// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// // Solution #1
// // 1. Make an empty arr 'words'
// // 2. split the input str by spaces to get an arr
// // 3. for each word in the arr
// // uppercase the fisrt letter of the word
// // join first letter with the rest of the str
// // push into 'words' arr
// // join 'words' into a str and return it

// function capitalize(str) {
//     const words = [];
    
//     for ( let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

// Solution #2
// 1. Make a str 'result', which the first char is capitalized
// 2. for every char in the str
// if the char to the left a space
// captitalize it and add to 'result'
// else
// add it to 'result'

function capitalize(str) {
    let result = str[0].toUpperCase();
    
    for ( let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;
