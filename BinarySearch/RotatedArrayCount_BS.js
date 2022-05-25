const arr = [1,3];
function countRotated(arr){
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    let mid , prev , next;
    while( start <= end){
        mid = start + Math.floor((end - start) / 2);
        //console.log('mid:',arr[mid]);
        next = (mid + 1) % n;
        //console.log('next:' ,arr[next]);
        prev = ((mid + n) - 1) % n;
        //console.log('prev:' ,arr[prev]);
        if ( arr[mid] <= arr[next] && arr[mid] <= arr[prev] )
            return mid;
        else if( arr[mid] >= arr[end])
            start = mid + 1;
        else
            end = mid - 1;
    }
}
console.log('clockwiseRotated :' ,countRotated(arr));
console.log('anticlockwiseRotated :' , arr.length - countRotated(arr));
