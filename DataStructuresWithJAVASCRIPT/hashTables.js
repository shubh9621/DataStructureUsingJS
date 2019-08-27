const hashCode = (value, len) => {
    let total = 0;
    let primeNumber = 31;
    for (let i = 0; i < Math.min(value.length, 100); i++) {
        let code = value.charCodeAt(i) - 96;
        total = (total * primeNumber + code) % len;
    }
    return total;
};

console.log(hashCode('shubham', 40));