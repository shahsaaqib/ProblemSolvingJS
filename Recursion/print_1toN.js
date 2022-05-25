function print1(n){
    if (n >= 1){
        print1(n-1);
        console.log(n);
    }
    return 'end';
};
function print2(n){
    if (n > 0){
        console.log(n,'\t');
        print2(n-1);
    }
    return 0;
}
console.log(print1(10));
console.log(print2(10));
