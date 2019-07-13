import React from "react";

function Checkout(props) {
    return (
        <form>
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="String" 
                        className="form-control" 
                        id="firstName" 
                        placeholder="First Name" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    );
}

export default Checkout;