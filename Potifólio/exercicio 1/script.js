function somar (){
    let num1 = 0;
    let num2 = 0;



   
    num1 = Number(window.prompt("digite um numero: "));
    num2 = Number(window.prompt("digite um numero: "));

let soma = num1 + num2;

alert(soma)

if(soma > 10){
    alert("o resultado e maior que 10");
}
if(soma == 10){
    alert("o resultado e igual a 10")
}
if(soma <10){
    alert("o resultado e menor que 10");
}
}