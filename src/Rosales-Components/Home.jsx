import React, { useState } from "react";
import { Routes, Route, Router, Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import DirectMessages from "./DirectMessages";
import Channels from "../Components/Channels";
import Sidebar from "../Components/Sidebar";

const Home = ({ loggedInUser }) => {
  return (
    <>
      <div className="maincontainer grid grid-cols-12 grid-rows-6 gap-4">
        <div className="sidebar bg-amber-100 row-span-5">
          <Sidebar />
        </div>
        <div className=" bg-green-100 header row-span-0 col-start-2 row-start-1">
          <span className="flex flex-row">Header</span>
        </div>
        <div className="bg-blue-300 col-span-2 row-span-4 col-start-2 row-start-2">
          Longer Sidebar
        </div>
        <div className="contentarea bg-cyan-100 col-span-9 row-span-4 col-start-4 row-start-2">
          <Routes>
            <Route
              path=""
              element={<DirectMessages loggedInUser={loggedInUser} />}
            />

            <Route
              path="channels"
              element={<Channels loggedInUser={loggedInUser} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
