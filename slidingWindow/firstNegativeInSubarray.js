const arr = [12,-1,-7,15,-1,14,-2,3,2,-4];
function getNegative(arr,k){         //k is size of subArray
    let i = 0, j = 0;
    const nArray = [];
    const result = [];
    while( j < arr.length){
        if( arr[j] < 0)
            nArray.push(arr[j]);
        if((j - i + 1) < k)
            j++;
        else{
            if(nArray.length === 0){
                result.push(0);
            }
            else{
                result.push(nArray[0]);
                if( arr[i] === nArray[0]){
                    nArray.shift();
                }
            }
            i++;
            j++;
        }
    }
    return result;
};
console.log(getNegative(arr,3));
console.log(getNegative(arr,4));
console.log(getNegative(arr,2));

