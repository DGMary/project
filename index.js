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
	id : 2 ,
	name : "test2"
}]

var nameList = arr.map(function(item ){
	return {
		id : item.id,
		name : item.name
	}
});
console.log(nameList);


//filter
var arr = [{
	id : 1,
	name : "test"
},{
	id : 3,
	name : "test2"
}]

var nameList1 = arr.filter(function(item ){
	return true;
})
console.log(nameList1);

//sort
var arr3 = [1 , 2, 5, 8, 4]

var nameList3 = arr3.sort(function(a , b ){
	return a > b;
})
console.log(nameList3);


//prototype

var hero = {
	name : "Hero!",
	speak :  function(){
	console.log(this.name);
	}
}
hero.name;
hero.speak();

var spiderMan = Object.create(hero);
spiderMan.name = "Super Man";


function makePizza(name , price){
	return {
		name : name ,
		getPrice : function(){
			return price;
		}
	}
}

hero.isPrototypeOf(spiderMan);
console.log(Array.prototype.isPrototypeOf([]));//проверка на массив?
console.log(Object.prototype.isPrototypeOf([]));



