import React from 'react';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form>
          <div className="signupform-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="signupform-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="signupform-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="signupform-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
          </div>
          <div className="form-group">
            <button className='button-signup' type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
