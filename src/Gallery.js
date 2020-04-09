import React from 'react';
import './index.css';
// import Statement from './Statement';


export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding
  }



  render() {

    return (
      <section id="gallery">

        <h2></h2>

          <div className="gallery">

                 {this.props.filteredArt.map( item => {


                      return(

                        <div className="art-card"
                             // NOT USING RIGHT NOW
                             // onMouseEnter={ () => {
                             //   this.props.showStatement(item.statement)}
                             // }
                             // onMouseLeave={this.props.hideStatement}
                             // statement={item.statement}
                             // key={item.index}
                             >


                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                               onClick={ () => {
                                 this.props.showModalImage(item.link, item.title, item.year, item.media, item.dims, item.price, item.statement)}
                               }
                               onMouseLeave={this.props.closeModalImage}

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

                          // not using right now
                          // <div className="art-titlecard-info"><i>{item.title}</i></div>
                          // <div className="art-titlecard-info">{item.year}</div>
                          // <div className="art-titlecard-info">{item.dims}</div>


