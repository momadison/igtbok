import React, { Component } from "react";
import axios from "axios";


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
                        <form  onSubmit={this.BlogSubmitVerification}>
                            {/* upload an image */}
                            <div classNAme="form-group">
                                <label for="exampleFormControlFile1">upload an image</label>
                                <input type="file" className="form-control-file" value={this.state.blogImage} name="blogImage" onChange={this.handleInputChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Image URL</label>
                                <input type="email" className="form-control"  value={this.state.blogImageURL} name="blogImageURL" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="Enter email" required />
                                {/* <small id="emailHelp" class="form-text text-muted">blog title goes here</small> */}
                            </div>
                            {/* blog title goes here */}
                            <div class="form-group">
                                <label for="exampleInputEmail1">Blog title</label>
                                <input type="text" className="form-control"  value={this.state.blogTitle} name="blogTitle" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="Enter email" required />
                                {/* <small id="emailHelp" class="form-text text-muted">blog title goes here</small> */}
                            </div>
                            {/* blog body goes here */}
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">write your blog</label>
                                <textarea className="form-control"  value={this.state.blogBody} name="blogBody" onChange={this.handleInputChange}  rows="3" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;