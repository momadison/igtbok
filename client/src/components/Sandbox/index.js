import React from "react";
import { Component } from "react"
import "./Sandbox.css";
import Icon from "../SVG";

class Sandbox extends Component {
    state = {
        image: "",
        matchCount: 0
    };

    handleBtnClick = (event) => {
        console.log(event.target.id);
    }
    
    render() {
        return (
             <div onClick={this.handleBtnClick}>
                <Icon width={100} 
                    fill="#49c"
                    className="telephone"
                    style={{position: "absolute",
                            left: "300px",
                            top: "200px"}} 
                />
                
            </div>
        );
    }
}

export default Sandbox;