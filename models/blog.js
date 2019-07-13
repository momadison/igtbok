const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// were you using wordpress to write your blogs, is wordpress storing it? That may be the answer to image storage & upload. Wouldn't have to use a server for image storage.

const blogSubmission = new Schema({

        blogImage: "",
        blogImageURL: { type: String, required: true },
        blogTitle: { type: String, required: true },
        blogBody: { type: String, required: true }

});

const NewBlog = mongoose.model("NewBlogSubmission", blogSubmission);

module.exports = NewBlog;