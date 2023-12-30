import React from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';

export function AnimatedRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route
                path="/home"
                element={
                    <div>
                        <h1>Hue</h1>
                    </div>
                }
            />
        </Routes>
    );
}
