// Documentação do lodash: https://lodash.com/docs
var _ = require('lodash')

// Dados fictícios para estes exemplos
var dados = require('../dados/usuarios')

var ctrl = {}

ctrl.listar = function (req, res, next) {
  res.send(dados)
}

ctrl.perfil = function (req, res, next) {
  var u = _.find(dados, function (i) {
    return i.username === req.params.username
  })

  // Usuário encontrado
  if (u) {
    res.send(u)
  } else {
    // Usuário não encontrado
    res.send(404)
  }
}

ctrl.adicionar = function (req, res, next) {
  var idx = _.findIndex(dados, function (i) {
    return i.username === req.params.username
  })

  var detalhes = {
    username: req.params.username,
    full_name: req.params.full_name,
    twitter: req.params.twitter
  }

  // Usuário não existe, vamos inserí-lo
  if (idx === -1) {
    dados.push(detalhes)
    res.send(201, detalhes)
  } else {
    // Usuário já existe, vamos atualizar seus dados
    dados[idx] = detalhes
    res.send(detalhes)
  }
}

ctrl.remover = function (req, res, next) {
  _.remove(dados, function (i) {
    return i.username === req.params.username
  })
  res.send()
}

module.exports = ctrl