import { Dashboard } from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export { App };
