import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordConfirmation] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUPasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-up logic here
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Password Confirmation:', passwordconfirmation);
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
          className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={handleUsernameChange}
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
      <div className="w-full mb-4">
        <input
          className="border w-full rounded-3xl py-2 px-3 border-blue-dark"
          type="text"
          id="passwordconfirmation"
          value={passwordconfirmation}
          onChange={handleUPasswordConfirmationChange}
          placeholder="Password Confirmation"
        />
      </div>
      <button  className="border w-fit rounded-3xl py-1 px-3 border-blue-dark" type="submit">Sign Up</button>
    </form>
  
  );
}

export default SignUp;
