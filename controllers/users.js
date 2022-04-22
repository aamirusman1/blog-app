
exports.getaddBlog = (req,res)=>{
    res.render('addBlog',{ blogs: new Blog() })
}

exports.getEditBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('editBlog', { blogs: blog })
 }

 exports.editBlog = async (req, res) => {
    let blog = await Blog.findById(req.params.id)
    blog.title= req.body.title;
    blog.shortDescription= req.body.shortDescription;
    blog.blogContent= req.body.blogContent;
    try{
        blog = await blog.save()
        res.redirect(`/articles/${blog.id}`)
    
    } catch(e){
        console.log(e);
    }
  }

  exports.getIndividualBlog = async(req,res)=>{
    //res.send(req.params.id)
    const blog = await Blog.findById(req.params.id)
    if (blog == null) res.redirect('/')
    res.render('individualBlog', {blogs: blog})
  }

  exports.createNewBlog = async (req,res)=>{
    let blog = new Blog();
        blog.title= req.body.title;
        blog.shortDescription= req.body.shortDescription;
        blog.blogContent= req.body.blogContent;
        try{
            blog = await blog.save()
            res.redirect(`/articles/${blog.id}`)
    
        } catch(e){
            res.render('/')
        }
    }

    exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id)
    res.redirect('/')
  }



