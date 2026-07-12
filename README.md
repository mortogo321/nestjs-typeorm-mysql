# NestJS + TypeORM + MySQL Demo

A small NestJS demo showing a config-driven TypeORM/MySQL setup structured as a Nest monorepo, with a Users module as the working example.

## What's inside

- Config-driven bootstrap via `@nestjs/config`, loading app and MySQL settings from environment variables
- A shared `common` library (Nest monorepo library under `libs/common`) housing the TypeORM `DatabaseModule` and entity definitions
- `TypeOrmModule.forRootAsync` wiring the MySQL connection from `ConfigService`, with schema `synchronize` enabled only when `NODE_ENV=development`
- Users module with a TypeORM repository: list users and create a user
- DTO/Request separation using `class-transformer`, with the `password` field excluded from serialized responses via `@Exclude()`
- Additional entity models (`Employee`, `ContactInfo`, `Meeting`, `Task`) sketching one-to-one, one-to-many, and many-to-many TypeORM relations; these aren't wired into a module or controller yet

## Tech stack

NestJS, TypeORM, MySQL (via `mysql2`), `@nestjs/config`, `class-transformer`, Jest (unit + e2e), ESLint, Prettier

## Quickstart

Requires a running MySQL instance (not bundled with this repo).

```bash
bun install
cp .env.example .env
# edit .env with your MySQL connection details
bun run start:dev
```

Other scripts: `bun run build`, `bun run test`, `bun run test:e2e`, `bun run lint`.

## Key endpoints

- `GET /users` — list users
- `POST /users` — create a user (`username`, `password`, `confirmPassword`)
