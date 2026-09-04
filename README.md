# Wellu Backend

Spring Boot REST API for the Wellu Student Life site.

## Run
1. Create a PostgreSQL database `wellu_db` (or update `application.properties`).
2. Set env vars (or edit application.properties directly):
   - DB_USERNAME, DB_PASSWORD
   - JWT_SECRET (long random string)
3. `./mvnw spring-boot:run`
4. API runs on http://localhost:8080

## Endpoints
- POST /api/auth/register   { username, email, password }
- POST /api/auth/login      { username, password } -> { token, username }
- GET  /api/dashboard              (public)
- GET  /api/dashboard/{id}         (public)
- POST /api/dashboard               (requires Authorization: Bearer <token>)
- PUT  /api/dashboard/{id}          (requires token)
- DELETE /api/dashboard/{id}        (requires token)
- POST /api/contact         { name, email, message }  (public)

## Frontend integration (Vite/React)
Store the JWT (e.g. in memory / a React context, not localStorage if you want to avoid XSS risk)
after login, then send it as:
  fetch('http://localhost:8080/api/dashboard', {
    headers: { Authorization: `Bearer ${token}` }
  })
