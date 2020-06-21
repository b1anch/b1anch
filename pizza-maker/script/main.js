(function () {
	$(document).ready(function () {
        //Обработка измененния типа теста
		$('#dough').children('.variants').children('div').click(function () {
			var thisElem = this;

            //Выводим тип теста
			$('#dough').find('h5').text($(thisElem).data('dough'));

            //Отмечаем классом активное значение
			$('#dough').children('.variants').children('div').each(function () {
				if (thisElem === this) {
					$(this).addClass('cheked');
				} else {
					$(this).removeClass('cheked');
				}
			})
		});

        //Обработка изменения размера
		$('#size').children('.variants').children('div').click(function () {
			var thisElem = this;

			//Выводим размер
			$('#size').find('h5').text($(thisElem).data('size') + ' см');

			//Отмечаем классом активное значение
			$('#size').children('.variants').children('div').each(function () {
				if (thisElem === this) {
					$(this).addClass('cheked');
				} else {
					$(this).removeClass('cheked');
				}
			});

			//Обновляем стоимость ингридеиентов и вес
			var sizeId = $(this).attr('id');
			if (sizeId === 'pizza-size-large') {
				var dataSize = 'large';
			} else if (sizeId === 'pizza-size-mid') {
				var dataSize = 'mid';
			} else if (sizeId === 'pizza-size-small') {
				var dataSize = 'small';
			}

			refillPropertys(dataSize);

			//Пересчитываем вес и сумму
			getPropertysOfPizza();
		});

		//Обработка изменения типа начинок
		$('#ingredientsType').children().click(function () {
			if (!$(this).hasClass('active')) {
				$('#ingredientsType').children().each(function () {
					$(this).removeClass('active');
				});
				$(this).addClass('active');
			}

			if ($(this).attr('id') === 'seaIngredients') {
				$('#ingredientsView').children().addClass('disabledType');
				$('#ingredientsView').children('#seaIngredientsAll').removeClass('disabledType')
			} else if ($(this).attr('id') === 'meatIngredients') {
				$('#ingredientsView').children().addClass('disabledType');
				$('#ingredientsView').children('#meatIngredientsAll').removeClass('disabledType')
			} else if ($(this).attr('id') === 'vegIngredients') {
				$('#ingredientsView').children().addClass('disabledType');
				$('#ingredientsView').children('#vegIngredientsAll').removeClass('disabledType')
			} else if ($(this).attr('id') === 'cheeseIngredients') {
				$('#ingredientsView').children().addClass('disabledType');
				$('#ingredientsView').children('#cheeseIngredientsAll').removeClass('disabledType')
			} else if ($(this).attr('id') === 'refuelIngredients') {
				$('#ingredientsView').children().addClass('disabledType');
				$('#ingredientsView').children('#refuelIngredientsAll').removeClass('disabledType')
			}
		});

        //Получение списка ингредиентов с "сервера" 
        //на самом деле из переменной, демонстрационный вариант
        var arrIngridients = getAllIngridientsFromSever();
        
		//Добавлям все ингридиенты
		fillInAllIngridients(arrIngridients);

		//Устанавливаем стоимость и вес всех элементов для среднего размера
		refillPropertys('mid');

		//Обрабатываем нажатия на ингредиенты
		$('.ingridient').click(function () {
			ingridientOnClick(this);
		});

		//Обрабатываем сброс всех ингридиентов пиццы
		$('#reset').click(function () {
			$('#ingredientsSelect').find('.ingridient').each(function () {
				eraseImgOnPizza(this);
				modifyLeftIngridient(this);
			});

			getPropertysOfPizza();
		});

		//Расчитываем сумму и вес всей пиццы
		getPropertysOfPizza();
    });
    
	//Функция для заполнения ингридиентами страницы
	function fillInAllIngridients(arrIngridients) {

		for (var i = 0; i < arrIngridients.length; i++) {
			//по ключу type в обьекте определяем в какой div в структуре HTML добавлять ингридиент
			var idParent;
			if (arrIngridients[i].type === 'sea') {
				idParent = '#seaIngredientsAll';
			} else if (arrIngridients[i].type === 'meat') {
				idParent = '#meatIngredientsAll';
			} else if (arrIngridients[i].type === 'veg') {
				idParent = '#vegIngredientsAll';
			} else if (arrIngridients[i].type === 'cheese') {
				idParent = '#cheeseIngredientsAll';
			} else if (arrIngridients[i].type === 'refuel') {
				idParent = '#refuelIngredientsAll';
			}

			$(idParent).append("<div class='ingridient'><div class='img-ingridient'></div><p>" + arrIngridients[i].name + "</p><div class='weight-ingridient'><p></p></div><div class='price-ingridient'><p></p></div></div>");
			var newIngridient = $(idParent).children().last();
			$(newIngridient).attr('data-price-small', arrIngridients[i].priceSmall);
			$(newIngridient).attr('data-price-mid', arrIngridients[i].priceMid);
			$(newIngridient).attr('data-price-large', arrIngridients[i].priceLarge);
			$(newIngridient).attr('data-weight-small', arrIngridients[i].weightSmall);
			$(newIngridient).attr('data-weight-mid', arrIngridients[i].weightMid);
			$(newIngridient).attr('data-weight-large', arrIngridients[i].weightLarge);
			$(newIngridient).attr('data-type', arrIngridients[i].type);
			$(newIngridient).attr('data-img-pizza', arrIngridients[i].imgOnPizza);
			//Устанавливаем background-image
			$(newIngridient).children('.img-ingridient').css('background-image', 'url(' + arrIngridients[i].img + ')');
		}

	}

	//Перезаполняеn стоимость ингридеиентов и вес всех ингридиентов
	function refillPropertys(dataSize) {

		$('.ingridient').each(function () {
			$(this).children('.weight-ingridient').children('p').text($(this).attr('data-weight-' + dataSize) + ' гр');
			$(this).children('.price-ingridient').children('p').text($(this).attr('data-price-' + dataSize) + ' руб');
		});
	}

	//Расчитываем сумму и вес всей пиццы исходя из размера и выбранных ингридиентов
	function getPropertysOfPizza() {

		var pizzaPrice = 0;
		var pizzaWeight = 0;

		//Получаем цену и вес текущего размера
		var chekedElem = $('#size').children('.variants').find('.cheked');
		var sizeId = $(chekedElem).attr('id');
		pizzaPrice += Number($(chekedElem).attr('data-price'));
		pizzaWeight += Number($(chekedElem).attr('data-weight'));

		//Получаем общую стоимость и вес выбраных ингридиентов
		$('#ingredientsSelect').children('.ingridient').each(function () {

			if (sizeId === 'pizza-size-large') {
				var ingPrice = Number($(this).attr('data-price-large'));
				var ingWeight = Number($(this).attr('data-weight-large'));
			} else if (sizeId === 'pizza-size-mid') {
				var ingPrice = Number($(this).attr('data-price-mid'));
				var ingWeight = Number($(this).attr('data-weight-mid'));
			} else if (sizeId === 'pizza-size-small') {
				var ingPrice = Number($(this).attr('data-price-small'));
				var ingWeight = Number($(this).attr('data-weight-small'));
			}
			//Получаем количество порций
			var ingPortions = Number($(this).attr('data-portions'));

			pizzaPrice += ingPrice * ingPortions;
			pizzaWeight += ingWeight * ingPortions;
		});

		//Заполняем расчитанные данные в HTML
		$('#amounts').children('p').text('' + pizzaPrice + ' руб / ' + pizzaWeight + ' гр');
	}

	//Перемещает ингридиент в левую или правую часть в зависимости от того где элемент находится в тек момент
	function ingridientOnClick(oneIngridient) {
		if ($(oneIngridient).closest('#ingredientsView').length) {

			$(oneIngridient).fadeOut(1, function () {
				modifyRightIngridient(oneIngridient);
				$('#ingredientsSelect').append(oneIngridient);
				//Нарисуем изображение добавляемого ингридиента на пицце
				paintImgOnPizza(oneIngridient);
				//Пересчитываем сумму и вес всей пиццы
				getPropertysOfPizza();
				$(oneIngridient).fadeIn(400);
			});

		} else {
			addLeftIngridient(oneIngridient);
			getPropertysOfPizza();
		}

	}

	//Модифицирует ингридиент, удаляет цену и вес и добавляет элементы которые должны отображаться в левой части
	function modifyRightIngridient(oneIngridient) {
		//Убираем лишние элементы
		$(oneIngridient).children('.weight-ingridient').remove();
		$(oneIngridient).children('.price-ingridient').remove();

		//Указываем что добавлена одна порция ингридиента
		$(oneIngridient).attr('data-portions', 1);

		//Добавляем новые элементы
		$(oneIngridient).append('<div class="minusQuantity"><div></div></div>');
		$(oneIngridient).append("<div class='amountOfPortions'><div>1</div></div>");

		//Добавляем стили
		$(oneIngridient).addClass('left');
		$(oneIngridient).children('.amountOfPortions').addClass('none');

		//Навешиваем обработчик на каждый ингридиент минус
		$(oneIngridient).children('.minusQuantity').click(function () {
			//Запрещаем событие что бы не добавилось количество по клику
			event.stopPropagation();
			var oneIngridient = $(this).closest('.ingridient');
			minusQuantityOnClick(oneIngridient);
		});
	}

	//Убирает порцию ингридиента.
	// если порция 1 то переносит ингридиент обратно в правую часть
	// если порций 2 и более то отнимает количество порций
	function minusQuantityOnClick(oneIngridient) {

		//Получаем количество порций
		var ingPortions = Number($(oneIngridient).attr('data-portions'));
		if (ingPortions >= 2) {
			subtractLeftIngridient(oneIngridient);
		} else {
			modifyLeftIngridient(oneIngridient);
		}

		//Пересчитываем сумму и вес всей пиццы
		getPropertysOfPizza();
	}

	//Функция переносит элемент обратно из левой части в правую
	function modifyLeftIngridient(oneIngridient) {

		$(oneIngridient).fadeOut(1, function () {
			//Убираем лишние элементы
			$(oneIngridient).children('.minusQuantity').remove();
			$(oneIngridient).children('.amountOfPortions').remove();

			//Добавляем стили
			$(oneIngridient).removeClass('left');

			var ingType = $(oneIngridient).attr('data-type');
			var idParent;
			if (ingType === 'sea') {
				idParent = '#seaIngredientsAll';
			} else if (ingType === 'meat') {
				idParent = '#meatIngredientsAll';
			} else if (ingType === 'veg') {
				idParent = '#vegIngredientsAll';
			} else if (ingType === 'cheese') {
				idParent = '#cheeseIngredientsAll';
			} else if (ingType === 'refuel') {
				idParent = '#refuelIngredientsAll';
			}

			var sizeId = $('#size').find('.cheked').attr('id');
			if (sizeId === 'pizza-size-large') {
				var dataSize = 'large';
			} else if (sizeId === 'pizza-size-mid') {
				var dataSize = 'mid';
			} else if (sizeId === 'pizza-size-small') {
				var dataSize = 'small';
			}

			//Добавляем новые элементы
			$(oneIngridient).append("<div class='weight-ingridient'><p></p></div><div class='price-ingridient'><p></p></div>");
			$(oneIngridient).children('.weight-ingridient').children('p').text($(oneIngridient).attr('data-weight-' + dataSize) + ' гр');
			$(oneIngridient).children('.price-ingridient').children('p').text($(oneIngridient).attr('data-price-' + dataSize) + ' грн');

			$(idParent).append(oneIngridient);
			//Стираем изображение ингридиента с готовой пиццы
			eraseImgOnPizza(oneIngridient);
			//Пересчитываем сумму и вес всей пиццы
			getPropertysOfPizza();

			$(oneIngridient).fadeIn(400);

		});

	}

	//Функция добавляет 1 порцию ингридиента
	function addLeftIngridient(oneIngridient) {

		var ingPortions = Number($(oneIngridient).attr('data-portions'));
		if (ingPortions === 1) {
			$(oneIngridient).children('.amountOfPortions').removeClass('none');
		}
		ingPortions += 1;

		$(oneIngridient).attr('data-portions', ingPortions);
		$(oneIngridient).children('.amountOfPortions').children('div').text(ingPortions);
	}

	//Функция отнимает 1 порцию ингридиента
	function subtractLeftIngridient(oneIngridient) {

		var ingPortions = Number($(oneIngridient).attr('data-portions'));
		ingPortions -= 1;

		$(oneIngridient).attr('data-portions', ingPortions);
		$(oneIngridient).children('.amountOfPortions').children('div').text(ingPortions);
	}

	//Функция рисует ингридиент на готовой пицце
	function paintImgOnPizza(oneIngridient) {
		//Получаем ссылку на картинку для пиццы
		var imgOnPizza = $(oneIngridient).attr('data-img-pizza');
		$('.pizza-view').append('<img src="' + imgOnPizza + '" class="pizza-ingridient"></img>');
	}

	//Функция убирает изображение ингридиента на готовой пицце
	function eraseImgOnPizza(oneIngridient) {
		//Получаем ссылку на картинку дляпиццы
		var imgOnPizza = $(oneIngridient).attr('data-img-pizza');

		//Обходим все картинки и удаляем ту которая имеет src ингридиента
		$('.pizza-view').children('img[src="' + imgOnPizza + '"]').remove();
	}

})()