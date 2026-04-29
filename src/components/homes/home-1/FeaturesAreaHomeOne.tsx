import features_data from '@/data/features-data';
import React from 'react';

const FeaturesAreaHomeOne = ({ style_2, style_3 }: any) => {
  const feature_data = style_2 ? features_data : features_data.slice(0, 6)
  return (
    <>
      {style_2 ?
        null :
        style_3 ?
          null
          :
          <div className="lonyo-content-shape1">
            <img src="assets/images/shape/shape1.svg" alt="" />
          </div>

      }
      <div className={`${style_2 ? 'lonyo-section-padding10' : style_3 ? 'lonyo-section-padding6' : 'lonyo-section-padding2'} position-relative `}>
        <div className="container">
          <div className={`lonyo-section-title ${style_3 ? 'max600' : 'center'}`}>
            <h2>Features that make spending smarter</h2>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div className="lonyo-service-wrap light-bg" data-aos="fade-up" data-aos-duration={item.delay}>
                  <div className="lonyo-service-title">
                    <h4>{item.title}</h4>
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="lonyo-service-data">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className={`lonyo-feature-shape ${style_3 ? 'shape3' : ''}`}></div>
      </div>
    </>
  );
};

export default FeaturesAreaHomeOne;