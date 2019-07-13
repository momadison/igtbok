import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" id={props.id} {...props} />
      <small className="form-text">{props.small}</small>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function Select(props) {
    return (
      <>
      <small className="form-text">{props.small}</small>
    <select className="form-control" id={props.id} {...props}>
        <option value="default value" disabled hidden>Choose here</option>
        {props.options.map( (value) => {
            return <option key={value}>{value}</option>
        })}
    </select>
    </>
    )
}

export function FormBtn(props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
}

export function FormCheck(props) {
  return (
    <div></div>
  )
}


