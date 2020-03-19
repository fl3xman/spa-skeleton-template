# SPA skeleton template

SPA React/MobX application as start-base project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

### Installation

```
npm i
```

## Usage

Create `.env` file from `.env-example` and add required variables. 

Start a development server by running:

```
npm start
```

This project uses [tslint](https://palantir.github.io/tslint/) and [stylelint](https://github.com/stylelint/stylelint) in order maintain uniform codebase.

You can run tslint and stylelint by following commands:
```
npm run lint
npm run stylelint
``` 

## Build

* Develop build ```npm run build:develop```
* Production build ```npm run build:production```

## Testing

Tests can be run by executing following command:

```
npm run test
```

## Technologies used

* [React](https://github.com/facebook/react)
* [MobX](https://github.com/mobxjs/mobx)
* [InversifyJS](https://github.com/inversify/InversifyJS)
