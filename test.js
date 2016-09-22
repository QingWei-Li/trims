import test from 'ava'
import trims from './'

test('string', t => {
  t.is(trims('  a'), 'a')
  t.is(trims(' b '), 'b')
  t.is(trims('c  '), 'c')
})

test('object', t => {
  t.deepEqual(trims({key: '   a', num: 10}), {key: 'a', num: 10})
  t.deepEqual(trims({key: '   a    ', num: 10}), {key: 'a', num: 10})
  t.deepEqual(trims({key: 'a    ', num: 10}), {key: 'a', num: 10})
  t.deepEqual(trims({key: 'a    ', key2: ' bbb '}), {key: 'a', key2: 'bbb'})
})

test('array', t => {
  t.deepEqual(trims(['aa ', ' cc ', ' bb ']), ['aa', 'cc', 'bb'])
  t.deepEqual(trims(['   aa ', 'cc ', ' bb ']), ['aa', 'cc', 'bb'])
  t.deepEqual(trims(['a ', 1, ' b']), ['a', 1, 'b'])
})

test('trims#left', t => {
  t.is(trims.left('  a  '), 'a  ')
  t.deepEqual(
    trims.left({name: ' cinwell ', age: 23}),
    {name: 'cinwell ', age: 23})
  t.deepEqual(trims.left([' a ', 'a  ']), ['a ', 'a  '])
})

test('trims#right', t => {
  t.is(trims.right('  a  '), '  a')
  t.deepEqual(
    trims.right({name: ' cinwell ', age: 23}),
    {name: ' cinwell', age: 23})
  t.deepEqual(trims.right([' a ', 'a  ']), [' a', 'a'])
})

test('typeError', t => {
  t.throws(() => trims(1))
  t.notThrows(() => trims(''))
})
