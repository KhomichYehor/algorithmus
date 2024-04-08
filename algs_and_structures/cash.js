function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            return cash[n]
            console.log('Взято із кеша', cash[n]);
        }
        let result = fn(n)
        cash[n] = result
        return result
        console.log('Підраховано', result);
    }
}

function factorial(n) {
    let result = 1;
    while(n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)