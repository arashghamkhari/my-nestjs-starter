# My NestJS Starter ☕

## Environments Variables

All used environments in the project should be written in a table like the following example.
<br/>
**Note:** Environment variables should only be used **directly** in config files.
<br/>

- All variable names should be written in UPPER-CASE format seperated with `_` (underline/underscore).

| Name          | Default      | Description      |
|---------------|--------------|------------------|
| VARIABLE_NAME | DefaultValue | More details ... |

---

### App

| Name     | Default    | Description                 |
|----------|------------|-----------------------------|
| PORT     | 80         |                             |
| NODE_ENV | production | "development", "production" |

### Sentry

| Name       | Default | Description |
|------------|---------|-------------|
| SENTRY_DSN |         |             |

- Sentry disabled in development

### TypeORM

| Name                     | Default | Description |
|--------------------------|---------|-------------|
| POSTGRESQL_HOST          |         |             |
| POSTGRESQL_PORT          | 5432    |             |
| POSTGRESQL_USER          |         |             |
| POSTGRESQL_PASSWORD      |         |             |
| POSTGRESQL_DATABASE_NAME |         |             |

# Guidelines

## Project Structures

```
app
├── configs
│   └── {config-name}.config.ts
├── core                # Core tools and libraries
├── libraries           # Shard libraries
│   └── {library-name}.library.ts
├── modules             # Modules
│   └── {module-name}
│       ├── configs
│       │   └── {name}.{module-name}.config.ts
│       ├── controllers
│       │   └── {name}.{module-name}.controller.ts
│       ├── dtos
│       │   └── {name}.{module-name}.dto.ts
│       ├── entities
│       │   └── {name}.{module-name}.entity.ts
│       ├── guards
│       │   └── {name}.{module-name}.guard.ts
│       ├── migrations
│       ├── services
│       │   └── {name}.{module-name}.service.ts
│       ├── types
│       │   └── {name}.{module-name}.type.ts
│       └── {module-name}.module.ts
├── shared              # Shared modules
│   └── {module-name}
│       ├── configs
│       │   └── {name}.{module-name}.config.ts
│       ├── controllers
│       │   └── {name}.{module-name}.controller.ts
│       ├── dtos
│       │   └── {name}.{module-name}.dto.ts
│       ├── entities
│       │   └── {name}.{module-name}.entity.ts
│       ├── guards
│       │   └── {name}.{module-name}.guard.ts
│       ├── services
│       │   └── {name}.{module-name}.service.ts
│       ├── types
│       │   └── {name}.{module-name}.type.ts
│       └── {module-name}.module.ts
├── utilities
│   ├── {name}.abstract.ts
│   └── {name}.utility.ts
└── main.ts
```

- If `{name}` and `{module-name}` are the same, use only one of them, e.g., `users.users.service.ts -> users.service.ts`
- Write database enums inside entity files.
- Remove empty files and directories.
- File names should reflect the class name they contain, with the difference being that file names are in `kebab-case`
  while class names are in `PascalCase`, e.g., `add-user.service.ts (AddUserService)`.

## Error Handling

- Never using `console.log` for log and debugging. (use sentry instead)
- All exception message that return to client in `EXC` header must use this
  pattern: `EXC_{MODULE_NAME}_{ERROR_SUMMARY}` (all in UPPERCASE)

## Environments

- All environments used in the project must be documented in `README.md` as a table with the columns: name, default, and
  description.
- Usage of environment variables in the project `is only allowed in config files` and must not be used directly within
  the
  codebase.