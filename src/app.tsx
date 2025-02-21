import React from "react";
import { createRoot } from 'react-dom/client';

import Dashboard from "@components/Dashboard"
import Sidebar from "@components/Sidebar"

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

