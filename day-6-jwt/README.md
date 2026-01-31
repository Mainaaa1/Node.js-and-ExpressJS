# Day 6 — Build Login API (JWT Authentication)

**Week 3: Node.js & ExpressJS**  
**Theme:** Authentication & Security

---

## Objective

The goal of Day 6 was to implement **JWT-based authentication** in an Express.js API.  
This involved creating a login endpoint that issues a token and securing API routes using middleware.

By the end of this day, the API supports **stateless authentication**, similar to what is used in production systems.

---

## Topics Covered

- JSON Web Tokens (JWT)
- Token signing and verification
- Authentication middleware
- Protected routes in Express
- Authorization headers (`Bearer token`)
- Real-world login flow

---

## Project Structure

```js
day-6-jwt-auth/
│
├── index.js
├── app.js
├── package.json
│
├── config/
│ └── env.js
│
├── controllers/
│ ├── auth.controller.js
│ └── user.controller.js
│
├── routes/
│ ├── auth.routes.js
│ └── user.routes.js
│
├── middlewares/
│ ├── logger.js
│ └── auth.middleware.js
│
└── utils/
└── jwt.js
```

---

## Dependencies

Installed for this day:

```bash
npm install jsonwebtoken
```

Other core dependencies:

- express

- nodemon (dev)

- body parsing via Express

### Authentication Flow

- Client sends credentials to /api/auth/login

- Server validates input

- JWT token is generated and returned

- Client sends token in Authorization header

- Protected routes validate the token before allowing access

### Security Concepts Applied

- Stateless authentication

- Middleware-based authorization

= Token expiration handling

- Separation of concerns (utils, middleware, controllers)

### Key Takeaways

- JWTs remove the need for server-side sessions

- Middleware is the backbone of Express security

- Authentication logic should never live in controllers alone

- This pattern scales to databases, refresh tokens, and roles