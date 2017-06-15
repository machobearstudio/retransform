var translator = require('./translator')

function retransform() {
  var args = [].slice.call(arguments, 0)
  var lens = translator(args[0])

  if (args.length === 1) {
    return lens
  }

  return lens.apply(undefined, args.slice(1))
}

module.exports = retransform
