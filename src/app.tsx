import React from "react";
import { createRoot } from 'react-dom/client';

export default function App() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

