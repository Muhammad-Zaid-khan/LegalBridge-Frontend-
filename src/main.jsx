import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

import "./styles/style.css";
import "./styles/motion.css";
import "./styles/polish.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      {/* Users who set "reduce motion" in their OS get no transform animations */}
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </ErrorBoundary>
  </StrictMode>
);