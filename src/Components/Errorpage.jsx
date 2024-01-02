import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>navigate(-1),3000);
    },[]);
  return (
    <div className="error-container">
      <h1>404 Error: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {/* You can add more content or links here */}
    </div>
  );
};

export default ErrorPage;
