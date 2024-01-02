import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
 
 
function Navbar() {
  return (<>
  <div className="navbar"> 
            <ul>
                <NavLink className={({isActive})=>(isActive?"isactive":"link")}  to="/">
                <li  >Home</li>
                </NavLink>
                <NavLink  className={({isActive})=>(isActive?"isactive":"link")} to="/courses">
                <li >Courses</li>
                </NavLink>
                <NavLink  className={({isActive})=>(isActive?"isactive":"link")} to="/about">
                <li className="nav-about" >About Us</li>
                </NavLink>
            </ul>
            <div className="nav-signup">
            <NavLink className={({isActive})=>(isActive?"isactive":"link")}  to="/signup"> <span >Signup</span></NavLink>
            <NavLink className={({isActive})=>(isActive?"isactive":"link")}  to="/login"><span >Login</span></NavLink>
            </div>
      </div>
      <Outlet/>
  </>
      
  );
}

export default Navbar;
