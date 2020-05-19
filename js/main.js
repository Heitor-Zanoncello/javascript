
/*var nome = "Heitor Z. Nepomuceno"; 
var  n1= 17;
var  n2= 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

/*var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};
*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*var count;
for(count=0; count<= 5; count++){
    alert(count);
};
*/

/*var d = new Date();
alert("Ano " + d.getFullYear());
alert("Mês " + d.getMonth()+1);
alert("Dia " + d.getDay());
alert(d.getHours() +" Hora");
alert(d.getMinutes() +" Minutos");
alert(d.getSeconds() +" Segundos");
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/
/*var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return(validar)
}

var idade = prompt("Qual é a sua idade?");
validaIdade(idade)
console.log(validar);
*/
//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse<b>"
    elemento.innerHTML = "<b>Obrigado por passar o mouse<b>"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}