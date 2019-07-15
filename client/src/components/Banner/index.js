import React, { useState } from "react"
import { Link } from 'react-router-dom';
import API from "../../utils/API";

class Banner extends React.Component {
    state = {
        header: "",
        message: "",
        title: ""
    }

    componentDidMount() {
        API.getBanners()
            .then(res => 
                this.setState({
                    header: res.data[0].header,
                    message: res.data[0].message,
                    title: res.data[0].title
                }))
    }

    render() {

    return (    
        <div classname="container"
        style={{width: "100%",
        padding: "0px",
        margin: "0px",
        height: "40px",
        backgroundColor: "#BA4A00",
        color: "white",
        textAlign: "center"}}>
        <div className="row">
            <div className="col-md-4" style={{paddingTop: "8px"}}>
                {this.state.header}
            </div>
            <div className="col-md-4" style={{paddingTop: "8px"}}>
                {this.state.title}
            </div>
            <div className="col-md-4" style={{paddingTop: "8px"}}>
                <Link to="../BoxOffice" >{this.state.message}</Link>
            </div>
        </div>
    </div>
    );
}
}

export default Banner;