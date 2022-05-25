//have to pick toys in order and max of two distict toys of any number can be picked
const str = 'abacccaab';
function pickToys(str){
    const map = new Map();
    let i = 0, j = 0, count = 0,size = 0,max = 0;
    while ( j < str.length){
        if(map.has(str[j]) ){
            map.set(str[j],map.get(str[j]) + 1);
            size++;
        }
        else{
            map.set(str[j],1);
            count++;
            size++;
        }
        console.log(map);
        console.log(size,count);
        if( count < 2)
            j++;
        else{
            while(count > 2){
                map.set(str[i],map.get(str[i]) - 1);
                size--;
                if (map.get(str[i]) === 0){
                    count--;
                    map.delete(str[i]);
                }
                i++;
            }
            if( count === 2){
                max = Math.max(size,max);
                console.log('max:',max);
                j++;
            }
            else
                j++;
        }
    }
    return max;
};
console.log(pickToys(str));