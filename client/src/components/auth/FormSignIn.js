import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../../helpers/auth";

import axios from 'axios'
function SignIn() {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(process.env.REACT_APP_API_URL);
    e.preventDefault();
    if (email && password) {
  
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password
        })
        .then((res) => {
          // Authenticate MEMBUAT SET COOKIE TOKEN (JWT SECRET)
      
          authenticate(res, () => {
       
         
            if (isAuth() && isAuth().role === "admin") {
              navigate("/admin");
              toast.success(`Selamat datang ${res.data.user.name}!`);
            } else {
              navigate("/beranda");
              toast.success(`Selamat datang ${res.data.user.name}!`);
            }
          });
        })
        .catch((err) => {
          
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Isikan keseluruhan informasi Anda");
    }
  };

  return (
    <form
      className="w-full h-[80%] justify-between items-center flex flex-col  "
      onSubmit={handleSubmit}
    >
      <div className="w-full mb-4">
        <input
          className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className="w-full mb-4">
        <input
          className="border w-full  rounded-3xl py-2 px-3 border-blue-dark"
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </div>
      <button  className="border w-fit rounded-3xl py-1 px-3 border-blue-dark" type="submit">Sign In</button>
    </form>
  
  );
}

export default SignIn;
