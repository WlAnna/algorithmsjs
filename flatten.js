// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// function flatten(array) {
//     if (array.length === 0) return false;
//     if (Array.isArray(array[0])) {
//         console.log(array[0])
//         return true;
//     }

//     return flatten(array.slice(1))

// }

// function flatten(array) {

//     let result = array;

//     function helper(helperInput) {
//         if (helperInput.length == 0) {
//             return;
//         }

//         if (Array.isArray(helperInput[0])) {
//             let index = array.indexOf(helperInput[0])
//             array.splice(index, 1)
//                 // console.log(array)
//                 // console.log(helperInput[0])
//             for (let el of helperInput[0]) {
//                 result.push(el)
//             }
//         }

//         helper(helperInput.slice(1))
//     }

//     helper(array)

//     return result
// }



// function flatten(array) {

//     let result1 = array;


//     function helper(helperInput) {

//         let internalArray = helperInput

//         if (helperInput.length == 0) {
//             return;
//         }

//         if (Array.isArray(helperInput[0])) {

//             console.log(true)
//             let index = array.indexOf(helperInput[0])
//             console.log(index)
//             array.splice(index, 1)
//                 // console.log(helperInput[0])


//             for (let el of helperInput[0]) {
//                 internalArray.push(el)

//                 array.push(el)
//             }

//         }
//         console.log(internalArray)
//         helper(internalArray.slice(1))
//         console.log(internalArray)
//     }


//     helper(array)

//     return result1


// }


function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}



console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4],
        [
            [5]
        ]
    ]])) // [1, 2, 3, 4, 5]
console.log(flatten([
        [1],
        [2],
        [3]
    ])) // [1,2,3]
console.log(flatten([
        [
            [
                [1],
                [
                    [
                        [2]
                    ]
                ],
                [
                    [
                        [
                            [
                                [
                                    [
                                        [3]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ])) // [1,2,3]