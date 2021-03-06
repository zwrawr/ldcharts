# LDCharts
[![Build Status](https://travis-ci.com/zwrawr/ldcharts.svg?branch=master)](https://travis-ci.com/zwrawr/ldcharts)
[![Coverage Status](https://coveralls.io/repos/github/zwrawr/ldcharts/badge.svg?branch=master)](https://coveralls.io/github/zwrawr/ldcharts?branch=master)
[![Documentation Status](https://zwrawr.github.io/ldcharts/badge.svg)](https://zwrawr.github.io/ldcharts/)

![](https://zakwest.co.uk/public/files/Github/ldcharts/chart.png)


> this project is based off of code in [ludumdare/ludumdare](https://github.com/ludumdare/ludumdare). Which is under the MIT lincence and written by zwrawr(me), local-minimum and mikekasprzak

## Goals
 - Simple and small scoped charts
 - Small size

## Development
### Commands

```bash

# test with jest and enzyme
npm run test

# lint with eslint and stylelint
npm run lint

# cleans up atifacts
npm run clean

# build docs and bundle
npm run build

```
### Directory Struture

>- `ldcharts/`
>	- `config/`
>	dot files for configuration of various tools
>	- `coverage/`
>	lcov report generated by jest, consumed by coveralls
>	- `build/`
>	built artificats
>		- `docs/`
>		code documentaion generated by esdoc
>		- `bundle/`
>		transpiled, bundled and minified code
>	- `lib/`
>	source code for all charts
>	- `test/`
>	test files
>		- `__mocks__`
>		browser, fetch and file mocks for jest
>		- `__setup__`
>		setup files jest uses for enzyme and babel

### Documentation

Code documentaion can be found [here](https://zwrawr.github.io/ldcharts/)

