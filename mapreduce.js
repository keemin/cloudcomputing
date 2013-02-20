var mapreduce = function (data, map, reduce) {
  var mapResult = [], reduceResult = [];
  var mapIx, reduceKey;
	
	var mapEmit = function(key, value) {
		if(!mapResult[key]) {
			mapResult[key] = [];
		}
		mapResult[key].push(value);
	};
	

	var reduceEmit = function(obj) {
		reduceResult.push(obj);
	};
	
 
	for(mapIx = 0; mapIx < data.length; mapIx++) {
		map(data[mapIx], mapEmit);
	}
	//For teaching export the interim map  
  console.log(mapResult);
  
	for(reduceKey in mapResult) {
		reduce(reduceKey, mapResult[reduceKey], reduceEmit);
	}
	
	return reduceResult;
};
