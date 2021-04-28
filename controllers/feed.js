const MakePost = require('../models/Feed')

module.exports = {
    getPost: async (req,res)=>{
        console.log(req.user)
        try{
            const makePostItems = await MakePost.find()
            const itemsLeft = await MakePost.countDocuments({microsoftId: req.user.microsoftId, completed: false})
            res.render('feed.ejs', {posts: makePostItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createPost: async (req, res)=>{
        try{
            await MakePost.create({post: req.body.postItems, completed: false, microsoftId: req.user.microsoftId})
            console.log('Post has been created!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await MakePost.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await MakePost.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await MakePost.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    