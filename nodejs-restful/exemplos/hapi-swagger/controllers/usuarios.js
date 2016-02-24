'use strict'

var _ = require('lodash') // Documentação do lodash: https://lodash.com/docs
var Boom = require('boom') // Erros HTTP amigáveis

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
      var usuario = _.find(dados, function (i) {
        return i.username == req.params.username
      })

      if (usuario) {
        reply(usuario)
      } else {
        reply(Boom.notFound('Usuário não cadastrado!'))
      }
    }
  }
]