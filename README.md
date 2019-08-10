# deno_template

This is the [DenoLibs](https://github.com/denolibs) template for [Deno](https://deno.land/) compatible modules.

# Usage

Press the [Use this template](https://github.com/denolibs/deno_template/generate) button, and edit some files.

Which files?
* [/lib/mod.ts](https://github.com/denolibs/deno_template/blob/master/lib/mod.ts) - This is the main script of your module
* [/readme.md](https://github.com/denolibs/deno_template/blob/master/lib/READNE.md) - Your module's readme (this file)

We also recommend you write some tests in [/test/mod.ts](https://github.com/denolibs/deno_template/blob/master/test/mod.ts). There is a config included for [Travis CI](https://travis-ci.org) in this repository.


# Running

The [run.bat](https://github.com/denolibs/deno_template/blob/master/run.bat) file in the template is included to make running your module even easier!<br>
Note: `[args]` are optional arguments you may wish to pass to Deno or your module.

* Windows (Command Prompt)
    ```run [args]```
* Window (PowerShell)
    ```.\run [args]```
* Linux (BASH)
    ```./run.bat [args]```
    
There are likely other shells where this script will work, [let us know](https://github.com/denolibs/deno_template/issues) and we'll add them!

# Linting (ESLint) - Requires NodeJS & NPM

Included in the template is an ESLint config ([.eslintrc.js](https://github.com/denolibs/deno_template/blob/master/.eslintrc.js)) that includes ESLint & Prettier support.
This requires some dependancies, which are listed in [package.json](https://github.com/denolibs/deno_template/blob/master/.eslintrc.js), and are installed with NPM.

To install the dependancies from a command line
```
$ npm install
```
To run the ESLint linter from a command line
```
$ node node_modules/eslint/bin/eslint.js lib/**
```
    
## [Visual Studio Code](https://code.visualstudio.com/)

For automatic linting, we recommend VSCode the following packages/settings

### Packages

* [Deno](https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Settings (settings.json)

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "eslint.enable": true,
  "eslint.validate": [
    { "language": "typescript", "autoFix": true },
  ],
  "eslint.autoFixOnSave": true,
}
```

[//]: # (NOTE: We'd love you to leave the following in to show support for this project, but we won't make you!)
[//]: # (NOTE: We'd love you to leave the following in to show support for this project, but we won't make you!)
[//]: # (NOTE: We'd love you to leave the following in to show support for this project, but we won't make you!)
<sup>This project is based on the open source [DenoLibs](https://github.com/denolibs) / **[deno_template](https://github.com/denolibs/deno_template)** template.</sup>