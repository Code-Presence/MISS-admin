import { Dashboard } from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
}

export { App };
