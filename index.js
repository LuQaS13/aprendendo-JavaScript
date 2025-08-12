
alert("Digite a seguir dois números que representam os lados de um retângulo");


base_num = parseFloat(prompt("Digite o primeiro número: "));
altura_num = parseFloat(prompt("Digite o segundo número: "));
const arearetangulo = base_num * altura_num;

function areaTotal(){

    document.getElementById("area_retangulo").innerHTML = arearetangulo;

};