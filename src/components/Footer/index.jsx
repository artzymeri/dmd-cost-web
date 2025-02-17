import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";

const serviceMenu = [
  {
    title: "Bill of costs and statement of costs",
  },
  {
    title: "Part 8 Proceedings",
  },
  {
    title: "Costs Budgeting",
  },
  {
    title: "Points of Disputes and Replies",
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6" style={{ width: "33%" }}>
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/dmd_logo.png"
                  logoAlt="Logo"
                  text="DMD Costs - Drafting made easy!"
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6" style={{ width: "33%" }}>
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6" style={{ width: "33%" }}>
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <div className="cs-copyright">
              Copyright © {new Date().getFullYear()} <b> - DMD Costs.</b>
            </div>
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
