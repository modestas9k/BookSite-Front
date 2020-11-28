import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import AuthProvider from "./contexts/AuthContext";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
