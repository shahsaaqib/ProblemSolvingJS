const arr = [2,5,8,1,2,9,1,3];
function findSum(arr,k){         //k is size of subarray
    let i = 0, j = 0;
    let sum = 0;
    while ((j - i + 1) <= k){
        sum += arr[j++];
    }
    let max = sum, min = sum;
    while( j < arr.length){
        sum += arr[j++] - arr[i++];
        max = Math.max(max,sum);
        min = Math.min(min,sum);
    }
    return [max , min];
};
console.log(findSum(arr,3)); 
console.log(findSum(arr,4)); 
console.log(findSum(arr,2));   


