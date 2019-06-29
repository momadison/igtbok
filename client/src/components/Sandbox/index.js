import React from "react";
import { Component } from "react"
import "./Sandbox.css";
import API from "../../utils/API";

let tableArray = [{id:"test",x:"400",y:"400", comp: "FA"}];

let activeID = "";

class Sandbox extends Component {
    constructor(props) {
        super(props);
        this.venueRef = React.createRef();
        this.stageRef = React.createRef();
    }

    state = {
        boxSize: {},
        venue: {},
        tables: tableArray,
        stageWidth: 0,
        stageLength: 0,
        tableSize: 0,
        activeID: "",
        venueWidth: 0,
        venueHeight: 0,
        windowSize: window.innerWidth,
        stageX: 400,
        stageY: 400
    };

    componentDidMount() {
        
        this.getVenue();
    }

    placeBox = () => {
        //place the bounding box to hold the venue seating arrangement.
        let width = parseInt(this.state.venue.venueWidth);
        let height = parseInt(this.state.venue.venueLength);
        let ratio = (width > height) ? (height/width) : (width/height);
        console.log("box ratio: ", ratio);
        //increase the size of the box to match the dimensions of the venue
        let sW = parseInt(window.innerWidth) - 200;
        let sH = sW * ratio;
        this.setState({
            venueWidth: sW,
            venueHeight: sH 
        })
        this.setStageAndTables();
    }

    rotateStage = () => {
        let width = this.state.stageLength;
        let length = this.state.stageWidth;
        this.setState ({
                    stageWidth: width,
                    stageLength: length
                })
    }

    

    setStageAndTables = () => {
        //set variables
        let tableArray = [];
        let placeX = "";
        let placeY = "";
        let table = {};
        let stageX = 0;
        let stageY = 0;

        //get reference of bounding box
        const node = this.venueRef.current;
        //get bounding box dimensions
        const dimension = node.getBoundingClientRect();
        //check if venue width or length is bigger, flip and display in window based on window size
        const bigger = (this.state.venue.venueWidth > this.state.venue.venueLength) ? 
        (this.state.venue.venueWidth) : (this.state.venue.venueLength)
        //scale tables and stage based on venue (bounding box) scale
        const stageRatio = this.state.venue.stageLength / this.state.venue.stageWidth;
        let tableSize = Math.floor((this.state.venue.tableWidth / bigger) * dimension.width);
        let stageWidth = Math.floor((this.state.venue.stageWidth / bigger) * dimension.width);
        let stageLength = Math.floor(stageWidth * stageRatio);
        //set stage
        this.setState({
            stageWidth: stageWidth,
            stageLength: stageLength
        })
        const noder = this.stageRef.current;
        const stageStuff = this.stageRef.current.getBoundingClientRect();
        console.log("stage stuff", stageStuff);
        console.log("stageWidth", stageWidth);
        console.log("stageLength", stageLength);
        //check location of stage and place in venue
        switch (this.state.venue.stageLocation) {
            case "top-middle":
                stageX = dimension.width/2;
                stageY = dimension.top;
                break;
            case "top-left":
                stageX = dimension.left + 10;
                stageY = dimension.top + 10;
                break;
            case "top-right":
                stageX = dimension.right - (stageWidth + 10);
                stageY = dimension.top + 10;
                break;
            case "right":
                this.rotateStage();
                stageX = dimension.right - (stageLength + 10);
                stageY = dimension.height/2 + stageLength/2
                break;
            case "bottom-right":
                this.rotateStage();
                stageX = dimension.right - (stageLength + 10);
                stageY = dimension.bottom - (stageWidth + 10);
                break;
            case "bottom-middle":
                stageX = dimension.width/2 + stageWidth;
                stageY = dimension.bottom - (stageLength + 10);
                break;
            case "bottom-left":
                stageX = dimension.left + 10;
                stageY = dimension.bottom - (stageLength + 10);
                break;
            case "left":
                this.rotateStage();
                stageX = dimension.left + 10;
                stageY = dimension.height/2 + stageWidth;
                break;
        }
        //get table count and set an array with each table in it spaced out by table size
        for (var i=0; i < this.state.venue.tableCount; i++) {
            if (i === 0) {
                //set the position of the first table
                table = {
                    id: "table"+[i],
                    x: dimension.left + tableSize,
                    y: dimension.top + tableSize
                }
            } else  {
                //if the table is at the end of the venue move it down
                let xCoord = (placeX <= dimension.right - (tableSize*5)) ? placeX + tableSize * 2 : dimension.left + (tableSize * 2);
                let yCoord = (placeX <= dimension.right - (tableSize*5)) ? placeY : placeY + (tableSize);

                //if the table lands on the stage move it off of the stage
                if ((xCoord > stageStuff.left && xCoord < stageStuff.right) && (yCoord > stageStuff.top && yCoord < stageStuff.bottom)) {
                    xCoord = stageStuff.right + (tableSize * 2);
                }
                //create table
                table = {
                    id: "table" + [i],
                    x: xCoord,
                    y: yCoord
                }
            }
            //set table location and push into array
            placeX = table.x;
            placeY = table.y;
            tableArray.push(table);
        }
        //set state
        this.setState({ 
            tableSize: tableSize,
            tables: tableArray,
            stageX: stageX,
            stageY: stageY
        })
    }

    getVenue = () => {
        API.getVenue()
            .then(res =>
                this.setState({
                    venue: res.data
                })
            )
            .then(res => (
                this.placeBox()
            ))}
    
    handleBtnClick = (event) => {
        switch (event.target.id) {
            default:
                console.log(event.target);
                console.log(this.state.venue);
        }
    }

    handleMouseDown = e => {
        console.log(e.target)
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
        console.log("X: ",this.coords.x);
        console.log("pageX: ", e.pageX);
        console.log("event target: ", e.target);
        const xDiff = this.coords.x - e.pageX;
        const yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;

        let tempArray = this.state.tables;
        const node = this.venueRef.current;
        const dimension = node.getBoundingClientRect();

        e.target.left = this.coords.x;

        // for (var i=0; i<tempArray.length; i++) {
        //     let xLoc = tempArray[i].x - xDiff;
        //     let yLoc = tempArray[i].y - yDiff;
        //     if (tempArray[i].id === activeID) {
        //         //TODO:  adjust the numbers to reflect the size of the table 
        //         //this will also vary based on window size.  Or maybe just add padding to the circle
        //         if(yLoc < (dimension.bottom) && yLoc > (dimension.top) &&
        //                     xLoc < (dimension.right) && xLoc > (dimension.left)) {
        //             tempArray[i].x = xLoc;
        //             tempArray[i].y = yLoc;
        //         } else {
        //             // this.handleMouseUp();
        //             console.log("ok");
        //         }
        //     }
        // }
        this.setState({
            tables: tempArray
        })

    };
    
    render() {
        return(
            <div    className="venueBox"
                    onClick = {this.handleAClick}
                    ref = {this.venueRef}
                    style={{
                    width: this.state.venueWidth+"px",
                    height: this.state.venueHeight+"px"}}>

            {this.state.tables.map( (table) => {
                return (
                        <i  id={table.id}
                            className="fas fa-circle"
                            style={{ position: "absolute",
                            left: table.x + "px",
                            top: table.y + "px",
                            fontSize: this.state.tableSize + "px"}}
                            onClick={this.handleBtnClick}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}></i>
                )
                })}
                <div    className="stage" 
                        ref={this.stageRef}
                        style={{    zIndex: "-1",
                                    position: "absolute",
                                    width: this.state.stageWidth+"px",
                                    height: this.state.stageLength+"px",
                                    left: this.state.stageX+"px",
                                    top: this.state.stageY+"px"}}
                                    onClick={this.handleBtnClick}
                                    onMouseDown={this.handleMouseDown}
                                    onMouseUp={this.handleMouseUp}>
                    Stage
                </div>
                </div>
            )
        }
    } 

export default Sandbox;