import React from "react"

import Layout from "../components/layout"

import "../components/styles.css"

import SEO from "../components/seo"
import ImageGirlOne from "../components/image-girl-one"
import ImageBoyOne from "../components/image-boy-one"
import ImageGirlTwo from "../components/image-girl-two"
import ImageBoyTwo from "../components/image-boy-two"

const IndexPage = () => {
  function openCloseGallery(event) {
    const getGallery = document.querySelector(".gallery__panel");
    const mouseXclicked = event.clientX;
    const windowXSize = window.innerWidth;
    const windowPercentage = parseInt((mouseXclicked / windowXSize) * 100);
    
    if(!getGallery.classList.contains("gallery__panel--open")) {
      getGallery.classList.add("gallery__panel--open");

      if(windowPercentage < 25) {
        setTimeout(() => {
          getGallery.style.left = "0vw";
        }, 2000);
      } else if (windowPercentage > 25 && windowPercentage < 50) {
        setTimeout(() => {
          getGallery.style.left = "-100vw";
        }, 2000);
      } else if (windowPercentage > 50 && windowPercentage < 75) {
        setTimeout(() => {
          getGallery.style.left = "-200vw";
        }, 2000);
      } else if (windowPercentage > 75 && windowPercentage < 100) {
        setTimeout(() => {
          getGallery.style.left = "-300vw";
        }, 2000);
      }

    } else {
      getGallery.classList.remove("gallery__panel--open");
      getGallery.style.left = "0vw";
    }
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div className="head">
          <h1 className="head__title">Sadgang</h1>
          <h2 className="head__title">Costa Rica Streetware</h2>
        </div>
        <div className="gallery" onClick={(event) => openCloseGallery(event)} >
          <div className="gallery__panel">
            <ImageGirlOne />
            <ImageBoyOne />
            <ImageGirlTwo />
            <ImageBoyTwo  />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
