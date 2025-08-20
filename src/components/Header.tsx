import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="header">
      <h1>🕒 Timeline App</h1>
      <button className="theme-toggle" onClick={() => setDark(d => !d)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
