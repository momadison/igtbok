import React, {Component} from "react";
import API from "../../utils/API";
import FUNC from "../../utils/FUNC";
import NavSB from "../NavSB";
import "./boxOffice.css";
import { FormBtn } from "../Form";
import Modal from "../Modal";

class PriceSetup extends Component {
    constructor(props) {
        super(props);
        this.venueRef = React.createRef();
        this.stageRef = React.createRef();
        this.modalRef = React.createRef();
    }

    state = {
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
        selectedItems: [],
        setItems: [],
        tableToggle: false,
        originalWindow: window.innerWidth,
        originalvRef: {},
        originalTables: [],
        originalStateX: 0,
        originalStateY: 0
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

    openModal = event => {
        event.preventDefault();
        this.modalRef.current.openModal();
    }

    rotateStage = () => {
        let width = this.state.stageLength;
        let length = this.state.stageWidth;
        this.setState ({
                    stageWidth: width,
                    stageLength: length
                })
    }

    //TODO GET TABLES FOR GIVEN VENUE
    setTables = () => {
        

        if (this.state.tableID === this.state.tableID) {
        API.getTables()
            .then(res =>
                this.setState({
                    originalTables: res.data[0].tables,
                    tables: res.data[0].tables,
                    tableID: res.data[0]._id,
                    stageX: res.data[0].stageX,
                    stageY: res.data[0].stageY,
                    originalStageX: res.data[0].stageX,
                    originalStageY: res.data[0].stageY,
                    originalWindow: res.data[0].windowSize,
                    originalvRef: res.data[0].venueRef
                })
            )
            .then(res =>
                FUNC.tableStageAdjust(this)
            )
        }
        else {
            console.log("state: ", this.state);
            this.setState({
                originalTables: this.state.originalTables,
                tables: this.state.originalTables,
                tableID: this.state.tableID,
                stageX: this.state.originalStageX,
                stageY: this.state.originalStageY,
                originalWindow: this.state.originalWindow,
                originalvRef: this.state.originalvRef
            })
            FUNC.tableStageAdjust(this)
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
                return table.id === tableID
            })
            tableIDArray.splice(index,1)
        }

        this.setState({
            selectedItems: tableIDArray
        })
    }
    

    handleInputChange = event => {
    }


    handleMouseDown = e => {
        console.log(e.target);
    }

    handleMouseUp = () => {
    }

    handleMouseMove = (e) => {
    }

    nothing = () => {}

    currency(number) {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(number);
    }

    getTotal() {
        let total = 0;
        this.state.selectedItems.map( (ticket) => {
            total = parseInt(total) + parseInt(this.getPrice(ticket));
        })
        return total;
    }

    getPrice(ticket) {
        let seatPrice = (ticket.split("_")[1]) ?
        (this.state.tables.filter( (pricing) => {
            return (
            (ticket.split("_")[0] === pricing.id)
            )
            }))[0].seatPrice :
        (this.state.tables.filter( (pricing) => {
            return (
                (ticket.split("_")[0] === pricing.id)
            )
        }))[0].tablePrice
        return seatPrice
    }
    
render() {
        return(
            <>
             <NavSB>
                 <FormBtn
                 onClick={ () => {this.setState({ tableToggle: !this.state.tableToggle,
                                                  selectedItems: []})}}>
                 {(this.state.tableToggle === false) ? "Purchase Seats" : "Purchase Tables"}
                </FormBtn>
                <FormBtn onClick={this.openModal}>View Cart</FormBtn>
                <Modal ref={this.modalRef}>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Table</th>
                        <th scope="col">Seat</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.selectedItems.map( (ticket) => {
                            return (
                                <tr key={ticket}>
                                <td>
                                    {(this.state.tableToggle === false) ?
                                        (ticket.charAt(0).toUpperCase() + ticket.slice(1)) : 
                                        (ticket.charAt(0).toUpperCase() + ticket.split("_")[0].slice(1))
                                    }
                                </td>
                                <td>
                                    {(ticket.split("_")[1]) ?
                                            (ticket.split("_")[1].charAt(0).toUpperCase() + ticket.split("_")[1].slice(1)) :
                                            "Table"
                                    }
                                </td>
                                <td>
                                    {this.currency(this.getPrice(ticket))}
                                </td>
                                </tr>
                            )
                        })}
                        <tr><td></td><th>TOTAL</th>
                        <td>
                            {this.currency(this.getTotal())}
                        </td></tr>
                    </tbody>
                    </table>

                    <FormBtn onClick={this.handleCartPurchase}>Buy Now</FormBtn>
                </Modal>
                
            </NavSB>

            <div    className="venueBox"
                    ref = {this.venueRef}
                    style={{
                    width: this.state.venueWidth+"px",
                    height: this.state.venueHeight+"px"}}>

            {this.state.tables.map( (table) => {
                return (
                        <div id={table.id}
                             key={table.id}
                            className= {(this.state.tableToggle === false) ?
                                            (this.state.selectedItems.includes(table.id)) ?
                                            "buyDiv" : "selectDiv" : "circleDiv"}
                            style={{ position: "absolute",
                            left: table.x + "px",
                            top: table.y + "px",
                            fontSize: this.state.tableSize + "px"}}
                            onClick={(this.state.tableToggle === false) ?
                                this.handleBtnClick : this.nothing
                            }>
                                <i className="fas fa-circle"
                                    style={{pointerEvents:"none"}}></i>
                                <div className="seatWrapper">
                                {table.seat.map( (seat) => {
                                    return (
                                        <div id={table.id+"_"+seat.id}
                                            className={(this.state.tableToggle === true) ?
                                                (this.state.selectedItems.includes(table.id+"_"+seat.id)) ?
                                                        "buyDiv" : "selectDiv" : "seatDiv"}
                                            key={seat.id}
                                            onClick={(this.state.tableToggle === true) ?
                                                this.handleBtnClick : this.nothing
                                            }
                                            style={{
                                                    pointerEvents:(this.state.tableToggle === false) ?
                                                    "none" : "",
                                                    fontSize: (this.state.seatSize)+"px",
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

export default PriceSetup;