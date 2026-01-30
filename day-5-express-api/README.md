# Day 5 — Express API Project Setup

**Week 3 · Node.js & ExpressJS**  
**Theme:** Structuring a Real Express API

---

## Objective

Day 5 focused on **turning scattered Express experiments into a proper API project**.

Up to this point, the app worked — but today was about:
- Structure
- Maintainability
- Scalability
- Preparing the codebase for authentication and real features

In short: moving from *“it runs”* to *“this can grow”*.

---

## Concepts Covered

- Express project structuring
- Separating routes, controllers, and middleware
- Centralized app configuration
- Environment variables
- API base paths
- Clean startup logic
- Preparing for authentication and protected routes

---

## Final Project Structure

```js
day-5-express-api-setup/
│
├── index.js
├── app.js
│
├── routes/
│ ├── auth.routes.js
│ └── user.routes.js
│
├── controllers/
│ ├── auth.controller.js
│ └── user.controller.js
│
├── middlewares/
│ └── logger.js
│
├── config/
│ └── env.js
│
├── package.json
└── README.md
```

This structure mirrors **real-world Express APIs** and keeps responsibilities clear.

---

## What Changed Today

### App vs Server Separation

- `app.js`  
  - Configures Express
  - Registers middleware
  - Mounts routes

- `index.js`  
  - Starts the server
  - Listens on a port
  - Handles startup logging

This separation makes testing and scaling easier.

---

### Centralized Routing

All routes are mounted under a single base path:

```js
app.use('/api', apiRoutes)
```
Which enables clean endpoints like:

/api/auth/login

/api/users

### Environment Configuration

Environment variables are now used for:

- Server port

- Future secrets (JWT, DB URLs)

This avoids hardcoding values and prepares the app for production.

### Achievements

- Clean Express project structure

- Scalable folder layout

- Centralized configuration

- Clear separation of concerns

- Ready for JWT-based authentication

 ## Key Takeaways

- Structure matters more as projects grow

- Express does not enforce architecture — you must

- Small refactors early prevent big rewrites later

- Today’s setup enables tomorrow’s security
