# Programação Funcional em JavaScript
* Falar sobre a confusão de paradigmas em JavaScript
* Quais paradigmas JavaScript consegue atender
* O que é programação funcional
* Exemplos de programação funcional em JavaScript
* Vantagens e desvantagens

## A linguagem mais mal entendida do mundo
A linguagem JavaScript é uma das mais populares do mundo, e isto se deve ao seu papel de ser a linguagem de script da web.

Apesar de sua grande popularidade, poucos sabem que JavaScript é uma ótima linguagem de programação dinâmica orientada a objetos de múltiplos propósitos.

Por que a linguagem é tão mal entedida?

O nome é a primeira confusão. O que Java tem a ver com JavaScript? Absolutamente nada! A Netscape assinou um contrato com a Sun para distribuir o Java em seu navegador, afim de oferecer uma plataforma para execução de aplicativos no browser em forma de applets. Após a assinatura deste contrato, a linguagem passou a ser chamada de JavaScript. Segundo Brendan Eich em entrevista à InfoWorld, a ideia era que ela fosse uma linguagem de script complementar a Java. Parece que a ideia não evoluiu. Isto gerou muita confusão desde o início, e continua gerando até os dias de hoje.

## Influências
Apesar de JavaScript ter algumas influências da sintaxe de C, ela tem mais pontos em comum com linguagens funcionais como Lisp e Scheme.

As semelhanças que mais chamam atenção são:
* Funções anônimas.
```js
(function (nome) {
    console.log('Olá ' + nome + '!')
})('mundo');
```
* Funções são de primeira classe: isto é, tem todos os privilégios de outros tipos de dados da linguagem, podendo ser armazenados em variáveis e serem passados como argumentos de funções.
```js
var teste = function() {
    return 'bazinga';
}
console.log(teste()); // bazinga

console.log((function() {
    return 'teste';
})()); // teste
```
* Closures/escopo léxico: que são basicamente um registro que armazena uma função juntamente com um ambiente.
```js
function novoContador () {
    var i = 0; // declara e define uma variável no ambiente do escopo léxico
    return function () { // retorna uma função anônima
        i += 1; // incrementa a variável do escopo léxico em que a função novoContador foi declarada
        return i;
    }
}

var a = novoContador(), b = novoContador();

console.log(a()); // 1
console.log(a()); // 2
console.log(a()); // 3

console.log(b()); // 1
console.log(b()); // 2
```
