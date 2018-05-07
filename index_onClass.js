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
hero.isPrototypeOf(spiderMan);
console.log(Array.prototype.isPrototypeOf([]));//проверка на массив?
console.log(Object.prototype.isPrototypeOf([]));

// var  pizzaPrototype = {
// 	return ({
// 		getName : function(){
// 			return this.name;
// 		},
// 		getPrice : function(){
// 			return this.price;
// 		}
// 		getIngridients : function(){
// 			return this.ingridients.join(" , ");
// 		});

// 	}
// }

var margarita = Object.create(pizzaPrototype);
margarita.name = "margarita";
margarita.ingridients = [ "cheese" , "tomato" , "basil"];
margarita.price = 5;
console.log(margarita.getIngridients())

//homework
//прототип
var vegeterianPizzaPrototype = Object.create(pizzaPrototype);
//prorotype Beverage(напиток)
//Alcohol                           // Non Alcohol
//pure  //cocktail 
var beverageProto = {
	_name : "some drink",
	_price : 1,
	_valume : 50,
	setName : function(name){
		this._name = name
	},
	setPrice : function(name){
		this._price = price
	},
	setValue : function(name){
		this._value =value
	},
	getName : function(){
	return this._name
	},
	getPrice : function(){
	return this._price
	},
	getValume : function(){
	return this._valume
	}
}

var water = Object.create(beverageProto);
// water;
// water.setName(water);
// water._name;
var alcoholProto = Object.create(beverageProto);

alcoholProto.setStrength = function(strength){
	this._strength = strength;
}
alcoholProto.getStrength = function(){
	return this._strength ;
}
var tequila = Object.create(alcoholProto);
tequila.setName("Tequila");
tequila.setPrice(38);

//07.05.2018

var actors = [
    {firstName: "Tom", lastName: "Cruise", year: 1962 },
    {firstName: "Jackie", lastName: "Chan", year: 1954 },
    {firstName: "Brad", lastName: "Pitt", year: 1963 },
    {firstName: "Jean-Claude", lastName: "Van Damme", year: 1960 },
    {firstName: "Bruce", lastName: "Willis", year: 1955 },
    {firstName: "Arnold", lastName: "Schwarzenegger", year: 1947 },
    {firstName: "Silvester", lastName: "Stallone", year: 1946 },
]
//1. Получить массив который будет содержать всех актеров родившихся до 1950го года
var newActors = actors.filter(function(elem){
  return (1950 - elem.year) > 0;
 });
console.log(newActors);

//on class
var lessThan = actors.filter(function(actor){
  return actor.year < 1950 ;
 });
console.log(lessThan);

//2. Получить массив который будет содержать полное имя каждого актера
var newFullName = [];
actors.forEach(function(fullname){
  return newFullName.push(fullname.firstName +" " + fullname.lastName );
})
console.log(newFullName);
//on class
var names = actors.map(function(actor){
	//return `${actor.firsName} ${actor.lastName}`
	return actor.firstName + " " + actor.lastName
})
console.log(names);

//3. Отсортировать массив по возрасту актеров - от старшего
var newActorsAge = actors.sort(function(a , b){
  return (a.year > b.year)
 });
console.log(newActorsAge);
//on class
var newActorsAge1 = actors.slice().sort(function(a , b){
  return (a.year > b.year)
 });
console.log(newActorsAge1);

//4. Какой общий возраст всех актеров (предположим что ворзраст актера равен 2018-actor.year)
var newAgeAllActors = [];
actors.forEach(function(years){
    return (newAgeAllActors.push(years.year));
 });

newAgeAllActors1 = newAgeAllActors.map(function(num) {
  return 2018 - num ;
});

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (Object.prototype.toString.call(array[i]) === '[object Number]') {
			sum += array[i];
		}
	}
	return sum
}
console.log(arraySum(newAgeAllActors1));
//on class
var sum1 = actors.reduce(function(res , actor){
	return res + (2018 - actor.year)
}) ;
console.log(sum1);



var people = ['John, Lock', 'Colin, Hull', 'Jane, Fox', 'Nick, Milner', 'Sarah, Connor', 'David, Smith', 'Hannah, Rose',
'Peter, Todd', 'Frank, Sample', 'Luke, Pope', 'Alissa, Moss', 'Sam, Washington', 'Eddie, Cope', 'Lucy, Bower', 'Andre, Cox',
'Monica, Bell', 'Richard, Nowell', 'Chris, Paxton', 'John, Cho', 'Tom, Price', 'Kate, Ritter', 'Mike, Lee', 'Kristin, Spawn',]

//5. Отсортировать в алфовитном порядке по фамилии
var newP = [];
people.forEach(function(elem){
  return ( newP.push(elem.split(", ").reverse()) );
});
 console.log(newP.reverse().sort());

 //on class
 people.sort(function(a , b ){
 	var aLastName = a.split(", ")[1];
 	var bLastName = b.split(", ")[1];
 	return aLastName < bLastName ? -1 : 1;
 })


var data = ['apple', 'banana', 'apple', 'orange', 'banana', 'orange', 'apple', 'lemon', 'pear', 'pear', 'banana']
//6*. посчитать количество каждого фрукта в массиве - вывести объект например - fruitsCount = {apple: 4, banana: 5, ...}
var fruitsCount={};
for(i in data){
	if (fruitsCount[data[i]]!=undefined) {
		(fruitsCount[data[i]]++)
	}
	else {
		(fruitsCount[data[i]]=1)
	}
}
console.log(fruitsCount);
//on class



