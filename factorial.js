//find factors ; 
//time complexity O(sqrt(n))
function findFactors(n) {
    if (n <= 0) return []; 
    let factors = [];
    let sqrtN = Math.sqrt(n);
    
    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) { 
                factors.push(n / i);
            }
        }
    }
    return factors.sort((a, b) => a - b); 
}

let factors = findFactors(8);
console.log(factors); 
