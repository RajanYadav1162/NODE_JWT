import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Invalid from "./pages/Invalid";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Invalid />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
