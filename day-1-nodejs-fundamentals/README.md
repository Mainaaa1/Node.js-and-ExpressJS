# Week 3 — Day 1: Node.js Fundamentals

**Date:** Mon, 26 Jan 2026  
**Theme:** Node.js & ExpressJS

---

## Overview

Day 1 marks the beginning of **Week 3**, where the roadmap shifts from Spring Boot to **Node.js**.  
The focus today is not on frameworks or APIs, but on understanding **Node.js as a runtime** and how backend JavaScript applications actually execute.

Before introducing Express, authentication, or databases, it is critical to understand:
- What Node.js is
- How it executes code
- How projects are structured
- How dependency management works in the Node ecosystem

---

## Objectives

By the end of Day 1, the following should be clear:

- What Node.js is and what problems it solves
- How Node differs from browser-based JavaScript
- The basics of the event-driven, non-blocking execution model
- How to initialize and run a Node.js project
- How `package.json` and npm scripts work

---

## What Is Node.js?

Node.js is a **JavaScript runtime built on the V8 engine** that allows JavaScript to run **outside the browser**.

Key characteristics:

- Single-threaded execution model
- Event-driven architecture
- Non-blocking I/O
- Optimized for network-based and I/O-heavy applications

Unlike Spring Boot, Node.js does not impose structure by default.  
Project organization is entirely the developer’s responsibility.

---

## The Event Loop (Conceptual Understanding)

Node.js uses an **event loop** to handle asynchronous operations.

Important takeaways:
- JavaScript runs on a single main thread
- Long-running operations (I/O, network calls) do not block execution
- Callbacks, promises, and async functions are queued and executed later

This model enables high concurrency without traditional multi-threading.

---

## npm and package.json

Node.js uses **npm** (Node Package Manager) to manage dependencies.

Key concepts introduced today:

- `npm init` – initializes a project
- `package.json` – defines metadata, scripts, and dependencies
- `scripts` – shortcuts for running common commands

Example:
```bash
npm start
```

### Project Setup
### Folder Structure (Day 1)
```
week-3/
└── node-basics/
    ├── index.js
    ├── package.json
    └── README.md
```

### Entry File

The application entry point is index.js.

Example:
```
console.log("Node.js backend roadmap — Week 3, Day 1");
```

### How to Run the Project

- Install Node.js (LTS version recommended)
- Navigate to the project directory
- Run the application:
```
node index.js
```

or using npm scripts:
```
npm start
```

Successful execution confirms that:

- Node.js is correctly installed
- The runtime environment is working

 ### Key Takeaways

- Node.js is a runtime, not a framework
- Async execution is fundamental to how Node scales
- Project structure is manual and flexible
- npm replaces Maven in the Node ecosystem

Understanding these fundamentals prevents confusion later when debugging async behavior and Express middleware chains.
