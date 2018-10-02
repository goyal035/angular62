var schema = new mongoose.Schema({ 
	u_id: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Users'
	}
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

var UserTokens = mongoose.model('UserTokens', schema);
module.exports = UserTokens;