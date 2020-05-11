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
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
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
            href="tel:72519994"
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
            <svg className="waves--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L18.5,176C36.9,192,74,224,111,202.7C147.7,181,185,107,222,90.7C258.5,75,295,117,332,138.7C369.2,160,406,160,443,154.7C480,149,517,139,554,117.3C590.8,96,628,64,665,48C701.5,32,738,32,775,42.7C812.3,53,849,75,886,90.7C923.1,107,960,117,997,117.3C1033.8,117,1071,107,1108,122.7C1144.6,139,1182,181,1218,170.7C1255.4,160,1292,96,1329,74.7C1366.2,53,1403,75,1422,85.3L1440,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
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
