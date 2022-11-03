# CRUD-NodeJS
Simple CRUD application implemented using NodeJS

## Installation
Install of the dependencies from *package.json*
```bash
npm install
```

## Usage
1. Create SQLite DataBase file in the root folder
```bash
touch database.sqlite
```

2. Run the migrations
```bash
node_modules/.bin/sequelize db:migrate
```

3. Start the application by running
```bash
npm start
```