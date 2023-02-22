import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/authContext";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </StrictMode>
);
