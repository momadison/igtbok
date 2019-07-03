import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Donate from "./pages/Donate";
import About from "./pages/About/";
import Impact from "./pages/Impact";
//import HopePearls from "./pages/HopePearls";
import Gallery from "./pages/Gallery";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Sandbox from "./components/Sandbox";
import Wizard from "./components/Wizard";
import Drag from "./components/Drag";

// components
import Nav from "./components/Nav";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedin: false
    }
  }

  handleLogin = (action) => {
    if(action === 'login'){
      this.setState({
        loggedin: true
      })
    } else if (action === 'logout'){
      this.setState({
        loggedin: false
      })
    }
  }

  render(){
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/about" component={About} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/hopepearls" component={Sandbox} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/resources" component={Drag} />
          <Route exact path="/blog" component={Wizard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/loggedin#" component={Main} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
