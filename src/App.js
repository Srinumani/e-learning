 import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CoursesList from "./Components/CoursesList";
import Chapter from "./Components/Chapters";
import Eachchapter from "./Components/Eachchapter";
import ErrorPage from "./Components/Errorpage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

 

function App() {

const router=createBrowserRouter([
  {path:"/",element:<Navbar/>,
  errorElement:<ErrorPage/>,
  children:[
  {path:"/",element:<Home/>},
  {path:"/about",element:<About/>},
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>},

  {path:"/courses",
  children:[
    {index:true,element:<Courses/>},
    {path:':id',element:<CoursesList/>}
  ]},
   {path:"/chapters/:id",element:<Chapter/>,
   children:[
      {path:"eachchapter/:chapterid",element:<Eachchapter/>}
   ]}
  ]},
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
       
    </div>
  );
}

export default App;
