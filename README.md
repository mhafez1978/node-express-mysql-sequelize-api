# Node.js Express MySQL Sequelize ORM API Backend Server

##### intro: Node.js Rest APIs example with Express, Sequelize ORM & MySQL database.

### Subjective:

- Node Express to build server that can handle routing
- MySQL is Database to store data
- Sequelize will manipulate MySQL data
- Models will model data , sequelize will use model to create data table definition in db
- Controller will handle requests
- Router will handlle routing initial request, controller will handle response (view)
- Considering adding jsx as views engine to allow html straight use in js
- We will need to use CORS to : CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Objective :

- Build a backend server using node/express that supports routing, controller, models, views
- We will serve Restful CRUD API using Express, Sequelize with MySQL database.

### Assessment :

** CRUD API's **

Methods Urls Actions:

// Create a new Tutorial. 

'/api/v1/tutorials/create'. 

// Retrieve all Tutorials. 

'/api/v1/tutorials/all'. 

// Retrieve all published Tutorials. 

'/api/v1/tutorials/all/puplished'. 

// Retrieve a single Tutorial with id. 

'/api/v1/tutorials/find/:id'. 

// Update a Tutorial with id. 

'/api/v1/tutorials/update/:id'. 

// Delete a Tutorial with id. 

'/api/v1/tutorials/delete/:id'. 


### Plan

> General overview:

- We will create Rest API that can create, retrieve, update, delete and find Tutorials by title.
- We will start with an Express web server.
- Next, we add configuration for MySQL database,
- We create Tutorial model with Sequelize,
- We write the controller.
- Then we define routes for handling all CRUD operations (including custom finder).
- To enable CORS for all requests we will use:
  **_app.use(cors())_**.
- IF need to allow CORS per single route we can remove **_app.use(CORS())_** and instead we will pass CORS() as middleware in our route call, exanple below:

<code>
 
app.get('/products/:id', cors(), function (req, res, next) { 
 
  res.json({msg: 'This is CORS-enabled for a Single Route'}) 
 
}) 
 
</code>

After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

- create a new Tutorial: create(object)
- find a Tutorial by id: findByPk(id)
- get all Tutorials: findAll()
- update a Tutorial by id: update(data, where: { id: id })
- remove a Tutorial: destroy(where: { id: id })
- remove all Tutorials: destroy(where: {})
- find all Tutorials by title: findAll({ where: { title: ... } })

These functions will be used in our Controller.
