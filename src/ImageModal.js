import React, { Component } from 'react';



// When the user clicks on an image, a modal opens up.

export default class ImageModal extends Component {
  render() {
    return (

      <div className="modal-background"
           style={this.props.parentState.displayModal}
           onClick={this.props.closeModalImage}
           >

        <div className="modal-content-container">

          <section className="modal-image-container">
            <img className="image-large"
               src={this.props.parentState.modalImageURL}
               onClick={this.props.closeModalImage}
               alt=""
               />
          </section>

          <section className="modal-info-container">
            <p><i>{this.props.parentState.modalTitle}</i></p>
            <p>{this.props.parentState.modalYear}</p>
            <p>{this.props.parentState.modalDims}</p>
            <p>{this.props.parentState.modalPrice}</p>
            <p className="modal-statement">{this.props.parentState.modalStatement}</p>
          </section>

        </div>


      </div>

    );
  }
}
