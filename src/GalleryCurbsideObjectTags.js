import React from 'react';
import './index.css';


export default class GalleryCurbsideObjectTags extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding

  }





  render() {
    return (
      <section id="curbside-tags">
       <h2>Curbside Object Status Tags</h2>
        <div className="gallery">

          {this.props.filteredCurbsideObjectTags.map( item => {

            return(

              <div className="art-card"
                   key={item.index} >
                <img className="art-img"
                     src={item.link}
                     alt={item.title} />
              </div>

              )
             })
            }

       </div>
     </section>
  );
  }



}

                // <div className="art-titlecard-info"><i>{item.title}</i></div>
