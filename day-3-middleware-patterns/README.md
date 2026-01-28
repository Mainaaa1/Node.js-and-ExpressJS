# Week 3 — Day 3: Middleware Patterns

**Date:** Wed, 28 Jan 2026  
**Theme:** Node.js & ExpressJS

---

## Overview

Day 3 introduces one of the **most important concepts in Express**: **middleware**.

If routing defines *where* a request goes, middleware defines *what happens to it along the way*.

This is the backbone of:
- Authentication
- Logging
- Validation
- Error handling
- Request transformation

If you understand middleware, you understand Express.

---

## Objectives

By the end of Day 3, you should be able to:

- Explain what middleware is
- Write custom middleware functions
- Use built-in Express middleware
- Control request flow using `next()`
- Apply middleware globally and per-route

---

## What Is Middleware?

A middleware function is any function that has access to:

```js
(req, res, next)
```
## Middleware can:

- Read the request

- Modify the request

- Modify the response

- End the request-response cycle

- Pass control to the next middleware

## Middleware Flow

Request lifecycle:

Request → Middleware → Middleware → Route Handler → Response


Each middleware decides whether to:

- Continue (next())

- End the request

- Throw an error

## Built-in Middleware
### JSON Body Parser

```js
app.use(express.json());
```

Parses incoming JSON requests and populates req.body.

Without this, req.body is undefined.

Static Files (optional)

```js
app.use(express.static("public"));

```

Serves static assets.

Custom Middleware Example

```js
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(loggerMiddleware);
```

This runs for every request.

### Middleware Scope
### Global Middleware

Applies to all routes:
```js
app.use(loggerMiddleware);
```

### Route-Specific Middleware

```js
app.get(
  "/api/users",
  loggerMiddleware,
  (req, res) => {
    res.json([]);
  }
);

Authentication-like Middleware (Preview)
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
```

This pattern will be reused for JWT authentication later.

Order Matters

Middleware executes in the order it is registered.

Incorrect:
```js
app.get("/api/users", handler);
app.use(express.json());
```

Correct:
```js
app.use(express.json());
app.get("/api/users", handler);
```

### Error-Handling Middleware

Error middleware has four parameters:

```js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```
