# Cypress E2E — Sauce Demo

Beginner **UI end-to-end** automation with **Cypress** and **JavaScript**, targeting the public demo site [Sauce Demo](https://www.saucedemo.com/).

## What this project does

Automates a short **smoke flow** on Sauce Demo:

1. Log in as `standard_user`  
2. Add an item to the cart  
3. Open the cart and remove the item  
4. Log out  

The goal is a **small, runnable suite** that shows you can install Cypress, write stable selectors, and run tests locally.

## Tech stack

- **Node.js** (LTS recommended)  
- **Cypress** (E2E)  
- **JavaScript**  

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS) — includes `npm`  
- [Git](https://git-scm.com/)  
- On **Windows PowerShell**, if `npm` fails with an execution policy error, run once:  
  `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  
  or use `npm.cmd` instead of `npm`.

## Demo credentials (public test site)

| Field    | Value          |
|----------|----------------|
| Username | `standard_user` |
| Password | `secret_sauce` |

Source: [https://www.saucedemo.com](https://www.saucedemo.com)

## Project structure (typical)

```text
portfolio-01-cypress-easy/
├── cypress/
│   ├── e2e/
│   │   └── saucedemo_smoke.cy.js   # main spec
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md

Setup
Clone the repository (or download the folder), then in the project root:

npm install
Configuration
cypress.config.js sets baseUrl to Sauce Demo so tests can use short paths such as cy.visit('/').
```
## How to run tests


### Install dependencies

```bash
npm install
```

### Headless (terminal only — closer to CI)

```bash
npx cypress run
```
### Interactive

```bash
npx cypress open
```

### Run tests with browser visible

```bash
npx cypress run --headed
```

### Headless with a visible browser window

```bash
npx cypress run --headed edge
```

---


## Author
Darwin Jimenez — QA Automation portfolio (Exercise 1).

## License
Use and modify freely for learning and portfolio purposes. Sauce Demo is a third-party site; respect their terms of use.

You can paste that into **`README.md`**, commit, and push. If your spec file has a **different name** or you added **custom commands**, say what changed and I can align the README to match.
