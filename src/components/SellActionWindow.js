import React, { useState, useContext } from "react";  
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);  

  const handleSellClick = async () => {
    try {
      const res = await axios.get("https://zerodha-backend-4i65.onrender.com/allholding");
      const holding = res.data.find((stock) => stock.name === uid);

      if (!holding) {
        alert(`${uid} tumhari holdings mein nahi hai!`);
        generalContext.closeSellWindow();  
        return;
      }

      if (Number(stockQuantity) > holding.qty) {
        alert(`Sirf ${holding.qty} quantity available hai!`);
        generalContext.closeSellWindow();  
        return;
      }



await axios.post("https://zerodha-backend-4i65.onrender.com/sellOrder", {
  name: uid,
  qty: Number(stockQuantity), 
  price: stockPrice,
  mode: "SELL",
});

      alert("Sell order placed!");
      generalContext.closeSellWindow();

    } catch (err) {
      console.error("Sell error:", err);
      generalContext.closeSellWindow();
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow(); 
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;