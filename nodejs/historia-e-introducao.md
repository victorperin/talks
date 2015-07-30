# Node.js: História e introdução

Campinas, 29 de julho de 2015.

## Node.js

O Node.js é uma plataforma de software construída por cima do motor de JavaScript do Google Chrome para criar com facilidade aplicações de rede rápidas e escaláveis. A plataforma usa um modelo orientado a eventos e I/O não bloqueante, o que a torna leve e eficiente, praticamente perfeita para aplicações que manipulam grande quantidade de dados em tempo real sendo executadas em dispositivos distribuídos.

O V8 é um motor JavaScript de alto desempenho escrito em C++. Ele consegue ser muito rápido pois todo o código JavaScript é compilado para código nativo, e não para byte code, além do motor utilizar técnicas avançadas de cache. Isto significa que após a primeira execução de um código, não há mais necessidade de interpretação intermediária do código.

## Por que usar Node.js?

 * **Tradição:** A linguagem JavaScript é uma linguagem de programação extremamente madura que está presente na web desde 1995.

 * **Popularidade:** Por ser uma linguagem madura o seu conhecimento já é bem difundido. A tag JavaScript é a mais popular no StackOverflow, com mais de 900 mil perguntas na data de hoje, e cerca de 7 mil respondidas toda semana. O Node.js tem mais de 86 mil perguntas, com cerca de 1.000 respondidas toda semana, além de mais de 37 mil stars e mais de 8 mil forks no GitHub.

 * **Portabilidade:** Você programa todo seu backend e frontend em JavaScript, o que dá vantagem tanto a desenvolvedores quanto a empresas. Além de reduzir custos de projetos por não demandar conhecimento de mais uma linguagem de programação, você também pode aproveitar partes de seu projeto entre o backend e o frontend.

 * **Comunidade:** O NPM, gerenciador de pacotes do Node.js, possui mais de 150 mil pacotes disponíveis para download.

## E quando não usar Node.js?

O Node.js não é uma bala de prata que irá dominar a web, mas é uma plataforma que resolve um tipo específico de problema. Antes de usar Node.js, conheça o domínio de sua aplicação para determinar se esta é a plataforma ideal. Entender isto é essencial para que você não acabe usando Node.js para o caso de uso errado e acabe se frustrando com a plataforma.

Você definitivamente não vai usar Node.js para operações intensivas de CPU, pois isto irá anular todas as vantagens da plataforma. O cenário onde Node.js se destaca é na construção rápida de aplicações de rede escaláveis, capazes de tratar um número gigantesco de conexões simultâneas com alta taxa de transferência, o que gera um alto nível de escalabilidade.

Isto não significa que você não irá obter sucesso em outros tipos de aplicações com Node.js. Mas lembre-se de que esta pode não ser a plataforma mais indicada para você obter o máximo de desempenho possível.

## Vamos dar uma olhada nesse motor

É bem interessante saber como o Node.js funciona por baixo do capô. Comparado a outras técnicas de serviço de conteúdo web onde cada conexão (ou requisição) gera uma nova thread, reservando mais memória RAM do sistema, o Node.js opera em uma única thread, utilizando chamadas de I/O não bloqueantes, permitindo que a plataforma suporte dezenas de milhares de conexões concorrentes.

Pelo fato de trabalhar em uma única thread, a quantidade de memória RAM que é reservada e utilizada é bem menor do que em técnicas tradicionais de serviços web.

## Cuidados a serem tomados

Obviamente Node.js não é uma plataforma mágica que fará o seu código rodar maravilhosamente bem. Em primeiro lugar você precisa se habituar a programar com orientação a eventos para tirar proveito do I/O assíncrono da plataforma. E esta é uma das principais dificuldades de quem começa a aprender esta plataforma.

## Bibliografia

 * [1] https://nodejs.org/
 * [2] http://www.developerknowhow.com/995/why-the-v8-javascript-engine-is-so-good
 * [3] http://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs
 * [4] http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js
 * [5] http://blog.caustik.com/2012/08/19/node-js-w1m-concurrent-connections/
 * [6] http://pt.slideshare.net/vikasing/introduction-to-nodejs-11730771
 * [7] http://stackoverflow.com/questions/5062614/how-to-decide-when-to-use-node-js
 * [8] http://amirrajan.net/nodejs-by-example/
 * [9] https://blog.sparkpost.com/official-sponsor-baltimore-nodeschool/
 * [10] http://www.raymondcamden.com/2013/11/01/Check-out-nodeschoolio
 * [11] http://radar.oreilly.com/2011/07/what-is-node.html
 * [12] http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js
 * [13] http://blog.modulus.io/five-talks-learn-more-nodejs