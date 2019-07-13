import React, { Component } from "react";
import axios from "axios";


class BlogAll extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        axios.get("api/blog").then(
            blogs => {this.setState({blogs:
            blogs.data})
            console.log(this.state.blogs)}
        )
    }

    render() {
        return (
            <div>

            {this.state.blogs.map(blog => (
                <div className="card flex-row flex-wrap">
                <div className="card-header border-0">
                    <img src="//placehold.it/150" alt="" />
                </div>
                <div className="card-block px-2">
                    <h4 className="card-title">{blog.blogTitle}</h4>
                    <p className="card-text">{blog.blogBody.substring(0, 125)}</p>
                    <a href={"/FullBlogPost/" + blog._id} className="btn btn-primary">View Full Article</a>
                </div>
                <div className="w-100"></div>
                {/* <div className="card-footer w-100 text-muted">
                    Footer stating cats are CUTE little animals
                </div> */}
            </div>
        ))} 
            </div>
            
            
        )
    }
}

export default BlogAll;