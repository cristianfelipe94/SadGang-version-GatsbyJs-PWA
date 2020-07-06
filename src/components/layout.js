/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@300&family=Pirata+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
