import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    thumbnail: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

if (mongoose.models.Blog && !mongoose.models.Blog.schema.path("userId")) {
    mongoose.deleteModel("Blog");
}

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;