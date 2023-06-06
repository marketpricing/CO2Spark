import React from "react";
import './style.css'
const navbar = () => {
  return (
    <div className="w-full px-5 py-2 flex h-16 border-b-4 border-blue-dark">
      <div className="w-full flex justify-between items-center">
        <div className="">Lorem Ipsum</div>
        <div className="md:w-1/5  w-1/3 flex justify-between">
          <a>Home</a>
          <a>Sign In</a>

          <a>Register</a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
