'use strict'

const Hapi = require('hapi')

// Cria um servidor
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000
})

// Adiciona as rotas
const hello = require('./controllers/hello')
//const usuarios = require('./controllers/usuarios')

const routes = [].concat(
  hello
  //usuarios
)

server.route(routes)

// Inicia o servidor
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Servidor escutando em: ' + server.info.uri)
})