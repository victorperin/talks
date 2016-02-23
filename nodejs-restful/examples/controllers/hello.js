var ctrl = {}

ctrl.saudacao = function (req, res, next) {
  var nome = req.params.nome || 'mundo'
  res.send('Hello, ' + nome + '!')
}

module.exports = ctrl