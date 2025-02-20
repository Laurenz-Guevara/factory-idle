import React from "react";
import { createRoot } from 'react-dom/client';

import Dashboard from "@components/Dashboard"

export default function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

