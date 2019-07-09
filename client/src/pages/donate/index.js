import React, { Component } from "react";
import DonateForm from "../../components/donateFormPriceOther/index.js";
import CardPayment from "../../components/DonateCard/index.js"
import BankWithdrawl from "../../components/DonateBank/index.js"
import Recurring from "../../components/DonateRecurring/index.js";
import axios from "axios";
// import OneTime from "../../components/donateOnetime/index.js";


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
        donateCardNumber: "",
        donateCardCVV: "",
        donateCardMonth: "",
        donateCardYear: "",
        donateBankRouting: "",
        donateBankAccount: "",
        donateBankReAccount: "",
        donateBankAccountType: "",
        donateRecurring: "",
        donateRecurringDate: "",
        donatePaymentType: "",
        volunteerFirstName: "",
        volunteerMiddleName: "",
        volunteerLastName: "",
        volunteerEmailAddress: "",
        volunteerPhone: "",
        volunteerCompany: "",
        volunteerWhy: "",
        volunteerPrevious: "",
        volunteerExpertise: "",
        volunteerAdvocateTeaching: false,
        volunteerFundraising: false,
        volunteerSocialMedia: false

    }
    checkboxHandleInputString = event => {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    DatePickerOnChange = donateRecurringDate => this.setState({ donateRecurringDate })

    ActualDonationValue() {
        if (Number.isInteger(parseInt(this.state.donateDonationValueCustom))) {
            this.setState({ donateActualDonationValue: this.state.donateDonationValueCustom });
        } else if (Number.isInteger(parseInt(this.state.donateDonationValue))) {
            this.state.donateActualDonationValue.setState(this.state.donateDonationValue);
        } else if (Number.isInteger(parseInt(this.state.donateDonationValue))) {
            this.state.donateDonationValueCustom.setState("");
        } else {
            alert("you must enter a donation value")
        }
    }
    DonateSubmitVerification = event => {
        event.preventDefault();
        if (this.state.donateFirstName === "") {
            alert("Please enter your first name.")
        } else if (this.state.donateLastName === "") {
            alert("Please enter your last name.")
        } else if (this.state.donateAddress === "") {
            alert("Please enter your address.")
        } else if (this.state.donateCity === "") {
            alert("Please enter your city.")
        } else if (this.state.donateState === "") {
            alert("Please enter your state.")
        } else if (!this.state.donateEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || this.state.donateEmail2 !== this.state.donateEmail) {
            alert("Please enter a valid email address & make sure it is the same in both entry fields.")
        } else if (this.state.donateBankAccount !== this.state.donateBankReAccount) {
            alert("The bank account number you entered in the 'Account Number' field doesn't match the account number you entered into the 'Re-enter Account No.' field.")
        }
        this.ActualDonationValue();
    }
    VolunteerSubmitVerification = event => {
        event.preventDefault();
        // is there a first name
        if (this.state.volunteerFirstName === "") {
            alert("Please enter your first name.")
        } else if (this.state.volunteerLastName === "") {
            alert("Please enter your last name.")
        } else if (!this.state.volunteerEmailAddress.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            alert("Please enter a valid email address.")
        } else if (this.state.volunteerPhone === "") {
            alert("Please enter your phone number.")
        } else if (this.state.volunteerWhy === "") {
            alert("Please tell why you want to volunteer")
        }
        axios.post("/api/email", this.state).then(res => console.log(res));
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Donating Money</h2>
                        <div className="card">
                            <div className="cardBody">
                                <form className="p-2" onSubmit={this.DonateSubmitVerification}>
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
                                            <input type="text" value={this.state.donateCity} name="donateCity" onChange={this.handleInputChange} className="form-control" id="donateCity" placeholder="Dallas" />
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
                                            <label for="exampleFormControlTextarea1">Comments</label>
                                            <textarea value={this.state.donateComments} name="donateComments" onChange={this.handleInputChange} className="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value="card" name="donatePaymentType" onChange={this.handleInputChange} />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    Card Payment
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value="bank" name="donatePaymentType" onChange={this.handleInputChange} />
                                                <label className="form-check-label" for="exampleRadios2">
                                                    Bank Withdrawl
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value="recurring" name="donateRecurring" onChange={this.handleInputChange} />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    Recurring
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value="oneTime" name="donateRecurring" onChange={this.handleInputChange} />
                                                <label className="form-check-label" for="exampleRadios2">
                                                    One Time
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* turn this on once components are built */}

                                    {this.state.donatePaymentType == "" ? "" : this.state.donatePaymentType == "card" ?
                                        < CardPayment
                                            handleInputChange={this.handleInputChange}
                                            donateCardNumber={this.state.donateCardNumber}
                                            donateCardCVV={this.state.donateCardCVV}
                                            donateCardMonth={this.state.donateCardMonth}
                                            donateCardYear={this.state.donateCardYear} /> :
                                        < BankWithdrawl
                                            handleInputChange={this.handleInputChange}
                                            donateBankRouting={this.state.donateBankRouting}
                                            donateBankAccount={this.state.donateBankAccount}
                                            donateBankReAccount={this.state.donateBankReAccount}
                                            donateBankAccountType={this.state.donateBankAccountType}
                                        />}
                                    {this.state.donateRecurring == "recurring" ? < Recurring onChange={this.DatePickerOnChange} value={this.state.donateRecurringDate} /> : ""}

                                    {/* {this.state.donateDonationValue === "other" ? <DonateForm handleInputChange={this.handleInputChange} value={this.state.donateDonationValueCustom} /> : ""} */}

                                    <button type="submit" className="btn btn-primary" id="donateSubmit">Submit</button>
                                </form>
                                {/* in the on submit function run this function to determine value */}
                                {/* DoTheyKnowTheirEmail();
                                ActualDonationValue(); */}
                                {/* call the 'ActualDonationValue' function on submit to determine what the actual value is */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Volunteer Form</h2>
                        <div className="card">
                            <div className="cardBody">
                                <form className="p-2" onSubmit={this.VolunteerSubmitVerification}>
                                    <p>Please fill out our volunteer form if you wish to volunteer your time to our organization and support your
                                        local community.  Once we receive your application, it will be reviewed and we will contact you with more
                                    information.</p>
                                    <h5>Contact Information</h5>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="volunteerFName">First Name</label>
                                            <input type="text" value={this.state.volunteerFirstName} name="volunteerFirstName" onChange={this.handleInputChange} className="form-control" id="donateFirstName" placeholder="Jane" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="volunteerFName">Middle Name</label>
                                            <input type="text" value={this.state.volunteerMiddleName} name="volunteerMiddleName" onChange={this.handleInputChange} className="form-control" id="donateLastName" placeholder="Jones" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="volunteerLName">Last Name</label>
                                            <input type="text" value={this.state.volunteerLastName} name="volunteerLastName" onChange={this.handleInputChange} className="form-control" id="donateFirstName" placeholder="Smith" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="volunteerEmail">Email Address</label>
                                            <input type="text" value={this.state.volunteerEmailAddress} name="volunteerEmailAddress" onChange={this.handleInputChange} className="form-control" id="donateLastName" placeholder="me@volunteer.com" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="volunteerPhone">Phone</label>
                                            <input type="text" value={this.state.volunteerPhone} name="volunteerPhone" onChange={this.handleInputChange} className="form-control" id="donateFirstName" placeholder="(123)456-7890" />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="volunteerCompany">Company</label>
                                            <input type="text" value={this.state.volunteerCompany} name="volunteerCompany" onChange={this.handleInputChange} className="form-control" id="donateLastName" placeholder="Volunteer &amp; Co" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label for="volunteerWhy">Please explain why you want to volunteer for It's Going To Be Ok?</label>
                                            <textarea value={this.state.volunteerWhy} name="volunteerWhy" onChange={this.handleInputChange} className="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label for="volunteerPreviousExperience">List any current or previous volunteer experience.If None, please type N/A</label>
                                            <textarea value={this.state.volunteerPrevious} name="volunteerPrevious" onChange={this.handleInputChange} className="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label for="volunteerExpertise">Areas of Expertise</label>
                                            <textarea value={this.state.volunteerExpertise} name="volunteerExpertise" onChange={this.handleInputChange} className="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" name="volunteerAdvocateTeaching" onChange={this.checkboxHandleInputString} />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Advocate/Teaching
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" name="volunteerFundraising" onChange={this.checkboxHandleInputString} />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Fundraising
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" name="volunteerSocialMedia" onChange={this.checkboxHandleInputString} />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Social Media
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate;