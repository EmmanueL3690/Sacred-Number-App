"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SacredNumbers from "./componenets/SacredNumbers";
import UserDetails from "./componenets/UserDetails";
import TestimoniesGrid from "./componenets/TestimoniesGrid";
import ReportsDashboard from "./componenets/ReportsDashboard";

function App() {
  return (
    <Router basename="/Sacred-Number-App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <TestimoniesGrid /> */}
              <SacredNumbers />
            </>
          }
        />
        <Route path="/user-details" element={<UserDetails />} />
         <Route path="/reports-dashboard" element={<ReportsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
