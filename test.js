var remap = require('./index')

var input = {
  name: 'doge',
  says: 'wow',
  such: {
    much: 100500
  }
}

var output = {
  such: 'very',
  money: 100500,

  much: { wow: 'doge' },
  very: { doge: 'wow' },
  very1: { doge: 'wow' },

  foo: [ 'bar' ],
  wow: [ 'doge', 'doge' ],
  wow1: [ 'doge', 'doge' ]
}

var translationTable = {
  // No nesting
  such: 'very',
  money: function (x) { return x.such.much },

  // Nested object
  much: { wow: 'doge' },
  very: function (x) { return { doge: x.says } },
  very1: { doge: function (x) { return x.says } },

  // Nested array
  foo: [ 'bar' ],
  wow: function (x) { return [x.name, x.name] },
  wow1: [
    function (x) { return x.name },
    function (x) { return x.name }
  ]
}

test('Partial application', () => {
  var filter = remap(translationTable)

  expect(filter(input)).toEqual(output)
})

test('Complete application', () => {
  expect(remap(translationTable, input)).toEqual(output)
})
