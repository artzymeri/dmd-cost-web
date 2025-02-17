import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button';
import Spacing from '../Spacing';
import Div from '../Div';

const safeParse = (html) => {
  if (!html) return ''; 
  return parse(html);
};

export default function SectionHeading({ title, subtitle, btnLink, btnText, variant, children }) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h3 className="cs-section_subtitle" aria-label={subtitle}>{safeParse(subtitle)}</h3>
      <h2 className="cs-section_title" aria-label={title}>{safeParse(title)}</h2>
      {children}
      {btnText && (
        <>
          <Spacing lg="45" md="20" />
          <Button btnLink={btnLink} btnText={btnText} />
        </>
      )}
    </Div>
  );
}
