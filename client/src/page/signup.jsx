import React from "react";
import Navbar from "../components/navbar/navbar";
import SignUp from "../components/auth/FormSignUp";

const SignUpForm = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex items-center justify-center">
    <div className="w-2/3">
        <div className="h-1/2 flex justify-center items-center">
        <div className="w-1/2">
            <div className="my-4 justify-center items-center flex: 'none', order: 0, flexGrow: 0">
                <h1 className="text-center">Sign Up</h1>
                <h2 className="text-center">Create an account, now.</h2>
            </div>
            <SignUp />
        </div>
        </div>
    </div>
    </div>

    </>
  );
};

export default SignUpForm;