'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/hello/{nome?}',
    handler: function (req, reply) {
      let nome = req.params.nome || 'world'
      return reply({ msg: 'Hello, ' + nome + '!' })
    }
  }
]