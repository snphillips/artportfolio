import React, { Component } from 'react';


export default class ImageModal extends Component {
  render() {
    return (

      <div className="modal-background"
           style={this.props.parentState.displayModal}
           >

        <img className="image-large"
             src={this.props.parentState.modalImageURL}
             onMouseLeave={this.props.closeModalImage}
             alt=""
             />

      </div>

    );
  }
}
