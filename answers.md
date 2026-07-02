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

The current database design works but has some areas for improvement.

### Issues

- The `players` table stores both `balance` and `balance_id`, which introduces redundancy.
- The `transaction` table contains separate `credit` and `debit` columns. A single `amount` column with a transaction type (credit/debit) would simplify the design.
- Storing the current balance separately can lead to inconsistencies if transactions are not updated correctly.
- The schema does not show constraints such as NOT NULL, UNIQUE, or foreign key cascade rules.
- Additional indexes may be required on frequently queried columns such as `players_id`, `games_id`, and `transaction_date`.

### Improvements

- Remove redundant balance information and maintain balances consistently.
- Use a single transaction amount column with a transaction type.
- Add proper constraints and indexes.
- Normalize the schema where necessary while keeping frequently accessed data optimized.

### Question 2

```sql
SELECT
    g.name,
    COUNT(t.id) AS total_bets
FROM games g
JOIN transaction t
    ON g.id = t.games_id
GROUP BY g.id, g.name
ORDER BY total_bets DESC
LIMIT 3;
```

### Question 3

To improve performance, I would:

- Create indexes on frequently queried columns such as `games_id`.
- Cache the query results using Redis if the data does not change frequently.
- Use materialized views for precomputed statistics if appropriate.
- Optimize the SQL query using PostgreSQL's execution plan.

### Question 4

Some important considerations include:

- Database indexing.
- Query optimization.
- Backup and disaster recovery.
- Data consistency and transactions.
- Scalability through partitioning or replication.
- Security, authentication, and access control.
- Monitoring database performance.
- High availability and fault tolerance.

---

## Task 1