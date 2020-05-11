import React from "react"

import Layout from "../components/layout"

import "../components/styles.css"

import SEO from "../components/seo"
import ImageGirlOne from "../components/image-girl-one"
import ImageBoyOne from "../components/image-boy-one"
import ImageGirlTwo from "../components/image-girl-two"
import ImageBoyTwo from "../components/image-boy-two"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div className="head">
          <h1 className="head__title">Streetware</h1>
          <h2 className="head__title">Sadgang Costa Rica</h2>
        </div>
        <ImageGirlOne galleryMovement="0vw" />
        <ImageBoyOne galleryMovement="100vw" />
        <ImageGirlTwo galleryMovement="200vw" />
        <ImageBoyTwo galleryMovement="300vw" />
      </div>
    </Layout>
  )
}

export default IndexPage
