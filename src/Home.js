// Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "./takeinput"; // Assuming itemsSold is imported correctly
import TableStruct from "./TableStruct"; // Import the new component
import "./App.css";

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  const totalRevenue = itemsSold.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="App">
      {!showTable ? (
        <div className="animation" onClick={() => setShowTable(true)}>
          Show My Project
        </div>
      ) : (
        <>
          <TableStruct itemsSold={itemsSold} totalRevenue={totalRevenue} />
        </>
      )}
      <button className="button" onClick={() => navigate("/dynamic")}>
        Project One : Dynamic Source
      </button>
      <button className="button" onClick={() => navigate("/about")}>
        About
      </button>
    </div>
  );
};

export default Home;
