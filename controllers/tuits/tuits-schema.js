import mongoose from 'mongoose';
const schema = mongoose.Schema({
    content: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;

