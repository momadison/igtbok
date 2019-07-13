import React, { Component } from "react";
import axios from "axios";
import FullBlog from "../../components/FullBlog/index";


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
        console.log(this.props.match);
        return (
            <div className="container">
                <div className="row">

                    <FullBlog blogId={this.props.match.params.id}/>

                </div>
            </div>
        )
    }
}

export default AllBlogsMain;