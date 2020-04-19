import React, { Component } from 'react';



// When the user clicks on an image, a carousel opens up.
// The carousel closes when the user clicks anywhere(closeCarouselImage),
// though there's also a "close" X button.

export default class Carousel extends Component {
  render() {




    return (

      <div className="carousel-background"
           style={this.props.parentState.displayCarousel}
           onClick={this.props.closeCarouselImage}
           >

        <div className="carousel-content-container">

          <section className="carousel-left-container"
                   onClick={this.props.carouselPreviousImage}
                   >

            <div className="carousel-back-button">

                <span>
                  <svg viewBox="0 0 24 24"
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



          <section className="carousel-image-container">

            <div>
              <img className="image-large"
                   src={this.props.parentState.carouselImageURL}
                   alt=""
                   />
            </div>

            <div className="carousel-info-container">
              <p><i>{this.props.parentState.carouselTitle}</i></p>
              <p>{this.props.parentState.carouselYear}</p>
              <p>{this.props.parentState.carouselMedia}</p>
              <p>{this.props.parentState.carouselDims}</p>
              <p>{this.props.parentState.carouselPrice}</p>
              <p className="carousel-statement">{this.props.parentState.carouselStatement}</p>
            </div>

          </section>




          <section className="carousel-right-container"
          >

            <div className="carousel-close-button"
                 onClick={this.props.closeCarouselImage}
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

            <div className="carousel-next-button"
                 onClick={this.props.carouselNextImage}
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
