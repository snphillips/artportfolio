import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import Header from './components/Header.tsx';
import CV from './components/CV.tsx';
import Navigation from './components/Navigation.tsx';
import Contact from './components/Contact.tsx';
import About from './components/About.tsx';
import Gallery from './components/Gallery.tsx';
import Modal from './components/Modal.tsx';
import Footer from './components/Footer.tsx';
import art from './ArtArrays/art';

export default function App() {
  const [filteredArt, setFilteredArt] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalNextButton, setDisplayModalNextButton] = useState(false);
  const [displayModalBackButton, setDisplayModalBackButton] = useState(false);
  const [modalPropertiesMaxWidth, setModalPropertiesMaxWidth] = useState('500px');
  const [modalImageIndex, setModalImageIndex] = useState();
  const [modalState, setModalState] = useState({
    modalImageOrientation: 'landscape',
    modalImageURL: '',
    modalTitle: '',
    modalYear: '',
    modalMedia: '',
    modalDims: '',
    modalPrice: '',
    modalStatement: '',
  });

  /*
  We can make the useEffect hook not run on initial render
  by creating a variable with useRef hook to keep tracking
  of when the first render is done.
  Set the variable’s value to true initially.
  When the component is rendered the first time,
  set the variable to false.
  */
  const firstUpdate = useRef(true);

  /*
 ==================================
 modal: the expanded image
 ==================================
 1) Indicate which image the user has clicked
 2) Change the css display class from "none" to "block"
 3) In the useEffect(), update a bunch of information
    accompanying each image 
 */
  function openModal(imageIndex) {
    setModalImageIndex(imageIndex);
    // setDisplayModal({ display: 'block' });
    setDisplayModal(true);
  }

  // This only runs if the modalImageIndex changes
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      // console.log("First update! modalImageIndex should be undefined", modalImageIndex)
      return;
    } else {
      // console.log("Not first update. modalImageIndex", modalImageIndex)
      setModalState((prevState) => {
        return {
          modalImageOrientation: filteredArt[modalImageIndex].imageShape,
          modalTitle: filteredArt[modalImageIndex].title,
          modalImageURL: filteredArt[modalImageIndex].link,
          modalYear: filteredArt[modalImageIndex].year,
          modalDims: filteredArt[modalImageIndex].dims,
          modalMedia: filteredArt[modalImageIndex].media,
          modalPrice: filteredArt[modalImageIndex].price,
          modalStatement: filteredArt[modalImageIndex].statement,
        };
      });

      /* 
      Figure out if the back and forward buttons should be displayed.
      Don't display the modal back arrows if the user is viewing
      the first image. Don't display the modal forward arrows if
      the user is viewing the last image. 
      */

      //     if (modalImageIndex === filteredArt.length - 1) {
      //       console.log(`image index is:`, modalImageIndex, `Don't display next arrow`);
      //       document.getElementById('modal-next-button').style.display = 'none';
      //       document.getElementById('modal-back-button').style.display = 'block';
      //     } else if (modalImageIndex === 0) {
      //       console.log(`Image index is:`, modalImageIndex, `Don't display back arrow`);
      //       document.getElementById('modal-back-button').style.display = 'none';
      //       document.getElementById('modal-next-button').style.display = 'block';
      //     } else {
      //       console.log(`Image index is:`, modalImageIndex, `Both arrows should appear`);
      //       document.getElementById('modal-back-button').style.display = 'block';
      //       document.getElementById('modal-next-button').style.display = 'block';
      //     }
      //   }
      // }, [modalImageIndex]);

      if (modalImageIndex === filteredArt.length - 1) {
        console.log(`image index is:`, modalImageIndex, `Don't display next arrow`);
        setDisplayModalBackButton(true);
        setDisplayModalNextButton(false);
        // document.getElementById('modal-next-button').style.display = 'none';
        // document.getElementById('modal-back-button').style.display = 'block';
      } else if (modalImageIndex === 0) {
        console.log(`Image index is:`, modalImageIndex, `Don't display back arrow`);
        setDisplayModalBackButton(false);
        setDisplayModalNextButton(true);
        // document.getElementById('modal-back-button').style.display = 'none';
        // document.getElementById('modal-next-button').style.display = 'block';
      } else {
        console.log(`Image index is:`, modalImageIndex, `Both arrows should appear`);
        setDisplayModalBackButton(true);
        setDisplayModalNextButton(true);
        // document.getElementById('modal-back-button').style.display = 'block';
        // document.getElementById('modal-next-button').style.display = 'block';
      }
    }
  }, [modalImageIndex]);

  /* 
  The art image dimensions are a mixture of landscape and portrait
  or square. They can't all be displayed with the same width or
  some images would blow out the user's screen. Every image has a 
  key value pair in the .json where I indicate what type of image
  is it: landscape, portrait or square. This function sets the image 
  max-width based on what kind of image it is. 
  */
  useEffect(() => {
    if (modalState.modalImageOrientation === 'landscape') {
      setModalPropertiesMaxWidth('700px');
    } else if (modalState.modalImageOrientation === 'portrait') {
      setModalPropertiesMaxWidth('450px');
    }
  }, [modalState.modalImageOrientation]);

  /*
This function applies both to the arrow buttons on the site &
the arrow buttons on the keyboard.
If the user hits the back arrow on their keyboard on the
first image, the modal closes.
*/
  function modalPreviousImage(imageIndex) {
    let previousImageIndex = modalImageIndex - 1;
    if (previousImageIndex < 0) {
      closeModal();
    } else {
      setModalImageIndex(previousImageIndex);
    }
  }

  /* 
  this function applies both to the modal arrow buttons &
  the arrow buttons on the keyboard.
  If the user hits the forward arrow on their keyboard on the last image,
  the modal closes.
  */
  function modalNextImage(imageIndex) {
    let nextImageIndex = modalImageIndex + 1;
    if (nextImageIndex > filteredArt.length - 1) {
      closeModal();
    } else {
      setModalImageIndex(nextImageIndex);
    }
  }

  // This simply changes the css display class from "block" to "none"
  function closeModal() {
    // setDisplayModal({ display: 'none' });
    setDisplayModal(false);
  }

  // Run this useEffect when app first loads
  // The passed in empty array doesn't change,
  // so this useEffect doesn't run again
  useEffect(() => {
    function filterIncludeInGallery() {
      setFilteredArt(art.filter(includeInGalleryTrue));
    }
    //  ==================================
    // This determines which images from the art json should be shown
    //  only display images from .json
    //  1) if includeingallery === true, return it...meaning keep it
    //  2) apply the above function as a filter to the states
    //  ==================================
    const includeInGalleryTrue = (item) => {
      return item.includeingallery === true;
    };

    filterIncludeInGallery();

    //  ==================================
    //  Arrow keys
    //  ==================================
    const keyAction = (event) => {
      let whichKey = event.keyCode;
      switch (whichKey) {
        case 39:
          console.log('forward arrow key pushed. Next image.');
          this.modalNextImage();
          break;
        case 37:
          console.log('back arrow key pushed. Previous image');
          this.modalPreviousImage();
          break;
        case 38:
          console.log('up arrow key pushed. Previous image.');
          this.modalPreviousImage();
          break;
        case 40:
          console.log('down arrow key pushed Next image.');
          this.modalNextImage();
          break;
        default:
      }
    };
    // the hotkeys
    document.onkeyup = (event) => {
      keyAction(event);
    };
  }, []);

  //  ==================================
  //  The render
  //  ==================================
  return (
    <div className='App container'>
      <aside id='sidebar'>
        <Header />
        <Navigation />
        <Footer />
      </aside>

      <aside id='ghost-sidebar'></aside>

      <section className='content'>
        <Gallery filteredArt={filteredArt} openModal={openModal} />

        <Modal
          modalPreviousImage={modalPreviousImage}
          modalNextImage={modalNextImage}
          displayModal={displayModal}
          closeModal={closeModal}
          modalState={modalState}
          modalPropertiesMaxWidth={modalPropertiesMaxWidth}
          displayModalNextButton={displayModalNextButton}
          displayModalBackButton={displayModalBackButton}
        />

        <About />
        <Contact />
        <CV />
      </section>
    </div>
  );
}
