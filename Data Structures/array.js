const arr = [1,2,34,5,6,7,8,'Aayush']
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for(const item of arr ){
    console.log(item)
}

//Array-Big-O time complexity
//Insert/Remove from end - O(1)
//Insert/remove from beginning - O(n)
//Access - O(1)
//Search - O(n)
//Push/Pop - O(n)
//Shift/unshift/concat/slice/splice - O(n)
//forEach/map/filter/reduce - O(n)

