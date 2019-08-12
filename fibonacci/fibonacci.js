const fibonacci = function(n) {
    // not negative
    if (n<0) return 'OOPS';
    //base case
    if (n === 1) return 1;
    if (n===2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

module.exports = fibonacci
