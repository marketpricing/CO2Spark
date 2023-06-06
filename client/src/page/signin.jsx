import React from "react";
import Navbar from "../components/navbar/navbar";
import SignIn from "../components/auth/FormSignIn";

const SignInForm = () => {
    
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex items-center justify-center">
    <div className="w-2/3">
        <div className="h-1/2 flex justify-center items-center">
        <div className="w-1/2">
            <div className="my-4 justify-center items-center flex: 'none', order: 0, flexGrow: 0">
                <h1 className="text-center">Sign In</h1>
                <h2 className="text-center">Welcome back!</h2>
            </div>
            <SignIn />
        </div>
        </div>
    </div>
    </div>

    </>
  );
};

export default SignInForm;