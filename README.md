## Installation

```bash
npm install
```

Create env from [.env.example](https://github.com/chamara-madhu/security_scan_result/blob/main/api/.env.example) and fill according to it needs

Don't forget to use postgres as the DB

## Folder structure

```bash
.
├── ...
├── src
│   ├── api             # Third party API
│   ├── config          # Config files for env
│   ├── controllers     # All controller files
│   ├── routes          # All routes
│   ├── services        # All services
│   ├── validators      # All validators
│   ├── config          # Entities and migrations
└── ...
```

## Running the app in local

```bash
# development
npm run start

# watch mode
npm run server
```
