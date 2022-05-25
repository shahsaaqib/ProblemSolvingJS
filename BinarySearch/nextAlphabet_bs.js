const arr = ['a','b','c','d','f','i','j','k','m','p'];
function findFloor(arr,n){
    let start = 0;
    let end = arr.length - 1;
    let mid, res;
    while ( start <= end){
        mid = start + Math.floor(( end - start) / 2);
        if( n === arr[mid])
            start = mid + 1;
        else if ( n > arr[mid])
            start = mid + 1;
        else{
            res = arr[mid];
            end = mid - 1;
        }
    }
    return res;
};
console.log(findFloor(arr,'f'));