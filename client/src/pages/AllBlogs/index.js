import React, { Component } from "react";
import axios from "axios";
import BlogAll from "../../components/BlogAll/index";


class AllBlogsMain extends Component {
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

                    <BlogAll />

                </div>
            </div>
        )
    }
}

export default AllBlogsMain;