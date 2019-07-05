import React from "react";

function BankWithdrawl(props) {
    return (
        <div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="BankRouting">Routing Number</label>
                    <input type="text" value={props.donateBankRouting} name="donateBankRouting" onChange={props.handleInputChange} className="form-control" placeholder="9 digits" />
                </div>
                <div className="form-group col">
                    <label htmlFor="BankAccount">Account Number</label>
                    <input type="text" value={props.donateBankAccount} name="donateBankAccount" onChange={props.handleInputChange} className="form-control" placeholder="10-12 digits" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="ReBankAccount">Re-enter Account No.</label>
                    <input type="text" value={props.donateBankReAccount} name="donateBankReAccount" onChange={props.handleInputChange} className="form-control" placeholder="10-12 digits" />
                </div>
                <div className="form-group col">
                <label htmlFor="CardType">Card Type</label>
                    <select name="donateBankAccountType" onChange={props.handleInputChange} className="form-control">
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default BankWithdrawl;