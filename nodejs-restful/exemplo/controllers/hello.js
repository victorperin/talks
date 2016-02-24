var ctrl = {}

/**
 * @api {get} /hello/:nome? 1. Cumprimentar pessoa.
 * @apiName CumprimentarPessoa
 * @apiGroup Cumprimentos
 *
 * @apiParam {String} [nome] Nome da pessoa a ser cumprimentada.
 *
 * @apiSuccess {String} . Mensagem de saudação à pessoa.
 *
 * @apiSuccessExample {json} Sucesso:
 *   HTTP/1.1 200 OK
 *   "Hello, world!"
 */
ctrl.saudacao = function (req, res, next) {
  var nome = req.params.nome || 'mundo'
  res.send('Hello, ' + nome + '!')
}

module.exports = ctrl