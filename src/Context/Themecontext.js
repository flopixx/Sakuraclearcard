import React, { createContext, useState } from "react";

export const Themecontextt = createContext();

export const ThemeProvider = (props) => {
  // estado del darkmode
  const [Theme, setTheme] = useState("light");

  const toglleTheme = () => {
    Theme === "dark" ? setTheme("light") : setTheme("dark");
    Theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Themecontextt.Provider
      value={{
        Theme,
        toglleTheme,
      }}
    >
      {props.children}
    </Themecontextt.Provider>
  );
};
export default ThemeProvider;
