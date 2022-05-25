const A = [[1, 3, 6],[2, 6, 9],[3, 6, 9] ];
function find(A){
    function getCount(row,index){
			let lo = 0;
			let hi = row.length - 1;
			while( lo <= hi){
				let mid = lo + Math.floor(( hi - lo) / 2);
				if ( row[mid] <= index)
					lo = mid + 1;
				else
					hi = mid - 1;	
			}
			return lo;
		}

		let N = A.length;
		let M = A[0].length;
		let min = A[0][0];
		let max = 0;
		for ( let i = 0; i < A.length; i++){
			min = Math.min(min,A[i][0]);
			max = Math.max(max,A[i][M - 1]);
		}
		while ( min <= max){
			let mid = min + Math.floor(( max - min) / 2);
            console.log(min,max,mid);
            let count = 0;
			for ( let i = 0; i < A.length; i++){
                console.log('per:', count);
				count += getCount(A[i],mid);
			}
            console.log('net:',count);
			if(count <= Math.floor(( N * M ) / 2))
				min = mid + 1;
			else
				max = mid - 1;
		}
		return min;
};
console.log(find(A));