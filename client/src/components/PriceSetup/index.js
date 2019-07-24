import React, {Component} from "react";
import { Redirect } from "react-router"
import API from "../../utils/API";
import FUNC from "../../utils/FUNC";
import NavSB from "../NavSB";
import { FormBtn, Input, TextArea } from "../Form";
import Modal from "../Modal";
import "./PriceSetup.css";

class PriceSetup extends Component {
    constructor(props) {
        super(props);
        this.venueRef = React.createRef();
        this.stageRef = React.createRef();
        this.modalRef = React.createRef();
        this.tablesRef = React.createRef();
        this.goLiveModalRef = React.createRef();
    }

    state = {
        seatPrice: "",
        tablePrice: "",
        tableID: "",
        venue: {},
        tables: [],
        stageWidth: 0,
        stageLength: 0,
        tableSize: 0,
        seatSize: 0,
        venueWidth: 0,
        venueHeight: 0,
        stageX: 0,
        stageY: 0,
        msg: "Layout Setup",
        selectedItems: [],
        setItems: [],
        originalvRef: {},
        bannerHeader: "",
        bannerTitle: "",
        bannerMsg: "",
        stageXRatio: 0,
        stageYRatio: 0
    };


    componentDidMount() {
        this.getVenue();
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        this.setState(FUNC.placeBox(this.state.venue.venueWidth, this.state.venue.venueLength, window.innerWidth));
        FUNC.setStage(this);
    }

    getVenue = () => {
        API.getVenue()
            .then(res =>
                this.setState({
                    venue: res.data
                })
            )
            .then(res => 
                //place Boundary
                this.setState(FUNC.placeBox(this.state.venue.venueWidth, this.state.venue.venueLength, window.innerWidth))
            )
            .then(res => 
                FUNC.setStage(this)
            )
    }

    //TODO GET TABLES FOR GIVEN VENUE
    setTables = () => {
        if (this.state.tables.length === 0) {
            API.getTables()
                .then(res =>
                    this.setState({
                        tables: res.data[0].tables,
                        tableID: res.data[0]._id,
                        stageX:  res.data[0].stageX,
                        stageY:  res.data[0].stageY,
                        originalvRef: res.data[0].venueRef,
                        stageXRatio: res.data[0].stageXRatio,
                        stageYRatio: res.data[0].stageYRatio
                    })
                )
                .then( () => 
                    console.log("My State: ", this.state)
                )
                .then(res => 
                    FUNC.tableStageAdjust(this)
                )
        } else {
            // API.getTables()
            //     .then(res =>
            //         this.setState({
            //             tables: res.data[0].tables,
            //             tableID: res.data[0]._id,
            //             stageX:  res.data[0].stageX,
            //             stageY:  res.data[0].stageY
            //         })
            //     )
            //     .then (() =>
            //     console.log("State Tables X :after: ", this.state.tables)
            //     )
            //     .then( () => 
                FUNC.tableStageAdjust(this)
                // )
            }
    }

    handleTransition = (e) => {
    }

    
    handleBtnClick = (event) => {
        event.preventDefault();
        let tableID = event.target.id;
        let tableIDArray = this.state.selectedItems
        let tableTest = [];
        tableTest = this.state.selectedItems.filter( (tables) => {
            return tables === tableID
        })
        if (tableTest.length === 0) {
            tableIDArray.push(tableID);
            
        } else {
            let index = tableIDArray.findIndex(function(table) {
                return table === tableID
            })
            tableIDArray.splice(index,1)
        }

        this.setState({
            selectedItems: tableIDArray
        })
    }

    handleInputChange = event => {
            let { name, value } = event.target;
            if (event.target.id.substring(0,6) === "banner") {
                this.setState({
                    [name]: value
                })
            } else {
            let tempArray = this.state.tables;
            tempArray.map( (table) => {
                if (this.state.selectedItems.includes(table.id)) {
                    table[name] = value
                }
            })
            this.setState({ tables: tempArray})
        }
      };

    handleTablePricing = (e) => {
        e.preventDefault();
        API.updateTables({ _id: this.state.tableID, tables: this.state.tables })
        .then(res =>
            console.log("response data" + res.data + " and state: " + this.state)
        )
        .then( () => 
        this.modalRef.current.closeModal()
        )
        .then( () =>
        this.clearSelected()
        )
    }

    clearSelected() {
        //mark the set tables and clear the selected tables
        let tempArray = this.state.setItems;
        for (var i=0; i<this.state.selectedItems.length; i++) {
            tempArray.push(this.state.selectedItems[i])
        }
        this.setState({
            setItems: tempArray,
            selectedItems: []
        })      
    }

    openModal = event => {
        event.preventDefault();
        if (event.target.id === "setPricing") {
        this.modalRef.current.openModal();
        } else {
            this.goLiveModalRef.current.openModal();
        }
    }

    takeLive = event => {
        event.preventDefault();
        API.saveBanner({
            header: this.state.bannerHeader,
            message: this.state.bannerMsg,
            title: this.state.bannerTitle
        })
        .then(res=>console.log(res.data))
        .catch(err=> console.log(err))
        this.setRedirect();
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='../' />
        }
    }
    
render() {
        return(
            <>
             <NavSB>
            <form>
                <div className="row">
                    <div className="col-md-3">
                        <Input
                        type="text"
                        value={this.state.tablePrice}
                        small="table pricing"
                        readOnly />
                    </div>
                    <div className="col-md-3">
                        <Input
                        type="text"
                        value={this.state.seatPrice}
                        small="seat pricing"
                        readOnly />
                    </div>
                    <div className="col-md-3">
                        <button id="setPricing" className="btn btn-danger"
                        onClick={this.openModal}>Edit Selected</button>    
                    </div>
                    <div className="col-md-3">
                        <button id="takeLive" className="btn btn-success"
                        onClick={this.openModal}>Take Live</button>
                    </div>
                </div>
                <Modal ref={this.goLiveModalRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Lets Setup your Banner</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Header: </h4>
                        </div>
                        <div className="col-md-6">
                            <Input
                            id="bannerHeader"
                            type="string"
                            name="bannerHeader"
                            onChange={this.handleInputChange}
                            placeholder="Banner Header"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Title: </h4>
                        </div>
                        <div className="col-md-6">
                            <Input
                            id="bannerTitle"
                            type="string"
                            name="bannerTitle"
                            onChange={this.handleInputChange}
                            placeholder="Banner Title"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Message: </h4>
                        </div>
                        <div className="col-md-6">
                            <Input
                            id="bannerMsg"
                            type="string"
                            name="bannerMsg"
                            onChange={this.handleInputChange}
                            placeholder="Banner Message"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <FormBtn onClick={this.takeLive}
                             className="btn btn-danger">Submit</FormBtn>
                        </div>
                    </div>
                </div>
                </Modal>
                <Modal ref={this.modalRef}>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Table</th>
                        <th scope="col">Table Sales Only</th>
                        <th scope="col">Table Price</th>
                        <th scope="col">Seat Price</th>
                        <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <th scope="row">{this.state.selectedItems.map( (table) => { return ("|"+table+"| ")})}</th>
                            <td style={{textAlign:"center"}}><Input
                                id="tableSales"
                                name="tableCheck"
                                onChange={this.handleInputChange}
                                type="checkbox"
                                className="form-check-input"/>
                            </td>
                            <td>
                                <Input
                                id="tablePrice"
                                type="number"
                                name="tablePrice"
                                onChange={this.handleInputChange}
                                placeholder="Table Price"
                                />
                            </td>
                            <td><Input
                                id="seatPrice"
                                type="number"
                                name="seatPrice"
                                onChange={this.handleInputChange}
                                placeholder="Seat Price"
                                />
                            </td>
                            <td><TextArea
                                id="message"
                                type="string"
                                name="message"
                                onChange={this.handleInputChange}
                                placeholder="Table Message"/>
                            </td>
                            </tr>
                    </tbody>
                    </table>
                    <FormBtn onClick={this.handleTablePricing}
                             className="btn btn-danger">Submit</FormBtn>
                </Modal>
            </form>
            </NavSB>

            <div    className="venueBox"
                    ref = {this.venueRef}
                    style={{
                    width: this.state.venueWidth+"px",
                    height: this.state.venueHeight+"px"}}>
            <div className="tables"
                ref={this.tablesRef}>
            {this.state.tables.map( (table) => {
                return (
                        <div id={table.id}
                             key={table.id}
                            className= {(this.state.selectedItems.filter( (sTable) => {
                                return sTable === table.id
                            }).length === 0) ? 
                            (this.state.setItems.filter( (dTable) => {
                                return dTable === table.id
                            }).length === 0) ? 
                            ("circleDiv") : ("circleDiv set") : ("circleDiv active")}
                            style={{ position: "absolute",
                            left: table.x + "px",
                            top: table.y + "px",
                            fontSize: this.state.tableSize + "px"}}
                            onClick={this.handleBtnClick}
                            onMouseDown={this.handleMouseDown}
                            onMouseOver={ () => this.setState({ tablePrice: "$"+table.tablePrice+" ",
                                                                seatPrice: "$"+table.seatPrice })}
                            onMouseOut={ () => this.setState({ tablePrice: "",
                                                                seatPrice: "" })}>
                                <i className="fas fa-circle"
                                    style={{pointerEvents:"none"}}></i>
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
                                        <i className="fas fa-circle"
                                        style={{pointerEvents: "none",
                                                fontSize: this.state.seatSize+"px"}}></i>
                                        </div>
                                    )
                                })}</div>
                            </div>          
                )
                
                })}</div>
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
                {this.renderRedirect()}
                </>
            )
        }
    } 

export default PriceSetup;