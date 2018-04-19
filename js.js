function makePizza(name , ingredients , size) {
	return(
 {
	name : name , 
	ingredients : 
	[
		{name: "cheese", price: 5},
		{name: "tomato", price: 3},
		{name: "meet", price: 8},
		{name: "fish", price: 10}
	],
	size :
	{
		small: { name : "small" , price : 50} ,
		medium: {name : "medium" , price : 100} ,
		big: {name : "big" , price : 150  }
	},

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
