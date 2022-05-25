const arr = [1,2,3,4,5,12,6,4,3,2];
function maxIndex(arr){
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    while ( start <= end){
        let mid = start + Math.floor(( end - start ) / 2);
        if(mid > 0 && mid < n-1){
            if ( arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1])
                return mid;
            else if ( arr[mid - 1] > arr[mid])
                end = mid - 1;
            else 
                start = mid + 1; 
        }
        else if ( mid === 0){
            if (arr[0] > arr[1])
                return 0;
            else
                return 1;
        }
        else
            if ( arr[n - 1] > arr[ n - 2])
                return n - 1;
            else 
                return n - 2;
    }
};
let index = maxIndex(arr);
function leftBS(arr, index, key){
    let left = 0;
    while( left <= index){
        let mid = left + Math.floor(( index - left) / 2);
        if ( arr[mid] === key)
            return mid;
        else if ( key < arr[mid])
            index = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
};
function RightBS(arr, index, key){
    let right = arr.length - 1;
    while( index <= right){
        let mid = index + Math.floor(( right - index) / 2);
        if ( arr[mid] === key)
            return mid;
        else if ( key < arr[mid])
            right = mid - 1;
        else
            index = mid + 1;
    }
    return - 1;
};
console.log(leftBS(arr,index,4));
console.log(RightBS(arr,index,4));



