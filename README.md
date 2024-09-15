# String Calculator TDD

This project implements a simple `add` method for a **string calculator using Test-Driven Development (TDD)**. The method processes strings of numbers, separated by various delimiters, and returns their sum. It is designed to handle multiple scenarios such as empty strings, custom delimiters, and error handling for negative numbers.

## Features

- Handles empty strings.
- Supports comma and newline (`\n`) as default delimiters.
- Allows custom delimiters specified in the input string.
- Throws an error for negative numbers, showing all negative numbers found in the input.
- Supports an unlimited number of numbers as input.

## Installation and Setup

To set up and run the project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/prhks/string-calculator-tdd.git
cd string-calculator-tdd
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
```bash
npm test
```

## Project Structure

The project follows a simple structure:

```bash
├── src
│   └── stringCalculator.js   # Implementation of the String Calculator
├── tests
│   └── stringCalculator.test.js  # Unit tests for the String Calculator
├── package.json               # Project configuration and dependencies
└── README.md                  # Project documentation
```

## Approach

This project was developed using Test-Driven Development (TDD). The steps followed include:

1. Writing a test for the simplest case (empty string).
2. Implementing the `add` method to satisfy the test.
3. Refactoring the code as necessary.
4. Repeating the process for more complex test cases, including:
   - Handling multiple numbers.
   - Supporting custom delimiters.
   - Adding error handling for negative numbers.
