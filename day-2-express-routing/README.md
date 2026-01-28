# Week 3 — Day 2: Express Routing

**Date:** Tue, 27 Jan 2026  
**Theme:** Node.js & ExpressJS

---

## Overview

Day 2 introduces **Express.js**, the minimal web framework that sits on top of Node.js and makes building HTTP APIs practical.

While Node.js provides the runtime, **Express provides structure**:
- Request handling
- Routing
- Middleware support
- Response formatting

Today’s focus is **routing only** — no authentication, databases, or middleware chains yet.

---

## Objectives

By the end of Day 2, I understood:

- What Express.js is and why it exists
- How to create an Express server
- How routing works in Express
- How to handle different HTTP methods
- How route parameters and request bodies are accessed

---

## What Is Express?

Express is a **lightweight HTTP framework** for Node.js.

Key characteristics:
- Minimal and unopinionated
- Middleware-driven
- Explicit routing definitions
- No enforced project structure

Express plays a role similar to **Spring MVC**, but with far fewer abstractions.

---

## Installing Express

Inside the project directory:

```bash
npm install express
```
## Routing Basics

Express routes are defined using:

```js
app.METHOD(PATH, HANDLER)
```

## Common HTTP methods:

- GET – retrieve data

- POST – create data

- PUT – update data

- DELETE – remove data

## Example Routes

```js
app.get("/api/users", (req, res) => {
  res.json([]);
});

app.post("/api/users", (req, res) => {
  res.json({ message: "User created" });
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id });
});
```

This mirrors CRUD routing patterns used earlier in Spring Boot.

### Route Parameters

Dynamic segments are defined using ::
```js
/api/users/:id
```

Accessed via:

```js
req.params.id
```

### Request Body Handling (Preview)

Express does not parse JSON by default.

To handle JSON bodies:

```js
app.use(express.json());
```

This will become critical once POST and PUT requests are introduced fully.

## Key Takeaways

- Express is responsible for HTTP handling, not Node itself

- Routing is explicit and method-based

- There is no magic — routes do exactly what you define

- Structure is optional but discipline is required

## Common Beginner Mistakes

- Forgetting app.listen()

- Missing express.json() for POST requests

- Using the wrong HTTP method

- Confusing route parameters with query parameters