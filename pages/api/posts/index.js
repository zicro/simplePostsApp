import Post from "@/models/Post";
import connectDB from "@/utils/connectDB"
import nc from "next-connect";

connectDB()

const handler = nc().post(async (req, res) => {
    const {title, imageurl, details} = req.body;

    try {
        const newpost = new Post({title, imageurl, details})
        await newpost.save()

        res.status(200).json({message: 'post saved successfully'})        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}).get(async (req, res) => {
    

    try {
        const posts = await Post.find();
        res.send(posts)       
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

export default handler
  