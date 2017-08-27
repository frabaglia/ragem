var express = require('express')
var router = express.Router()

export default router.get('/', function(req, res, next) {

  var options = {
    root: __dirname + '/../../client/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile("build/index.html", options, function(err) {
    if (err) {
      return handleError(res, err)
    }
  })
})

const handleError = (res, err) => {
  res.status(500).send(err)
}
