import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication.jsx";
import Panel from "./pages/panel.jsx";
import Landing from "./pages/landing.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <div className=" w-100% h-100vh overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
