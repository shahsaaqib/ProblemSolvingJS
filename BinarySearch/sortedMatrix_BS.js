arr = [[10,20,30,40],[15,25,35,45],[17,29,37,49],[19,31,39,50]];
function getIndex(arr,key,n,m){
    let i = 0;
    let j = m - 1;
    //let temp = arr.reduce(function(x,y){
        //return Math.max(x,y.length);
    //},0);
    //console.log(arr[0].length);
    while( i >= 0 && i < n && j >= 0 && j < m){
        if( arr[i][j] === key )
            return [i , j];
        else if ( key < arr[i][j])
            j--;
        else
            i++;
    }
    return -1;
};
console.log(getIndex(arr,29,4,4));
console.log(getIndex(arr,10,4,4));
console.log(getIndex(arr,5,4,4));

