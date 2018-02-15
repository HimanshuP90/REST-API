What is a REST API ?
API: Application Programming Interface.
REST: REpresentational State Transfer.


REST: 
	1) Architectual style of the web.
	2) A standard/ set of guidelines by which we can structure and create API's.

REST Properties:

@ They make use of HTTP Methods
	GET: Used to retreive data from the server
	POST: Used to send data to the server
	PUT: Used to update data
	DELETE: Used to delete data

@ They make use of HTTP Status code
	200 OK 
	404 resoure not found
	500 server error

Todo: Create an API using Node.js, Express & MongoDB 

----------------------------------------------------------

Models:
 => Models represent collections in MongoDB.
 => User Model to represent a collection of Users.
 => Ninja Model to represent a collection of Ninjas.

 Schemas:
 => Schemas define the structure of our objects

 {
 	name: String,
 	rank: String.
 	availabilty: Boolean
 }

Mongoose:
=> Adds a layer of methods to easily save, edit,
	retreive and delete data from mongodb.
=> Allows us to create our Models and Schemas easily.  

Use MongoDB in Ubantu:

$: mongo
$: show dbs 
$: use ninjago
$: db.getCollectionNames()
$: db.ninjas.find()
$: db.ninjas.find().pretty()

Frontend:
Reactjs