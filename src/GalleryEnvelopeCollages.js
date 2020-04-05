import React from 'react';
import './index.css';
import Statement from './Statement';


export default class GalleryEnvelopeCollages extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding
  }



  render() {

    return (
      <section id="envelope-collages">

        <h2>Security Envelope Collages</h2>

          <div className="gallery">

                 {this.props.filteredEnvelopeCollages.map( item => {


                      return(

                        <div className="art-card"
                             onMouseEnter={ () => {
                               this.props.showStatement(item.statement)}
                             }
                             onMouseLeave={this.props.hideStatement}
                             statement={item.statement}
                             key={item.index}
                             >


                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                               onClick={ () => {
                                 this.props.showModalImage(item.link, item.title, item.year, item.dims, item.price, item.statement)}
                               }
                               onMouseLeave={this.props.closeModalImage}

                              />

                          <div className="art-titlecard-info"><i>{item.title}</i></div>
                          <div className="art-titlecard-info">{item.year}</div>
                          <div className="art-titlecard-info">{item.dims}</div>

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }



}




