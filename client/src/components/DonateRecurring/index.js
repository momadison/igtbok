import React from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker';

function Recurring(props) {
    return (
        <div className="Sample">
          <div className="Sample__container">
            <main className="Sample__container__content">
              <DatePicker
                clearAriaLabel="Clear value"
                clockAriaLabel="Toggle clock"
                dayAriaLabel="Day"
                monthAriaLabel="Month"
                nativeInputAriaLabel="Date"
                onChange={props.onChange}
                value={props.value}
                yearAriaLabel="Year"
              />
            </main>
          </div>
        </div>
    //     <div className="row">
    //     <div className="form-group col">
    //         <label htmlFor="RecurringStart">When would you like to start?</label>
    //         <input type="text" value={props.donateRecurringStartDate} name="donateRecurringStartDate" onChange={props.handleInputChange} className="form-control" placeholder="Date to start billing" />
    //     </div>
    //     <div className="form-group col">
    //         <label htmlFor="RecurringInterval">Account Number</label>
    //         <input type="text" value={props.donateBankAccount} name="donateBankAccount" onChange={props.handleInputChange} className="form-control" placeholder="10-12 digits" />
    //     </div>
        
    // </div>
    );
}

export default Recurring;