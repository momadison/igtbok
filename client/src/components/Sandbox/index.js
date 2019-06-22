import React from "react";
import { Component } from "react"
import "./Sandbox.css";
import Icon from "../SVG";
import Table from "../Table";

let tableArray = [{id:"table1",x:"200",y:"100"},
                {id:"table2",x:"600", y:"250"},
                {id:"table3",x:"400",y:"400"}];

let activeID = "";

class Sandbox extends Component {
    state = {
        tables: tableArray,
        activeID: "",
    };

    componentDidMount() {
        console.log(this.state.tables);
    }
    
    handleBtnClick = (event) => {
        console.log(event.target.id);
        console.log(tableArray.filter((word) => {
           return (word.id === "table1")
        }).map( (word) => {
            return word.id
        }))
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
        return (
            <>
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
                    })+"px"}}></i>
            </div>
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
            
            </>
        );
    }
}

export default Sandbox;