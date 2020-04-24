import React from 'react';
import './index.css';


export default class Gallery extends React.Component {
  // constructor(props) {
  //   super(props);

  //  // "this" binding

  // }



  render() {

    return (
      <section id="gallery">

          <div className="gallery">



                 {this.props.filteredArt.map( item => {

                    let imageIndex = this.props.filteredArt.indexOf(item)
                    // console.log("imageIndex as we build the gallery:", imageIndex)


                      return(

                        <div className="art-card"

                               onClick={ () => {
                                 this.props.establishImageIndex(imageIndex, () => {
                                 })
                               }
                               }>

                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                               onClick={ () => {
                                 this.props.openModal(item.link, item.title, item.year, item.media, item.dims, item.price, item.statement, item.imageShape)}
                               }
                               // style={this.props.parentState.carouselButtonEdgeCase}
                               // onMouseLeave={this.props.closeModalImage}
                              />

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }




}

