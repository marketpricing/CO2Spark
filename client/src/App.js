import Homepage from "./page/homepage";
import InputForm from './page/inputform';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/input" element={<InputForm />} />
      </Routes>
    </>
  );
}
export default App;
