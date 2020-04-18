import React, { Component } from 'react';



// When the user clicks on an image, a modal opens up.
// The modal closes when the user clicks anywhere(closeModalImage),
// though there's also a "close" button.

export default class ImageModal extends Component {
  render() {
    return (

      <div className="modal-background"
           style={this.props.parentState.displayModal}
           onClick={this.props.closeModalImage}>


        <div className="modal-content-container">

            <div className="modal-close-button"
                 onClick={this.props.closeModalImage}>
              <span>
                <svg viewBox="0 0 24 24"
                     width="40"
                     height="40"
                     stroke="currentColor"
                     stroke-width="2"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="css-i6dzq1">
                       <circle cx="12" cy="12" r="10"></circle>
                         <line x1="15" y1="9" x2="9" y2="15"></line>
                           <line x1="9" y1="9" x2="15" y2="15"></line>
                           </svg>
              </span>
            </div>

          <section className="modal-image-container">


            <div className="modal-back-button"
                 onClick={this.props.modalPreviousImage}
                 onMouseOver={this.props.modalPreviousImage}>

              <span>
                <svg viewBox="0 0 24 24"
                     width="40"
                     height="40"
                     stroke="currentColor"
                     stroke-width="2"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                       <circle cx="12" cy="12" r="10"></circle>
                         <polyline points="12 8 8 12 12 16"></polyline>
                           <line x1="16" y1="12" x2="8" y2="12"></line>
                </svg>
              </span>
            </div>

            <img className="image-large"
                 src={this.props.parentState.modalImageURL}
                 onClick={this.props.closeModalImage}
                 alt=""
                 />


            <div className="modal-forward-button"
                 onClick={this.props.modalNextImage}
                 onMouseOver={this.props.modalNextImage}>
              <span>
                <svg viewBox="0 0 24 24"
                     width="40"
                     height="40"
                     stroke="currentColor"
                     stroke-width="2"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                       <circle cx="12" cy="12" r="10"></circle>
                         <polyline points="12 16 16 12 12 8"></polyline>
                           <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </span>
            </div>



          </section>

          <section className="modal-info-container">
            <p><i>{this.props.parentState.modalTitle}</i></p>
            <p>{this.props.parentState.modalYear}</p>
            <p>{this.props.parentState.modalDims}</p>
            <p>{this.props.parentState.modalPrice}</p>
            <p className="modal-statement">
              {this.props.parentState.modalStatement}
            </p>
          </section>

        </div>


      </div>

    );
  }
}
