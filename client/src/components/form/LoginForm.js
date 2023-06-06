import React, { useState } from "react";

const Form = () => {
  // State untuk menyimpan nilai input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Event handler untuk menghandle perubahan input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler untuk menghandle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang di-submit
    console.log("Name:", name);
    console.log("Email:", email);
    // Reset nilai input setelah submit
    setName("");
    setEmail("");
  };

  return (
    <form
      className="w-3/4 h-[80%] justify-between items-center flex flex-col  "
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <input
          className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="username"
        />
      </div>
      <div className="w-full">
        <input
          className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
          type="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="w-full">
        <input
          className="border w-full  rounded-3xl py-2 px-3 border-blue-dark"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="username"
        />
      </div>
      <div className="w-full">
        <input
          className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="username"
        />
      </div>
      <button  className="border w-fit rounded-3xl py-1 px-3 border-blue-dark" type="submit">Calculate</button>
    </form>
  );
};

export default Form;
