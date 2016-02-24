'use strict'

// Documentação do lodash: https://lodash.com/docs
var _ = require('lodash')

// Dados fictícios para estes exemplos
var dados = require('../dados/usuarios')

module.exports = [
  {
    method: 'GET',
    path: '/usuarios',
    handler: function (req, reply) {
      return reply(dados)
    }
  }
]