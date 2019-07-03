import React, { useReducer, useRef } from "react";
import Draggabilly from "draggabilly";
import "./drag.css";

function Drag() {
  const inputRef = useRef();

  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "change":
      return inputRef.current.value;
    default:
      return state;
    }
  }, 0);

  // external js: draggabilly.pkgd.js

// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    containment: true
  });
  draggies.push( draggie );
}


  return (
      <>
    <h1>Draggabilly - containment with vanilla JS</h1>
    <div class="container">
        <div class="draggable"></div>
        <div class="draggable"></div>
        <div class="draggable"></div>
    </div>
    </>
  );
}

export default Drag;
