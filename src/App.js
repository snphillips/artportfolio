import React, { useState, useRef,useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import CV from './components/CV';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import Footer from './components/Footer';
import art from './ArtArrays/art';


export default function App(props) {

  const [filteredArt, setFilteredArt] = useState([]);
  const [displayModal, setDisplayModal] = useState({'display': 'none'});
  const [modalImageIndex, setModalImageIndex] = useState();
  const [modalImageURL, setModalImageURL] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalYear, setModalYear] = useState('');
  const [modalDims, setModalDims] = useState('');
  const [modalMedia, setModalMedia] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  const [modalStatement, setModalStatement] = useState('');
  const [modalImageOrientation, setModalImageOrientation] = useState('landscape');
  

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
    accompanying each image */
  function openModal(imageIndex) {
    setModalImageIndex(imageIndex)
    setDisplayModal({'display': "block"})
  }
  // This only runs if the modalImageIndex chages
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      // console.log("First update! modalImageIndex should be undeined", modalImageIndex)
      return;
    } else {
      // console.log("Not first update. modalImageIndex", modalImageIndex)
      function establishModalArtDetails(imageIndex){
        setModalTitle(filteredArt[modalImageIndex].title);
        setModalImageOrientation( filteredArt[modalImageIndex].imageShape)  
        setModalImageURL(filteredArt[modalImageIndex].link)
        setModalYear(filteredArt[modalImageIndex].year)
        setModalMedia(filteredArt[modalImageIndex].media)
        setModalDims(filteredArt[modalImageIndex].dims)
        setModalPrice(filteredArt[modalImageIndex].price)
        setModalStatement(filteredArt[modalImageIndex].statement)
      }
      establishModalArtDetails()

      /* 
      Figure out if the back and forward buttons should be displayed.
      Don't display the modal back arrows if the user is viewing
      the first image. Don't display the modal forward arrows if
      the user is viewing the last image. 
      */
      function modalDisplayForwardBackButtons(){
        if (modalImageIndex === filteredArt.length - 1) {
          // console.log(`5) image index is:`, modalImageIndex , `Don't display next arrow`)
          document.getElementById('modal-next-button').style.display = 'none'
          document.getElementById('modal-back-button').style.display = 'block'
        }
          else if (modalImageIndex === 0) {
            // console.log(`Image index is:`, modalImageIndex,  `Don't display back arrow`)
            document.getElementById('modal-back-button').style.display = 'none'
            document.getElementById('modal-next-button').style.display = 'block'
          } else {
              // console.log(`Image index is:`, modalImageIndex,  `Both arrows should appear`)
              document.getElementById('modal-back-button').style.display = 'block'
              document.getElementById('modal-next-button').style.display = 'block'
          }
      }
          modalDisplayForwardBackButtons()
        }
  }, [modalImageIndex]);


  // run when setModalImageOrientation updates
  // not working right now. Is it running at the wrong time?
  useEffect( (modalImageOrientation) => {
    /* 
    The art image dimensions are a mixture of landscape and portrait
    or square. They can't all be displayed with the same width or
    they'd blow out the user's screen. Every image has a key value
    pair in the .json where I indicate what type of image is it:
    lanscape, portrait or square. This function sets the image 
    max-width based on what kind of image it is. 
    */
    function landscapeOrPortrait() {

      let imageOrientation = modalImageOrientation 

      if (imageOrientation === "landscape") {
          console.log(modalTitle, "is:", imageOrientation)
          document.querySelector('#modal-image').style.maxWidth = "700px";
          document.querySelector('.modal-info-container').style.maxWidth = "700px";
      } else if (imageOrientation === "portrait") {
  
          console.log(modalTitle, "is:", imageOrientation)
          document.querySelector('#modal-image').style.maxWidth = "450px";
          document.querySelector('.modal-info-container').style.maxWidth = "450px";
      } else {
          console.log(modalTitle, "is:", imageOrientation)
          document.querySelector('#modal-image').style.maxWidth = "500px";
          document.querySelector('.modal-info-container').style.maxWidth = "500px";
      }
    }
    landscapeOrPortrait()
  }, [modalImageIndex])



/*
This function applies both to the arrow buttons on the site &
the arrow buttons on the keyboard.
Tf the user hits the back arrown on their keyboard on the
first image, the modal closes.
*/
function modalPreviousImage(imageIndex) {
    let previousImageIndex = modalImageIndex - 1
    if (previousImageIndex  < 0) {
      closeModal()
    } else {
      setModalImageIndex(previousImageIndex)
    }
  }

  
  /* 
  this function applies both to the modal arrow buttons &
  the arrow buttons on the keyboard.
  If the user hits the forward arrow on their keyboard on the last image,
  the modal closes.
  */
  function modalNextImage(imageIndex) {
    let nextImageIndex =  modalImageIndex + 1
    if (nextImageIndex > filteredArt.length - 1) {
      closeModal()
    } else {
      setModalImageIndex(nextImageIndex)
    }
  }
 

  // This simply changes the css display class from "block" to "none"
  function closeModal() {
    // console.log("close modal")
    setDisplayModal({'display': 'none'})
  }

  // Run this when app first loads
  useEffect(() => {
    function filterIncludeInGallery(){ 
      setFilteredArt( art.filter(includeInGalleryTrue) )
      // console.log("filteredArt", filteredArt)
    };
      //  ==================================
      // This determines which images from the art json should be shown
      //  only display images from .json
      //  1) if includeingallery === true, return it...meaning keep it
      //  2) apply the above function as a filter to the states
      //  ==================================
        const includeInGalleryTrue = (item) => {
          return item.includeingallery === true;
        };

       filterIncludeInGallery()

      //  ==================================
      //  Arrow keys
      //  ==================================
      const keyAction = (event) => {
        // console.log("event:", event)
        let whichKey = event.keyCode;
        switch (whichKey) {
          case 39:
            console.log("forward arrow key pushed. Next image.")
            this.modalNextImage()
          break;
          case 37:
            console.log("back arrow key pushed. Previous image")
            this.modalPreviousImage()
          break;
          case 38:
            console.log("up arrow key pushed. Previous image.")
            this.modalPreviousImage()
          break;
          case 40:
            console.log("down arrow key pushed Next image.")
            this.modalNextImage()
          break;
          default:
            // console.log("default")
        }
      }
      // the hotkeys
      document.onkeyup = (event) => {
        keyAction(event);
      }
    }, []);


//  ==================================
//  The render
//  ==================================
    return(

    <div className="App container">

      <aside id="sidebar">
        <Header />
        <Navigation />
        <Footer />
      </aside>

      <aside id="ghost-sidebar">
      </aside>

      <section className="content">

        <Gallery
          filteredArt={filteredArt}
          openModal={openModal}
        />

        <Modal
          displayModal={displayModal}
          modalPreviousImage={modalPreviousImage}
          modalNextImage={modalNextImage}
          closeModal={closeModal}
          modalMedia={modalMedia}
          modalImageURL={modalImageURL}
          modalPrice={modalPrice}
          modalStatement={modalStatement}
          modalTitle={modalTitle}
          modalYear={modalYear}
          modalDims={modalDims}
          modalImageOrientation={modalImageOrientation}
        />

        <About />
        <Contact />
        <CV />

      </section>
    </div>
  );

}


