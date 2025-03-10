import React from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1 background-gif"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* Hidden Image for SEO & Accessibility */}
      <img src={bgImageUrl} alt="DMD Costs Hero Section - Managing Legal Costs." style={{ display: "none" }} />

      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title" aria-label={parse(title)}>{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              {/* <Button btnLink={btnLink} btnText={btnText} /> */}
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn" aria-label="Scroll Down to Services">.</a>
    </Div>
  );
}
