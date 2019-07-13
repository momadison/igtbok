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
    );
}

export default Recurring;