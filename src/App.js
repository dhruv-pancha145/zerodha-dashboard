import { useEffect } from "react";
import './App.css';
import Apps from "./components/Apps";

function App() {
  useEffect(() => {
    const token = document.cookie.includes("token");
    if (!token) {
      window.location.href = "zerodha-frontend-lovat.vercel.app/login";
    }
  }, []);

  return <Apps />;
}

export default App;