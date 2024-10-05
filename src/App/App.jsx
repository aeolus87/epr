import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch

// Pages
import { HomePage } from "../Pages/HomePage/HomePage";
import { AttendancePage } from "../Pages/AttendancePage/AttendancePage";
import { ApplicationPage } from "../Pages/ApplicationPage/ApplicationPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/application" element={<ApplicationPage />} />
        </Routes>
      </Router>
    );
  }
}

export { App };
