import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Donate from "./pages/Donate";
import About from "./pages/About/";
import Impact from "./pages/Impact";
import HopePearls from "./pages/HopePearls";
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


function App() {
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
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;