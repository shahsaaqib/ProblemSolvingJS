const str = 'abaabcbebebebe';
function find(str,k){
    let i = 0, j = 0;
    const map = new Map();
    let max = 0, count = 0,size = 0;
    while(j < str.length){
        if (map.has(str[j])){
            map.set(str[j],map.get(str[j]) + 1);
            size++;
        }
        else{
            map.set(str[j],1);
            count++;
            size++;
        }
        if (count < k)
            j++;
        else if (count === k){
            max = Math.max(size,max);
            j++;
        }
        else{
            while(count > k){
                map.set(str[i],map.get(str[i]) - 1);
                size--;
                if (map.get(str[i]) === 0)
                    count--;
                i++;
            }
            j++;
        }
    }
    return max;
};
console.log(find(str,3));
console.log(find(str,4));
console.log(find(str,2));
