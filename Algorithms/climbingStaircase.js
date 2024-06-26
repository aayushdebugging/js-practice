//You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

//At a given time , we can only climb either 1 or 2 step
//If you have to climb to step n , we can only climb from step n-1 , n-2
//So the number of ways to climb to step n is the sum of ways to climb to step n-1 and n-2
//climbStaircase(n) = climbStaircase(n-1)+climbStaircase(n-2)

//code
function climbStaircases(n){
    const noOfWays = [1,2]
    for(let i = 2;i<=n;i++){
        noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
    }
     return noOfWays[n-1]
}

console.log(climbStaircases(5)) //8