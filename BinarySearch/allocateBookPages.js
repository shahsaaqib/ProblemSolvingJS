arr = [10,20,30,40];
function allocateBooks(arr,k){     //k is number of students
    if ( k > arr.length)
        return -1
    let start = Math.max(...arr);
    let end = arr.reduce(function(a,b){
        return a + b;
    },0);
    let res = -1;
    while ( start <= end){
        let mid = start + Math.floor(( end - start ) / 2);
        if( isValid(arr,k,mid) === true){
            res = mid;
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return res;
};
function isValid(arr,k,mid){
    let sum = 0;
    let student = 1;
    for( let i = 0; i < arr.length; i++){
        sum += arr[i];
        if ( sum > mid){
            student++;
            sum = arr[i];
        }
        if(student > k)
            return false;
    }
    return true;
};
console.log(allocateBooks(arr,2));
console.log(allocateBooks(arr,3));
console.log(allocateBooks(arr,4));
console.log(allocateBooks(arr,5)); //number of students greater than books



