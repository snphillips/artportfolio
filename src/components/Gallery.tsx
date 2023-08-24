import React from 'react';
import Masonry from 'react-masonry-css';

type Props = {
  filteredArt: any[],
  openModal: (number) => void
};

export default function Gallery({ filteredArt, openModal }: Props) {
  // For use with Masonry package
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  console.log('filtered art', filteredArt)

  return (
    <section id='gallery'>
      <div className='gallery'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid curated-sets-list'
          columnClassName='my-masonry-grid_column'
        >
          {filteredArt.map((item, key) => {
            let imageIndex = filteredArt.indexOf(item);

            return (
              <div key={key} className='art-card' onClick={() => {}}>
                <img
                  className='art-img'
                  src={item.link}
                  alt={item.title}
                  onClick={() => {
                    openModal(imageIndex);
                  }}
                />
              </div>
            );
          })}
        </Masonry>
      </div>
    </section>
  );
}
