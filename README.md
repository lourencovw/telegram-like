<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Telegram Like

## 1 - Description

This is a simple Chat API built with NestJS and TypeScript. It provides endpoints for sending, retrieving, editing, and deleting messages, as well as replying to messages.

The project follows best practices, including:

1. Modular architecture with NestJS for maintainability.
2. TypeORM with SQLite for testing and Postgres for production.
3. End-to-end (E2E) tests using Jest and Supertest.
4. RESTful API design for easy integration with frontend applications.

Future improvements may include real-time messaging, user authentication, and more (see "5. Next Steps").

## 2 - Project setup (Node 22.x)

```bash
$ npm install
```

## 3 - Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 4 - Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## 5 - Next Steps

1. Enhanced testing adding more scenarios and error handling
2. Documentaion with Swagger
3. Body request validation
4. Use indexes and caching strategies for faster queries
5. Integrate Swagger for API docs
6. Integrate a logging system for better debugging
7. Implement authentication to associate messages with users
8. Integrate WebSockets for real-time chat updates
9. Implement rate limiting to prevent spam and abuse
10. Implement soft deletes or archiving instead of hard deletes
11. Replace auto-incrementing IDs with UUIDs for better security and scalability

## 6 - API

### Send Message

  **Endpoint:** `POST /messages`

  **Request Body:**
  ```json
  {
    "content": "string",
  }
  ```

  **Response:**
  ```json
  {
    "content": "test",
    "id": "number",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
  ```
---
### Reply Message

  **Endpoint:** `POST /messages`

  **Request Body:**
  ```json
  {
    "content": "string",
    "replyTo": "number"
  }
  ```

  **Response:**
  ```json
  {
    "content": "test",
    "replyTo": "number",
    "id": "number",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
  ```
---
### Update Message

  **Endpoint:** `PATCH /messages/:id`

  **Request Body:**
  ```json
  {
    "content": "string",
    "replyTo": "number"
  }
  ```

  **Response:**
  ```json
  {
    "content": "test",
    "replyTo": "number",
    "id": "number",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
  ```
---
### Get Messages

  **Endpoint:** `GET /messages`

  **Response:**
  ```json
  [
    {
      "content": "test",
      "replyTo": "number",
      "id": "number",
      "createdAt": "Date",
      "updatedAt": "Date"
    }
  ]
  ```
  ---
### Get Message

  **Endpoint:** `GET /messages/:id`

  **Response:**
  ```json
    {
      "content": "test",
      "replyTo": "number",
      "id": "number",
      "createdAt": "Date",
      "updatedAt": "Date"
    }
  ```  
---
### Delete Message

  **Endpoint:** `DEL /messages/:id`

  **Response:**
  ```json
  ```

