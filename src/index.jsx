import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyState from "./context/data/MyState";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyState>
      <MantineProvider>
        <App />
      </MantineProvider>
    </MyState>
  </BrowserRouter>
);
