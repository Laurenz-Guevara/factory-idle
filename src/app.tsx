import { createRoot } from 'react-dom/client';

export default function App() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

const root = createRoot(document.body);
root.render(<App />);
