import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.linkedin.com/company/dmd-costs' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
    </Div>
  )
}
