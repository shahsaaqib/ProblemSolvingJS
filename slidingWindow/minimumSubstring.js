const s = "cabwefgewcwaefgcf" , t = "cae"
function find(s,t){
     let str = "", minstr = s;
    if(t.length > s.length) return str; 
    const map = new Map();
    let count = 0;
    for( const val of t){
        if(map.has(val))
            map.set(val,map.get(val) + 1);
        else{
            map.set(val,1);
            count++;
        }
    }
    let i = 0, j = 0;
    while ( j < s.length){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j]) - 1);
            if(map.get(s[j]) === 0)
                count--;
        }
        console.log(map,count,j);
        if(count > 0)
            j++;
        else{
            while(count === 0){
                if(map.has(s[i]) && map.get(s[i]) === 0){
                    map.set(s[i],map.get(s[i]) + 1);
                    count++;
                }
                else if(map.has(s[i])){
                     map.set(s[i],map.get(s[i]) + 1);
                }
                i++;
            }
            console.log(map,count,'i:',i);
            
            str = s.slice(i-1,j+1);
            if (str.length <= minstr.length){
                minstr = str;
            }
            console.log(str);
            j++;
        }
    }
    return minstr;
};
console.log(find(s,t));