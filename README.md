# TS-Product-Catalog

A frameworkless Product Catalog application written in TypeScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Code Quality](#code-quality)
- [License](#license)

## Project Overview

This project is a simple product catalog application built from the ground up using TypeScript without using any major frontend frameworks like React, Vue, or Angular. It uses Vite for a fast and modern development experience.

**Author:** József Varga <joshanoid@gmail.com>

**Repository:** `git@github.com:joshanoid/TS-Product-Catalog.git`

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

Make sure you have Node.js and yarn installed on your system.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone git@github.com:joshanoid/TS-Product-Catalog.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd TS-Product-Catalog
    ```
3.  Install the required dependencies:
    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run the following commands:

- `yarn dev`
  Starts the development server with Vite. Open http://localhost:5173 (or the port shown in your terminal) to view it in the browser. The page will reload if you make edits.

- `yarn build`
  Builds the app for production to the `dist` folder. It correctly bundles your code and optimizes it for the best performance.

- `yarn preview`
  Serves the production build from the `dist` folder locally. This is a good way to check if the production build works as expected before deploying.

- `yarn lint`
  Runs ESLint to analyze the code for potential errors and style issues, and attempts to fix them automatically.

- `yarn format`
  Formats all relevant files in the `src` directory using Prettier to ensure consistent code style.

## Tech Stack

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A next-generation frontend tooling that provides a faster and leaner development experience.
- **Sass**: A preprocessor scripting language that is interpreted or compiled into CSS.

## Code Quality

- **ESLint**: For identifying and reporting on patterns in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter to ensure consistent styling.
- **Husky & lint-staged**: To run linters on staged files before committing, ensuring no bad code gets into the repository.

## License

This project is licensed under the MIT License.
