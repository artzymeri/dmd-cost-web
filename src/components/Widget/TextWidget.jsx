import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <img src={logoSrc} width={'100px !important'} alt={logoAlt} style={{width: '100px !important'}} />
      <p>{text}</p>
    </Div>
  )
}
