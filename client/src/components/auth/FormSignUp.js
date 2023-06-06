import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../../helpers/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/beranda");
    }
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    textChange: "Sign Up",
  });

  const { name, email, password1, password2, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: "Submitting" });
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password: password1,
          })
          .then((res) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              textChange: "Submitted",
            });

            toast.success(res.data.message);
          })
          .catch((err) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              textChange: "Sign Up",
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("Password tidak sesuai");
      }
    } else {
      toast.error("Isikan seluruh informasi yang dibutuhkan");
    }
  };

  return (
    <>
      <ToastContainer />

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
            onChange={handleChange("email")}
            placeholder="Email"
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
            type="text"
            id="username"
            value={name}
            placeholder="Username"
            onChange={handleChange("name")}
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="border w-full  rounded-3xl py-2 px-3 border-blue-dark"
            type="text"
            id="password"
            value={password1}
            onChange={handleChange("password1")}
            placeholder="Password"
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
            type="text"
            id="passwordconfirmation"
            value={password2}
            onChange={handleChange("password2")}
            placeholder="Password Confirmation"
          />
        </div>
        <button
          className="border w-fit rounded-3xl py-1 px-3 border-blue-dark"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
