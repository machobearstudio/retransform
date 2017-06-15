var map = require('poly-map')
var filter = require('poly-filter')

function isDefined(x) {
  return x !== undefined
}

function apply(args) {
  return function(f) {
    return f.apply(undefined, args)
  }
}

function translator(value) {
  if (typeof value === 'function') {
    return value
  }

  if (typeof value !== 'object' || value === null) {
    return function () {
      return value
    }
  }

  var mappers = map(translator, value)

  return function () {
    var args = [].slice.call(arguments, 0)

    return filter(isDefined, map(apply(args), mappers))
  }
}

module.exports = translator
