// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// //Solution #1
// // 1. create an empty arr to hold chunks called chucked
// // 2. for each elem of the unchuncked arr:
// // retrieve the last elem in chunked
// // if the last elem doesn not exist or if length is = to chunk size
// // return push a new chunk into checked with the current elem
// // else add the current elem into chunk
// function chunk(array, size) {
//     const chunked = [];
//     for ( let elem of array) {
//         const last = chunked[chunked.length -1]

//         if ( !last || last.length === size) {
//             chunked.push([elem]);
//         } else {
//             last.push(elem);
//         }
//     }
//     return chunked;
// }

//Solution #2 with .slice()
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = chunk;
