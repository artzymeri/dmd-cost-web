import React from 'react'
import Div from '../Div'
import './card.scss'

export default function Card({title, link, src, alt, imgStyling}) {
  return (
    <Div to={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} style={imgStyling} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Div>
  )
}
