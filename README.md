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

Methods	Urls	Actions:  

 GET	api/v1/tutorials	get all Tutorials.  
 
 GET	api/v1/tutorials/:id	get Tutorial by id.  
 
 POST	api/v1/tutorials	add new Tutorial.  
 
 PUT	api/v1/tutorials/:id	update Tutorial by id. 
 
 DELETE	api/v1/tutorials/:id	remove Tutorial by id.
 
 DELETE	api/v1/tutorials	remove all Tutorials.  
 
 GET	api/v1/tutorials/published	find all published Tutorials.  
 
 GET	api/v1/tutorials?title=[kw]	find all Tutorials which title contains 'kw'.  
 
### Plan

> General overview:

- We will create Rest API that can create, retrieve, update, delete and find Tutorials by title.
- We will start with an Express web server. 
- Next, we add configuration for MySQL database, 
- We create Tutorial model with Sequelize,
- We write the controller.
- Then we define routes for handling all CRUD operations (including custom finder).
- To enable CORS for all requests we will use:
***app.use(cors())***.   
- IF need to allow CORS per single route we can remove ***app.use(CORS())*** and instead we will pass CORS() as middleware in our route call, exanple below:  
-   
<code>
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
<code>

