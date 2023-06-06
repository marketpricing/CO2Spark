import Homepage from "./page/homepage";
import InputForm from './page/inputform';

import { Routes, Route } from "react-router-dom";
import SignUp from "./page/signup";
import SignIn from "./page/signin";
import Dashboard from "./components/history/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/calculate" element={<InputForm />} />
        <Route path="/history" element={<Dashboard />} />

      </Routes>
    </>
  );
}
export default App;
