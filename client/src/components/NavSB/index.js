import React from "react";

function NavSB(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {props.children}  
  
    </nav>
    );
}

export default NavSB;