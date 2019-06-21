import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sandbox from "./components/Sandbox";
import Table from "./components/Table"

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <div className="container">
        <Route exact path="/" component={Sandbox} />
        <Route exact path="/table" component={Table} />
      </div>
    </div>
  </Router>
    );
  }
}

export default App;
