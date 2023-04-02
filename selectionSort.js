// selectionSort
// Store the first element as the smallest value you ve seen so far
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
// If the minimum is not the value (index) you initially began with, swap the two values
// Repeat this with the next element until the array is sorted

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) { // i = 4 
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) { // j = 3 comparisons
            console.log(i, j);
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }

        if (i !== lowest)
            console.log(i, lowest)
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp;
    }
    return arr;
}



// ES2015 VERSION
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);


console.log(selectionSort([34, 22, 10, 19, 17]))
console.log(selectionSort([0, 2, 10, 19, 17]))
    // selectionSort.js:13 0 1
    // selectionSort.js:13 0 2
    // selectionSort.js:13 0 3
    // selectionSort.js:13 0 4
    // selectionSort.js:13 1 2
    // selectionSort.js:13 1 3
    // selectionSort.js:13 1 4
    // selectionSort.js:13 2 3
    // selectionSort.js:13 2 4
    // selectionSort.js:13 3 4
    // selectionSort.js:26 
    // (5) [34, 22, 10, 19, 17]