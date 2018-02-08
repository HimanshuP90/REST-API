const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create ninja Schema & model
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is reqquired']
	},
	
	rank: {
		type: String
	},

	available: {
		type: Boolean,
		dafault: false
	}
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;