//normal code
function isPowerOfTwo(n){
    if(n<1){
      return false
    }
    while (n>1){
      if(n%2 !== 0){
        return false
      }
      n=n/2
    }
    return true
  }
   let ans = console.log(isPowerOfTwo(8))

//use of bitwise operator 
// This function checks if a number is a power of two by verifying if exactly one bit is set in its binary representation. 
// If n is a power of two, the binary representation will have a single '1' bit (e.g., 1 = 0b1, 2 = 0b10, 4 = 0b100). 
// Performing (n & (n - 1)) will result in 0 only for powers of two, because (n - 1) flips all bits after the single '1' bit in n.
function isPowerOfTwoBitwise(n){
    if(n<1){
        return false
    }
    return(n & (n-1))===0
}
