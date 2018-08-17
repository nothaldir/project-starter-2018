# Project Starter - 2018

A front-end boilerplate that's easy-to-use and ready-to-go.

<!-- TOC -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
    - [NPM Scripts](#npm-scripts)
- [Documentation](#documentation)
    - [Scripts](#scripts)
    - [Styles](#styles)
- [Git naming convention](#git-naming-convention)

<!-- /TOC -->

## Requirements
- node-js >= 6.9

## Installation
To install, follow these instructions:
- `npm install` to install the dependencies.
- `npm install -g commitizen` to globally install Commitizen.

## Usage

### NPM Scripts
The boilerplate is powered by npm scripts. No need of Gulp or anything else. We are directly using the CLI tools of Rollup & PostCSS. You can run each script individually. For each type of asset, there are at least two scripts. One is used to build, the other to watch for changes.

All `build` scripts and some others all listed below, but you can also find them all in the "scripts" section of the `./package.json` file.

- `clean-build`: remove the old build, and create the needed directories
- `remove-build`: remove build

- `start`: clean the build, build, watch and start server
- `build`: build the assets and the views

- `build:views`: copy the PHP views in the build directory
- `build:scripts`: rollup script with babel
- `build:styles`: postcss script with also node-sass
- `build:icons`: svg sprite generator
- `build:images`: images compression
- `build:assets`: copy fonts & medias (e.g. videos) in the build directory

- `browser-sync`: start server

#### TL;DR: To start the server, use:

```
npm run start
```

## Documentation

### Scripts

#### Configuration
Rollup is used with Babel to:
- use `ES2015+` features
- use `import`
- use external npm modules, both `ES6` and `ES2015`
- minify the code
- create a source map

#### ES Linter
We are using the <a href="https://github.com/airbnb/javascript">Airbnb JavaScript Style Guide</a>. You can find the configuration file in `./.eslintrc`. The linter is not passing through our code. Instead, we recommend that you use a package within your text editor:
- Sublime Text: <a href="https://packagecontrol.io/packages/SublimeLinter">SublimeLinter</a>, <a href="https://packagecontrol.io/packages/SublimeLinter-contrib-eslint">SublimeLinter-contrib-eslint</a>, and <a href="https://www.npmjs.com/package/eslint">eslint<a/> (globally installed, `npm install -g eslint`).
- Atom: <a href="https://atom.io/packages/linter">linter</a> and <a href="https://atom.io/packages/linter-eslint">linter-eslint</a>.

### Styles
#### Configuration
PostCSS is used with node-sass to:
- use `SCSS`
- use `autoprefixer`
- minify the code
- create a source map

Every import is located in `./app/styles/index`. They are separated into five categories:
- `abstracts`: configuration and helpers.
- `base`: basic files (reboot, grid etc.).
- `components`: speaks for itself (e.g. Button).
- `layout`: layout-related sections (e.g. Header).
- `pages`: page-specific styles (e.g. homepage).

#### SCSS Linter
We are using the <a href="https://github.com/airbnb/css">Airbnb CSS / Sass Styleguide</a>. You can find the configuration file in `./.scss-lint.yml`. The linter is not passing through our code. Instead, we recommend that you use a package within your text editor:

- Sublime Text: <a href="https://packagecontrol.io/packages/SublimeLinter">SublimeLinter</a>, <a href="https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint">SublimeLinter-contrib-scss-lint</a>, <a href="https://www.ruby-lang.org/fr/">ruby<a/> and <a href="https://rubygems.org/gems/scss_lint">scss_lint</a>.
- Atom: <a href="https://atom.io/packages/linter">linter</a> and <a href="https://atom.io/packages/linter-scss-lint">linter-scss-lint</a>

## Git naming convention
We are using <a href="https://commitizen.github.io/cz-cli/">Commitizen</a> to automate our git messages. Simply add files to your commit and then run the command `git cz`. A prompt will appear and automate your process.

By default, we are using the conventionnal-changelog convention (e.g. `'feat(boilerplate): init boilerplate'`). It can be paired with [standard-version](https://github.com/conventional-changelog/standard-version) to automate your changelogs and publishing process.
