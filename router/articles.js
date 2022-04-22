const express = require('express');
const Blog = require('./../models/dbSchema');
const { getaddBlog, getEditBlog, editBlog, getIndividualBlog, createNewBlog, deleteBlog } = require('../controllers/users.js');
const router = express.Router();

router.get('/',getaddBlog)

router.get('/edit/:id', getEditBlog)

router.put('/edit/:id', editBlog)

router.get('/:id', getIndividualBlog)

router.post('/', createNewBlog)

router.delete('/:id', deleteBlog)

module.exports = router;