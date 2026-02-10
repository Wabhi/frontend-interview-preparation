# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


REACT+JEST+RTL:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1.Project Setup & Jest Fundamentals - Create React Project from Scratch

# Create new React app with Vite (modern, faster alternative to CRA)
npm create vite@latest testing-mastery -- --template react
cd testing-mastery

# Install dependencies
npm install

# Install testing libraries
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

# Install additional helpful packages
npm install -D @testing-library/react @testing-library/jest-dom eslint-plugin-testing-library eslint-plugin-jest-dom

2.Configure jest - jest.config.js
3.SetupTests.js - src/setupTests.js
4.Config babel - babel.config.js
5.install babel - npm install -D @babel/preset-env @babel/preset-react babel-jest
6.update the package.json - 
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
7.started with small math.js test
src/utils/math.js
src/utils/math.test.js