'use strict'

var trim = require('trim')

var is = Object.prototype.toString
var isStr = function (val) {
  return is.call(val) === '[object String]'
}
var trims = function (fn, val) {
  var result = {}

  if (isStr(val)) return fn(val)

  if (is.call(val) === '[object Object]') {
    for (var prop in val) {
      /* istanbul ignore next */
      if (!Object.prototype.hasOwnProperty.call(val, prop)) continue
      var _v = val[prop]
      result[prop] = isStr(_v) ? fn(_v) : _v
    }

    return result
  }

  if (Array.isArray(val)) {
    result = []

    val.forEach(function (_v) {
      result.push(isStr(_v) ? fn(_v) : _v)
    })

    return result
  }

  throw new TypeError('[trims] allowed string, object or array')
}

exports = module.exports = function (val) {
  return trims(trim, val)
}

exports.left = function (val) {
  return trims(trim.left, val)
}

exports.right = function (val) {
  return trims(trim.right, val)
}
