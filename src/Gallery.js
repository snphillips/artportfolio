import React from 'react';
import './index.css';
import Masonry from 'react-masonry-css'


export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    // For use with Masonry package
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };


    return (
      <section id="gallery">

          <div className="gallery">

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid curated-sets-list"
              columnClassName="my-masonry-grid_column"
            >
                 {this.props.filteredArt.map( (item, key) => {

                    let imageIndex = this.props.filteredArt.indexOf(item)
                    // console.log("imageIndex as we build the gallery:", imageIndex)

                      return(

                        <div
                          key={key}
                          className="art-card"
                          onClick={ () => {
                           // this.props.establishImageIndex(imageIndex, () => {
                           // })
                          }}>

                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                               // imageindex={imageIndex}
                               onClick={ () => {
                                 this.props.openModal(imageIndex)
                                 // this.props.establishImageIndex(imageIndex)
                                 // this.props.setModalArtDetails(item.link, item.title, item.year, item.media, item.dims, item.price, item.statement, item.imageShape)
                               }
                               }
                               // style={this.props.parentState.carouselButtonEdgeCase}
                               // onMouseLeave={this.props.closeModalImage}
                              />

                        </div>
                        )

                       })
                 }

            </Masonry>

        </div>

    </section>
  );
  }

}

