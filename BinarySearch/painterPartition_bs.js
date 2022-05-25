const C = [658, 786, 531, 47, 169, 397, 914];
function find(A,B,C){
     function isvalid(a,b,c,mid){
            let time = 0;
            let p = 1;
            for( let i = 0; i < c.length; i++){
                time += c[i] * b;
                if (time > mid){
                    p++;
                    time = c[i] * b;
                }
                if (p > a)
                    return false;
            }
            return true;
        }

        let sumA = C.reduce( function(a,b){
            return a+b;
        },0);
        let max = Math.max(...C);
        let start = max * B;
        let end = sumA * B;
        let res;
        while ( start <= end){
            let mid = start + Math.floor(( end - start) / 2);
            if (isvalid(A,B,C,mid)){
                res = mid;
                end = mid - 1;
            }
            else
                start = mid + 1;
        }
         return (res % 10000003);  
};
console.log(find(5,10,C));