let arr = [5,10,20,40,30,50];
function findIndex(arr,target){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while ( start <= end){
        mid = start + Math.floor((end - start) / 2);
        if( mid - 1 >= 0 && arr[mid - 1] === target)
            return mid - 1;
        if( mid + 1 <= arr.length - 1 && arr[mid + 1] === target)
            return mid + 1;
        if( arr[mid] === target)
            return mid;
        else if( target < arr[mid])
            end = mid - 2;
        else 
            start = mid + 2;
    }
    return -1;
};
console.log(findIndex(arr,30));