var test = require('tape')
var fs = require('fs')
var annotation = require('..')

function input (name) {
    return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim()
}

test('test-1', function (t) {
    var actual = annotation.parse(input("test-1"))
    var expected = [
        {
            "name": "morishitter",
            "interest": "css"
        },
        {
            "foo": "foo foo foo"
        }
    ]
    t.same(actual, expected, "top level comment parser")
    t.end()
})

test('test-2', function (t) {
    var actual = annotation.parse(input("test-2"))
    var expected = [
        {
            "foo": "foo"
        },
        {
            "bar": "bar"
        }
    ]
    t.same(actual, expected, "comment in rules")
    t.end()
})
