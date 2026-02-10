import React from "react";
import "./LoggedPage.css";
import InfoCards from "../InfoCards/InfoCards";
import Activity from "../Activity/Activity";

export default function LoggedPage({ userName, email }) {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="welcome-text">Welcome back, {userName}</h1>
        <p className="date-text">Today is Tuesday, February 10, 2026</p>
        <div className="header-underline"></div>
      </header>
      <InfoCards userName={userName} email={email}></InfoCards>
      <Activity></Activity>
    </div>
  );
}
