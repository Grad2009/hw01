var arr = [];
var error = false;
var redc = '#FF3C53', greenc = '#53FF3C', yellowc = '#FFFF3C';
//var cell0,cell1,cell2;

function main() {
	arr = getArray();
	innerI = 0;
	outerI = 0;
		if (!error) {
		createTable(arr);
	}	else {
		alert ('Вы допустили ошибку при вводе.\n\nВведите корректные данные!');
		error=false; 									// error to initial state
	};
}

	
function getArray() {
	    var arr=document.getElementById('entArr').value.split(/\s+/);	
	for (var i = 0; i < arr.length; i++) {
 		arr[i] = parseFloat(arr[i]); 					// Make numbers from string elements from input form
		if (!checkArrElem(arr[i]))	{
		clearAll();
		error=true; 							// error flag
		break;
		}
	}
	return arr;
		}
	
function checkArrElem(some) {   						//Check if input is correct
        if(!isNaN(some) && isFinite(some)) {
        return true;
	        }
        return false;	
    }	
	
		
function createTable(arr) {
            var div=document.getElementById('showArr');
            var table="<table><tr>";
            for(i=0; i<arr.length; i++) {
                table+='<td id="col'+i+'">'+arr[i]+'</td>';
            }
            table+='</tr></table>'
            div.innerHTML=table;
			document.getElementById('buttonBox').style.visibility = 'visible';
	}


function clearAll(){
	var buttonBox = document.getElementById('buttonBox');
	for (var i = 0; i < arr.length; i++) {
 		if (document.getElementById('col'+i) !== null) {
		document.getElementById('col'+i).remove();}
 	}
	document.getElementById('entArr').value=null;
	buttonBox.style.visibility = 'hidden';
	document.getElementById('message').style.visibility = 'hidden';
}


function nextStep(){
	if(outerI<arr.length-1){
		
		if(innerI<arr.length-outerI){ 				// start of inner loop
			checkAndPaint(innerI);
			
			if (arr[innerI]>arr[innerI+1]){  		// compare and swap cells if need
				var temp = arr[innerI];
				arr[innerI] = arr[innerI+1];
				arr[innerI+1] = temp;
				paint(cell1,cell2,redc); 		// red
				cell1.innerHTML = arr[innerI];
				cell2.innerHTML = arr[innerI+1];
			}
			innerI++;
			
			if(innerI == arr.length-outerI){
				innerI =0; 
				outerI++;
				paint(cell1,cell2,greenc); 		// green
			}
		}
		
	}else{
		paint(document.getElementById('col0'),null,greenc); 	// paint 1st element
		//alert('Массив отсортирован!');
		document.getElementById('message').style.visibility = 'visible';
		}
}

function paint(cell1,cell2,color){
	cell1.style.backgroundColor = color;
	if(cell2) 							// for painting only 1 element
	cell2.style.backgroundColor = color;
}

function checkAndPaint(innerI) {
	if (innerI == 0) { 									//if 1st iteration - without reseting color of cell0 element
				cell1 = document.getElementById('col'+innerI);
				cell2 = document.getElementById('col'+(innerI+1));			
				paint(cell1,cell2,yellowc); 					// yellow
				} else { // standard painting
					cell0 = document.getElementById('col'+(innerI-1));
					cell1 = document.getElementById('col'+innerI);
					cell2 = document.getElementById('col'+(innerI+1));			
					paint(cell0,null,'#f0f0f2'); 				// reset to background color
					paint(cell1,cell2,yellowc); 				// yellow
				}
}
