 
 import React from 'react';
import { data } from '../data';  
 import { Link } from 'react-router-dom';
 function Courses() {
    return (
        <div className="courses-container">
          {data.map((item, index) => (
            <Link className='link' to={`/courses/${item.course_id}`}>
            <div className="course-card" key={index}>
              <img src={item.course_img} alt={item.course_name} />
              <span className="course-name">{item.course_name}</span>
            </div>
            </Link>
          ))}
        </div>
      );
    }
 
 
 export default Courses;
 