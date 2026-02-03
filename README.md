# EGO Transit & EGO Commute Marketing Website

This repository contains the source code for the static marketing website for the EGO transit and EGO commute mobile applications.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - `npm test`
  - `npm run build`
- Folder Structure
- Deployment
- Contributing

## Project Overview

This is a static website designed to serve as the primary marketing and information hub for the EGO transit and EGO commute applications. Its main purpose is to attract and inform potential users, providing them with key information, features, and links to download the apps.

## Tech Stack

The project is built with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

_(This is an inferred stack based on project dependencies. Please update if other major technologies are used.)_

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or Yarn) installed on your machine. It is recommended to use the latest LTS version of Node.js.

- Node.js (>= 18.x)
- npm (>= 9.x)

### Installation

1.  **Clone the repository**

    ```sh
    git clone <your-repository-url>
    cd ego-manila-flow
    ```

2.  **Install dependencies**
    Using npm:
    ```sh
    npm install
    ```
    Or using Yarn:
    ```sh
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## Folder Structure

A typical structure for a React application would look like this. You can adapt it as needed.

```
ego-manila-flow/
├── build/                  # Production build output
├── node_modules/           # Dependencies
├── public/                 # Public assets (index.html, favicon.ico, etc.)
│   ├── index.html
│   └── ...
├── src/                    # Application source code
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── styles/             # Global styles, variables
│   ├── App.tsx             # Main application component
│   └── index.tsx           # Entry point
├── .eslintrc.js            # ESLint configuration
├── package.json
├── README.md
└── tsconfig.json           # TypeScript configuration
```

- **`src/assets`**: For static assets like images, logos, and fonts.
- **`src/components`**: Contains reusable components used across different pages (e.g., Button, Navbar, Footer).
- **`src/pages`**: Contains top-level components that correspond to a page/route (e.g., HomePage, AboutPage).
- **`src/styles`**: For global CSS files, or CSS-in-JS theme definitions.

## Deployment

After running `npm run build`, the `build` directory will contain a production-ready static version of the website. You can deploy this folder to any static hosting service like:

- Vercel
- GitHub Pages
- AWS S3

Simply upload the contents of the `build` folder to your provider.

## Contributing

Contributions are welcome! Please open an issue to discuss what you would like to change or add.
