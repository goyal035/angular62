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
	    required: [true, locale.__('Your email cannot be blank.')],
	    //unique: true
	},
	password: {
		type: 'string',
	    required: [true, locale.__('Your password cannot be blank.')],
	    trim: true,
	    //unique: true
	},
	image: {
		type: 'string',
	    //required: [true, locale.__('Your image cannot be blank.')],
	    trim: true,
	    //unique: true
	},
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
	   type: {type: 'string', default: "Point"},//type: { type: 'string' },
	   coordinates: []
	},
	locale: {
		type: 'string',
		enum: ['en', 'es'],
		default : 'en'
	}
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

schema.index({ location: "2dsphere" });

schema.pre('save', function (next) {
  	var user = this;
  	bcrypt.hash(user.password, 10, function (err, hash){
		if (err) { return next(err); }		
		user.password = hash;
		next();
  	})
});

var Users = mongoose.model('Users', schema);
module.exports = Users;