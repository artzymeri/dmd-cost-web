import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import Div from "../Div";
import Spacing from "../Spacing";
import Blogs from "../../blogs/blogs";

export default function BlogDetailsPage() {
  const params = useParams();
  console.log(params);
  const blogDetails = Blogs.find((blog) => blog.id == params.blogDetailsId);
  console.log(blogDetails);
  pageTitle("Blog Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div
            className="col-lg-8"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Div className="cs-post cs-style2">
              {blogDetails ? (
                <>
                  <Div className="cs-post_thumb cs-radius_15">
                    <img
                      src={blogDetails?.thumb}
                      alt="Post"
                      className="w-100 cs-radius_15"
                    />
                  </Div>
                  <Div className="cs-post_info">
                    <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                      <span className="cs-posted_by">{blogDetails?.date}</span>
                      <span className="cs-posted_by">
                        {blogDetails?.min_read}
                      </span>
                    </Div>
                    {blogDetails?.content()}
                  </Div>
                </>
              ) : (
                <h1>Blog doesn't exist</h1>
              )}
            </Div>
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        {/* <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        /> */}
      </Div>
    </>
  );
}
