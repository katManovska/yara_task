# Yara Coding Challenge project

This is Yara coding Challenge project which is to implement automation for https://react-redux.realworld.io/#/login?_k=5zi79t

## Dependencies used

1. Cypress -> Cypress is a front end testing tool for e2e tests.
2. Cucumber -> Framework for Behavior-Driven Development (BDD).
3. Typescript -> Is a strongly typed programming language that builds on JavaScript.

## Installation

1. Clone the git repo `git clone https://github.com/katManovska/yara_task.git`
2. Run `npm install` in the main folder in order to install the latest versions of the dependencies.
3. Run `npx cypress open` to open Cypress window.
4. On Cypress window, select E2E Testing > Click Continue button > Choose browser > Click Start E2E testing button

## What to do if cypress is not starting??

1. Try to run as additional step in the terminal `@badeball/cypress-cucumber-preprocessor/` and than start the project again with `npx cypress open`

## Project structure

```
cypress/e2e
│── e2e
│   └── features
│── fixtures
│── support
│     └── step_definitions
└── utils
config
```

## ESLINT
ESLint statically analyzes your code to find problems. In order to run it just execute the following line in the main folder: npx eslint

Happy testing!