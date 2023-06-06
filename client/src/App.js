import Homepage from "./page/homepage";
import InputForm from './page/inputform';

import { Routes, Route } from "react-router-dom";
import SignUp from "./page/signup";
import SignIn from "./page/signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/input" element={<InputForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}
export default App;
