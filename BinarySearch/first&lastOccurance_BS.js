const arr = [1,2,4,5,10,10,10,10,10,11,17,19];
function firstOccr(arr,n){
    let min = 0;
    let max = arr.length - 1;
    let mid;
    let res = -1;
    while( min <= max){
        mid = min + Math.floor((max - min) / 2);
        if (n == arr[mid]){
            res = mid;
            max = mid - 1;
        }
        else if( n < arr[mid])
            max = mid - 1;
        else
            min = mid + 1;
    }
    return res;
};
function lastOccr(arr,n){
    let min = 0;
    let max = arr.length - 1;
    let mid;
    let res = -1;
    while( min <= max){
        mid = min + Math.floor((max - min) / 2);
        if (n == arr[mid]){
            res = mid;
            min = mid + 1;
        }
        else if( n < arr[mid])
            max = mid - 1;
        else
            min = mid + 1;
    }
    return res;
};
console.log(arr);
console.log(firstOccr(arr,10));
console.log(lastOccr(arr,10));
