// Linear search
// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// if it is, return the index at which the element is found
// If the value is never found, return -1

// function linearSearch(arr, value) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             // console.log(arr[i], i)
//             result = i
//         }
//         if (!arr.includes(value)) {
//             result = -1
//         }
//     }

//     return result;
// }

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

console.log(linearSearch([1, 3, 7], 3)) // 1
console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 200)) // -1