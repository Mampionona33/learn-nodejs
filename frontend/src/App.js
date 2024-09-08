import "./styles/App.css";
import AppRouter from "./routes/AppRouter";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

export default App;
