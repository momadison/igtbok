import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Blog extends Component {
    state = {
        blogImage: "",
        blogImageURL: "",
        blogTitle: "",
        blogBody: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    DatePickerOnChange = donateRecurringDate => this.setState({ donateRecurringDate })

    BlogSubmitVerification = event => {
        event.preventDefault();
        axios.post("/api/blog", this.state).then(res => console.log(res));
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className=" little-breathing-room">
                            <p className="blog-header">Write a new blog to post here</p>
                            <p className="blog-subhead">Once posted here it will appear on the home page</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form  onSubmit={this.BlogSubmitVerification}>
                            {/* upload an actual JPG or PNG for the image. Haven't built this in because I don't know if their server has a storage data cap*/}
                            {/* <div classNAme="form-group">
                                <label for="exampleFormControlFile1">upload an image</label>
                                <input type="file" className="form-control-file" value={this.state.blogImage} name="blogImage" onChange={this.handleInputChange} />
                            </div> */}
                            <div class="form-group">
                                <label for="imageURL">Image URL</label>
                                <input type="URL" className="form-control"  value={this.state.blogImageURL} name="blogImageURL" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="Enter image URL" required />
                                
                                <small id="emailHelp" class="form-text text-muted">to get an image's URL: right click on image and select "Copy Image Address"</small>
                            </div>
                            {/* blog title goes here */}
                            <div class="form-group">
                                <label for="exampleInputEmail1">Blog Title</label>
                                <input type="text" className="form-control"  value={this.state.blogTitle} name="blogTitle" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="Enter blog title" required />
                                {/* <small id="emailHelp" class="form-text text-muted">blog title goes here</small> */}
                            </div>
                            {/* blog body goes here */}
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Blog Body</label>
                                <textarea className="form-control"  value={this.state.blogBody} name="blogBody" onChange={this.handleInputChange} placeholder="Enter the text content for your blog" rows="3" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" class="btn btn-danger">Post Blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;