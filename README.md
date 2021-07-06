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
* [`quote hello`](#quote-hello)
* [`quote help [COMMAND]`](#quote-help-command)
* [`quote random [FILE]`](#quote-random-file)

## `quote hello`

describe the command here

```
USAGE
  $ quote hello
```

_See code: [src/commands/hello.ts](https://github.com/ErikAugust/quotation-cli/blob/v0.0.0/src/commands/hello.ts)_

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

## `quote random [FILE]`

describe the command here

```
USAGE
  $ quote random [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/random.ts](https://github.com/ErikAugust/quotation-cli/blob/v0.0.0/src/commands/random.ts)_
<!-- commandsstop -->
