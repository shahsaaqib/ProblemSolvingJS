const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]; //let it infinite array i,e we don't know the right end
function infiniteSearch(arr,n){
    let start = 0;
    let end = 1
    let mid;
    while( n > arr[end]){
        start = end;
        end = end * 2;
    }
    while(start <= end){
        mid = start + Math.floor((end - start) / 2);
        if(arr[mid] === n)
            return mid;
        else if(n > arr[mid])
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
};
console.log(infiniteSearch(arr,12));