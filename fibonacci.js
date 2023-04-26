// recursive - time complexity bad O(2^n)
// problem with large numbers
function fibRecursive(n) {
    if (n <= 2) return 1
    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log(fibRecursive(5))

// Tabulation - storing result of previous result in a table (usually an array)
// Usually done using iteration. Better space complexity than memozation
function fibTabulated(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}

console.log(fibTabulated(5))

// Memozation - storing he results of expensive function calls and returning the cached result when the same inputs occur again.
function fibMemoized(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;
    let res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo)
    memo[n] = res
    return res;

}

console.log(fibMemoized(5))

//
function fibLoop(n) {
    if (n <= 2) return 1;
    let prev = [1, 1];
    for (let i = 2; i < n; i++) {
        prev.push(prev[i - 1] + prev[i - 2]);
    }

    return prev[n - 1];
}


console.log(fibLoop(5))