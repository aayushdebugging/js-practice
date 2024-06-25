function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let numbertoInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>numbertoInsert){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numbertoInsert
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10]
insertionSort(arr)
console.log(arr)