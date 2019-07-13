import React from "react";

function CardPayment(props) {
    return (
        <div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="CardNumber">Card Number</label>
                    <input type="text" value={props.donateCardNumber} name="donateCardNumber" onChange={props.handleInputChange} className="form-control" id="donateCardNumber" placeholder="16 digits" />
                </div>
                <div className="form-group col">
                    <label htmlFor="CardCVV">CVV</label>
                    <input type="text" value={props.donateCardCVV} name="donateCardCVV" onChange={props.handleInputChange} className="form-control" id="donateCardCVV" placeholder="123" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="CardDate">Expiration Date (mm/yy)</label>
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <select value={props.donateCardMonth} name="donateCardMonth" onChange={props.handleInputChange} className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div className="form-group col">
                    <select value={props.donateCardYear} name="donateCardYear" onChange={props.handleInputChange} className="form-control">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default CardPayment;