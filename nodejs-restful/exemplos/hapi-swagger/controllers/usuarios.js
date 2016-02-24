'use strict'

const _ = require('lodash') // Documentação do lodash: https://lodash.com/docs
const Boom = require('boom') // Erros HTTP amigáveis

// Dados fictícios para estes exemplos
var dados = require('../dados/usuarios')

module.exports = [
  {
    method: 'GET',
    path: '/usuarios',
    handler: function (req, reply) {
      return reply(dados)
    }
  },
  {
    method: 'GET',
    path: '/usuarios/{username}',
    handler: function (req, reply) {
      let usuario = _.find(dados, function (i) {
        return i.username == req.params.username
      })

      // Usuário existe, retorna seu perfil
      if (usuario) {
        reply(usuario)
      } else {
        // Usuário não existe, retorna erro 404 não encontrado
        reply(Boom.notFound('Usuário não cadastrado!'))
      }
    }
  },
  {
    method: 'POST',
    path: '/usuarios',
    handler: function (req, reply) {
      let idx = _.findIndex(dados, function (i) {
        return i.username == req.payload.username
      })

      let detalhes = {
        username: req.payload.username,
        full_name: req.payload.full_name,
        twitter: req.payload.twitter
      }

      console.log(detalhes)

      // Usuário não existe, vamos inseri-lo
      if (idx === -1) {
        dados.push(detalhes)
        reply(detalhes).created(`/usuarios/${detalhes.username}`)
      } else {
        // Usuário já existe, retorna erro 405 não permitido
        reply(Boom.methodNotAllowed('Nome de usuário já cadastrado!'))
      }
    }
  }
]