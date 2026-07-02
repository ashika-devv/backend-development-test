# Backend Development Test

This project was developed as part of a backend development assessment.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Git
- JSON file for data persistence

## Project Structure

```
backend-development-test/
│
├── src/
│   ├── data/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
│
├── task1/
│   ├── iterative.js
│   └── recursive.js
│
├── answers.md
├── package.json
├── README.md

```

## Installation

Clone the repository:

```bash
git clone https://github.com/ashika-devv/backend-development-test.git
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The server runs on:

```
http://localhost:3000
```

## API Endpoints

### Get Player Balance

```
GET /balance/:playerId
```

Example:

```
GET /balance/A
```

---

### Generate Random Number

```
GET /random?min=1&max=10
```

---

### Spin

```
POST /spin/:playerId
```

Example:

```
POST /spin/A
```

## Task 1

The JavaScript solutions are available in the `task1` folder:

- `iterative.js`
- `recursive.js`

## Task 2

Implemented:

- Player balance retrieval
- Random number generation
- Spin endpoint
- JSON-based persistence

## Task 3

The written answers are available in:

```
answers.md
```
The detailed written answers for Task 2 (Questions 5 & 6) and Task 3 are available in `answers.md`.

## Testing the APIs

The APIs can be tested using Postman or any HTTP client.

### Get Player Balance

```http
GET http://localhost:3000/balance/A
```

**Expected:** `200 OK`

### Generate Random Number

```http
GET http://localhost:3000/random?min=1&max=10
```

**Expected:** `200 OK`

### Spin

```http
POST http://localhost:3000/spin/A
```

**Expected:** `200 OK`

## Assumptions

- Player data is persisted in a JSON file for simplicity.
- The `/spin` endpoint increases the player's balance by the generated random value.
- For Task 1, words are reordered by length to maximize the number of words within the given character limit.

## Author

Ashika M G