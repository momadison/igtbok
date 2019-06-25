import React from "react";
import { Component } from "react"
import { Input, Select, FormBtn } from "../Form";
import { Redirect } from "react-router"
import API from "../../utils/API.js"
import "./Wizard.css"

let stageType = ["podium", "stage"]
let stageShape = ["square", "circle"]
let stageLocation = ["top-middle", "top-left", "top-right",
                     "right", "bottom-right", "bottom-middle", 
                     "bottom-left", "left"]

class Wizard extends Component {
    state = {
        redirect: false,
        activeID: 0,
        venueName: "",
        venueWidth: "",
        venueLength: "",
        stageType: "",
        stageShape: "",
        stageWidth: 0,
        stageHeight: 0,
        stageLocation: "",
        tableCount: 0,
        tableWidth: 0,
        tableLength: 0
    };

    componentDidMount() {
        console.log(this.state.tables);
    }
    
    handleBtnClick = (event) => {
        switch (event.target.id) {
            case "newEvent":
                this.setState({
                    activeID: parseInt(this.state.activeID) + 1
                })
                break;
            case "venueNext":
                console.log("here we go");
                console.log(event.target)
                break;
            default:
                console.log(event.target.id);
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log("Name: ", name);
        console.log("Value: ", value);
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
            stageType: this.state.stageType,
            stageShape: this.state.stageShape,
            stageWidth: this.state.stageWidth,
            stageHeight: this.state.stageHeight,
            stageLocation: this.state.stageLocation,
            tableCount: this.state.tableCount,
            tableWidth: this.state.tableWidth,
            tableLength: this.state.tableLength 
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.setRedirect();
    }
    
    render() {
        return (
            <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                    {/* OPENING SLIDE */}
                    <div className={this.state.activeID === 0 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="http://getwallpapers.com/wallpaper/full/f/2/8/672676.jpg" class="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2 className="h3-responsive">Event Portal</h2>
                            <p>Let's plan an event!</p>
                            <button onClick={this.handleBtnClick} type="button" className="btn btn-danger" id="newEvent">New Event</button>
                            <button type="button" className="btn btn-danger" id="editEvent">Edit Event</button>
                        </div>
                    </div>
                    
                    {/* SETTING UP EVENT SLIDE */}
                    <div className={this.state.activeID === 1 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="https://backgroundcheckall.com/wp-content/uploads/2018/10/simple-hd-background-7.jpg" class="d-block w-100" alt="..." />
                        <div className="carousel-caption inputCaption">
                            <h2 className="h3-responsive">Let's get started on your new event</h2>
                            <p>Lets setup your venue</p>
                            <form>
                                <Input
                                    value={this.state.venueName}
                                    id="venueName"
                                    onChange={this.handleInputChange} 
                                    placeholder="Venue Name"
                                    name="venueName"
                                    small="please enter your venue name"/>
                                <Input
                                    value={this.state.venueWidth} 
                                    type="number"
                                    id="venueWidth"
                                    name="venueWidth"
                                    onChange={this.handleInputChange}
                                    placeholder="Width"
                                    small="please enter the width of your venue in feet"/>
                                <Input
                                    value={this.state.venueLength}
                                    id="venueLength"
                                    name="venueLength"
                                    type="number"
                                    onChange={this.handleInputChange} 
                                    placeholder="Length"
                                    small="please enter the length of your venue in feet"/>
                                <FormBtn
                                    disabled={!(this.state.venueName && this.state.venueWidth && this.state.venueLength)}
                                    onClick={this.handleFormSubmit}
                                    className="btn btn-danger venueNext"
                                >
                                Next
                                </FormBtn>
                            </form>
                        </div>
                    </div>
                    
                    {/* SETTING UP STAGE */}
                    <div className={this.state.activeID === 2 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="http://sf.co.ua/15/10/wallpaper-d925f.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2 className="h3-responsive">Stage</h2>
                            <p>Please provide more data on the stage</p>
                            <form>
                            <div className="row">
                                <div className="col-md-4">
                                
                                    <Select
                                        id="stageType"
                                        options={stageType}
                                        small="select stage type" />
                                </div>
                                <div className="col-md-4">
                                    <Select
                                        id="stageShape"
                                        options={stageShape}
                                        small="select stage shape" />
                                </div>
                                <div className="col-md-4">
                                    <Select
                                        id="stageLocation"
                                        options={stageLocation}
                                        small="select stage location" />
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-md-6">
                                <Input
                                    value={this.state.stageWidth}
                                    id="stageWidth"
                                    name="stageWidth"
                                    type="number"
                                    onChange={this.handleInputChange} 
                                    placeholder="Width of Stage"
                                    small="please enter the width of your stage in feet"/>
                                </div>
                                <div className="col-md-6">
                                <Input
                                    value={this.state.stageHeight}
                                    id="stageHeight"
                                    name="stageHeight"
                                    type="number"
                                    onChange={this.handleInputChange}
                                    small="please enter the length of your stage in feet" />

                                <FormBtn
                                    disabled={!(this.state.stageHeight && this.state.stageWidth)}
                                    onClick={this.handleFormSubmit}
                                    className="btn btn-danger stageNext"
                                >
                                Next
                                </FormBtn>
                                {this.renderRedirect()}
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                    {/* SETTING UP TABLES */}
                    <div className={this.state.activeID === 3 ?
                    "carousel-item active" :
                    "carousel-item"}>
                        <img src="https://us.123rf.com/450wm/tomertu/tomertu1506/tomertu150600340/41325485-glitter-vintage-lights-background-light-silver-purple-blue-gold-and-black-defocused-.jpg?ver=6" class="d-block w-100" alt="..." />
                        <div className="carousel-caption inputCaption">
                            <h2 className="h3-responsive">Table Time</h2>
                            <p> Lets setup your table count and size.</p>
                        <form>
                                <Input
                                    value={this.state.tableCount}
                                    id="tableCount"
                                    onChange={this.handleInputChange} 
                                    placeholder="Table Count"
                                    name="tableCount"
                                    type="number"
                                    small="how many tables will you have at this venue"/>
                                <Input
                                    value={this.state.tableWidth} 
                                    type="number"
                                    id="tableWidth"
                                    name="tableWidth"
                                    onChange={this.handleInputChange}
                                    placeholder="Table Length"
                                    small="please enter the length of your table in feet"/>
                                <FormBtn
                                    disabled={!(this.state.tableCount && this.state.tableWidth)}
                                    onClick={this.handleSandboxTransition}
                                    className="btn btn-danger sandboxTime"
                                >
                                Next
                                </FormBtn>
                            </form>
                            </div>
                    </div>

                </div>
            </div>
            {/* {this.state.activeID === 3 ?
                <div id="stageBox" ></div>: null} */}
            </> 
        )
    }
}

export default Wizard;


