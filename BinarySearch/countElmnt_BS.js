const arr = [1,2,4,5,10,10,10,10,11,17,19];
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
let r1 = firstOccr(arr,10);
let r2 = lastOccr(arr,10);
if(r1 === -1)
    console.log('element not present');
else
    console.log('count :' , r2 - r1 + 1);
