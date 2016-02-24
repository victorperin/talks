'use strict'

const Hapi = require('hapi')
const Inert = require('inert') // Servir arquivos estáticos com Hapi.
const Vision = require('vision') // Renderização de templates para Hapi.
const Swagger = require('hapi-swagger') // Geração de documentação do Swagger a partir das rotas do Hapi.
const Package = require('./package')

// Cria um servidor
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000
})

// Opções da documentação
const options = {
  info: {
    title: 'Documentação da API de exemplo.',
    version: Package.version
  }
}

// Adiciona as rotas
const hello = require('./controllers/hello')
const usuarios = require('./controllers/usuarios')

const routes = [].concat(
  hello,
  usuarios
)

server.route(routes)

// Registra os módulos
server.register([
  Inert,
  Vision,
  {
    register: Swagger,
    options: options
  }], (err) => {
    // Inicia o servidor
    server.start((err) => {
      if (err) {
        throw err
      } else {
        console.log('Servidor escutando em: ' + server.info.uri)
      }
    })
  })