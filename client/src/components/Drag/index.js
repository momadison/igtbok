import React from "react";
import { Component } from "react"

let tableArray = [{seat: "seat01", x: "", y: ""},
                {seat: "seat02", x: "", y: ""},
                {seat: "seat03", x: "", y: ""},
                {seat: "seat04", x: "", y: ""},
                {seat: "seat05", x: "", y: ""},
                {seat: "seat06", x: "", y: ""}  ];

let seatArray = [{seat: "seat01", x: "", y: ""},
                {seat: "seat02", x: "", y: ""},
                {seat: "seat03", x: "", y: ""},
                {seat: "seat04", x: "", y: ""},
                {seat: "seat05", x: "", y: ""},
                {seat: "seat06", x: "", y: ""}  ];

class Drag extends Component {
           
    render() {
      return(
        <>
      {tableArray.map( (table) => {
        return (
          <>
          <div>yo</div>
          {seatArray.map( (seat) => {
            return (
            <div>dawg</div>
            )
          })}
          </>
        )
      })}
        </>
      )
    }
}

export default Drag;
