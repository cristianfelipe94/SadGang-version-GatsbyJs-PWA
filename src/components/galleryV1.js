import React, { useState } from "react"

import "./styles.css"

import ImageGirlOne from "../components/image-girl-one"
import ImageBoyOne from "../components/image-boy-one"
import ImageGirlTwo from "../components/image-girl-two"
import ImageBoyTwo from "../components/image-boy-two"

import ImageGirlOneColor from "../components/image-girl-one-color"
import ImageBoyOneColor from "../components/image-boy-one-color"
import ImageGirlTwoColor from "../components/image-girl-two-color"
import ImageBoyTwoColor from "../components/image-boy-two-color"

const GalleryV1 = () => {
  const [
    header = {
      headerTitle: "Sadgang",
      headerMessage: "Costa Rica Streetware",
    },
    setHeader,
  ] = useState()

  function openCloseGallery(event) {
    console.log(header)
    const getGallery = document.querySelector(".gallery__panel")
    const mouseXclicked = event.clientX
    const windowXSize = window.innerWidth
    const windowPercentage = parseInt((mouseXclicked / windowXSize) * 100)

    if (!getGallery.classList.contains("gallery__panel--open")) {
      getGallery.classList.add("gallery__panel--open")

      if (windowPercentage < 25) {
        setTimeout(() => {
          let imageGalleryToBeColor = document.querySelector(
            ".gallery__image--main.gallery__image--color"
          )
          imageGalleryToBeColor.classList.add("gallery__image--color-display")
          getGallery.style.left = "0vw"
          setHeader(() => ({
            headerTitle: "Somos Ropa",
            headerMessage:
              "Contamos con varias colecciones de ropa, para mujer y hombre.",
          }))
        }, 2000)
      } else if (windowPercentage > 25 && windowPercentage < 50) {
        setTimeout(() => {
          let imageGalleryToBeColor = document.querySelector(
            ".gallery__image--sec.gallery__image--color"
          )
          imageGalleryToBeColor.classList.add("gallery__image--color-display")
          getGallery.style.left = "-100vw"
          setHeader(() => ({
            headerTitle: "Somos Comunidad",
            headerMessage:
              "Queremos crear comunidad entre clientes y emprendedores.",
          }))
        }, 2000)
      } else if (windowPercentage > 50 && windowPercentage < 75) {
        setTimeout(() => {
          let imageGalleryToBeColor = document.querySelector(
            ".gallery__image--third.gallery__image--color"
          )
          imageGalleryToBeColor.classList.add("gallery__image--color-display")
          getGallery.style.left = "-200vw"
          setHeader(() => ({
            headerTitle: "Somos Crecimiento",
            headerMessage:
              "Creamos y vendemos ropa sin estampado para tu emprendimiento.",
          }))
        }, 2000)
      } else if (windowPercentage > 75 && windowPercentage < 100) {
        setTimeout(() => {
          let imageGalleryToBeColor = document.querySelector(
            ".gallery__image--fourth.gallery__image--color"
          )
          setTimeout(() => {
            imageGalleryToBeColor.classList.add("gallery__image--color-display")
            setHeader(() => ({
              headerTitle: "Somos tu Estilo",
              headerMessage:
                "Buscamos la diversidad en nuestras prendas para que sean accesibles.",
            }))
          }, 2500)
          getGallery.style.left = "-300vw"
        }, 2000)
      }
    } else {
      let imageGalleryToBeDecolor = document.querySelector(
        ".gallery__image--color-display"
      )
      imageGalleryToBeDecolor.classList.remove("gallery__image--color-display")
      getGallery.classList.remove("gallery__panel--open")
      getGallery.style.left = "0vw"
      setHeader(() => ({
        headerTitle: "Somos Sadgang",
        headerMessage: "Próximamente tienda virtual.",
      }))
    }
  }

  return (
    <div className="gallery--v1">
      <div className="head">
        <h1 className="head__title">{header.headerTitle}</h1>
        <p className="head__title">{header.headerMessage}</p>
      </div>
      <div className="gallery" onClick={event => openCloseGallery(event)}>
        <div className="gallery__panel">
          <div
            style={{ position: "relative", width: "25%", overflow: "hidden" }}
          >
            <ImageGirlOne />
            <ImageGirlOneColor />
            <span className="icon--touch"></span>
          </div>
          <div
            style={{ position: "relative", width: "25%", overflow: "hidden" }}
          >
            <ImageBoyOne />
            <ImageBoyOneColor />
            <span className="icon--touch"></span>
          </div>
          <div
            style={{ position: "relative", width: "25%", overflow: "hidden" }}
          >
            <ImageGirlTwo />
            <ImageGirlTwoColor />
            <span className="icon--touch"></span>
          </div>
          <div
            style={{ position: "relative", width: "25%", overflow: "hidden" }}
          >
            <ImageBoyTwo />
            <ImageBoyTwoColor />
            <span className="icon--touch"></span>
          </div>
        </div>
      </div>
      <div className="gradient--panel">
        <span className="gradient--line" />
      </div>
    </div>
  )
}

export default GalleryV1
