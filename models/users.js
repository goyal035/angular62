var schema = new mongoose.Schema({ 
	fname: 'string', 
	lname: 'string',
	username: {
	    type: 'string',
	    //unique: true
	},
	email: {
		type: 'string',
	    index: true,
	    //unique: true
	},
	password: 'string',
	role: {
		type: 'string',
		enum: ['admin', 'user'],
		default : 'user'
	},
	status: 'string',
	gender: {
		type: 'string',
		enum: ['male', 'female'],
		default : 'male'
	},
	dob: 'string',
	location: {
	   type: { type: 'string' },
	   coordinates: []
	},
	locale: {
		type: 'string',
		enum: ['en', 'es'],
		default : 'en'
	}
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

schema.index({ location: "2dsphere" });

var Users = mongoose.model('Users', schema);
module.exports = Users;