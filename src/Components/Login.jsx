import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <button className="buttonlogin" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
