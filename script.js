function mincost(arr)
{ 
//write your code here
// return the min cost
  if (arr.length<=1)return 0;
	
	const MinHeap = require("heap").MinHeap;
	const heap=new MinHeap((a,b)=>a-b);
	
	arr.forEach(length => heap.push(length));
    let totalCost = 0;
	
	while (heap.size() > 1) 
	{
		
	const first = heap.pop();
        const second = heap.pop();
		
        const combinedCost = first + second;
        totalCost += combinedCost;
		
		 heap.push(combinedCost);
    }

    return totalCost;
}
}

module.exports=mincost;
