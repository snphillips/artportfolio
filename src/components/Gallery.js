import React from 'react';
import Masonry from 'react-masonry-css'


export default function Gallery(props) {


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
                 {props.filteredArt.map( (item, key) => {
                    let imageIndex = props.filteredArt.indexOf(item)
                    // console.log("imageIndex as we build the gallery:", imageIndex)

                      return(

                        <div
                          key={key}
                          className="art-card"
                          onClick={ () => {
                          }}>

                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                               onClick={ () => {
                                 props.openModal(imageIndex)
                               }
                               }
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

