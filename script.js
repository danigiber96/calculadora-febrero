// // Manipulación del DOM
// Hacemos el llamado a los id del html para su uso en la función
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const SUP = document.getElementById('sup');

CALCULAR.addEventListener('click', () => {
    const PESO = document.getElementById('peso').valueAsNumber;
    //validamos que se cargue un dato:
    if (PESO > 0){
        ERROR.style.display = 'none'
        let superficieCorporal = calculoSuperficieCorporal (PESO);
        SUP.innerHTML = 'SC: ' + Math.round (superficieCorporal *1500) + ' m2<br>';
        SUP.innerHTML += 'SC: ' + Math.round (superficieCorporal *2000) + ' m2';
        SUP.style.display = 'block';
        if (PESO <= 30) {
            let flujoLiquido = calculoFluLiquido(PESO);
            let mantenimiento = flujoLiquido /24;
            FLU.innerHTML = flujoLiquido + ' cc';
            MAN.innerHTML = 'm: ' + Math.round(mantenimiento) + ' cc/hr<br>';
            MAN.innerHTML += 'm+m/2: ' + Math.round(mantenimiento *1.5) + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            SUP.style.display = 'none'
        } else {
            FLU.style.display = 'none';
            MAN.style.display = 'none';
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        SUP.style.display = 'none';
    }
})
// Calculo de Holliday-segar
function calculoFluLiquido(peso){
    if (peso <10){
        return peso*100
    } else if (peso<20) {
        return 1000 + (peso -10)*50
    } else {
        return 1500 + (peso -20)*20
    } 
}
// Calculo de Superficie Corporal
function calculoSuperficieCorporal(peso){
    let resultado = ((peso * 4) + 7) / (peso + 90);
    return (resultado);
}