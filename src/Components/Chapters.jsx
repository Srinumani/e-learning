import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { data } from '../data';
import { Link } from 'react-router-dom';
 

function Chapter() {
  const { id } = useParams();
  const course = data.find((course) => course.course_id == id);

  return (
    <>
      <h1 className='chapter-heading'>{course.course_name} Chapters</h1>
    <div className='chapter-container'> 
      <ul className="chapter-list">
        {course.chapters.map((item, index) => (
          <Link className='link' to={`eachchapter/${item.chapter_id}`} > 
          <li className="chapter-item" key={index}>
            {item.chapter_title}
          </li>
          </Link>
        ))}
      </ul>
      <div className='eachchapter-container'>
           
          <div className="outlet-context">
            <Outlet context={{...course}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapter;
