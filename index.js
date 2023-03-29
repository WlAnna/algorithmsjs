function factorial(num) {
    if (num == 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(4))

function factirialLoop(num) {
    let result = 1
    for (let i = num; i > 1; i--) {
        console.log(i)
        result *= i
    }
    return result
}

console.log(factirialLoop(4))