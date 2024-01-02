import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to Our E-Learning Platform</h1>
        <p>
          Our E-Learning App is a cutting-edge platform designed to revolutionize the way individuals learn and grow. With a mission to empower learners globally, we offer a diverse range of courses and resources tailored to meet the needs of modern education.
        </p>
        <h2>What Sets Us Apart?</h2>
        <p>
          At our E-Learning App, we understand the importance of accessible and flexible learning. Our platform bridges the gap between knowledge seekers and quality educational content, enabling learners to explore various subjects at their own pace, anytime, anywhere.
        </p>
        <h2>Our Vision</h2>
        <p>
          Our vision is to create an inclusive learning environment that fosters curiosity, collaboration, and continuous improvement. We strive to provide an engaging and interactive experience that caters to learners of all ages and backgrounds.
        </p>
        <h2>Features and Benefits</h2>
        <ul>
          <li>Wide Range of Courses: Explore courses in programming, design, business, languages, and more, taught by industry experts.</li>
          <li>Interactive Learning: Engage with interactive lessons, quizzes, and practical exercises to reinforce your understanding.</li>
          <li>Flexibility: Study at your convenience. Our platform is accessible 24/7, allowing you to learn according to your schedule.</li>
          <li>Certification: Earn certificates upon course completion, validating your new skills and knowledge.</li>
        </ul>
        <h2>Join Us Today!</h2>
        <p>
          Whether you are an aspiring professional, a lifelong learner, or someone looking to enhance skills, join our E-Learning App today and embark on a transformative educational journey!
        </p>
        <p>
          Start exploring, learning, and growing with us!
        </p>
      </div>
      <Link className='link' to="/courses"><button className="show-more-btn">Show More</button></Link>
       
    </div>
  );
}

export default Home;
