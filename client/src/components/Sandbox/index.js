import React from "react";
import { Component } from "react"
import "./Sandbox.css";
import Icon from "../SVG";
import Table from "../Table";
import Wizard from "../Wizard";
import Snapped from "../Snapped";
import { Input, TextArea, FormBtn } from "../Form";

let tableArray = [{id:"table1",x:"200",y:"100", comp: "Icon"},
                {id:"table2",x:"600", y:"250", comp: "Table"},
                {id:"table3",x:"400",y:"400", comp: "FA"}];



let activeID = "";

class Sandbox extends Component {
    state = {
        tables: tableArray,
        activeID: "",
        circleForm: 0
    };

    componentDidMount() {
        console.log(this.state.tables);
    }
    
    handleBtnClick = (event) => {
        switch (event.target.id) {
            case "circleRender":
                this.setState({
                    circleForm: (parseInt(this.state.circleForm)=== 0) ? 1 : 0
                })
                break;
            default:
                console.log(event.target.id);
        }
    }

    handleMouseDown = e => {
        console.log("mouse down");
        activeID = "";
        activeID = e.target.id;
        this.coords = {
            x: e.pageX,
            y: e.pageY
        }
        document.addEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseUp = () => {
        console.log("mouse up");
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.coords = {};
      };

    handleMouseMove = (e) => {
        console.log("mouse is moving");
        console.log("Window inner width: ", window.innerWidth)
        console.log("X: ",this.coords.x, "Y: ", this.coords.y);
        const xDiff = this.coords.x - e.pageX;
        const yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;

        let tempArray = this.state.tables;
        for (var i=0; i<tempArray.length; i++) {
            if (tempArray[i].id === activeID) {
                tempArray[i].x = tempArray[i].x - xDiff;
                tempArray[i].y = tempArray[i].y - yDiff;
            }
        }
        this.setState({
            tables: tempArray
        })

    };
    
    render() {
        return(
            <>
            <div><i id="circleRender" onClick={this.handleBtnClick} className="fas fa-circle fa-2x" style={{position: "absolute", left:90, top:90}} />
            <div id="tableBox" style={{left: "135px", top: "100px", opacity: this.state.circleForm}}>

            </div>    
            </div>
            <div>{this.state.tables.map( (icons) => {
                switch (icons.comp) {
                    case "Icon":
                        return (
                            <div onClick={this.handleBtnClick}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}>
                            <Icon width="30%"
                            id="table1" 
                            fill="#49c"
                            className="telephone"
                            viewBox="0 0 32 32"
                            style={{position: "absolute",
                            left: this.state.tables.filter( (table) => {
                                return (table.id === "table1")
                            }).map( (table) => {
                                return table.x
                            })+"px",
                            top: this.state.tables.filter( (table) => {
                                return (table.id === "table1")
                            }).map( (table) => {
                                return table.y
                            })+"px"}} 
                            />
                            </div>                       
                        )
                    case "FA":
                        return (
                            <div onClick={this.handleBtnClick}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}>
                                <i id="table3" className="fas fa-history fa-10x"
                                    style={{position: "absolute",
                                    left: this.state.tables.filter( (table) => {
                                    return (table.id === "table3")
                                    }).map( (table) => {
                                    return table.x
                                    })+"px",
                                    top: this.state.tables.filter( (table) => {
                                    return (table.id === "table3")
                                    }).map( (table) => {
                                    return table.y
                                    })+"px"}}>
                                </i>
                            </div>
                        )
                    case "Table":
                        return (
                            <div onClick={this.handleBtnClick}
                            onMouseDown={this.handleMouseDown}
                             onMouseUp={this.handleMouseUp}>
                                <Table width={200}
                                    id="table2"
                                    fill="BA1900"
                                    className="table"
                                    style={{position: "absolute",
                                    left: this.state.tables.filter( (table) => {
                                    return (table.id === "table2")
                                    }).map( (table) => {
                                    return table.x
                                    })+"px",
                                    top: this.state.tables.filter( (table) => {
                                    return (table.id === "table2")
                                    }).map( (table) => {
                                    return table.y
                                    })+"px"}}
                                />  
                             </div>
                        )
                        default:
                            return (
                                <div></div>
                            )
                    }
                })}</div>
            </>
            )
        }
    } 

export default Sandbox;