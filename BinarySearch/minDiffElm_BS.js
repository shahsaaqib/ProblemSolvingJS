const arr = [1,2,3,5,6,9,12,15,19,20,21];
function minDiffElement(arr,key){
    let start = 0; 
    let end = arr.length - 1;
    let mid;
    while ( start <= end ){
        mid = start + Math.floor((end - start) / 2);
        if( key === arr[mid])
            return arr[mid];
        else if ( key < arr[mid])
            end = mid - 1;
        else
            start = mid + 1;
    }
    if(Math.abs(arr[end] - key) <= Math.abs(arr[start] - key))
        return arr[end];
    else
        return arr[start];
};
console.log(minDiffElement(arr,17));
console.log(minDiffElement(arr,12));
console.log(minDiffElement(arr,14));
