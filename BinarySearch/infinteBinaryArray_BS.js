const arr = [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1]; //let infinite array
function firstIndex(arr){
let start = 0;
let end = 1;
let mid,res = -1;
while (arr[end] === 0){
    start = end;
    end = end * 2;
}
while( start <= end){
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === 1){
        res = mid;
        end = mid - 1;
    }
    else
        start = mid + 1;
}
return res;
};
console.log(firstIndex(arr));