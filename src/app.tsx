import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Dashboard from "@components/Dashboard";
import Sidebar from "@components/Sidebar";
import { PlayerProvider } from "@context/PlayerContext";

export default function App() {
  const [page, setPage] = useState<string | null>("Home");

  const handleChildData = (data: any) => {
    setPage(data);
  };

  return (
    <PlayerProvider>
      <div className="flex">
        <Sidebar switchPage={handleChildData} />
        <Dashboard selectedPage={page} />
      </div>
    </PlayerProvider>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

