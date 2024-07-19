
export function numbers() {
	const calculatorsArcanas = document.querySelector(".calculators__table");
  const calculatorsArcanasCell = document.querySelectorAll(
    ".calculators__table .cell__info"
  );

	console.log(calculatorsArcanasCell)

  if (calculatorsArcanas && localStorage.getItem("arcanas")) {

    const arcanas = JSON.parse(localStorage.getItem("arcanas"));
    let i = 0;

		let n = 0
		let k = 1
		let j = 2

    for (let value in arcanas) {

      if (calculatorsArcanasCell[i]) {
				console.log(calculatorsArcanasCell[i])
				if(i == n){
					calculatorsArcanasCell[n].textContent = arcanas['C'];	
					n += 3
				} else if(i == k) {
					calculatorsArcanasCell[k].textContent = arcanas['D'];	
					k += 3
				} else if(i == j && i != 20 && i != 23) {
					calculatorsArcanasCell[j].textContent = arcanas['K1'];	
					j += 3
				} else if(i == 20 || i == 23) {
					calculatorsArcanasCell[j].textContent = arcanas['E'];	
					j += 3
				}
      } else {
        break;
      }

      i++;
    }
  }



  const matrixNums = document.querySelectorAll('.matrix__img-num');

  if(matrixNums[1] && localStorage.getItem('arcanas')){
    const arcanas = JSON.parse(localStorage.getItem('arcanas'))
    let i = 0
    for(let value in arcanas){

			if(!matrixNums[i]){
				break
			}

			switch(i){
				case 0:
					matrixNums[0].innerHTML = arcanas['B'];
					break;
				case 1:
					matrixNums[1].innerHTML = arcanas['B1'];
					break;
				case 2:
					matrixNums[2].innerHTML = arcanas['B2'];
					break;
				case 3:
					matrixNums[3].innerHTML = arcanas['F'];
					break;
				case 4:
					matrixNums[4].innerHTML = arcanas['F1'];
					break;
				case 5:
					matrixNums[5].innerHTML = arcanas['F2'];
					break;
				case 6:
					matrixNums[6].innerHTML = arcanas['C'];
					break;
				case 7:
					matrixNums[7].innerHTML = arcanas['C1'];
					break;
				case 8:
					matrixNums[8].innerHTML = arcanas['C2'];
					break;
				case 9:
					matrixNums[9].innerHTML = arcanas['G'];
					break;
				case 10:
					matrixNums[10].innerHTML = arcanas['G1'];
					break;
				case 11:
					matrixNums[11].innerHTML = arcanas['G2'];
					break;
				case 12:
					matrixNums[12].innerHTML = arcanas['D'];
					break;
				case 13:
					matrixNums[13].innerHTML = arcanas['D1'];
					break;
				case 14:
					matrixNums[14].innerHTML = arcanas['D2'];
					break;
				case 15:
					matrixNums[15].innerHTML = arcanas['H'];
					break;
				case 16:
					matrixNums[16].innerHTML = arcanas['H1'];
					break;
				case 17:
					matrixNums[17].innerHTML = arcanas['H2'];
					break;
				case 18:
					matrixNums[18].innerHTML = arcanas['A'];
					break;
				case 19:
					matrixNums[19].innerHTML = arcanas['A1'];
					break;
				case 20:
					matrixNums[20].innerHTML = arcanas['A2'];
					break;
				case 21:
					matrixNums[21].innerHTML = arcanas['E'];
					break;
				case 22:
					matrixNums[22].innerHTML = arcanas['E1'];
					break;
				case 23:
					matrixNums[23].innerHTML = arcanas['E2'];
					break;
				case 24:
					matrixNums[24].innerHTML = arcanas['B3'];
					break;
				case 25:
					matrixNums[25].innerHTML = arcanas['Y'];
					break;
				case 26:
					matrixNums[26].innerHTML = arcanas['M'];
					break;
				case 27:
					matrixNums[27].innerHTML = arcanas['G4'];
					break;
				case 28:
					matrixNums[28].innerHTML = arcanas['L'];
					break;
				case 29:
					matrixNums[29].innerHTML = arcanas['A3'];
					break;
				case 30:
					matrixNums[30].innerHTML = arcanas['X'];
					break;
			}

      i++

    }
  }


}