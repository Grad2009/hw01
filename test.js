//var arr=[3, 6, 2];

describe("getArray", function() {
	before(function() {
		document.getElementById('entArr').value='2 6 3';
		document.getElementById('run').click();
	});
		it("Парсим массив из формы", function() {
	    	for (var i = 0; i < arr.length; i++) {
					assert.isNotNull(arr[i]);
				}
		  	});
	});
	
describe ("checkArrElem", function(){
	it("если значение массива не число, возвращаем false", function() {
	  		assert.isNotOk(checkArrElem(NaN));
	  		});	
	  	});
	
describe("createTable", function() {
	before(function() {
		document.getElementById('entArr').value='2 6 3';
		document.getElementById('run').click();
	});
				it("Отрисовка таблицы", function() {
				for (var i = 0; i < arr.length; i++) {
					assert.isNotNull(document.getElementById("col"+i));
				} 
		});
});


describe("nextStep", function(){
	before(function() {
		var arr=[2, 6, 3];
		createTable(arr);
	});
	
	it("сравниваем ячейки, без перестановки, красим в желтый", function() {
			document.getElementById('step').click();
			assert.equal(document.getElementById('col0').style.backgroundColor,'rgb(255, 255, 60)'); //yellow
			assert.equal(document.getElementById('col1').style.backgroundColor,'rgb(255, 255, 60)');
			
		});
	
	it("смена цвета(красный), cell1>cell2", function() {        
	document.getElementById('step').click();
	assert.equal(document.getElementById('col1').style.backgroundColor,'rgb(255, 60, 83)'); //red
	assert.equal(document.getElementById('col2').style.backgroundColor,'rgb(255, 60, 83)');
		});
		

		
	it("зеленый, если внутрениий цикл закончен", function() {
			document.getElementById('step').click();
			assert.equal(document.getElementById('col2').style.backgroundColor,'rgb(83, 255, 60)'); //green
		});
	
	it("массив отсортирован корректно, если 2, 3, 6", function() { // не нашел как сэмулировать нажатие ОК у alert, без алерта проходит
			document.getElementById('step').click();
			document.getElementById('step').click();
			document.getElementById('step').click();
			assert.equal(document.getElementById('col0').innerHTML,2);
			assert.equal(document.getElementById('col1').innerHTML,3);
			assert.equal(document.getElementById('col2').innerHTML,6);
		});
});
		
describe("clearAll", function() {
	before(function() {
		document.getElementById('clear').click();
	});
	it("Удаляем ячейки таблицы", function() {
		for (var i = 0; i < arr.length-1; i++) {
			assert.isNull(document.getElementById('col'+i));
		}
	});
	it("Удаляем содержимое формы input", function() {		
		assert.equal(document.getElementById('entArr').value,'');
	});
	it("Прячем кнопки управления", function() {		
		assert.equal(buttonBox.style.visibility,'hidden');
	});
		});