import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import "./header.scss";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";
import Spacing from "../Spacing";
import { Icon } from "@iconify/react/dist/iconify.js";
import emailjs from "@emailjs/browser";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const [messageObj, setMessageObj] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
    phone_number: ""
  });

  const sendMessage = () => {
    if (!messageObj?.name || !messageObj?.email || messageObj?.phone_number) {
      return window.alert('Please fill out the required fields')
    }
    emailjs
      .send(
        "service_w7bcwy9", // Your EmailJS service ID
        "template_rlbz05d", // Your EmailJS template ID
        {
          from_email: messageObj.email, // Replace with actual recipient's name
          from_name: messageObj.name,
          from_address: messageObj.address,
          from_phone_number: messageObj.phone_number, // Sender's name from state
          message: messageObj.message, // Message from state
        },
        "cIqLDI8jpPo_W7eG9" // Your actual EmailJS public key
      )
      .then(
        () => {
          setSideHeaderToggle(false);
          setMessageObj({
            name: "",
            email: "",
            message: "",
            address: "",
            phone_number: ""
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/dmd_logo.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <div
                    className="cs-nav_list_mobile"
                    style={{
                      display: `${mobileToggle ? "block" : "none"}`,
                      top: "0px",
                      padding: "50px",
                    }}
                  >
                    <Div className="cs-side_header_in">
                      <Div
                        className="cs-side_header_box"
                        style={{ marginTop: "100px" }}
                      >
                        <h6>Do you want to connect with us?</h6>
                      </Div>
                      <Div>
                        <form action="#" className="row">
                          <Div className="col-sm-6">
                            <label className="cs-primary_color">
                              Full Name *
                            </label>
                            <input
                              onChange={(e) => {
                                setMessageObj({
                                  ...messageObj,
                                  name: e.target.value,
                                });
                              }}
                              type="text"
                              className="cs-form_field"
                            />
                            <Spacing lg="20" md="20" />
                          </Div>
                          <Div className="col-sm-6">
                            <label className="cs-primary_color">Email *</label>
                            <input
                              onChange={(e) => {
                                setMessageObj({
                                  ...messageObj,
                                  email: e.target.value,
                                });
                              }}
                              type="text"
                              className="cs-form_field"
                            />
                            <Spacing lg="20" md="20" />
                          </Div>
                          <Div className="col-sm-6">
                            <label className="cs-primary_color">
                              Phone Number
                            </label>
                            <input
                              onChange={(e) => {
                                setMessageObj({
                                  ...messageObj,
                                  phone_number: e.target.value,
                                });
                              }}
                              type="text"
                              className="cs-form_field"
                            />
                            <Spacing lg="20" md="20" />
                          </Div>
                          <Div className="col-sm-6">
                            <label className="cs-primary_color">Address</label>
                            <input
                              onChange={(e) => {
                                setMessageObj({
                                  ...messageObj,
                                  address: e.target.value,
                                });
                              }}
                              type="text"
                              className="cs-form_field"
                            />
                            <Spacing lg="20" md="20" />
                          </Div>
                          <Div className="col-sm-12">
                            <label className="cs-primary_color">Message *</label>
                            <textarea
                              cols="30"
                              rows="7"
                              className="cs-form_field"
                              onChange={(e) => {
                                setMessageObj({
                                  ...messageObj,
                                  message: e.target.value,
                                });
                              }}
                            ></textarea>
                            <Spacing lg="25" md="25" />
                          </Div>
                          <Div>
                            <button
                              onClick={() => {
                                sendMessage();
                              }}
                              style={{display: 'flex', alignItems: 'center', gap: '10px',padding: '8px', border: 'transparent', backgroundColor: 'var(--accent)', color: '#fff', borderRadius: '15px'}}
                            >
                              <span style={{ display: "block !important" }}>
                                Send Message
                              </span>
                              <Icon icon="bi:arrow-right" />
                            </button>
                          </Div>
                        </form>
                      </Div>
                      <Div className="cs-side_header_box">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                            <Link
                            style={{
                              display: "flex",
                              width: "80px",
                              height: "80px",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "1px solid white",
                              borderRadius: "50%",
                              marginTop: "30px"
                            }}
                            to="https://www.linkedin.com/company/dmd-costs"
                          >
                            <Icon icon="fa6-brands:linkedin-in" />
                            </Link>
                        </div>
                        <Div
                        className="cs-side_header_box"
                        style={{ marginTop: "30px" }}
                      >
                        <ContactInfoWidget title="Contact Us" withIcon />
                      </Div>
                      </Div>
                    </Div>
                  </div>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Link className="cs-site_branding" to="/">
            <img src="/images/dmd_logo.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you want to connect with us?
            </h2>
          </Div>
          <Div>
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name *</label>
                <input
                  onChange={(e) => {
                    setMessageObj({ ...messageObj, name: e.target.value });
                  }}
                  type="text"
                  className="cs-form_field"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email *</label>
                <input
                  onChange={(e) => {
                    setMessageObj({ ...messageObj, email: e.target.value });
                  }}
                  type="text"
                  className="cs-form_field"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Address</label>
                <input
                  onChange={(e) => {
                    setMessageObj({ ...messageObj, address: e.target.value });
                  }}
                  type="text"
                  className="cs-form_field"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Phone Number *</label>
                <input
                  onChange={(e) => {
                    setMessageObj({ ...messageObj, phone_number: e.target.value });
                  }}
                  type="text"
                  className="cs-form_field"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  onChange={(e) => {
                    setMessageObj({ ...messageObj, message: e.target.value });
                  }}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button
                  onClick={() => {
                    sendMessage();
                  }}
                  className="cs-btn cs-style1"
                >
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
          {/* <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div> */}
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
        </Div>
      </Div>
    </>
  );
}
