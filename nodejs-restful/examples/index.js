var restify = require('restify')
var server = restify.createServer()

// Plugin para tratar dados de POST
server.use(restify.bodyParser())

// Carrega os controllers de sua API
var hello = require('./controllers/hello')
var usuarios = require('./controllers/usuarios')

// Controller de hello world
server.get('/hello/:nome?', hello.saudacao)

// Controller RESTful para gerenciar seus usuários
server.get('/usuarios', usuarios.listar)
server.get('/usuarios/:username', usuarios.perfil)
server.post('/usuarios/:username', usuarios.adicionar)
server.del('/usuarios/:username', usuarios.remover)

// Escuta sua API na porta especificada
server.listen(process.env.port || 8080, function () {
  console.log('%s escutando em %s', server.name, server.url)
})