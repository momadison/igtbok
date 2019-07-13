import React, { Component } from "react";
import axios from "axios";


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
                <div className="card flex-row flex-wrap">
                    <div className="card-header border-0">
                        <img src="//placehold.it/150" alt="" />
                    </div>
                    <div className="card-block px-2">
                        <h4 className="card-title">{this.state.blogs.blogTitle}</h4>
                        <p className="card-text">{this.state.blogs.blogBody}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullBlog;