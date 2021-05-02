import React from "react";
import "./splashpage.css";

function Splashpage(){
  return (
  <div className="Splash-page">
    <h1 className='splash-title'>Welcome To Homebase</h1>
    <h2 className='splash-blurb'>The perfect home for your family and team to get all your projects COMPLETED!</h2>
    
    <img className='splash-image'
      src="https://www.istockphoto.com/photo/baseball-softball-home-plate-background-gm1146195419-308766710"
      height={275}
      alt="" />
  </div>
  )
};

export default Splashpage;