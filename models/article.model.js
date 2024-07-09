const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator')

const Article = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    content: { type: String,  required: true },
    price: { type: Number,  required: true },
  },
  { timestamps: { createdAt: true} }
)

Article.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('Article', Article)