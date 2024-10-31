import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
("react-router-dom");
import { PostsProvider } from "./context/PostsContexts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>
);
