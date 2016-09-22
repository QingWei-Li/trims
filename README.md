# trims
[![Build Status](https://travis-ci.org/QingWei-Li/trims.svg?branch=master)](https://travis-ci.org/QingWei-Li/trims)
[![Coverage Status](https://coveralls.io/repos/github/QingWei-Li/trims/badge.svg?branch=master)](https://coveralls.io/github/QingWei-Li/trims?branch=master)
[![npm](https://img.shields.io/npm/v/trims.svg)](https://www.npmjs.com/package/trims)

> trim string whitespace from object, array or string

## Installation
```shell
npm i trims -S
```

## Usage
```javascript
import trims from 'trims'

trims('  abc  ') // => 'abc'
trims({ name: 'Tom  ',  age: 18 }) => // { name: 'Tom', age: 18 }
trims(['a ', ' b', ' c ']) // => ['a', 'b', 'c']
trims.left([' a', 'b ', ' c ']) // => ['a', 'b ', 'c ']
trims.right({ key: ' value ' }) // => { key: ' value' }
```

## API
- trims(any)
- trims#left(any)
- trims#right(any)

## License
MIT
