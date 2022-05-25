const arr = [2,3,4,1,1,1,1,1,1,2,5,6,4,9,1,1,1,1];
function findLargest(arr,k){
    let i = 0, j = 0;
    let max = 0, sum = 0;
    while( j < arr.length){
        sum += arr[j];
        if ( sum < k)
            j++;
        /*else if ( sum === k){
            max = Math.max((j - i + 1),max);
            j++;
        }*/
        else{
            while (sum > k)
                sum -= arr[i++];
            if ( sum === k){
            max = Math.max((j - i + 1),max);
            j++;
            }
            else
                j++;
        }
    }
    return max;
};
console.log(findLargest(arr,13));
console.log(findLargest(arr,5));
console.log(findLargest(arr,24));
