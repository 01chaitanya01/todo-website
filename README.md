# Todo App

A simple Todo application built with React, allowing users to add, view, and manage their tasks.

## Project Structure

```plaintext
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── AddTodo.jsx
    │   ├── Header.jsx
    │   ├── MainPage.jsx
    │   ├── TodoItem.jsx
    │   └── ToDoList.jsx
    ├── context
    │   └── todoContext.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── styles
        ├── addtodo.css
        ├── header.css
        ├── mainpage.css
        ├── todoitem.css
        └── todolist.css
```
## Prerequisites

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [yarn](https://classic.yarnpkg.com/en/docs/install/) (optional)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/01chaitanya01/todo-website.git
cd todo-website
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Start the Development Server

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

The development server should now be running at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test` or `yarn test`

Launches the test runner in interactive watch mode.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder Structure

- `public/`: Contains the public assets and HTML file.
- `src/`: Contains the source code of the application.
  - `components/`: Contains the React components used in the application.
  - `context/`: Contains the context file for managing state.
  - `styles/`: Contains the CSS files for styling the components.