import React, { Component } from 'react';



// When the user clicks on an image, a modal opens up.

export default class ImageModal extends Component {
  render() {
    return (

      <div className="modal-background"
           style={this.props.parentState.displayModal}
           onClick={this.props.closeModalImage}
           >

        <div className="modal-image-container">

          <img className="image-large"
               src={this.props.parentState.modalImageURL}
               onClick={this.props.closeModalImage}
               alt=""
               />

          <section className="modal-art-info">
            <p>{this.props.parentState.modalTitle}</p>
            <p>{this.props.parentState.modalYear}</p>
            <p>{this.props.parentState.modalDims}</p>
          </section>

        </div>


      </div>

    );
  }
}
