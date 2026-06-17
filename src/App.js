import { useEffect } from "react";
import axios from "axios";  
import './App.css';
import Apps from "./components/Apps";

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

  return <Apps />;
}

export default App;