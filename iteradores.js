const numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const numeroPorDiez=numeros.map((numero)=>numero*10)
console.log(numeroPorDiez);
const numerosInferiores=numeros.filter((numero)=>numero<11)
console.log(numerosInferiores);
let menor_1=numeros[0]
numeros.forEach(numero=> {
    numero<menor_1? menor_1=numero: menor_1=menor_1 
});
console.log(menor_1);
let menor_2=numeroPorDiez[0]
numeros.forEach(numero=> {
    numero<menor_2? menor_2=numero: menor_2=menor_2 
});
console.log(menor_2);
let menor_3=numerosInferiores[0]
numeros.forEach(numero=> {
    numero<menor_3? menor_3=numero: menor_3=menor_3 
});
console.log(menor_3);
