const arr = [1,2,3,4,5,7,8,9,11,12,24];
function findFloor(arr,n){
    let start = 0;
    let end = arr.length - 1;
    let mid, res = -1;
    while ( start <= end){
        mid = start + Math.floor(( end - start) / 2);
        if( n === arr[mid])
            return arr[mid];
        else if ( n < arr[mid])
            end = mid - 1;
        else{
            res = arr[mid];
            start = mid + 1;
        }
    }
    return res;
};
console.log(findFloor(arr,6));