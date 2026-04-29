"use client"
import React from 'react';

const ContactusArea = () => {
  return (
    <>
      <div className="lonyo-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-default-content">
                <h2>Just say hello. Here's how to reach us</h2>
                <p className="max-w616">Have a question? We have the answer. Whether you need technical support or want to know more about this tool.</p>
                <div className="mt-50">
                  <div className="lonyo-contact-us-info-item ">
                    <div className="lonyo-contact-us-icon">
                      <a href="mailto:name@email.com"><img src="assets/images/contact-us/email.svg" alt="" /></a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <a href="mailto:name@email.com">
                        <h4>Send Email:</h4>
                        <p>Support@gmail.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="lonyo-contact-us-info-item ">
                    <div className="lonyo-contact-us-icon">
                      <a href="mailto:name@email.com"><img src="assets/images/contact-us/phone.svg" alt="" /></a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <a href="mailto:name@email.com">
                        <h4>Phone Call:</h4>
                        <p>+088-345-9876</p>
                      </a>
                    </div>
                  </div>
                  <div className="lonyo-contact-us-info-item pb-0">
                    <div className="lonyo-contact-us-icon">
                      <a href="mailto:name@email.com"><img src="assets/images/contact-us/email.svg" alt="" /></a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <h4>Find Us:</h4>
                      <p>Open google maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-contact-box box2" data-aos="fade-up" data-aos-duration="700">
                <h4>Fill the form below</h4>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="lonyo-main-field">
                    <p>Full name*</p>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="lonyo-main-field">
                    <p>Email address*</p>
                    <input type="email" placeholder="Your email address" />
                  </div>
                  <p>Message</p>
                  <div className="lonyo-main-field-textarea">
                    <textarea className="button-text" name="textarea" placeholder="Write your message here..."></textarea>
                  </div>
                  <button className="lonyo-default-btn extra-btn d-block" type="button">Send your message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-map">
        <iframe className="lonyo-contact-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" allowFullScreen></iframe>
      </div>
    </>
  );
};

export default ContactusArea;