'use strict'

const _ = require('lodash') // Documentação do lodash: https://lodash.com/docs
const Joi = require('joi') // Validação do schema
const Boom = require('boom') // Erros HTTP amigáveis

// Dados fictícios para estes exemplos
var dados = require('../dados/usuarios')

module.exports = [
  // Lista todos os usuários cadastrados
  {
    method: 'GET',
    path: '/usuarios',
    handler: function (req, reply) {
      return reply(dados)
    },
    config: {
      description: 'Listar usuários.',
      notes: 'Retorna lista de usuários cadastrados.',
      tags: [ 'api' ]
    }
  },
  // Exibe o perfil do usuário solicitado
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
    },
    config:{
      description: 'Detalhes do usuário.',
      notes: 'Retorna o perfil do usuário solicitado.',
      tags: [ 'api' ],
      validate: {
        params: {
          username: Joi.string()
            .required()
            .description('Nome de usuário.')
        }
      }
    }
  },
  // Cadastra um novo usuário
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
    },
    config: {
      description: 'Cadastrar novo usuário.',
      notes: 'Cadastra um novo usuário.',
      tags: [ 'api' ],
      validate: {
        payload: {
          username: Joi.string()
            .required()
            .description('Nome de usuário.'),
          full_name: Joi.string()
            .required()
            .description('Nome completo.'),
          twitter: Joi.string()
            .required()
            .description('Handle do Twitter.')
        }
      }
    }
  },
  // Altera os dados de um usuário
  {
    method: 'PUT',
    path: '/usuarios/{username}',
    handler: function (req, reply) {
      let idx = _.findIndex(dados, function (i) {
        return i.username == req.params.username
      })

      let detalhes = {
        username: req.params.username,
        full_name: req.payload.full_name,
        twitter: req.payload.twitter
      }

      // Usuário não existe, retorna erro 404 não encontrado
      if (idx === -1) {
        reply(Boom.notFound('Usuário não cadastrado!'))
      } else {
        // Usuário existe, vamos atualizar seus dados
        dados[idx] = detalhes
        reply(detalhes)
      }
    },
    config: {
      description: 'Alterar usuário.',
      notes: 'Altera os dados de um usuário cadastrado.',
      tags: [ 'api' ],
      validate: {
        params: {
          username: Joi.string()
            .required()
            .description('Nome de usuário.'),
          full_name: Joi.string()
            .required()
            .description('Nome completo.'),
          twitter: Joi.string()
            .required()
            .description('Handle do Twitter.')
        }
      }
    }
  },
  // Remove um usuário cadastrado
  {
    method: 'DELETE',
    path: '/usuarios/{username}',
    handler: function (req, reply) {
      let removed = _.remove(dados, function (i) {
        return i.username == req.params.username
      })

      // Usuário não existe, retorna erro 404 não encontrado
      if (removed.length === 0) {
        reply(Boom.notFound('Usuário não cadastrado!'))
      } else {
        // Removeu usuário com sucesso
        reply()
      }
    },
    config: {
      description: 'Remover usuário.',
      notes: 'Remove um usuário cadastrado.',
      tags: [ 'api' ],
      validate: {
        params: {
          username: Joi.string()
            .required()
            .description('Nome de usuário.')
        }
      }
    }
  }
]