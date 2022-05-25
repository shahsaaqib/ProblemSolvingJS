let str1 = 'aabacabaaabba';
let str2 = 'aacb';
let k = str2.length;
function getCount(str1, str2, k){
    const map = new Map();
    for( const val of str2){
        if(map.has(val))
            map.set(val,map.get(val)+1);
        else
            map.set(val,1);
    }
    let count = map.size;
    let i = 0, j = 0;
    let ans = 0;
    while ( j < str1.length){
        if(map.has(str1[j]))
            map.set(str1[j],map.get(str1[j])-1);
        if(map.get(str1[j]) === 0)
            count--;
        if (( j - i + 1) < k )
            j++;
        else{
            if(count === 0)
                ans++;
            if( map.has(str1[i]))
                map.set(str1[i],map.get(str1[i])+1);
            if(map.get(str1[i]) === 1)
                count++;
            i++;
            j++;

        }
    }
    return ans;
};
console.log('Anagram count =',getCount(str1, str2, k));