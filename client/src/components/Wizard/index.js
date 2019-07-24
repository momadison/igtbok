import React from "react";
import { Component } from "react"
import { Input, Select, FormBtn } from "../Form";
import { Redirect } from "react-router"
import API from "../../utils/API.js"
import Modal from "../Modal";
import "./Wizard.css";
var moment = require('moment');

class Wizard extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        venues: [],
        activeVenue: "",
        redirect: false,
        activeID: 0,
        venueID: "",
        venueName: "",
        venueWidth: "",
        venueLength: "",
        stageWidth: 0,
        stageLength: 0,
        tableCount: 0,
        tableWidth: 6,
        seatCount: 0,
        venueDate: moment().format('YYYY-MM-DD'),
        venueOptions: [],
        editVenue: false
    };
    
    handleBtnClick = () => {
                this.setState({
                    activeID: parseInt(this.state.activeID) + 1
                })
        }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            activeID: parseInt(this.state.activeID) + 1 
        })
    }
  
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='../Sandbox' />
        }
    }

    handleSandboxTransition = (e) => {
        e.preventDefault();
        this.resetVenues();
        (this.state.editVenue === false) ?
        this.saveVenue() :
        this.updateVenue();
        this.setRedirect();
    }

    saveVenue = () => {
        API.saveVenue({
            venueName: this.state.venueName,
            venueWidth: this.state.venueWidth,
            venueLength: this.state.venueLength,
            venueDate: this.state.venueDate,
            stageWidth: this.state.stageWidth,
            stageLength: this.state.stageLength,
            tableCount: this.state.tableCount,
            tableWidth: this.state.tableWidth,
            seatCount: this.state.seatCount,
            editVenue: this.state.editVenue,
            active: true
        })
        .then(res => console.log(res.data))
        .then(() => this.setRedirect())
        .catch(err => console.log(err));
    }

    updateVenue = () => {
        API.updateVenue({
            id: this.state.venueID,
            venueName: this.state.venueName,
            venueWidth: this.state.venueWidth,
            venueLength: this.state.venueLength,
            venueDate: this.state.venueDate,
            stageWidth: this.state.stageWidth,
            stageLength: this.state.stageLength,
            tableCount: this.state.tableCount,
            tableWidth: this.state.tableWidth,
            seatCount: this.state.seatCount,
            editVenue: this.state.editVenue,
            active: true 
        })
        .then(res => console.log(res.data))
        .then(() => this.setRedirect())
        .catch(err => console.log(err));
    }

    resetVenues = () => {
        //reset all venues to active : false to load the active
        //venue into the sandbox on transition
        API.resetVenues({active: false})
        .then(res =>
            console.log("response data" + res.data)
        )
    }

    getVenue = (e) => {
        e.preventDefault();
    if (this.state.editVenue === false) {
        //get venues to load into state and into select form
        API.getVenues()
            .then(res =>
                this.setState({
                    venues: res.data
                })
            )
            .then( () => 
                this.setState({
                    editVenue: true
                })
            )
            .then( () =>
                this.setState({
                    venueOptions: this.state.venues.map( (venue) => {return (venue.venueName)})
                        
                }))
            } else {
                //If editing a venue... Load venue info into the state and go to next slide
                let myVenue = this.state.venues.filter( (venue) => {
                    return (venue.venueName === this.state.activeVenue) 
                })
                this.setState({
                    venueName: myVenue[0].venueName,
                    venueWidth: myVenue[0].venueWidth,
                    venueLength: myVenue[0].venueLength,
                    stageWidth: myVenue[0].stageWidth,
                    stageLength: myVenue[0].stageLength,
                    tableCount: myVenue[0].tableCount,
                    tableWidth: myVenue[0].tableWidth,
                    seatCount: myVenue[0].seatCount,
                    venueDate: myVenue[0].venueDate,
                    venueID: myVenue[0]._id
                })
                this.handleBtnClick();
            }
    }

    openModal = event => {
        event.preventDefault();
        this.myModalRef.current.openModal();
    }

    pickVenue = event => {
        event.preventDefault();
        this.myModalRef.current.closeModal();
    }

    activateVenue = event => {
        console.log("target: ", event.target)
    }

    goBack = (e) => {
        e.preventDefault();
        this.setState({
            activeID: parseInt(this.state.activeID) -1
        })
    }
    
    render() {
        return (
            <>
            <div id="carousel" className="carousel slide">
                <div className="carousel-inner">

                    {/* OPENING SLIDE */}
                    <div className={this.state.activeID === 0 ?
                    "carousel-item active" :
                    "carousel-item"} ffffffffffffffff>
                        <img src="http://getwallpapers.com/wallpaper/full/f/2/8/672676.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2 className="h3-responsive">Event Portal</h2>
                            <p>Let's plan an event!</p>
                            {/* disable new event button once edit event is clicked */}
                            {this.state.editVenue === false ?
                            <button onClick={this.handleBtnClick} type="button" className="btn btn-danger btnspace" id="newEvent">New Event</button>
                            :
                            <button onClick={this.handleBtnClick} type="button" className="btn btn-danger btnspace" id="newEvent" disabled>New Event</button>
                            }
                            <button type="button" onClick={this.getVenue} className="btn btn-danger btnspace" id="editEvent">Edit Event</button>
                            
                            {/* insert select input once edit venue is picked */}
                            {(this.state.editVenue === true) ? 
                            <Select
                                        id="activeVenue"
                                        name="activeVenue"
                                        options= {this.state.venues.map( (venue) => {return venue.venueName})}
                                        onChange={this.handleInputChange}
                                        data = {this.state.venues.map( (venue) => {return venue._id})}
                                        small="select venue" />
                            : ""}

                        </div>
                    </div>
                    
                    {/* SETTING UP EVENT SLIDE */}
                    <div className={this.state.activeID === 1 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="https://backgroundcheckall.com/wp-content/uploads/2018/10/simple-hd-background-7.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption inputCaption">
                            <h2 className="h3-responsive">Let's get started on your new event</h2>
                            <p>Lets setup your venue</p>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                        id="venueName"
                                        value= {this.state.venueName}
                                        onChange={this.handleInputChange}
                                        placeholder="Venue Name"
                                        name="venueName"
                                        small="please enter your venue name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                        id="venueDate"
                                        name="venueDate"
                                        type="date"
                                        value = {moment(this.state.venueDate).format('YYYY-MM-DD')}
                                        placeholder = "Date of Venue"
                                        onChange={this.handleInputChange}
                                        small="date of venue"></Input>
                                
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <Input
                                        value={this.state.venueLength}
                                        id="venueLength"
                                        name="venueLength"
                                        type="number"
                                        onChange={this.handleInputChange} 
                                        placeholder="Length"
                                        small="please enter the length of your venue in feet"/>
                                    </div>
                                    <div className="col-md-3">
                                        <Input
                                        value={this.state.venueWidth} 
                                        type="number"
                                        id="venueWidth"
                                        name="venueWidth"
                                        onChange={this.handleInputChange}
                                        placeholder="Width"
                                        small="please enter the width of your venue in feet"/>
                                    </div>
                                    <div className="col-md-3">
                                    <FormBtn
                                        onClick={this.goBack}
                                        className="btn btn-primary" >
                                            Back
                                        </FormBtn>
                                    </div>
                                    <div className="col-md-3">
                                        <FormBtn
                                        disabled={!(this.state.venueName && this.state.venueWidth && this.state.venueLength)}
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-danger venueNext" 
                                        >
                                            Next
                                        </FormBtn>
                                    </div>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                    
                    {/* SETTING UP STAGE AND TABLES */}
                    <div className={this.state.activeID === 2 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="http://sf.co.ua/15/10/wallpaper-d925f.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption slide2">
                            <h2 className="h3-responsive">Great Job!</h2>
                            <p>Lets setup your stage and tables</p>
                            <form>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-md-6">
                                    <Input
                                    id="stageWidth"
                                    value= {this.state.stageWidth}
                                    name="stageWidth"
                                    type="number"
                                    onChange={this.handleInputChange} 
                                    placeholder="Width of Stage"
                                    small="please enter the width of your stage in feet"/>
                                </div>
                                <div className="col-md-6">
                                    <Input
                                    id="stageLength"
                                    value= {this.state.stageLength}
                                    name="stageLength"
                                    type="number"
                                    onChange={this.handleInputChange}
                                    placeholder="Length of Stage"
                                    small="please enter the length of your stage in feet" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <Input
                                    type="number"
                                    id="tableCount"
                                    value= {this.state.tableCount}
                                    name="tableCount"
                                    onChange={this.handleInputChange} 
                                    placeholder="Table Count"
                                    small="how many tables will you have at this venue"/>
                                </div>
                                <div className="col-md-3">
                                    <Input
                                    type="number"
                                    id="seatCount"
                                    value= {this.state.seatCount}
                                    name="seatCount"
                                    onChange={this.handleInputChange}
                                    placeholder="Seats per Table"
                                    small="how many seats per table will you have"/>
                                </div>
                                <div className="col-md-3">
                                    <FormBtn
                                        onClick={this.goBack}
                                        className="btn btn-primary" >
                                            Back
                                    </FormBtn>
                                </div>
                                <div className="col-md-3">
                                    <FormBtn
                                    disabled={!(this.state.stageLength && this.state.stageWidth)}
                                    onClick={this.handleSandboxTransition}
                                    className="btn btn-danger stageNext"
                                >
                                Next
                                    </FormBtn>
                                </div>
                            </div>
                            {this.renderRedirect()}
                            </form>
                        </div>
                    </div>
                </div>          
            </div>
            </> 
        )
    }
}

export default Wizard;


