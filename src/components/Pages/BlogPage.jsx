import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Pagination from '../Pagination';
import PostStyle2 from '../Post/PostStyle2';
import Div from '../Div';
import Spacing from '../Spacing';
import Blogs from '../../blogs/blogs.jsx';

export default function BlogPage() {
  pageTitle('Blog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      /> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            {Blogs.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.description}
                  date={item.date}
                  category={item.min_read}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {Blogs.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            {/* <Pagination /> */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
