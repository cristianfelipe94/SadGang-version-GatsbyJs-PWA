import React from "react"

import Layout from "../components/layout"
import ProductsLayout from "../components/airtableBase"
import WavesDecoration from "../components/wavesDecoration"
import WIPMessage from "../components/wipMessage"
import GalleryV1 from "../components/galleryV1"
import SEO from "../components/seo"

import "../components/styles.css"


const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <GalleryV1/>
      <WIPMessage/>
      <ProductsLayout/>
      <WavesDecoration/>
    </Layout>
  )
}

export default IndexPage
