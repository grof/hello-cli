hello
=====

A sample CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hello.svg)](https://npmjs.org/package/hello)
[![Downloads/week](https://img.shields.io/npm/dw/hello.svg)](https://npmjs.org/package/hello)
[![License](https://img.shields.io/npm/l/hello.svg)](https://github.com/grof/hello-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @fgroleau/grofcli
$ hello COMMAND
running command...
$ hello (-v|--version|version)
@fgroleau/grofcli/1.2.0-beta.4 linux-x64 node-v16.14.0
$ hello --help [COMMAND]
USAGE
  $ hello COMMAND
...
```
<!-- usagestop -->

This is a new CLI...
A new line.
New line 2.

# Commands
<!-- commands -->
* [`hello hello [FILE]`](#hello-hello-file)
* [`hello help [COMMAND]`](#hello-help-command)

## `hello hello [FILE]`

describe the command here

```
USAGE
  $ hello hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hello hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/grof/hello-cli/blob/v1.2.0-beta.4/src/commands/hello.ts)_

## `hello help [COMMAND]`

display help for hello

```
USAGE
  $ hello help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.18/src/commands/help.ts)_
<!-- commandsstop -->
