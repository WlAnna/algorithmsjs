// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 1) {
        return [arr[0].toUpperCase()]
    }


    let resultArr = capitalizeWords(arr.slice(0, -1)) // slice first from the end
    console.log(resultArr)
    resultArr.push(arr.slice(arr.length - 1)[0].toUpperCase())
    console.log(arr.slice(arr.length - 1)[0].toUpperCase()) // sliced word

    return resultArr
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']