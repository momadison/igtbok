import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class FullBlog extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        axios.get("/api/blog").then(
            blogs => {
                console.log(blogs.data);
                this.setState({
                    blogs: blogs.data.filter(blog => { return blog._id === this.props.blogId })[0]
                })
                console.log(this.state.blogs);
                // console.log(this.state.blogs)
            }
        )
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="card fullblog-card">
                    <div className="text-center">
                        <img className="fullBlog-img" src={this.state.blogs.blogImageURL} alt="" />
                    </div>
                    <div className="card-block">
                        <h4 className="Fullblog-header">{this.state.blogs.blogTitle}</h4>
                        <p className="Fullblog-subhead">{this.state.blogs.blogBody}</p>
                    </div>
                </div>
                <a href="/AllBlogs" class="btn btn-danger">View All Past Blogs</a>
            </div>
        )
    }
}

export default FullBlog;