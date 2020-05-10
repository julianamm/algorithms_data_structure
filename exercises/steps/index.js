// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // Solution #1
// // From 0 to n (iterate through rows)
// // Create an empty str 'stair'
// // From 0 to n (iterate through columns)
// // IF the current column is = or less than the current row
// // than add a '#' to 'stair'
// // ELSE 
// // add a space to  'stair'
// // console.log(stair)
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair= '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         // add the console.log() inside the for loop, 
//         // so you get one console.log for each row that you are iterating.
//         console.log(stair)
//     }
// }

// Solution #2 with recurssion
// IF (row === n) then we have hit the end of our problem (base case)
// if the 'stair' str has a length === n then we are at the end of a row
// if the length of the stair str in less than or equal to the row number, we're working on, we add a '#', otherwise add a space.

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }
    
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;
