import React, { useRef } from "react";
import "./splashpage.css";
import { useSpring, animated } from 'react-spring';

function Splashpage(){
  const text1Ref = useRef();

  const text1Style = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }

  })
  
  return (
  <div className="Splashpage">
    <animated.h1 style={text1Style}>Welcome</animated.h1>
    <h1>To</h1>
    <h1>HomeBase</h1>
    <img
      src="https://www.istockphoto.com/photo/baseball-softball-home-plate-background-gm1146195419-308766710"
      height={275}
      alt=""
  </div>
  )
};

export default Splashpage;