import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PostStyle2 from '../Post/PostStyle2';
import Div from '../Div';
import Spacing from '../Spacing';
import Services from '../../services/services';
import PostStyle3 from '../Post/PostStyle3';
export default function ServicesPage() {
  pageTitle('Services');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            {Services.map((item, index) => (
              <Div key={index}>
                <PostStyle3
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.description}
                  date={item?.date}
                  category={item?.min_read}
                  categoryHref={item.categoryHref}
                  content={item.content}
                />
                {Services.length > index + 1 && <Spacing lg="95" md="60" />}
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
          title="Let’s discuss and <br />let's <i>partner</i> together"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
