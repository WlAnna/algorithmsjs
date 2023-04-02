// bubbleSort
// Define function called BubbleSort. It takes an array.
// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i-1
// If arr[j] is grater than arr[j+1], swap thse two values!
// Return the sorted arrays


function bubbleSort(arr) {
    let noSwaps
    for (var i = arr.length; i > 0; i--) { // i = 4 
        for (var j = 0; j < i - 1; j++) { // j = 3 comparisons
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr;
}

// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}


console.log(bubbleSort([37, 45, 29, 8]))
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))