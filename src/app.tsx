import React from "react";
import { useState } from "react";
import { createRoot } from 'react-dom/client';

import Dashboard from "@components/Dashboard"
import Sidebar from "@components/Sidebar"


export default function App() {
  const [page, setPage] = useState<string | null>("Home");

  const handleChildData = (data: any) => {
    setPage(data);
  };

  return (
    <div className="flex">
      <Sidebar switchPage={handleChildData} />
      <Dashboard selectedPage={page} />
    </div>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

