	//ДД получаем массив всех ингридиентов с сервера(имитация)
	function getAllIngridientsFromSever() {
		var arrIngridients = [];

		//ДД морские ингридиенты
		var oneIngridient = {
			type : 'sea',
			name : 'Кальмары',
			img : 'image/ingridients/0ed54f93d4fd2757db8f3d819b028db8.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/7492f8bf161557c88183eb7fafe6859a.png',
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
			img : 'image/ingridients/54c7abb4dd2df47f816b36f40985e9e0.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/5eae467115960e4cb6a840e09eabbb04.png',
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
			img : 'image/ingridients/91d3e3aea68acb69e40ad5640908ced1.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/953773f3d81859dd9d102b2c1d765e8c.png',
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
			name : 'Сёмга',
			img : 'image/ingridients/d35d9e851329196144a68d4d12a59f93.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/91febea2a0d2606da1670cb5b8194c29.png',
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
			name : 'Крабовое мясо',
			img : 'image/ingridients/dbfad6420843c9bfb1882d12b0af2c0d.jpg',
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
			type : 'sea',
			name : 'Тунец',
			img : 'image/ingridients/545d93dab68c77f64d824897e99bb718.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/c4cea1b7f5fcfe3c4d78deb3439ed2f6.png',
			priceSmall : '10',
			priceMid : '20',
			priceLarge : '30',
			weightSmall : '70',
			weightMid : '80',
			weightLarge : '90',
		};
		arrIngridients.push(oneIngridient);
		//ДД мясные ингридиенты
		var oneIngridient = {
			type : 'meat',
			name : 'Бекон',
			img : 'image/ingridients/ddac6d8417739a2dcaf95ba32f5a8efe.png',
			imgOnPizza : 'image/ingridientsOnPizza/13e1bc66309f579198a61c4e48e6cf90.png',
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
			img : 'image/ingridients/39c3580b6ad4ecb63e8dd26830e57c07.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/50fe8ec54aa482b699ab989a98e484d5.png',
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
			img : 'image/ingridients/4b062dffc455e19fd1b3ba63752446ea.png',
			imgOnPizza : 'image/ingridientsOnPizza/3e7d9a805e3e97e95a87acde1fd28e64.png',
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
			name : 'Венские колбаски',
			img : 'image/ingridients/de2d8e21946959e30c3dd449543942b5.jpg',
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
			type : 'meat',
			name : 'Баварские колбаски',
			img : 'image/ingridients/d63185a7cb4e03f5db494e663453ecc5.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/7492f8bf161557c88183eb7fafe6859a.png',
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
			name : 'Копченая курица',
			img : 'image/ingridients/82e2ed56017b68dc8aa1eda28cb74a0c.png',
			imgOnPizza : 'image/ingridientsOnPizza/a3d7461699a6bf9727902206abef9d26.png',
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
			name : 'Курица гриль',
			img : 'image/ingridients/c18695784dd9470d7a249ee547e66156.png',
			imgOnPizza : 'image/ingridientsOnPizza/d83951e1f448eb24da03d8682bed99aa.png',
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
			name : 'Салями Пепперони',
			img : 'image/ingridients/4b062dffc455e19fd1b3ba63752446ea.png',
			imgOnPizza : 'image/ingridientsOnPizza/97fffd6da2c7545bf30642b0c8eaeaa4.png',
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
			name : 'Свинина (фарш)',
			img : 'image/ingridients/9b6a08bc82ab8bbe8949085a962ea6ce.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/58302d87a58b34bbf215193cd468db36.png',
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
			name : 'Говядина (фарш)',
			img : 'image/ingridients/1a71976c94a65dd0b3bb59aa6980ca6c.png',
			imgOnPizza : 'image/ingridientsOnPizza/5dbd5bef41b2ecaf43d4537b06481e44.png',
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
			name : 'Фрикадельки',
			img : 'image/ingridients/4b1718a983ee2c3986c67e420054b2af.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/d8755b968188016f7461691cd131b309.png',
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
			name : 'Люля Кебаб',
			img : 'image/ingridients/64032511ac6725360fb371d3cb1d6e26.png',
			imgOnPizza : 'image/ingridientsOnPizza/2c7bc29d2a184b70a09b0496dfdf169f.png',
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
			name : 'Куриные Стрипсы',
			img : 'image/ingridients/a5b39447ac6c214d8fe04c347005f6c3.png',
			imgOnPizza : 'image/ingridientsOnPizza/db9a3ef33e0d5046f17f33ccf0fded7e.png',
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
			img : 'image/ingridients/862118fa96c8daa4ee90f921b584b85c.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/6a4b5884671d7706ae2f491ef559d697.png',
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
			img : 'image/ingridients/02d7f7a2a3de549aa8ffec75d63473e5.jpg',
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
			img : 'image/ingridients/57234fdb644ca6105cfb8309dc94013d.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/78b02540899876aec724752854fab9ab.png',
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
			name : 'Петрушка',
			img : 'image/ingridients/f587bc45ccefee2ff112e83ce2c38c1e.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/51518bd2cc71cd590b23ade9aa994130.png',
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
			name : 'Ананас',
			img : 'image/ingridients/db017b8d9a10c3bfc92fe98f9064a9f4.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/54ff4e59638d2d9c3f031d51b3b040a6.png',
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
			name : 'Кукуруза',
			img : 'image/ingridients/95cc81fea0bb1d69c31f8204557ae4f0.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/c1d95f138cbd14ea913db3c7711b13f2.png',
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
			name : 'Лук',
			img : 'image/ingridients/f1a9e6c17faec17ab30e9e148ade64db.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/066bb5b36e1e03281e342bb13513e29a.png',
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
			name : 'Маслины',
			img : 'image/ingridients/90051448ac85a3bdd363de32b6b35ce3.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/874830532a091ddb297bd5bb3ff6c1df.png',
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
			name : 'Огурец маринованный',
			img : 'image/ingridients/6cf541ba59de05ffd02517949b068a39.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/2dc3dd02bbb65a1e7f37e5a3a72f8b10.png',
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
			name : 'Оливки',
			img : 'image/ingridients/e7a6f4634c7c1309364feaa51f121817.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/6a6d885bcd03cbd65c147762fc341e8f.png',
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
			name : 'Перец болгарский',
			img : 'image/ingridients/9fd616453ae6ee0ce6372ea734b72a04.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/ca1de8f94f2f36e6c7d638068139a47a.png',
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
			name : 'Помидор',
			img : 'image/ingridients/7a53f9826dd097bb678244c8ea155228.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/73478e1121e976b26e27976aba158927.png',
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
			name : 'Шампиньоны',
			img : 'image/ingridients/2c59a2060e209df6a90a33d93255d821.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/0f7fc79c9a92b0da4cb6acb332398b9d.png',
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
			name : 'Опята',
			img : 'image/ingridients/e31cda175da5ae0e7734afc62e1acbdf.png',
			imgOnPizza : 'image/ingridientsOnPizza/69407041878080ed4fbb5921b2a78b5b.png',
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
			name : 'Баклажан',
			img : 'image/ingridients/067c5d94d50f70d35bd7b442bb32e764.png',
			imgOnPizza : 'image/ingridientsOnPizza/48c56a32cf7d567b92d0298cf975c6d2.png',
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
			img : 'image/ingridients/cb17fbbfda0b0ea98836bd6bcce381b2.jpg',
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
			img : 'image/ingridients/882f49abb2b5c08b4cd05fdb3ea7d99a.jpg',
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
			img : 'image/ingridients/a2677195bbd3e9380be89db478a54863.jpg',
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
			img : 'image/ingridients/b5fc1860f6a99b9009e1da4c888bd347.jpg',
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
			name : 'Чеддер',
			img : 'image/ingridients/829cc39401693b3e1b88cca190e27a01.jpg',
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
			img : 'image/ingridients/dab5c5d2e29ecacde8dad21363fa6faf.png',
			imgOnPizza : 'image/ingridientsOnPizza/35ba6644fdb0db45c4cd99e80a678f1a.png',
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
			img : 'image/ingridients/e7cc32f20b8fdf45bea2dfc8867a6053.png',
			imgOnPizza : 'image/ingridientsOnPizza/c0b89911aabc62be5ef1f0211e4cde5c.png',
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
			name : 'Ранч',
			img : 'image/ingridients/99492c99be933ee70b3ea636ed82c1d5.jpg',
			imgOnPizza : 'image/ingridientsOnPizza/337af6064069822f564d4fa0822bfad3.png',
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
