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

          <section className="modal-left-container">

            <div className="modal-back-button"
                   onClick={this.props.modalPreviousImage}
                   onMouseOver={this.props.modalPreviousImage}>

                <span>
                  <svg viewBox="0 0 24 24"
                       width="36"
                       height="36"
                       stroke="currentColor"
                       stroke-width="1"
                       fill="none"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       class="css-i6dzq1">
                         <line x1="19" y1="12" x2="5" y2="12"></line>
                           <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </span>
              </div>
          </section>



          <section className="modal-image-container">

            <div>
              <img className="image-large"
                 src={this.props.parentState.modalImageURL}
                 onClick={this.props.closeModalImage}
                 alt=""
                 />
            </div>

          <div className="modal-info-container">
            <p><i>{this.props.parentState.modalTitle}</i></p>
            <p>{this.props.parentState.modalYear}</p>
            <p>{this.props.parentState.modalDims}</p>
            <p>{this.props.parentState.modalPrice}</p>
            <p className="modal-statement">
              {this.props.parentState.modalStatement}
            </p>
          </div>

          </section>




          <section className="modal-right-container">

            <div className="modal-close-button"
                 onClick={this.props.closeModalImage}>
              <span>
                <svg viewBox="0 0 24 24"
                     width="36"
                     height="36"
                     stroke="currentColor"
                     stroke-width="1"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="css-i6dzq1">
                       <line x1="18" y1="6" x2="6" y2="18"></line>
                       <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </div>

            <div className="modal-forward-button"
                 onClick={this.props.modalNextImage}
                 onMouseOver={this.props.modalNextImage}>
              <span>
                <svg viewBox="0 0 24 24"
                     width="36"
                     height="36"
                     stroke="currentColor"
                     stroke-width="1"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="css-i6dzq1">
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
