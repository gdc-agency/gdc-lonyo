 "use client";
import Link from 'next/link';
import { useState } from 'react';

const SigninArea = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="lonyo-account-section light-bg">
      <div className="container">
        <div className="lonyo-account-title">
          <h1>Sign In</h1>
          <p>Step inside Lonyo and start managing finances like never before</p>
        </div>
        <div className="lonyo-account-box" data-aos="fade-up" data-aos-duration="700">
          <div className="login-with-google">
            <a href="https://www.google.com/">
              <img src="assets/images/account/a1.svg" alt="Google Sign-in" />
              <h6>Sign up with Google</h6>
            </a>
          </div>
          <div className="or">
            <p>or</p>
          </div>
          <div className="lonyo-contact-box2">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="lonyo-main-field">
                <p>Email address*</p>
                <input className="light-bg" type="email" placeholder="Your email address" />
              </div>
              <div className="lonyo-main-field">
                <p>Password*</p>
                <input
                  id="password-field"
                  className="light-bg form-control"
                  type={passwordType}
                  name="password"
                  defaultValue={'Min 8 characters'}
                />
                <div 
                  className={`fa fa-fw field-icon toggle-password ${passwordType ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={togglePasswordVisibility}
                ></div>
              </div>
              <button className="lonyo-default-btn extra-btn d-block" type="button">
                Sign In
              </button>
              <div className="login">
                <span>Don't have an account?</span>
                <Link href="/sign-up">
                  <p>Sign up here</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninArea;
