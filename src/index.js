import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LogOn from "./components/LogOn";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meeting from "./components/Meeting/Meeting";

const CustomRouter = () => {
  // read
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:meetingId" element={<App />}></Route>
        <Route path="/:meetingId/meeting" element={<Meeting />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <CustomRouter />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
