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
  // const [showingArt, setShowingArt] = useState('');
  const [modalStatement, setModalStatement] = useState('');
  const [displayModal, setDisplayModal] = useState({'display': 'none'});
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImageURL, setModalImageURL] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalYear, setModalYear] = useState('');
  const [modalDims, setModalDims] = useState('');
  const [modalMedia, setModalMedia] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  const [modalImageOrientation, setModalImageOrientation] = useState('landscape');
  
  console.log("hi modalImageIndex:", modalImageIndex)

  // We can make the useEffect hook not run on initial render
  // by creating a variable with useRef hook to keep tracking
  // of when the first render is done.
  // We set the variable’s value to true initially.
  // Then we the component is rendered the first time,
  // we set the variable to false.
  const firstUpdate = useRef(true);



//  ==================================
//  modal: the expanded image
//  ==================================
//  setStates: 1) to indicate which image the user has clicked
//             2) change the css display class from "none" to "block"
//             3) a bunch of information accompanying each image
  // openModal(modalURL, modalTitle, modalYear, modalMedia, modalDims, modalPrice, modalStatement, modalImageOrient) {
  function openModal(imageIndex) {
    console.log("1) opening modal via openModal() and imageIndex is:", imageIndex)
    establishImageIndex(imageIndex)
  }

  // 1) set state with the index of the image the user has clicked
  function establishImageIndex(imageIndex){
    setModalImageIndex(imageIndex)
    console.log("after setModalImageIndex", imageIndex)
  }
  
  // I thought this only runs when [modalImageIndex] changes
  // Why is it running when it doens't change?  
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      console.log("First render. Not running useEffect()")
      return;
    } else {

      console.log("useEffect() is running. modalImageIndex:", modalImageIndex)
      setModalArtDetails()
      // 2) then, figure out if the back and forward buttons should be displayed
      displayBlockModal()
      modalDisplayForwardBackButtons()

    }
  }, [modalImageIndex]);

  // one job: add css display: block; to the modal
  function displayBlockModal() {
    setDisplayModal({'display': "block"})
    console.log(`Add css display: block; to the modal`)
  }

  // why is filteredArt an empty array right now?
  // Also, why is this triggering before the user clicks on an image? 
  function setModalArtDetails(imageIndex){
    console.log("filteredArt", filteredArt )
    console.log("filteredArt[modalImageIndex]", filteredArt[modalImageIndex] )
    setModalTitle( filteredArt[modalImageIndex].title );
    setModalImageOrientation( filteredArt[modalImageIndex].imageShape, () => {
      landscapeOrPortrait()
    })  
    setModalImageURL(filteredArt[modalImageIndex].link)
    setModalYear(filteredArt[modalImageIndex].year)
    setModalMedia(filteredArt[modalImageIndex].media)
    setModalDims(filteredArt[modalImageIndex].dims)
    setModalPrice(filteredArt[modalImageIndex].price)
    setModalStatement(filteredArt[modalImageIndex].statement)
    console.log("3) setModalArtDetails():", modalTitle, modalYear, modalMedia,)
  }


  // The art image dimensions are a mixture of landscape and portrait or square.
  // They can't all be displayed with the same width or they'd blow out the user's screen.
  // Every image has a key value pair in the .json where I indicate what type of image is it:
  // lanscape, portrait or square. This function sets the image max-width based on what
  // kind of image it is.
  function landscapeOrPortrait() {
    let imageOrientation = modalImageOrientation
    if (imageOrientation === "landscape") {
        console.log(`6)`, modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "700px";
        document.querySelector('.modal-info-container').style.maxWidth = "700px";
    } else if (imageOrientation === "portrait") {

        console.log(`6)`, modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "450px";
        document.querySelector('.modal-info-container').style.maxWidth = "450px";
    } else {
        console.log(`6)`, modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "500px";
        document.querySelector('.modal-info-container').style.maxWidth = "500px";
    }

  }

  // Don't display the modal back arrows if the user is viewing the first image.
  // Don't display the modal forward arrows if the user is viewing the last image.
  function modalDisplayForwardBackButtons(){
    if (modalImageIndex === filteredArt.length - 1) {
      console.log(`5) image index is:`, modalImageIndex , `Don't display next arrow`)
      document.getElementById('modal-next-button').style.display = 'none'
      document.getElementById('modal-back-button').style.display = 'block'
    }
      else if (modalImageIndex === 0) {
        // console.log(`5) image index is:`, modalImageIndex,  `Don't display back arrow`)
        document.getElementById('modal-back-button').style.display = 'none'
        document.getElementById('modal-next-button').style.display = 'block'
      } else {
          // console.log(`5) image index is:`, modalImageIndex,  `Both arrows should appear`)
          document.getElementById('modal-back-button').style.display = 'block'
          document.getElementById('modal-next-button').style.display = 'block'
      }
  }

// this function applies both to the arrow buttons on the site &
// the arrow buttons on the keyboard
// if the user hits the back arrown on their keyboard on the first image,
// the modal closes.
function modalPreviousImage(imageIndex) {
    // console.log("modalNextImage() modalImageIndex is: ", modalImageIndex)

    let previousImageIndex = modalImageIndex - 1

    if (previousImageIndex  < 0) {
      closeModal()
      } else {
        setModalImageIndex(previousImageIndex, () => {
        establishImageIndex(modalImageIndex)
        })
      }
  }

// this function applies both to the modal arrow buttons &
// the arrow buttons on the keyboard.
// If the user hits the forward arrow on their keyboard on the last image,
// the modal closes.
function modalNextImage(imageIndex) {
    // console.log("modalNextImage() modalImageIndex is: ", modalImageIndex)

    let nextImageIndex =  modalImageIndex + 1

    if (nextImageIndex > filteredArt.length - 1) {
      closeModal()
    } else {
      setModalImageIndex(nextImageIndex, () => {
        establishImageIndex(modalImageIndex)
      })
    }
  }

  // This simply changes the css display class from "block" to "none"
  function closeModal() {
    setDisplayModal({'display': "none"})
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
            modalNextImage()
          break;
          case 37:
            console.log("back arrow key pushed. Previous image")
            modalPreviousImage()
          break;
          case 38:
            console.log("up arrow key pushed. Previous image.")
            modalPreviousImage()
          break;
          case 40:
            console.log("down arrow key pushed Next image.")
            modalNextImage()
          break;
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
        />

        <About />
        <Contact />
        <CV />

      </section>
    </div>
  );

}


