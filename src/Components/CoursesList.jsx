import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import { Link } from 'react-router-dom';
 

function CoursesList() {
  const { id } = useParams();
  const item = data.find((item) => item.course_id == id);

  return (
    <div className="course-details">
      <img src={item.course_img} alt={item.course_name} />
      <span>{item.course_name}</span>
      <p>{item.course_description}</p>
     <Link to={`/chapters/${item.course_id}`} className="link">
     <button>Start Learning</button>
    </Link>  
    </div>
  );
}

export default CoursesList;
