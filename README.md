# techzone-library-tests

[![Coverage Status](https://coveralls.io/repos/github/JuicyDawg/techzone-library-tests/badge.svg?branch=main)](https://coveralls.io/github/JuicyDawg/techzone-library-tests?branch=main)

Unit tests for the 10 most critical functions of a JavaScript utility library, selected for TechZone, an imaginary online electronics shop. The functions were chosen with the MoSCoW method based on what TechZone's checkout needs.

## Tested functions

| Function | File |
|---|---|
| `add`, `subtract`, `multiply` | `src/math/basicMathUtils.js` |
| `roundTo` | `src/math/roundingUtils.js` |
| `sum` | `src/math/statisticsUtils.js` |
| `isNegative` | `src/math/numberUtils.js` |
| `isEmail` | `src/validation/emailValidationUtils.js` |
| `hasMinimumLength` | `src/validation/passwordValidationUtils.js` |
| `generateId` | `src/misc/idUtils.js` |
| `isDefined` | `src/logic/guardUtils.js` |

## Tools

- Node.js 24 and npm
- Jest (test runner and coverage)
- GitHub Actions (runs the tests on every push to `main`)
- Coveralls (coverage reports)

## Running the tests locally

```bash
git clone https://github.com/JuicyDawg/techzone-library-tests.git
cd techzone-library-tests
npm install
npm test
```

`npm test` runs all tests in the `tests` folder and creates a coverage report in the `coverage` folder.

## Continuous integration

The workflow in `.github/workflows/ci.yml` runs on every push to `main`. It installs Node.js and the dependencies, runs the tests with coverage, and sends the coverage report to Coveralls using GitHub's built-in `GITHUB_TOKEN`.

## Project structure

| Folder / file | Description |
|---|---|
| `src/` | The utility library being tested |
| `tests/` | Jest unit tests |
| `.github/workflows/ci.yml` | GitHub Actions workflow |

## Author

Nicolae Dobinda