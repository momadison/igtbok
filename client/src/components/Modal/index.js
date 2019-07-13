import React, { useState } from "react"
import ReactModal from "react-modal"

// function MyModal(props) {

//     const [Modal, setModal] = useState();

//     const closeModal = e => setModal(false);

//       return (
//         <div ml-auto>
//           <button className="btn btn-danger"
//                 onClick={e => {
//                     e.preventDefault();
//                     setModal(true)}}>Edit Selected</button>
//           <ReactModal
//              isOpen={Modal}
//              contentLabel="Minimal Modal Example"
//           >
//               {props.children}
//           </ReactModal>
//         </div>
//       );
//     }

class MyModal extends React.Component {
    state = {
        showModal: false
    }

    closeModal = e => {
        this.setState({showModal: false});
    }
    
    openModal = event => {
        this.setState({showModal: true});
    }

    render() {
        return (
        <div>
          <ReactModal
             isOpen={this.state.showModal}
             contentLabel="Set Table Pricing"
          >
              {this.props.children}
          </ReactModal>
        </div>
      );
    }
}

ReactModal.setAppElement('body')

 export default MyModal;