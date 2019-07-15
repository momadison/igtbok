import React, { useState } from "react"
import ReactModal from "react-modal"

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