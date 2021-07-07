quotation-cli
=============

CLI for managing a list of quotations

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/quotation-cli.svg)](https://npmjs.org/package/quotation-cli)
[![Downloads/week](https://img.shields.io/npm/dw/quotation-cli.svg)](https://npmjs.org/package/quotation-cli)
[![License](https://img.shields.io/npm/l/quotation-cli.svg)](https://github.com/ErikAugust/quotation-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g quotation-cli
$ quote COMMAND
running command...
$ quote (-v|--version|version)
quotation-cli/0.0.0 darwin-x64 node-v12.18.4
$ quote --help [COMMAND]
USAGE
  $ quote COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`quote add`](#quote-add)
* [`quote attributed [ATTRIBUTED]`](#quote-attributed-attributed)
* [`quote help [COMMAND]`](#quote-help-command)
* [`quote random`](#quote-random)

## `quote add`

adds a quotation

```
USAGE
  $ quote add

ALIASES
  $ quote new
```

_See code: [src/commands/add.ts](https://github.com/ErikAugust/quotation-cli/blob/v0.0.0/src/commands/add.ts)_

## `quote attributed [ATTRIBUTED]`

displays all quotes for attribution by name

```
USAGE
  $ quote attributed [ATTRIBUTED]

ARGUMENTS
  ATTRIBUTED  name of the attributed

ALIASES
  $ quote a
```

_See code: [src/commands/attributed.ts](https://github.com/ErikAugust/quotation-cli/blob/v0.0.0/src/commands/attributed.ts)_

## `quote help [COMMAND]`

display help for quote

```
USAGE
  $ quote help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `quote random`

displays a random quotation

```
USAGE
  $ quote random

OPTIONS
  -a, --attributed=attributed  finds quotations by attribution

ALIASES
  $ quote r
```

_See code: [src/commands/random.ts](https://github.com/ErikAugust/quotation-cli/blob/v0.0.0/src/commands/random.ts)_
<!-- commandsstop -->
