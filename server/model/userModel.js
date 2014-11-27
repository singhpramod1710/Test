'use strict';

/**
 * Module dependencies.
 */
// grab the mongoose module
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	//crypto = require('crypto');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return (this.updated || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
	return ( password && password.length > 6);
};

/**
 * User Schema
 */
var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your first name']
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your last name']
	},
	phoneNumber: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please provide your valid phone number']
	}
	email: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your email'],
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	password: {
		type: String,
		default: '',
		validate: [validateLocalStrategyPassword, 'Password should be longer']
	},
	gender: {
		type: [{
			type: String,
			enum: ['Male', 'Female']
		}]
		default: ['Male'],
		validate: [validateLocalStrategyProperty, 'Please fill in your email']
	}
	birthdate: {
		type: Date,
		validate: [validateLocalStrategyProperty, 'Please fill in your email']
	}
	profilePhoto: { 
		data: {
			type: Buffer
		},
		contentType: {
			type: String 
		}
	}
	hotelsVisited: {
		[
			hotelId: {
				type: Schema.Types.Objectid,
				ref: 'Restaurant'
			},
			userRestoRating: [{
				type: Number,
				enum: [0,1,2,3,4,5],
				default: [0]
			}],
			userRestoReview: {
				type: String
				default: ''
			},
			dateVisited: {
				type: Date,
				default: ''
			},
			menuOrdered: [{
				itemName: {
					type: String
					default: ''
				}
				userItemRating: [{
					type: Number,
					enum: [0,1,2,3,4,5],
					default: [0]
				}],
				userItemReview: {
					type: String
					default: ''
				}
			}]
		]
	}
	buddyList: {
		type: [Schema.Types.Objectid]
		ref: 'User'
	} 
	roles: {
		type: [{
			type: String,
			enum: ['user', 'admin','client']
		}],
		default: ['user']
	},
	profileCreated: {
		type: Date,
		default: Date.now
	},
	profileLastUpdated: {
		type: Date
	},
	
	salt: {
		type: String
	},
	/* For reset password */
	resetPasswordToken: {
		type: String
	}
});
// define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', UserSchema);
