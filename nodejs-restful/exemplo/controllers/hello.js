var ctrl = {}

/**
 * @api {get} /hello/:nome? Cumprimentar o usuário.
 * @apiName Cumprimentar usuário.
 * @apiGroup Cumprimentos.
 *
 * @apiParam {String} [nome] Nome do usuário a ser cumprimentado.
 *
 * @apiSuccess {String} . Mensagem de saudação ao usuário.
 */
ctrl.saudacao = function (req, res, next) {
  var nome = req.params.nome || 'mundo'
  res.send('Hello, ' + nome + '!')
}

module.exports = ctrl