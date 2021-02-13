import React, { Component } from 'react';


// =========================================================
// When the user clicks on an image, a modal opens up.
// The modal closes when the user clicks "close" X button.
// There are forward and back buttons that allow the user
// to view all images in modal view
// =========================================================

export default class Modal extends Component {
  render() {


    return (

      <div
        className="modal-background"
        style={this.props.parentState.displayModal}
        onClick={this.props.closeModal}
      >

        <div className="modal-content-container">

          <section className="modal-left-container">

            <div
              id="modal-back-button"
              style={this.props.parentState.modalDisplayForwardBackButtons}
              onClick={ () => {
                let imageIndex = this.props.parentState.modalImageIndex - 1
                this.props.modalPreviousImage(imageIndex)
              }}
                 >
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </span>
              </div>
          </section>


          <section className="modal-image-and-info-container">

            <div className="modal-image-container">
              <img id="modal-image"
                   src={this.props.parentState.modalImageURL}
                   alt=""
                   />
            </div>

            <div className="modal-info-container">
              <p><i>{this.props.parentState.modalTitle}</i></p>
              <p>{this.props.parentState.modalYear}</p>
              <p>{this.props.parentState.modalMedia}</p>
              <p>{this.props.parentState.modalDims}</p>
              <p>{this.props.parentState.modalPrice}</p>
              <p className="modal-statement">{this.props.parentState.modalStatement}</p>
            </div>

          </section>


          <section className="modal-right-container">

            <div className="modal-close-button"
                 onClick={this.props.closeModal}
                 >
              <span>
                <svg viewBox="0 0 24 24"
                     width="36"
                     height="36"
                     stroke="currentColor"
                     strokeWidth="1"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round">
                       <line x1="18" y1="6" x2="6" y2="18"></line>
                       <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </div>

            <div id="modal-next-button"
                 style={this.props.parentState.modalDisplayForwardBackButtons}
                 onClick={ () => {

                    let imageIndex = this.props.parentState.modalImageIndex + 1
                    this.props.modalNextImage(imageIndex)
                  }
                  }
                 >
              <span>
                <svg
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>

          </section>

        </div>


      </div>

    );
  }
}
