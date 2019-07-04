import React, { Component } from "react";
import DonateForm from "../../components/donateFormPriceOther/index.js";


class Donate extends Component {
    state = {
        donateFirstName: "",
        donateLastName: "",
        donateCompanyName: "",
        donateDonationValue: "",
        donateDonationValueCustom: "",
        donateActualDonationValue: "",
        donateAddress: "",
        donateCity: "",
        donateState: "",
        donateZip: "",
        donatePhone: "",
        donateEmail: "",
        donateEmail2: "",
        donateComments: "",
        donateRecurring: false,
        donateOneTime: false
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    ActualDonationValue() {
        // return this.state.donateDonationValueCustom || this.state.donateDonationValue

        if (Number.isInteger(this.state.donateDonationValueCustom)) {
            this.setState({ donateActualDonationValue: this.state.donateDonationValueCustom });
            console.log("sup dawg");
        }
        else if (Number.isInteger(this.state.donateDonationValue)) {
            this.state.donateActualDonationValue.setState(this.state.donateDonationValue);
        } else {
            alert("you must enter a donation value")
        }
        // figure out how to get them to put in a number
    }

    DoTheyKnowTheirEmail() {
        if (this.state.donateEmail === this.state.donateEmail2) {
            console.log("emails match, proceed");
        } else {
            alert("you don't know your own email address")
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Donating Money</h2>
                        <div className="card">
                            <div className="cardBody">
                                <form className="p-2">
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="exampleFormControlInput1">First Name</label>
                                            <input type="text" value={this.state.donateFirstName} name="donateFirstName" onChange={this.handleInputChange} className="form-control" id="donateFirstName" placeholder="John" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="exampleInputEmail1">Last Name</label>
                                            <input type="text" value={this.state.donateLastName} name="donateLastName" onChange={this.handleInputChange} className="form-control" id="donateLastName" placeholder="Smith" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Company Name</label>
                                        <input type="text" value={this.state.donateCompanyName} name="donateCompanyName" onChange={this.handleInputChange} className="form-control" id="donateCompany" placeholder="your company" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                                        <select value={this.state.donateDonationValue} name="donateDonationValue" onChange={this.handleInputChange} className="form-control" id="donateDonationValue">
                                            <option type="radio" value="" disabled>select donation amount</option>
                                            <option type="radio" value="1">$1</option>
                                            <option type="radio" value="10">$10</option>
                                            <option type="radio" value="25">$25</option>
                                            <option type="radio" value="50">$50</option>
                                            <option type="radio" value="100">$100</option>
                                            <option type="radio" value="other">Other</option>
                                        </select>
                                    </div>
                                    {this.state.donateDonationValue === "other" ? <DonateForm handleInputChange={this.handleInputChange} value={this.state.donateDonationValueCustom} /> : ""}

                                    <div className="form-group">
                                        <label htmlFor="InputAddress">Address</label>
                                        <input type="text" value={this.state.donateAddress} name="donateAddress" onChange={this.handleInputChange} className="form-control" id="donateAddress" placeholder="1234 Donate Ave" />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="InputCity">City</label>
                                            <input type="text" value={this.state.donateCity} name="donateFirstName" onChange={this.donateCity} className="form-control" id="donateCity" placeholder="Dallas" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="InputState">State</label>
                                            <input type="text" value={this.state.donateState} name="donateState" onChange={this.handleInputChange} className="form-control" id="donateState" placeholder="TX" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="InputZip">Zip/Postal Code</label>
                                            <input type="text" value={this.state.donateZip} name="donateZip" onChange={this.handleInputChange} className="form-control" id="donateZip" placeholder="12345" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="InputPhone">Phone</label>
                                            <input type="text" value={this.state.donatePhone} name="donatePhone" onChange={this.handleInputChange} className="form-control" id="donatePhone" placeholder="(972)123-4567" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="InputEmail1">Email</label>
                                            <input type="text" value={this.state.donateEmail} name="donateEmail" onChange={this.handleInputChange} className="form-control" id="donateEmail" placeholder="me@generous.com" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="InputEmail2">Re-enter Email</label>
                                            <input type="text" value={this.state.donateEmail2} name="donateEmail2" onChange={this.handleInputChange} className="form-control" id="donateEmail2" placeholder="me@generous.com" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value={this.state.donateRecurring} name="donateRecurring" onChange={this.handleInputChange} id="donateRecurring" checked />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    Recurring Donation
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value={this.state.donateOneTime} name="donateRecurring" onChange={this.handleInputChange} id="donateOneTime" />
                                                <label className="form-check-label" for="exampleRadios2">
                                                    One Time Donation
                                                </label>
                                            </div>
                                        </div>
                                        {/* building components that will allow me to toggle content depending on recurrence */}


                                        
                                        {/* {this.state.donateDonationValue === "other" ? <DonateForm handleInputChange={this.handleInputChange} value={this.state.donateDonationValueCustom} /> : ""} */}
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                {/* in the on submit function run this function to determine value */}
                                {/* DoTheyKnowTheirEmail();
                                ActualDonationValue(); */}
                                {/* call the 'ActualDonationValue' function on submit to determine what the actual value is */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        Something
                    </div>
                    <div className="col-md-4">
                        Something
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate;