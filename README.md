# Personal Bookshelf

A React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

## Features

- **Book Search Page**: Search for books using the Open Library API and display real-time results.
- **Personal Bookshelf Page**: Add books to your personal bookshelf and view/manage your collection.
- **Persistent Storage**: Uses localStorage to persist the bookshelf across sessions.

## Tech Stack

- React
- CSS (flexbox and CSS variables)
- Open Library API

## Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shubhamprkash/personal_bookself.git
    cd personal_bookshelf
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Application

### Development Mode

To run the application in development mode:

1. **Start the development server**:
    ```bash
    npm run dev
    ```

2. **Open your browser** and navigate to:
    ```
    http://localhost:5173/
    ```

### Production Build

To create a production build:

1. **Build the application**:
    ```bash
    npm run build
    ```

2. The build files will be located in the `dist` directory. You can serve these files using any static file server.

## Usage

1. **Book Search**:
    - Navigate to the homepage.
    - Type the name of the book in the search bar.
    - View search results in real-time as you type.

2. **Personal Bookshelf**:
    - From the search results, click "Add to Bookshelf" to save books to your personal collection.
    - Navigate to the "My Bookshelf" page to view and manage your saved books.
    - Remove books from your bookshelf using the "Remove" button on each book card.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

All rights reserved © 2024 | Shubham Prakash
