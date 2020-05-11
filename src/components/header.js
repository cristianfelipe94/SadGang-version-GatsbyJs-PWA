import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./header-logo"

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `0.2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem`,
      }}
    >
      <HeaderLogo/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
