// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes the right pointer
// - create a pointer in the middle
// - If you find value you want, return the index
// - If the value is too small, move the left pointer up
// - If the value is too large, move the right pointer down
// If you never find the value, return -1

// function binarySearch(arr, value) {
//     let start = 0;
//     let end = arr.length - 1
//     let middle = Math.floor((end + start) / 2)
//     while (arr[middle] !== value && start <= end) {
//         console.log(start, middle, end)
//         if (value < arr[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }

//         middle = Math.floor((end + start) / 2)
//     }
//     console.log(start, middle, end)
//     if (arr[middle] == value) {
//         return middle
//     }
//     return -1

// }


// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103))

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)) 
//0 3 7
//4 5 7
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)) //
    //0 3 7
    //4 5 7
    //6 6 7
    // console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
    // console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
    // console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
    // console.log(binarySearch([
    //         5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    //         40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    //     ], 10)) // 2
    // console.log(binarySearch([
    //         5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    //         40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    //     ], 95)) // 16
    // console.log(binarySearch([
    //         5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    //         40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    //     ], 100)) // -1