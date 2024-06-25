function mergeSort(arr){
    if (arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid))    
    const right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

function merge(left,right){
    let result = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift()) //use of shift so that the elements should be removed from the left array
        }else{
            result.push(right.shift()) //use of shift so that the elements should be removed from the right array
        }
    }
    while(left.length){
        result.push(left.shift())
    }
    while(right.length){
        result.push(right.shift())
    }
    return result
}

