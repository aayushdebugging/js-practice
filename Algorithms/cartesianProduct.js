//Poblem - Given two finite non-empty sets,find their Cartesian Product
// In mathematics , specifically set theory , the cartesian product of two sets A and B , denoted AxB, is the set of all
//ordered pairs(a,b)where a is in A and b is in B
//const A = [1,2]
//const B = [3,4]
//AxB = [[1,3],[1,4],[2,3],[2,4]]

function cartesianProduct(arr1,arr2){
    let finalArray = []
    for(let i = 0 ; i<arr1.length ;i++){
        for(let j = 0 ; j<arr2.length;j++){
            finalArray.push([arr1[i],arr2[j]])
        }
    }
    return finalArray
 }
