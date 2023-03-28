console.log('xx')

// function countUniqueValues(arr) {

//     let unique = []
//     for (let i = 0; i < arr.length; i++) {
//         let first = arr[i];
//         let next = arr[i + 1];

//         if (first != next) {
//             unique.push(first)
//         }

//     }
//     console.log(unique)
// }

// console.log(countUniqueValues([-1, 0, 0, 1, 2, 3, 4, 5, 6, 6]))
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) //2

// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4


function countUniqueValues(arr) {
    if (arr.length == 0) return 0
    let i = 0
    for (j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniqueValues([-1, 0, 0, 1, 2, 3, 4, 5, 6, 6])) //8
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) //2

console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4