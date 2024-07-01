// TableStruct.js
import React from "react";
// this is the reprentations of the table stuctures
const TableStruct = ({ itemsSold, totalRevenue }) => {
  return (
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
          {itemsSold.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <strong>Total Revenue</strong>
            </td>
            <td>
              <strong>${totalRevenue}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

// Exported the module
export default TableStruct;
