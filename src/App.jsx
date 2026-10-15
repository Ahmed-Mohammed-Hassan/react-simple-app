import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <section className="card">
        <div className="logo" aria-hidden="true">R</div>
        <p className="eyebrow">REACT STARTER</p>
        <h1>Hello, React!</h1>
        <p className="description">
          Your simple React project is ready. Edit this page and start building
          something great.
        </p>

        <div className="counter">
          <span className="counter-label">Button clicks</span>
          <strong>{count}</strong>
          <button onClick={() => setCount((value) => value + 1)}>
            Click me
          </button>
        </div>

        <p className="hint">
          Built with React and Vite · Ready for development
        </p>
      </section>
    </main>
  );
}
