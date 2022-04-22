const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/dbSchema');
const methodOverride = require('method-override');
const app = express();
const router = require('./router/articles')

mongoose.connect('mongodb://localhost:27017/myBlog');


app.set('view engine','ejs');

// to access the values the user fill in the new blog section using req.body
app.use(express.urlencoded({ extended: false }))

// to use app.put/patch/delete when we take data from the user  
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: 'desc' })
    res.render('index', { blog: blogs })
  })

app.use('/articles', router);


app.listen(5000);