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
  const [modalStatement, setModalStatement] = useState('');
  const [displayModal, setDisplayModal] = useState({'display': 'none'});
  const [modalImageIndex, setModalImageIndex] = useState();
  const [modalImageURL, setModalImageURL] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalYear, setModalYear] = useState('');
  const [modalDims, setModalDims] = useState('');
  const [modalMedia, setModalMedia] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  const [modalImageOrientation, setModalImageOrientation] = useState('landscape');
  

  /*
  We can make the useEffect hook not run on initial render
  by creating a variable with useRef hook to keep tracking
  of when the first render is done.
  We set the variable’s value to true initially.
  Then we the component is rendered the first time,
  we set the variable to false.
  */
  const firstUpdate = useRef(true);



//  ==================================
//  modal: the expanded image
//  ==================================
//  1) Indicate which image the user has clicked
//  2) Change the css display class from "none" to "block"
//  3) Update a bunch of information accompanying each image
  function openModal(imageIndex) {
    setModalImageIndex(imageIndex)
    setDisplayModal({'display': "block"})
  }

  // // 1) set state with the index of the image the user has clicked
  // function establishImageIndex(imageIndex){
  //   setModalImageIndex(imageIndex)
  // }
  
  // This only runs if the modalImageIndex chages, 
  // BUT we need it to run even if the modalImageIndex is the 
  // same as it's previous value (if user clicks on image, closes it
  // then opens the same one again)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      console.log("Hey! modalImageIndex", modalImageIndex)
      return;
    } else {
      console.log("Hey! modalImageIndex", modalImageIndex)
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

      // console.log("useEffect() is running. modalImageIndex:", modalImageIndex)
      
      // one job: add css display: block; to the modal
      // function displayBlockModal() {
      //   setDisplayModal({'display': "block"})
      // }

      establishModalArtDetails()
      // 2) then, figure out if the back and forward buttons
      // should be displayed
      // displayBlockModal()
      modalDisplayForwardBackButtons()
    }
  }, [modalImageIndex]);


  // run whensetModalImageOrientation updates
  useEffect( () => {
    landscapeOrPortrait()
  }, [setModalImageOrientation])


 


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

    let previousImageIndex = modalImageIndex - 1

    if (previousImageIndex  < 0) {
      closeModal()
    } else {
      setModalImageIndex(previousImageIndex)
    }
  }
  
  // This runs after setModalImageIndex changes
  useEffect( () => {
  //   establishImageIndex(modalImageIndex)
  // }, [setModalImageIndex]
  }
  )
  
  // this function applies both to the modal arrow buttons &
  // the arrow buttons on the keyboard.
  // If the user hits the forward arrow on their keyboard on the last image,
  // the modal closes.
  function modalNextImage(imageIndex) {
    
    let nextImageIndex =  modalImageIndex + 1
    
    if (nextImageIndex > filteredArt.length - 1) {
      closeModal()
    } else {
      setModalImageIndex(nextImageIndex)
    }
  }
  
  // run this when setModalImageIndex changes
  useEffect( () => {
  //   establishImageIndex(modalImageIndex)
  
  // }, 
  // [setModalImageIndex]
  })


  // This simply changes the css display class from "block" to "none"
  function closeModal() {
    console.log("close modal")
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


