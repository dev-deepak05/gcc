import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App";
import "./Roadmap.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewdetails from "./components/Details/Viewdetails";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details" element = {<Viewdetails/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
