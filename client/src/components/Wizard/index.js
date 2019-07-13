import React from "react";
import { Component } from "react"
import { Input, Select, FormBtn } from "../Form";
import { Redirect } from "react-router"
import API from "../../utils/API.js"
import "./Wizard.css"

class Wizard extends Component {
    state = {
        redirect: false,
        activeID: 0,
        venueName: "",
        venueWidth: "",
        venueLength: "",
        stageWidth: 0,
        stageLength: 0,
        tableCount: 0,
        tableWidth: 6,
        seatCount: 0,
        venueDate: Date.now()
    };
    
    handleBtnClick = (event) => {
        switch (event.target.id) {
            case "newEvent":
                this.setState({
                    activeID: parseInt(this.state.activeID) + 1
                })
                break;
            case "venueNext":
                break;
            default:
                console.log(event.target.id);
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

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
            return <Redirect to='../hopepearls' />
        }
    }

    handleSandboxTransition = (e) => {
        e.preventDefault();
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
            active: true
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.setRedirect();
    }

    getVenue = (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <>
            <div id="carousel" className="carousel slide">
                <div className="carousel-inner">

                    {/* OPENING SLIDE */}
                    <div className={this.state.activeID === 0 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="http://getwallpapers.com/wallpaper/full/f/2/8/672676.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2 className="h3-responsive">Event Portal</h2>
                            <p>Let's plan an event!</p>
                            <button onClick={this.handleBtnClick} type="button" className="btn btn-danger" id="newEvent">New Event</button>
                            <button type="button" onClick={this.getVenue} className="btn btn-danger" id="editEvent">Edit Event</button>
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
                                        onChange={this.handleInputChange}
                                        small="date of venue"></Input>
                                
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <Input
                                        value={this.state.venueLength}
                                        id="venueLength"
                                        name="venueLength"
                                        type="number"
                                        onChange={this.handleInputChange} 
                                        placeholder="Length"
                                        small="please enter the length of your venue in feet"/>
                                    </div>
                                    <div className="col-md-4">
                                        <Input
                                        value={this.state.venueWidth} 
                                        type="number"
                                        id="venueWidth"
                                        name="venueWidth"
                                        onChange={this.handleInputChange}
                                        placeholder="Width"
                                        small="please enter the width of your venue in feet"/>
                                    </div>
                                    <div className="col-md-4">
                                        <FormBtn
                                        disabled={!(this.state.venueName && this.state.venueWidth && this.state.venueLength)}
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-danger venueNext" >
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
                        <div className="carousel-caption">
                            <h2 className="h3-responsive">Great Job!</h2>
                            <p>Lets setup your stage and tables</p>
                            <form>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-md-6">
                                    <Input
                                    id="stageWidth"
                                    name="stageWidth"
                                    type="number"
                                    onChange={this.handleInputChange} 
                                    placeholder="Width of Stage"
                                    small="please enter the width of your stage in feet"/>
                                </div>
                                <div className="col-md-6">
                                    <Input
                                    id="stageLength"
                                    name="stageLength"
                                    type="number"
                                    onChange={this.handleInputChange}
                                    placeholder="Length of Stage"
                                    small="please enter the length of your stage in feet" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <Input
                                    type="number"
                                    id="tableCount"
                                    name="tableCount"
                                    onChange={this.handleInputChange} 
                                    placeholder="Table Count"
                                    small="how many tables will you have at this venue"/>
                                </div>
                                <div className="col-md-4">
                                    <Input
                                    type="number"
                                    id="seatCount"
                                    name="seatCount"
                                    onChange={this.handleInputChange}
                                    placeholder="Seats per Table"
                                    small="how many seats per table will you have"/>
                                </div>
                                <div className="col-md-4">
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


