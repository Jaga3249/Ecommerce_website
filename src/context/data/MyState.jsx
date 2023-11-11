import React, { useState } from "react";
import { mycontext } from "./MyContext";

const MyState = ({ children }) => {
  const [mode, setMode] = useState("light");
  // const TogleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.backgroundColor = "rgb(17,24,39)";
  //   } else {
  //     setMode("light");
  //     document.body.backgroundColor = "white";
  //   }
  // };
  return (
    <mycontext.Provider value={{ mode, setMode }}>
      {children}
    </mycontext.Provider>
  );
};

export default MyState;
