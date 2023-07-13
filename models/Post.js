const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    imageurl: String,
    details: String
})

// if data exists in db then return it (mongoose.models.Post)
// || if none exists then create a new one (mongoose.model('Post', postSchema))
export default mongoose.models.Post || mongoose.model('Post', postSchema)