"use client";
import Link from 'next/link';
import { useState } from 'react';

const SignUpArea = () => {
  // State for password visibility toggles
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="lonyo-account-section light-bg">
      <div className="container">
        <div className="lonyo-account-title">
          <h1>Sign Up</h1>
          <p>Step into the future with Lonyo and take your financial game to the next level!</p>
        </div>
        <div className="lonyo-account-box" data-aos="fade-up" data-aos-duration="700">
          <div className="login-with-google">
            <a href="https://www.google.com/">
              <img src="/assets/images/account/a1.svg" alt="Google sign-up" />
              <h6>Sign up with Google</h6>
            </a>
          </div>
          <div className="or">
            <p>or</p>
          </div>
          <div className="lonyo-contact-box2">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="lonyo-main-field">
                    <p>Full name*</p>
                    <input className="light-bg" type="text" placeholder="Adam" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="lonyo-main-field">
                    <p>Last Name*</p>
                    <input className="light-bg" type="text" placeholder="Smith" />
                  </div>
                </div>
              </div>
              <div className="lonyo-main-field">
                <p>Email address*</p>
                <input className="light-bg" type="email" placeholder="Your email address" />
              </div>
              <div className="lonyo-main-field">
                <p>Password*</p>
                <input
                  id="password-field"
                  className="light-bg form-control"
                  type={passwordVisible ? 'text' : 'password'}
                  name="password" 
                  defaultValue={'Min 8 characters'}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw field-icon toggle-password ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                ></div>
              </div>
              <div className="lonyo-main-field">
                <p>Repeat password*</p>
                <input
                  id="password-field1"
                  className="light-bg form-control"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  name="password"
                  defaultValue={'Min 8 characters'}
                />
                <div
                  onClick={toggleConfirmPasswordVisibility} 
                  className={`fa fa-fw field-icon2 toggle-password2 ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                ></div>
              </div>
              <button className="lonyo-default-btn extra-btn d-block" type="button">
                Sign up
              </button>
              <div className="login">
                <span>Already have an account?</span>
                <Link href="/sign-in">
                  <p>Sign in here</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpArea;
