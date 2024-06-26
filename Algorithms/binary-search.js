//binary search
function binarySearch(arr,n){
    let leftindex = 0;
    let rightindex = arr.length-1

    while(leftindex <=rightindex){
        let middleindex = Math.floor((leftindex+rightindex)/2)
        if(n == arr[middleindex]){
            return middleindex
        }
        if(n < arr[middleindex]){
            rightindex = middleindex-1
        }else{
            leftindex = middleindex+1
        }
    }return -1
}


console.log(binarySearch([-5,2,4,6,10],10))