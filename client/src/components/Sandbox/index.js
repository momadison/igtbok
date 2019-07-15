import React from "react";
import { Redirect } from "react-router"
import { Component } from "react"
import "./Sandbox.css";
import API from "../../utils/API";
import FUNC from "../../utils/FUNC"
import NavSB from "../NavSB";
import { Input, FormBtn } from "../Form";

let seatTestArray = [];
let activeID = "";

class Sandbox extends Component {
    constructor(props) {
        super(props);
        this.venueRef = React.createRef();
        this.stageRef = React.createRef();
        this.tablesRef = React.createRef();
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
        stageX: 0,
        stageY: 0,
        dimension: {},
        spacing: 1,
        stageMargin: 1,
        msg: "Layout Setup"
    };

    componentDidMount() {
        this.getVenue();
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize)
    }

    handleResize = () => {
        this.setState(FUNC.placeBox(this.state.venue.venueWidth, this.state.venue.venueLength, window.innerWidth));
        FUNC.setStage(this)
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='../PriceSetup' />
        }
    }

    getVenue = () => {
        API.getVenue()
            .then(res =>
                this.setState({
                    venue: res.data
                })
            )
            .then( () => 
                //place Boundary
                this.setState(FUNC.placeBox(this.state.venue.venueWidth, this.state.venue.venueLength, window.innerWidth))
            )
            .then( () => 
                FUNC.setStage(this)
            )
    }

    setTables= () => {
        //SET TABLES
        //get table count and set an array with each table in it spaced out by table size
        let stageBoundary = this.stageRef.current.getBoundingClientRect();
        let xCoord = 0;
        let yCoord = 0;
        let dimension = this.state.dimension;
        let tableSize = this.state.tableSize;
        let placeX = 0;
        let placeY = 0;
        let table = {};
        let seat = {};
        let tableArray=[];
        let yWindowOffset = window.pageYOffset;
        
        for (var i=0; i < this.state.venue.tableCount; i++) {
            if (i === 0) {
                //set the position of the first table
                xCoord = dimension.left + tableSize;
                yCoord = dimension.top + tableSize + yWindowOffset;
            } else  {
                   
                //if the table is below the venue
                if (yCoord >= (dimension.bottom - (tableSize*2))) {
                    this.setState({
                        msg: "Not enough Space"
                    });
                } else {
                    //if the table is at the end of the venue move it down
                    xCoord = ((placeX+(tableSize*2.5)*(this.state.spacing)) <= dimension.right - (tableSize)) ? placeX + ((tableSize*2)*(this.state.spacing)) : dimension.left + (tableSize);
                    yCoord = ((placeX+(tableSize*2.5)*(this.state.spacing)) <= dimension.right - (tableSize)) ? placeY : placeY + (tableSize*2*this.state.spacing); 
                    this.setState({
                        msg: "Layout Setup"
                    })
                }
                //if the table lands on the stage move it off of the stage
                if (xCoord > (Math.floor(stageBoundary.left) - (Math.floor((tableSize+(this.state.seatSize*2)) * this.state.stageMargin)))  &&  
                xCoord < (Math.floor(stageBoundary.right) + (Math.floor((tableSize+(this.state.seatSize*2)) * this.state.stageMargin))) &&
                (yCoord < (stageBoundary.bottom + (tableSize * this.state.stageMargin) + yWindowOffset) && 
                yCoord > stageBoundary.top - tableSize*this.state.stageMargin  - yWindowOffset)) {
                    xCoord = (stageBoundary.right + ((tableSize+(this.state.seatSize*2)) * this.state.stageMargin))
                    if ((xCoord+(tableSize*2.5)*(this.state.spacing)) >= dimension.right - (tableSize)) {
                        xCoord = dimension.left + tableSize;
                        yCoord = yCoord + (tableSize*2*this.state.spacing);
                    }
                }
        
            }

            // create an array of seats to add to array
            let seating = []
            let radius = tableSize/1.5;
            let angle;
            let xOffset = radius/2
            let yOffset = radius/1.35;
            for (var j=0; j < this.state.venue.seatCount; j++ ) {
                //create seats
                angle = (j / (this.state.venue.seatCount/2)) * Math.PI;
                seat = {
                    id: "seat"+[i]+[j],
                    x: (radius * Math.cos(angle)) + xOffset,
                    y: (radius * Math.sin(angle)) + yOffset
                }
                seating.push(seat);
                seatTestArray.push(seat);
            }
                
            //create table
            table = {
                id: "table" + [i],
                x: xCoord,
                y: yCoord,
                seat: seating,
                tableCheck: false,
                tablePrice: 0,
                seatPrice: 0,
                message: ""
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

    handleTransition = (e) => {
        e.preventDefault();
        if (window.pageYOffset === 0) {
        API.saveTables({
            venue: this.state.venue.venueName,
            stageX: this.state.stageX,
            stageY: this.state.stageY,
            windowSize: this.state.windowSize,
            tables: this.state.tables,
            venueRef: this.venueRef.current.getBoundingClientRect(),
            yOffset: window.pageYOffset
        })
        .then(res=>console.log(res.data))
        .catch(err=> console.log(err))
        this.setRedirect();
    } else alert("please scroll up and resubmit");
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        this.setTables();
      };


    handleMouseDown = e => {
        activeID = "";
        activeID = e.target.id;
        this.coords = {
            x: e.pageX,
            y: e.pageY
        }
        if (e.target.id === "mainStage") {
            document.addEventListener('mousemove', this.handleStageMove)
        } else {
            document.addEventListener('mousemove', this.handleMouseMove);
        }
    }

    handleMouseUp = (event) => {

    if (event) {
        if (event.target.id === "mainStage") {
            document.removeEventListener('mousemove', this.handleStageMove);
            this.setTables();
        } else {
            document.removeEventListener('mousemove', this.handleMouseMove);
            //attempt to only allow dropping of the item within the box
            // let tempArray = this.state.tables;
            // tempArray.map( (table) => {
            //     if (table.id === event.target.id) {
            //         if (table.y > (this.venueRef.current.getBoundingClientRect + window.pageYOffset)) {

                        
            //         }
            //     }
            // })
        }
    }
        this.coords = {};
      };

    handleStageMove = (event) => {
        const xDiff = this.coords.x - event.pageX;
        const yDiff = this.coords.y - event.pageY;
        this.coords.x = event.pageX;
        this.coords.y = event.pageY;

        let xStage = this.state.stageX;
        let yStage = this.state.stageY;

        let xLoc = xStage - xDiff;
        let yLoc = yStage - yDiff;

        this.setState({
            stageX: xLoc,
            stageY: yLoc
        })

    }

    handleMouseMove = (event) => {
        let tempArray = [];
        const xDiff = this.coords.x - event.pageX;
        const yDiff = this.coords.y - event.pageY;
        this.coords.x = event.pageX;
        this.coords.y = event.pageY;

        //Create temp Array to load into the state
        tempArray = this.state.tables;
        
        const node = this.venueRef.current;
        const dimension = node.getBoundingClientRect();
        console.log("dimension", dimension);

        
        for (var i=0; i<tempArray.length; i++) {
            let xLoc = tempArray[i].x - xDiff;
            let yLoc = tempArray[i].y - yDiff;
            if (tempArray[i].id === activeID) {
                let xLoc = tempArray[i].x - xDiff;
            let yLoc = tempArray[i].y - yDiff;

                    tempArray[i].x = xLoc;
                    tempArray[i].y = yLoc;
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
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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
                    <div className="col-md-3">
                        <span className="navbar-brand" href="#">{this.state.msg}</span>
                    </div>
                    <div className="col-md-3">
                        <FormBtn
                        onClick={this.handleTransition}
                        className="btn btn-danger"
                        >
                        Next
                        </FormBtn>
                    </div>
                </div>
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
                </div><div
                        className="stage" 
                        ref={this.stageRef}
                        id="mainStage"
                        style={{    
                        position: "absolute",
                        width: this.state.stageWidth+"px",
                        height: this.state.stageLength+"px",
                        left: this.state.stageX+"px",
                        top: this.state.stageY+"px"}}
                        onClick={this.handleBtnClick}
                        onMouseDown={this.handleMouseDown}
                        onMouseUp={this.handleMouseUp}>
                    <i className="fas fa-rectangle-landscape"></i></div>
                {this.renderRedirect()}
                </>
            )
        }
    } 

export default Sandbox;