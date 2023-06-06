import React from "react";
import Navbar from "../components/navbar/navbar";
import Dashboard from "../components/history/dashboard";

const History = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/3 h-1/2  flex">
          <Dashboard/>
        </div>
      </div>
    </>
  );
};

export default History;