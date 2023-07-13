import Post from "@/models/Post";
import connectDB from "@/utils/connectDB"
import nc from "next-connect";

connectDB()

const handler = nc().get(async (req, res) => {

    try {
        const post = await Post.findOne({_id: req.query.id});
        res.send(post)       
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}).put(async (req, res) => {

    try {
        const post = await Post.findOne({_id: req.query.id});

        post.title = req.body.title
        post.imageurl = req.body.imageurl
        post.details = req.body.details

        await post.save()

        res.send(post)       
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}).delete(async (req, res) => {

    try {
        const post = await Post.findOneAndDelete({_id: req.query.id});

        res.status(200).json({message: 'Success deleted'});     
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

export default handler
  