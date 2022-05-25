//nth fibnocii number
function fib(n){
    if ( n <= 1)
        return n;
    else
        return fib(n - 1) + fib( n - 2);
};
console.log(fib(9));
console.log(fib(5));