const mongoose = require('mongoose');

const myBlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      shortDescription: {
        type: String
      },
      blogContent: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model('Blog', myBlogSchema)