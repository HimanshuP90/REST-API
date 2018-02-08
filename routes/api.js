const express = require('express');
const router = express.Router();

//get list of ninjas from the db
router.get('/ninjas', function(req, res){
	res.send({type: 'GET'});
});

//add a new ninjas to the db
router.post('/ninjas', function(req, res){
	console.log(req.body);
	res.send({
		type: 'POST',
		name: req.body.name,
		Profile: req.body.Profile,
		Education: req.body.Education
	});
});

//update a ninja in the db
router.put('/ninjas/:ininjasd', function(req, res){
	res.send({type: 'PUT'});
});

//Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
	res.send({type: 'DELETE'});
});

module.exports = router;