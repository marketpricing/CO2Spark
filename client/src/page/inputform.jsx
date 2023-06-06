import React from "react";
import Navbar from "../components/navbar/navbar";
import LoginForm from "../components/form/LoginForm";

const InputForm = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/3 h-1/2  flex">
          <div className="w-1/2 flex justify-center items-center">
            <LoginForm />
          </div>
          <div className="w-1/2 flex justify-center items-center">test</div>
        </div>
      </div>
    </>
  );
};

export default InputForm;