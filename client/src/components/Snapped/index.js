import React from "react";
import Snap from "snapsvg-cjs";

class Snapped extends React.Component{

  componentDidMount() {
    var s = Snap("#svg") 
    // + this.props.keyId.toString())

    // s.line(30, 30, this.props.width-30, 30).attr({stroke: '#000'})

    var myCircle = s.circle(30,30,20)

    myCircle.attr({ stroke: '#123456', 'strokeWidth': 3,
       fill: '#FF5733', 'opacity': 0.7 })
   }

   render () {
    const idKey = "svg";
    // + this.props.keyId.toString()
   return (
     <svg style={this.props.style} 
           width={this.props.width} height="60" id={idKey}/>
   )
 }
}

export default Snapped