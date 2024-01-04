import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "typeface-lato";
import App from "./App.jsx";
import ParticlesProvider from "./ParticlesProvider.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ParticlesProvider>
                <App />
            </ParticlesProvider>
        </BrowserRouter>
    </React.StrictMode>
);
