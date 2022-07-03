# node-express-mysql-sequelize-api
Node.js Rest APIs example with Express, Sequelize ORM & MySQL database.

#### Objective :
- Build a backend server using node/express that supports routing, controller, models, views
- We will serve Restful CRUD API using Express, Sequelize with MySQL database.

#### Assessment :

> General overview:

- We will create Rest API that can create, retrieve, update, delete and find Tutorials by title.
- We will start with an Express web server. 
- Next, we add configuration for MySQL database, 
- We create Tutorial model with Sequelize,
- We write the controller.
- Then we define routes for handling all CRUD operations (including custom finder).

#### CRUD API's 
Methods	Urls	Actions:
 GET	api/tutorials	get all Tutorials.  
 
 GET	api/tutorials/:id	get Tutorial by id.  
 
 POST	api/tutorials	add new Tutorial.  
 
 PUT	api/tutorials/:id	update Tutorial by id. 
 
 DELETE	api/tutorials/:id	remove Tutorial by id.
 
 DELETE	api/tutorials	remove all Tutorials.  
 
 GET	api/tutorials/published	find all published Tutorials.  
 
 GET	api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'.  
 

