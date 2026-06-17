import { useEffect } from "react";
import axios from "axios";
import './App.css';
import Home from "./components/Home";  // ✅ Apps ki jagah Home import karo

function App() {
  useEffect(() => {
    axios.post("https://zerodha-backend-4i65.onrender.com/", {}, { withCredentials: true })
      .then(({ data }) => {
        if (!data.status) {
          window.location.href = "https://zerodha-frontend-lovat.vercel.app/login";
        }
      })
      .catch(() => {
        window.location.href = "https://zerodha-frontend-lovat.vercel.app/login";
      });
  }, []);

  return <Home />;  // ✅ Apps ki jagah Home return karo
}

export default App;