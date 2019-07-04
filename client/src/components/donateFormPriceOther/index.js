import React from "react";

function DonateForm(props) {
    return (
        <>
        <div>
            <input onChange={props.handleInputChange} value={props.donateDonationValueCustom} name="donateDonationValueCustom" type="text" className="form-control" placeholder="Enter your donation amount"/>
        </div>
        {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
            <label className="form-check-label" for="gridCheck1">
            back to selection options
            </label>
        </div> */}
        </>
    );
}
        
export default DonateForm;