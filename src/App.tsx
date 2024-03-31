import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';

function App() {
    return (
        <BrowserRouter>
            {/*
            <Dashboard />
            */}

            <Routes>
              <Route path="/login" element={<Login />}/>

            </Routes>
        </BrowserRouter>
    );
}

export { App };
