// pivot
// It will help to accept three arguments: an array, a start index and an end index (these can default to 0 and the array length minus 1, resectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will kepp track of where the pivot should end up)
// Loop though the array from the start until the end
// - If the pivot is grater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// Return the pivot index

// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr)
        }
    }
    swap(arr, start, swapIdx);
    console.log(arr)
    return swapIdx;
}


// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
            //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))