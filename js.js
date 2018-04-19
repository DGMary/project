function makePizza(name , ingredients , size) {
	return(
 {
	name : name , 
	ingredients : ingredients,
	size :	size,

	getPrice : function (){
		return(this.name );
	}

	});
}


//makePizza("Margo" , ["tomato" , "meet"] , "small")


// {
// name: string "“"margarita”
// ingredients: array of objects [{name: “cheese”, price: 5}...]
// size: object {name: “small”, price: 5}
// getPrice: function - получает цену за пиццу учитывая размер и стоимость всех ингредиентов 
// }
// *добавлять созданные пиццы в массив - menu, play with it.

// Для выполнения задачи желательно создать репозиторий в github

// https://git-scm.com/
// https://git-scm.com/book/ru/v2
const sizes = [{
	name : "small" ,
	price : 7
} , 
{
	name : "medium" ,
	price : 12
},
{
	name : "big" ,
	price : 15
}];