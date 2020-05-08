// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// // Solution 1 - using array.reverse()
// // 1. turn 'str' into an array
// // 2. call reverse method
// // 3. join the array back into str
// // 4. return the result
// function reverse(str) {
//     // const arr = str.split('');
//     // arr.reverse();
//     // return arr.join('');
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }


// // Solution 2 - using for loop
// // 1. create an empty str called 'reversed'
// // 2. for each character in the provided str - add it oy the start of the 'reversed'
// // 3. return the result
// function reverse(str) {
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }


// Solution 2 - using the reduce helper
function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
reverse('love')


// Debugger steps
// 1. Call the function manually
// 2. At the terminal, run: node inspect index.js
// 3. Continue execute of the file, press 'c' then enter
// 4. Use 'repl' then enter to lauch the session
// 5. To exit press control + 'C'
 
module.exports = reverse;
