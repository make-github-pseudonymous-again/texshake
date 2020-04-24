texshake
==

> Shake your LaTeX syntax tree!

<img src="http://scribblesinstitute.com/wp-content/uploads/2015/05/NatTree04.jpg" width="864">

```shell
$ echo '\\newif\\ifah\\ahtrue\\ifah Shake it! :) \\else Do not shake it... :( \\fi' | texshake
 Shake it! :)
```

[![License](https://img.shields.io/github/license/aureooms/texshake.svg)](https://raw.githubusercontent.com/aureooms/texshake/master/LICENSE)
[![Version](https://img.shields.io/npm/v/texshake.svg)](https://www.npmjs.org/package/texshake)
[![Build](https://img.shields.io/travis/aureooms/texshake/master.svg)](https://travis-ci.org/aureooms/texshake/branches)
[![Dependencies](https://img.shields.io/david/aureooms/texshake.svg)](https://david-dm.org/aureooms/texshake)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/texshake.svg)](https://david-dm.org/aureooms/texshake?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/texshake.svg)](https://github.com/aureooms/texshake/issues)
[![Downloads](https://img.shields.io/npm/dm/texshake.svg)](https://www.npmjs.org/package/texshake)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/texshake.svg)](https://codeclimate.com/github/aureooms/texshake/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/github/aureooms/texshake.svg)](https://codeclimate.com/github/aureooms/texshake/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/github/aureooms/texshake.svg)](https://codecov.io/gh/aureooms/texshake)
[![Code coverage (clim)](https://img.shields.io/codeclimate/coverage-letter/aureooms/texshake.svg)](https://codeclimate.com/github/aureooms/texshake/trends/test_coverage_new_code)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/texshake.svg)](https://codeclimate.com/github/aureooms/texshake/trends/technical_debt)
<!--[![Documentation](https://aureooms.github.io/texshake/badge.svg)](https://aureooms.github.io/texshake/source.html)-->


## Install it

```shell
$ npm i -g texshake
```


## Shake away

```shell
$ texshake < 'my-awesome-latex-file-before.tex' > 'my-awesome-latex-file-after.tex'
```


##  Shake what?

### `\if...` `\else` `\fi` conditionals

Prunes dead branches for `\iftrue`'s, `\iffalse`'s, and user-defined `\if...` variables.

> `\abctrue\ifabc ah\else oh\fi` ~ ` ah`

### `%` comments

Only keeps the first `%` character of each comment.

> `hello, world % Lorem ipsum dolor sit amet` ~ `hello, world %`

### `\def` and `\newcommand` user-defined macros

Expands each user-defined macro and removes their definition.

> `\newcommand\swap[2]{#2#1}\swap{a}{b}` ~ `ba`

### `\newenvironment` user-defined environments

> `\newenvironment{items}{\begin{itemize}}{\end{itemize}}\begin{items}\end{items}` ~ `\begin{itemize}\end{itemize}`

### Altogether now!

> `\myfalse\ifmy\def\xyz{A cat.}\else\def\xyz{A dog.}\fi\xyz% $#@!` ~ `A dog.%`


## What for?

I use it for scientific publications. I often need different versions of
the same paper for different occasions: conference proceedings, journal
version, arXiv preprint. I just write the content once, with the right
conditionals, macro definitions and `\input` calls. I flatten everything using
[`flatex`](https://github.com/aureooms/dotfiles/blob/master/.bin/flatex),
shake the document with `texshake`, and finally get rid of all extraneous
blanks with
[`textrim`](https://github.com/aureooms/dotfiles/blob/master/.bin/textrim).


## How does it work?

It uses
[@aureooms/js-tape](https://github.com/aureooms/js-tape)
and
[@aureooms/js-grammar](https://github.com/aureooms/js-grammar)
under the hood.

The tokens are produced according to
[this file](https://github.com/aureooms/texshake/blob/master/src/tokens.js)
and
the shaking logic lies in
[this file](https://github.com/aureooms/texshake/blob/master/src/transform/shaker.js).

## Related

  - [alvinwan/TexSoup](https://github.com/alvinwan/TexSoup)
  - [michael-brade/LaTeX.js](https://github.com/michael-brade/LaTeX.js)
  - [WikiToLearn/texla](https://github.com/WikiToLearn/texla)
  - [Parsing TeX is Turing-complete](https://tex.stackexchange.com/questions/4201/is-there-a-bnf-grammar-of-the-tex-language)
