import React from "react";
import BookingForm from "./components/BookingForm";

import "./styles.css";

function App() {
  console.log("App.js is rendering..."); // Debug log

  return (
    <div className="app-container">
      <h1>Event Booking</h1>
      <BookingForm />
    </div>
  );
}

export default App;
