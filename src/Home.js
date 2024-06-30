// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import itemsSold from './takeinput';
import './App.css';

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  const totalRevenue = itemsSold.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="App">
      {!showTable ? (
        <div className="animation" onClick={() => setShowTable(true)}>
          Show My Project
        </div>
      ) : (
        <>
          <h1>Record of Sold Items</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Selling Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {itemsSold.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3"><strong>Total Revenue</strong></td>
                <td><strong>${totalRevenue}</strong></td>
              </tr>
            </tbody>
          </table>
        </>
      )}
       <button className="button" onClick={() => navigate('/dynamic')}>
        Project One : Dynamic Source
      </button>
      <button className="button" onClick={() => navigate('/about')}>
        About
      </button>
    </div>
  );
};

export default Home;
