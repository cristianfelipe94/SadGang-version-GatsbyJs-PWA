import React from "react"

import "./styles.css"

const WIPMessage = () => {
  return (
    <div style={{margin: `2.5rem 1rem`}}>
      <p className="head__content">
        En estos momentos, estamos trabajando en nuestra tienda virtual Sadgang.
      </p>
      <p className="head__content">
        Proximamente todos nuestros productos estarán a tu alcance, te invitamos
        a visitar nuestro Instagram Oficial.
      </p>
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
        href="https://api.whatsapp.com/send?phone=50672519994"
        target="_blank"
        style={{
          width: `50%`,
        }}
      >
        WhatsApp
      </a>
    </div>
  )
}

export default WIPMessage
