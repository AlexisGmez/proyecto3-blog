const postControllers = require('./posts.controllers');

const getAllPosts =(req,res)=>{

    postControllers.findAllPosts()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
}

const getPostById =(req,res)=>{

    const id = req.params.id;

    postControllers.findPostById(id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err);
        })
}

const postNewPost = (req,res) =>{
    const post = req.body;

    postControllers.createPost(post)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(400).json(err);
        })
}

const deletePost = (req,res)=>{

    const id = req.params.id;

    postControllers.deletePost(id)
        .then(data=>{
            res.status(202).json({message:'Post Delete succesfully'})
        })
        .catch(err=>{
            res.status(404).json({message:'Not found Post'})
        })
}

const patchPost = (req,res) =>{
    const id = req.params.id;
    const product =  req.body;

    postControllers.updatePost(id,product)
        .then(data=>{
            if(data===1){
                res.status(200).json({message:'Product updated succesfully'})
            }else{
                res.status(404).json(data)
            }
        })
        .catch(err=>{
            res.status(400).json(err)
        });
}

const putPost = (req,res) =>{

    const id = req.params.id;
    const product =  req.body;

    if(!product.content || !product.userName ){
        res.status(400).json({
            message:'missing data',
            fields:{
                content:'string',
                userName:'username',
            }
        })
    }

    postControllers.updatePost(id,product)
        .then(data=>{
            if(data===1){
                res.status(200).json({message:`Product updated succesfully ${data}`})
            }else{
                res.status(404).json(data)
            }
        })
        .catch(err=>{
            res.status(400).json(err)
        });
}

module.exports={
    getAllPosts,
    getPostById,
    postNewPost,
    deletePost,
    patchPost,
    putPost
}