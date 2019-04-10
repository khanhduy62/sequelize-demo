# Market Place



## Getting Started

### Prerequisites


```bash

```

### Installing

The first, install packages:

```bash
npm install
```

### Migrate
Follow link: http://docs.sequelizejs.com/manual/migrations.html
```
cd src && npx sequelize db:migrate --config config/database.json
```

### Seed
In src folder enter the following code in your terminal 
```
npx sequelize db:seed:all --config config/database.json
```

### Running server

```bash
npm run dev-start
```


### Running unittest


```bash
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Expressjs](https://expressjs.com/) - The web framework used
* [Sequelize](http://docs.sequelizejs.com/manual/getting-started.html) - ORM for Node.js
* [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js

