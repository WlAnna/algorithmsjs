// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    let result = 1

    if (arr.length == 0) return result;

    function helper(helperInput) {
        if (helperInput.length == 0) {
            return;
        }

        result *= helperInput[0]

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;

}


console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60