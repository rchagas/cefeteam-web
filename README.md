# Codefet-web

Web interface to manage and training programming teams.

## Requirements

Node.js version 16.17 or superior\
\
<a href="https://nodejs.org/en/" target="blank"><img src="https://nodejs.org/static/images/logo.svg" width="60" alt="Node.js Logo" /></a>

## Installation

Clone the project the repository with git clone

```
git@github.com:Codefet/codefet-web.git
```

### Install pnpm package manager if do not installed

Using npm

```
$ npm install -g pnpm
```

or using node corepack

```bash
# Using node.js v16.13 or newer

$ corepack enable
```

This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the latest pnpm version and run:

```bash
$ corepack prepare pnpm@<version> --activate
```

or with Node.js v16.17

```bash
$ corepack prepare pnpm@latest --activate
```

docs: <a href="https://pnpm.io/installation" target="blank">https://pnpm.io/installation</a>

### Install dependencies

Use pnpm package manager to install dependencies of the project with the command

```bash
$ pnpm install

or

$ pnpm i
```

## Running the app

Use pnpm package manager to run with

```
$ pnpm vite
```
