import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Linkedin',
    links: 'https://www.linkedin.com/company/dmd-costs/',
  },
];

// FunFact Data
const funfaceData = [
  {
    title: 'Trusted Clients',
    factNumber: '10+',
  },
  {
    title: 'Drafts Completed',
    factNumber: '1K+',
  },
  {
    title: 'Years of Experience',
    factNumber: '20+',
  },
  {
    title: 'Settlements in 2024',
    factNumber: '£3M+',
  },
];

export default function Home() {
  pageTitle('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
          <Helmet> 
            {/* Google Search console */}
        <meta name="google-site-verification" content="mrfzWvHxjPSVxPnQZEGicPz-RPueAMxX_whxlvNpqmE" />
        {/* Primary Meta Tags */}
        <title>DMD Costs - Managing Legal Costs. Effortlessly.</title>
        <meta name="description" content="DMD Costs offers cost-effective legal solutions designed to maximize your recovery. Precision, efficiency, and expert strategies tailored to your needs." />
        <meta name="keywords" content="Legal Costs, Cost Recovery, Law Firm, Legal Budgeting, Cost Assessment, Litigation Costs" />
        <meta name="author" content="DMD Costs" />
        <link rel="canonical" href="https://www.dmdcosts.co.uk/" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="DMD Costs - Managing Legal Costs. Effortlessly." />
        <meta property="og:description" content="DMD Costs offers cost-effective legal solutions designed to maximize your recovery." />
        <meta property="og:image" content="https://www.dmdcosts.co.uk/images/dmd_logo.png" />
        <meta property="og:url" content="https://www.dmdcosts.co.uk/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="DMD Costs - Managing Legal Costs. Effortlessly." />
        <meta name="twitter:description" content="DMD Costs offers cost-effective legal solutions designed to maximize your recovery." />
        <meta name="twitter:image" content="https://www.dmdcosts.co.uk/images/dmd_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "DMD Costs",
            "url": "https://www.dmdcosts.co.uk/",
            "logo": "https://www.dmdcosts.co.uk/images/dmd_logo.png",
            "description": "DMD Costs offers cost-effective legal solutions designed to maximize your recovery.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "07503 992804",
              "contactType": "Customer Support"
            },
            "sameAs": [
              "https://www.linkedin.com/company/dmd-costs/"
            ]
          }
          `}
        </script>
      </Helmet>
      {/* Start Hero Section */}
      <Hero
        title="Managing Legal Costs.</br> Effortlessly."
        subtitle="Experience cost-effective legal solutions designed to maximize your recovery. Our expert team leverages innovative strategies to deliver precision, efficiency, and results tailored to your unique needs."
        btnText=""
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/laptop.gif"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Explore a comprehensive snapshot of a key observation, presented through quick, insightful facts that highlight the most important details with clarity and precision."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we provide you"
                subtitle="What Can We Do"
                btnText=""
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    imgStyling={{width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center'}}
                    title="Bill & Statement of costs"
                    src="/images/blog1.jpg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    imgStyling={{width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center'}}
                    title="Part 8 Proceedings"
                    src="/images/blog7.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    imgStyling={{width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center'}}
                    title="Costs Budgeting"
                    src="/images/blog8.avif"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    imgStyling={{width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center'}}
                    title="Points of Disputes and Replies"
                    src="/images/blog5.avif"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publications"
                subtitle="Our Blog"
                btnText="Visit Blogs"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text="Our trusted partners" />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div> */}
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss and <br />let's <i>partner</i> together"
          btnText=""
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
