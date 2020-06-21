	//Получаем массив всех ингридиентов с сервера(имитация)
	function getAllIngridientsFromSever() {
		var arrIngridients = [];

		//Морские ингридиенты
		var oneIngridient = {
			type : 'sea',
			name : 'Кальмары',
			img : 'image/ingridients/kalm.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/kalm.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'sea',
			name : 'Креветка',
			img : 'image/ingridients/krev.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/krev.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'sea',
			name : 'Мидии',
			img : 'image/ingridients/mid.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/mid.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		//Мясные ингридиенты
		var oneIngridient = {
			type : 'meat',
			name : 'Бекон',
			img : 'image/ingridients/bek.png',
			imgOnPizza : 'image/ingridientsOnPizza/bek.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'meat',
			name : 'Ветчина',
			img : 'image/ingridients/vet.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/vet.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'meat',
			name : 'Итальянские колбаски',
			img : 'image/ingridients/itk.png',
			imgOnPizza : 'image/ingridientsOnPizza/itk.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'veg',
			name : 'Кунжутный бортик',
			img : 'image/ingridients/kub.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/kub.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'veg',
			name : 'Орегано',
			img : 'image/ingridients/oreg.jpg',
			imgOnPizza : '',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'veg',
			name : 'Перчик Халапеньо',
			img : 'image/ingridients/peh.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/peh.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'cheese',
			name : 'Дор Блю',
			img : 'image/ingridients/dorb.jpg',
			imgOnPizza : '',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'cheese',
			name : 'Пармезан',
			img : 'image/ingridients/perm.jpg',
			imgOnPizza : '',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'cheese',
			name : 'Фета',
			img : 'image/ingridients/fet.jpg',
			imgOnPizza : '',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'cheese',
			name : 'Филадельфия сыр',
			img : 'image/ingridients/ffl.jpg',
			imgOnPizza : '',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
        arrIngridients.push(oneIngridient);
        
		var oneIngridient = {
			type : 'refuel',
			name : 'Остро-сладкий',
			img : 'image/ingridients/osp.png',
			imgOnPizza : 'image/ingridientsOnPizza/osp.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		var oneIngridient = {
			type : 'refuel',
			name : 'Барбекью',
			img : 'image/ingridients/bbq.png',
			imgOnPizza : 'image/ingridientsOnPizza/bbq.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);

		return arrIngridients;
	}
