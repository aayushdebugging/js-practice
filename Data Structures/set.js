//Sets are dynamically sized 
//Set contains a mix of different data types. Can be used for storing booleans , numbers or even objects all together
//Do not maintain insertion order
//Sets are iterables
//Sets cant have duplicate values


const set = new Set([1,2,3])
set.add(4)
console.log(set.has(4)) //true
set.delete(3)
console.log(set.size)

for (const item of set){
    console.log(item)
}