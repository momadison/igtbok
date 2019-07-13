import React from "react";

function NavSB(props) {
    return (
    <nav className="navbar navbar-light bg-light"
        style={{height: "100px"}}>
            {props.children}  
    </nav>
    );
}

export default NavSB;