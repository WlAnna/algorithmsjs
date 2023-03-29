// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1), callback);
// }

function someRecursive(arr, callback) {

    let isOdd = false

    function helper(helperInput, callback) {
        if (helperInput.length == 0) return 0

        helper(helperInput.slice(1), callback)

        if (callback(helperInput[0]) == true) {
            isOdd = true
        }
    }

    helper(arr, callback)

    return isOdd

}


const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false