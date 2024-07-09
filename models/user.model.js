const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator')

const User = mongoose.Schema(
  {
    firstname: { 
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 20,
      required: true, 
    },
    picture: { 
      type: String
    },
    email: { 
      type: String,  
      required: true,
      unique: true
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'guest'],
      default: 'user'
    },
    password: { 
      type: String,  
      // minLength: 13,
      required: true 
    },
  },
  { timestamps: { createdAt: true} }
)

User.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('User', User)