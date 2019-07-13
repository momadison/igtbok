import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from "./pages/Main/";
import Donate from "./pages/Donate/";
import About from "./pages/About/";
import Impact from "./pages/Impact/";
import Blog from "./pages/Blog/";
// import HopePearls from "./pages/HopePearls";
import Gallery from "./pages/Gallery";
import Programs from "./pages/Programs";
// import Blog from "./pages/Blog";
import Sandbox from "./components/Sandbox";
import Wizard from "./components/Wizard"
import Admin from "./pages/Admin"
import BoxOffice from "./components/BoxOffice";
import PriceSetup from "./components/PriceSetup"

import PrivateRoute from './components/Auth/PrivateRoute'

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Donate/" component={Donate} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Impact" component={Impact} />
          <Route exact path="/hopepearls" component={Sandbox} />
          <Route exact path="/resources" component={PriceSetup} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/Blog/" component={Blog} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/blog" component={Wizard} />
<<<<<<< HEAD
          <Route exact path="/contact" component={BoxOffice} />
=======

          <Route exact path="/Contact" component={Contact} />
>>>>>>> 732d85f377b5d4795a4671d66e2d7e7600116f55
          <Route exact path="/loggedin" component={() => <h1 style={{textAlign: 'center'}}>Logged In Successfully</h1>} />
          <Route exact path="/loggedout" component={() => <h1 style={{textAlign: 'center'}}>Logged Out Successfully</h1>} />
          <Route exact path="/unauthorized" component={() => <h1 style={{textAlign: 'center'}}>You are not authorized to access this page</h1>} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path='/private' component={PrivateRoute} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
