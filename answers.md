# Backend Development Test - Written Answers

## Task 2

### Question 5

Since this solution stores player balances in a JSON file, it is not suitable for concurrent updates across multiple application instances. If multiple requests modify the same player's balance simultaneously, race conditions may occur, resulting in incorrect balances.

In a production environment, I would store the balances in a relational database such as PostgreSQL. To ensure consistency during concurrent updates, I would perform balance modifications within database transactions and use row-level locking (e.g., SELECT ... FOR UPDATE) or optimistic locking with a version column. This guarantees that only one transaction updates a player's balance at a time and prevents lost updates.


### Question 6

### Current limitations
- Uses a JSON file instead of a database.
- Not suitable for concurrent updates across multiple server instances.
- No authentication or authorization.
- No centralized logging.
- No automated unit or integration tests.
- Limited input validation.
- No API documentation.

### Improvements
- Replace JSON storage with PostgreSQL.
- Use database transactions for balance updates.
- Implement JWT authentication and authorization.
- Add unit and integration tests.
- Generate API documentation using Swagger/OpenAPI.
- Containerize the application using Docker.

Overall, these improvements would make the application more scalable, secure, maintainable, and suitable for production use.
---

## Task 3

### Question 1

<Answer>

### Question 2

<SQL Query>

### Question 3

<Answer>

### Question 4

<Answer>

---

## Task 1