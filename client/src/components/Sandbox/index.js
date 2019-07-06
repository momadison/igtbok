import React from "react";
import { Component } from "react"
import "./Sandbox.css";
import API from "../../utils/API";
import NavSB from "../NavSB";
import { Input, FormBtn } from "../Form";

let seatTestArray = [];
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
        tables: [],
        stageWidth: 0,
        stageLength: 0,
        tableSize: 0,
        seatSize: 0,
        activeID: "",
        venueWidth: 0,
        venueHeight: 0,
        windowSize: window.innerWidth,
        stageX: 400,
        stageY: 400,
        dimension: {},
        spacing: 1,
        stageMargin: 1,
        msg: "Layout Setup"
    };

    componentDidMount() {
        this.getVenue();
    }

    placeBox = () => {
        //place the bounding box to hold the venue seating arrangement.
        let width = parseInt(this.state.venue.venueWidth);
        let height = parseInt(this.state.venue.venueLength);
        let ratio = (width > height) ? (height/width) : (width/height);
        //increase the size of the box to match the dimensions of the venue
        let sW = parseInt(window.innerWidth) - 200;
        let sH = sW * ratio;
        this.setState({
            venueWidth: sW,
            venueHeight: sH 
        })
        this.setStage();
    }

    rotateStage = () => {
        let width = this.state.stageLength;
        let length = this.state.stageWidth;
        this.setState ({
                    stageWidth: width,
                    stageLength: length
                })
    }

    setStage = () => {
        //set variables
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
        let seatSize = Math.floor((2 / bigger) * dimension.width);
        //set stage
        this.setState({
            stageWidth: stageWidth,
            stageLength: stageLength,
            seatSize: seatSize,
            dimension: dimension,
            tableSize: tableSize
        })
        
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
            default:
                break;
        }

        this.setState({
            stageX: stageX,
            stageY: stageY     
        })

        this.setTables();

        }

        setTables= () => {
            //SET TABLES
            //get table count and set an array with each table in it spaced out by table size
            const stageStuff = this.stageRef.current.getBoundingClientRect();
            let xCoord = 0;
            let yCoord = 0;
            let dimension = this.state.dimension;
            let tableSize = this.state.tableSize;
            let placeX = "";
            let placeY = "";
            let table = {};
            let seat = {};
            let stageX = this.state.stageX;
            let tableArray=[];

            for (var i=0; i < this.state.venue.tableCount; i++) {
                if (i === 0) {
                    //set the position of the first table
                    xCoord = dimension.left + (tableSize*2);
                    yCoord = dimension.top + tableSize;
                } else  {
                    //if the table is at the end of the venue move it down
                    xCoord = (placeX <= dimension.right - (tableSize*5)) ? placeX + ((tableSize * 2)*(this.state.spacing)) : dimension.left + (tableSize*2);
                    yCoord = (placeX <= dimension.right - (tableSize*5)) ? placeY : placeY + ((tableSize * 2)*(this.state.spacing));    
                    //if the table is below the venue
                    if (yCoord >= (dimension.bottom - (this.state.tableSize*2))) {
                        this.setState({
                            msg: "Not enough Space"
                        });
                        xCoord = dimension.left + (tableSize*2);
                        yCoord = dimension.top + tableSize;
                    } else {
                        this.setState({
                            msg: "Layout Setup"
                        })
                    }
                    //if the table lands on the stage move it off of the stage
                    if (xCoord > (stageStuff.left - (tableSize*1.5)*this.state.stageMargin)  &&  xCoord < (stageStuff.right + tableSize*this.state.stageMargin) &&
                        (yCoord < (stageStuff.bottom + (tableSize*.5)*this.state.stageMargin) && yCoord > stageStuff.top)) {
                        xCoord = (stageX + stageStuff.width) + (tableSize*this.state.stageMargin)
                    }
            
                }
    
                // create an array of seats to add to array
                let seating = []
                // this will set a circle of 2' seats for 6' - 12' tables.
                let radius = (tableSize/1.5);
                let angle;
                let centerX = tableSize/(3.45 - (this.state.venue.tableWidth*.085));
                let centerY = tableSize/(2.4 - (this.state.venue.tableWidth*.065));
                for (var j=0; j < this.state.venue.seatCount; j++ ) {
                    //create seats
                    angle = (j / (this.state.venue.seatCount/2)) * Math.PI;
                    seat = {
                        id: "seat"+[i]+[j],
                        x: ((radius * Math.cos(angle))+(centerX)), 
                        y: (radius * Math.sin(angle))+(centerY)
                    }
                    seating.push(seat);
                    seatTestArray.push(seat);
                }
                    
                //create table
                table = {
                    id: "table" + [i],
                    x: xCoord,
                    y: yCoord,
                    seat: seating
                }
                //set table location and push into array
                placeX = xCoord;
                placeY = yCoord;

                tableArray.push(table);
            }
    
            //set state
            this.setState({ 
                tableSize: tableSize,
                tables: tableArray,
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

    handleTransition = (e) => {
        e.preventDefault();
        API.saveTables({
            tables: this.state.tables
        })
        .then(res=>console.log(res.data))
        .catch(err=> console.log(err))
        //this.setRedirect
    }
    
    handleBtnClick = (event) => {
        event.preventDefault();
        switch (event.target.id) {
            default:
                console.log(event.target);
                //get reference of bounding box
                const node = this.venueRef.current;
                //get bounding box dimensions
                const dimension = node.getBoundingClientRect();
                console.log("Venue Box", dimension)
                console.log("tableSize: ", this.state.tableSize)
                
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        this.setTables();
      };


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
        const xDiff = this.coords.x - e.pageX;
        const yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;

        let tempArray = this.state.tables;
        const node = this.venueRef.current;
        const dimension = node.getBoundingClientRect();

        //Only lets you drag within the box
        for (var i=0; i<tempArray.length; i++) {
            let xLoc = tempArray[i].x - xDiff;
            let yLoc = tempArray[i].y - yDiff;
            if (tempArray[i].id === activeID) {
                if((yLoc + this.state.tableSize) < (dimension.bottom) && yLoc > (dimension.top) &&
                xLoc < (dimension.right-this.state.tableSize) && xLoc > (dimension.left)) {
                    
                    tempArray[i].x = xLoc;
                    tempArray[i].y = yLoc;
                } else {
                    if (yLoc > dimension.bottom) {
                        tempArray[i].x = xLoc;
                    } else {
                        this.handleMouseUp();
                    }
                } 
            }
        }
        this.setState({
            tables: tempArray
        })

    };
    
render() {
        return(
            <>
            <NavSB>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <Input
                        id="spacing"
                        onChange={this.handleInputChange}
                        value={this.state.spacing} 
                        placeholder="Table Spacing"
                        name="spacing"
                        type="number"
                        step="0.1"
                        small="spacing between tables"/>
                    </div>
                    <div className="col-md-4">
                        <Input
                            type="number"
                            step="0.1"
                            id="stageMargin"
                            name="stageMargin"
                            onChange={this.handleInputChange}
                            value={this.state.stageMargin}
                            placeholder="Stage Margin"
                            small="table spacing from stage"/>
                    </div>
                    <div className="col-md-4">
                        <span className="navbar-brand" href="#">{this.state.msg}</span>
                    </div>
                </div>
                <FormBtn
                    onClick={this.handleTransition}
                    className="btn btn-danger sandboxTime"
                >
                    Next
                </FormBtn>
            </form>
            </NavSB>

            <div    className="venueBox"
                    onClick = {this.handleAClick}
                    ref = {this.venueRef}
                    style={{
                    width: this.state.venueWidth+"px",
                    height: this.state.venueHeight+"px"}}>
            {this.state.tables.map( (table) => {
                return (
                        <div  id={table.id}
                             key={table.id}
                            className="circle"
                            style={{ position: "absolute",
                            left: table.x + "px",
                            top: table.y + "px",
                            fontSize: this.state.tableSize + "px"}}
                            onClick={this.handleBtnClick}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}>
                                <i className="fas fa-circle"
                                    style={{pointerEvents: "none"}}></i>
                                <div className="seatWrapper">
                                {table.seat.map( (seat) => {
                                    return (
                                        <div id={seat.id}
                                            key={seat.id}
                                            style={{pointerEvents: "none", 
                                                    fontSize: this.state.seatSize+"px",
                                                    position: "absolute",
                                                    left: seat.x+"px",
                                                    top: seat.y+"px"}}>
                                        <i key={seat.id} className="fas fa-circle"
                                        style={{pointerEvents: "none",
                                                fontSize: this.state.seatSize+"px"}}></i>
                                        </div>
                                    )
                                })}</div>
                            </div>          
                )
                
                })}
                <div    className="stage" 
                        ref={this.stageRef}
                        style={{    
                                    position: "absolute",
                                    width: this.state.stageWidth+"px",
                                    height: this.state.stageLength+"px",
                                    left: this.state.stageX+"px",
                                    top: this.state.stageY+"px"}}
                                    onClick={this.handleBtnClick}
                                    onMouseDown={this.handleMouseDown}
                                    onMouseUp={this.handleMouseUp}>
                    <i className="fas fa-rectangle-landscape" style={{
                        
                    }}></i>
                </div>
                </div>
                </>
            )
        }
    } 

export default Sandbox;