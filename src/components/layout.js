/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"
import "./styles.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@300&family=Pirata+One&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header />
      <div className="layout--gradient">
        <main>{children}</main>
        <div className="gradient--line"/>
      </div>
      <div className="layout--gradient" style={{justifyContent: `space-around`}}>
        <div style={{
          top: `0`,
          position: `absolute`,
          left: `0`,
          padding: `2.5rem 1rem`,
          }}>
          <p className="head__content">En estos momentos, estamos trabajando en nuestra tienda virtual Sadgang.</p>
          <p className="head__content">Proximamente todos nuestros productos estarán a tu alcance, te invitamos a visitar nuestro Instagram Oficial.</p>
          <a
            className="action--call"
            href="https://www.instagram.com/sadgang.clothes/?hl=en"
            target="_blank"
            style={{
              width: `70%`,
            }}
          >
            Sadgang Instagram
          </a>
          <a
            className="action--call"
            href="https://api.whatsapp.com/send?phone=72519994"
            target="_blank"
            style={{
              width: `50%`,
            }}
          >
            72519994
          </a>
        </div>
        <footer>
          <p style={{
            color: `black`,
            margin: `1rem 0`,
            position: `absolute`,
            bottom: 0,
          }}>Sadgang Costa Rica 2020.</p>

          <div className="waves">
            <div className="waves--shape"></div>
            <div className="waves--color"></div>
          </div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
