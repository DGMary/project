console.log("first commit");
var deepArray = [
	[1 , 2],
	[3 , 4],
	[5, 6]
] 

function arrayClone (arr) {
	var i, copy;
	
	if (Array.isArray(arr)) {
		copy = arr.slice(0);
		for (i = 0; i < copy.length; i++) {
			copy[i] = arrayClone(copy[i]);
		}
		return copy;
	} else if(typeof arr === 'object') {
		throw 'Cannot clone array containing an object!';
	} else {
		return arr;
	}
}
//on 26.04
var  deepArray = [
	[1, 2] ,
	[3 , 4],
	[5 ,6]
]

function cloneArray (arr){
	var clonedArray = arr.slice();
	clonedArray.forEach(function(item , index){
		if(Array.isArray(item) === true){
			clonedArray[index] = cloneArray(item);
		}
		return clonedArray;
	})

	return clonedArray;
	
}


//map
var arr = [{
	id : 1,
	name : "test"
},{
	id : ,
	name : "test2"
}]

var nameList = arr.map(function(item ){
	return {
		id : item.id,
		name : item.name
	}
})



console.log(arrayClone (deepArray));
