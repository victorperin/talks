'use strict'

const Joi = require('joi') // Validação do schema

module.exports = [
  {
    method: 'GET',
    path: '/hello/{nome?}',
    handler: function (req, reply) {
      let nome = req.params.nome || 'world'
      return reply({ msg: 'Hello, ' + nome + '!' })
    },
    config: {
      description: 'Cumprimentar pessoa.',
      notes: 'Cumprimenta uma pessoa pelo nome, caso seja informado.',
      tags: [ 'api' ],
      validate: {
        params: {
          nome:Joi.string()
            .description('Nome da pessoa a ser cumprimentada.')
        }
      }
    }
  }
]