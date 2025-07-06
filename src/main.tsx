import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { AuthProvider } from "./context/AuthProvider";

import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/components.css";
import "./styles/supabaselogin.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
