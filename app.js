require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const db = require('./models');
const tutorials = require('./controllers/tutorial.controller.js');
var router = require('express').Router();

const corsOptions = {
  origin: `http://locaalhost:${PORT}`,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

app.use(router);

// Routes

app.get('/', (req, res) => {
  res.send(
    'Welcome to your backend Nodejs/Express MySQL Sequelize-ORM server ...'
  );
});

// Router Routes for API calls

// Create a new Tutorial
router.post('/api/v1/tutorials/create', tutorials.create);
// // Retrieve all Tutorials
router.get('/api/v1/tutorials/all', tutorials.findAll);
// // Retrieve all published Tutorials
router.get('/api/v1/tutorials/all/puplished', tutorials.findAllPublished);
// // Retrieve a single Tutorial with id
router.get('/api/v1/tutorials/find/:id', tutorials.findOne);
// // Update a Tutorial with id
router.put('/api/v1/tutorials/update/:id', tutorials.update);
// // Delete a Tutorial with id
router.delete('/api/v1/tutorials/delete/:id', tutorials.delete);
// // Delete all Tutorials
router.delete('/api/v1/tutorials/delete/all', tutorials.deleteAll);

db.sequelize
  // development only
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

// src: https://www.bezkoder.com/node-js-express-sequelize-mysql/

// After initializing Sequelize, we don’t need to
// write CRUD functions, Sequelize supports all of them:
// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })
// These functions will be used in our Controller.

// We can improve the example by adding Comments for each Tutorial. It is the One-to-Many Relationship and I write a tutorial for this at:
// Sequelize Associations: One-to-Many example – Node.js, MySQL

// Or you can add Tags for each Tutorial and add Tutorials to Tag (Many-to-Many Relationship):
// Sequelize Many-to-Many Association example with Node.js & MySQL

app.listen(PORT, () => {
  console.log(
    `Your node/express API server is running on http://localhost:${PORT} ... `
  );
});
