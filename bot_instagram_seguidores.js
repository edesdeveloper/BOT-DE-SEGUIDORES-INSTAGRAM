let cont=0;

document.querySelectorAll('.sqdOP.L3NKy.y3zKF').forEach((valor, indice) => {
  	setTimeout(() => {
		if(!valor.classList.contains('._8A5w5')){
			valor.click();
			cont++;
			document.querySelectorAll('.-Cab_').forEach(valor => {
                if(valor.innerText == 'Deixar de seguir') {
                    valor.click();
				}	
					console.log(` ${cont} pessoas seguidas`);
					valor.click();
			})
		}
  	}, indice*11000);
});
