
alert("Digite a seguir dois números que representam os lados de um retângulo");


const base_num = parseFloat(prompt("Digite o primeiro número: "));
const altura_num = parseFloat(prompt("Digite o segundo número: "));
const arearetangulo = base_num * altura_num;

if (isNaN(base_num) || isNaN(altura_num)){
    alert("Valor incorreto inserido, favor verificar e tentar novamente!")
} else {

function areaTotal(b, a){

    document.getElementById("area_retangulo").innerHTML = ("A base e altura são: " + b + " e " + a + " e sua área é: " + arearetangulo);

};
}