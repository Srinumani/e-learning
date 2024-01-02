
import React from 'react';
import { data } from '../data'; 
function About() {
   

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to our E-Learning Platform! We are dedicated to revolutionizing the way individuals learn by providing engaging and comprehensive courses in various domains.
        </p>
        <p className="about-text">
          Our platform offers a wide range of courses tailored to meet diverse learning needs. Explore our selection, which includes courses in web development, data science, design, languages, business, and many more.
        </p>
        <p className="about-text">
          Whether you're looking to acquire new skills, enhance your career prospects, or explore a new passion, our platform has something for everyone. Our team is committed to delivering high-quality content and resources to support your learning journey.
        </p>
        <h2 className="about-subtitle">Featured Courses</h2>
        <ul className="course-list">
          {data.map((course, index) => (
            <li key={index} className="course-item">{course.course_name}</li>
          ))}
        </ul>
        <p className="about-text">
          Join our growing community of learners and embark on an exciting educational experience. Start your learning journey with us today!
        </p>
      </div>
    </div>
  );
}

export default About;
