# Day 4 — Authentication in Express 

**Week 3 · Node.js & ExpressJS**  
**Theme:** Authentication Fundamentals

---

## Objective

The goal of Day 4 was to understand and implement **authentication in an Express application**.  
This involved creating a basic login flow, handling credentials, and preparing the groundwork for securing API routes.

By the end of this day, the API can accept login requests and respond appropriately — a critical step toward building secure backend systems.

---

## Concepts Covered

- What authentication is
- Difference between authentication and authorization
- Login endpoints in REST APIs
- Handling credentials in Express
- Structuring auth routes and controllers
- Using middleware in authentication flows
- Testing authenticated endpoints with `curl`

---

## Project Structure

```js
day-4-authentication/
│
├── index.js
├── routes/
│ └── auth.routes.js
│
├── controllers/
│ └── auth.controller.js
│
├── middlewares/
│ └── logger.js
│
├── package.json
└── README.md
```

This structure separates concerns clearly:
- **Routes** handle HTTP mapping
- **Controllers** handle business logic
- **Middlewares** handle cross-cutting concerns like logging

---

## Authentication Flow Implemented

1. Client sends a **POST** request to `/api/auth/login`
2. Request body contains login credentials (email & password)
3. Server validates the credentials
4. Server responds with:
   - Success message (or token placeholder)
   - Or an error if credentials are invalid

At this stage, authentication is intentionally simple to focus on **flow and structure**, not security edge cases yet.

---

## Example Login Request

### Using `curl` (Windows PowerShell)

```powershell
curl -Method POST http://localhost:3000/api/auth/login `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{ "email": "admin@example.com", "password": "password123" }'
```
Expected Response
```json
{
  "message": "Login successful"
}
```

### Achievements

- Successfully implemented an authentication endpoint

- Understood request → controller → response flow

- Gained confidence using curl for API testing

- Structured Express code in a scalable way

- Resolved real-world path and routing issues

### Key Takeaways

- Authentication is not magic — it’s controlled request handling

- HTTP method choice matters (POST vs GET)

- Folder structure prevents future chaos

- Errors are usually configuration, not logic

- Testing APIs without a frontend is a superpower
