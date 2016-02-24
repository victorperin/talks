// Documentação do lodash: https://lodash.com/docs
var _ = require('lodash')

// Dados fictícios para estes exemplos
var dados = require('../dados/usuarios')

var ctrl = {}

/**
 * @api {get} /usuarios 1. Listar usuários.
 * @apiName ListarUsuarios
 * @apiGroup Usuarios
 *
 * @apiSuccess {String} username Nome da conta do usuário.
 * @apiSuccess {String} full_name Nome completo do usuário.
 * @apiSuccess {String} twitter Handle do Twitter do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "username": "johndoe",
 *       "full_name": "John Doe",
 *       "twitter": "jdoe"
 *     },
 *     {
 *       "username": "wwallace",
 *       "full_name": "William Wallace",
 *       "twitter": "wallace"
 *     }
 *   ]
 */
ctrl.listar = function (req, res, next) {
  res.send(dados)
}

/**
 * @api {get} /usuarios/:username 2. Detalhes do usuário.
 * @apiName DetalhesUsuario
 * @apiGroup Usuarios
 *
 * @apiParam {String} username Nome da conta do usuário.
 *
 * @apiSuccess {String} username Nome da conta do usuário.
 * @apiSuccess {String} full_name Nome completo do usuário.
 * @apiSuccess {String} twitter Handle do Twitter do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *   HTTP/1.1 200 OK
 *   {
 *     "username": "wwallace",
 *     "full_name": "William Wallace",
 *     "twitter": "wallace"
 *   }
 *
 * @apiErrorExample {json} Erro:
 *   HTTP/1.1 404 Not Found
 */
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

/**
 * @api {post} /usuarios 3. Adicionar usuário.
 * @apiName AdicionarUsuario
 * @apiGroup Usuarios
 *
 * @apiParam {String} username Nome da conta do usuário.
 * @apiParam {String} full_name Nome completo do usuário.
 * @apiParam {String} twitter Handle do Twitter do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *   HTTP/1.1 201 Created
 *
 * @apiErrorExample {json} Erro:
 *   HTTP/1.1 405 Method Not Allowed
 */
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
    // Usuário já existe, não pode criar um novo com o mesmo nome
    res.send(405)
  }
}

/**
 * @api {put} /usuarios/:username 4. Alterar usuário.
 * @apiName AlterarUsuario
 * @apiGroup Usuarios
 *
 * @apiParam {String} username Nome da conta do usuário.
 * @apiParam {String} full_name Nome completo do usuário.
 * @apiParam {String} twitter Handle do Twitter do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *   HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} Erro:
 *   HTTP/1.1 404 Not Found
 */
ctrl.alterar = function (req, res, next) {
  var idx = _.findIndex(dados, function (i) {
    return i.username === req.params.username
  })

  var detalhes = {
    username: req.params.username,
    full_name: req.params.full_name,
    twitter: req.params.twitter
  }

  // Usuário não existe
  if (idx === -1) {
    res.send(404)
  } else {
    // Usuário existe, vamos atualizar seus dados
    dados[idx] = detalhes
    res.send(detalhes)
  }
}

/**
 * @api {delete} /usuarios/:username 5. Remover usuário.
 * @apiName RemoverUsuario
 * @apiGroup Usuarios
 *
 * @apiParam {String} username Nome da conta do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *   HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} Erro:
 *   HTTP/1.1 404 Not Found
 */
ctrl.remover = function (req, res, next) {
  _.remove(dados, function (i) {
    return i.username === req.params.username
  })
  res.send()
}

module.exports = ctrl