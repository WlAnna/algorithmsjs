//insertionSort
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ie the ledt side) to place the element in the correct place
// Repeat until the array is sorted

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) { //4x
//         var currentVal = arr[i]
//         for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // from the end
//             arr[j + 1] = arr[j]
//         }

//         arr[j + 1] = currentVal
//         console.log(arr)
//     }
//     return arr
// }

function insertionSort(arr) {
    var currentVal; // num with last index, 0 here
    for (var i = 1; i < arr.length; i++) { // 4x = arr length
        currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // form the end
            console.log(i, j)

            //4 3
            //4 2
            //4 1
            //4 0
            console.log(arr[j + 1], arr[j])
                // 0 76
                // 76 9 
                // 9 2 
                // 2 1 
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;

        console.log(currentVal)
        console.log(arr)
    }
    return arr;
}


console.log(insertionSort([2, 1, 9, 76, 0]))