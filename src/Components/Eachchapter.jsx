
import { useOutletContext, useParams } from "react-router-dom";
import { data } from "../data";
function Eachchapter(){
    const {chapterid}=useParams();
    const course=useOutletContext();
    const eachitem=course.chapters.find((eachitem)=>eachitem.chapter_id==chapterid);
     
    return(
        <>
        <h1 className="heading-border">{eachitem.chapter_id}.{eachitem.chapter_title}</h1>
       
        <h4 className="heading">{eachitem.chapter_description}</h4>
        
        <div className="video-wrapper">
            <video  className="video-insidewrapper"controls>
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
    )
}
export default Eachchapter;