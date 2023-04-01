// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// function capitalizeFirst(arr) {
//     if (arr.length == 1) {
//         return arr[0][0].toUpperCase() + [...arr][0].slice(1)
//     }

//     return arr[0][0].toUpperCase() + [...arr][0].slice(1) + ' ' + capitalizeFirst(arr.slice(1))
// }  // 'Car','Taco','Banana'

// function capitalizeFirst(arr) {
//     if (arr.length == 1) {
//         return [arr[0][0].toUpperCase() + [...arr][0].slice(1)]
//     }

//     let res = capitalizeFirst(arr.slice(1))

//     let stringg = arr[0][0].toUpperCase() + [...arr][0].slice(1)
//     console.log(stringg)
//     res.push(stringg);
//     return res;
// } //['Banana', 'Taco', 'Car']

function capitalizeFirst(arr) {
    if (arr.length == 1) {
        return [arr[0][0].toUpperCase() + [...arr][0].slice(1)]
    }

    let res = capitalizeFirst(arr.slice(0, -1))

    let stringg = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].slice(1)
    console.log(stringg)
    res.push(stringg);
    return res;
} //['Banana', 'Taco', 'Car']

// function capitalizeFirst(array) {
//     if (array.length === 1) {
//         return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
//     console.log(capitalizeFirst(array.slice(0, -1)))
//     res.push(string);
//     return res;
// }

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']