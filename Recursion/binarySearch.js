const arr = [1,2,4,5,6,7,11,23,25,35,45];
function binarySearch(arr,key,lo,hi){
    if(hi >= lo){
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] === key)
            return mid;
        if (key < arr[mid])
            return binarySearch(arr,key,lo,mid-1);
        else
            return binarySearch(arr,key,mid+1,hi);
    }
    return -1;
};
console.log(binarySearch(arr,35,0,10));
console.log(binarySearch(arr,2,0,10));
console.log(binarySearch(arr,8,0,10));