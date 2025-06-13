import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAdmin from './NavBarAdmin';

export default function TodaySellAdmin() {
  const [orders, setOrders] = useState([]);
  const [totalSell, setTotalSell] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/prorder/today')
      .then(response => {
        const data = response.data;
        setOrders(data);

        const total = data.reduce((sum, order) => {
          return sum + (order.product.price * order.quantity);
        }, 0);

        setTotalSell(total);
      })
      .catch(error => {
        console.error('Error fetching today’s sales:', error);
      });
  }, []);

  return (
    <div>
        <NavBarAdmin />
    <div className="container mt-4">
      <h3 className="text-center mb-4">📦 Today's Sales Report</h3>

      {orders.length === 0 ? (
        <p className="text-center text-muted">No sales recorded today.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Total (₹)</th>
                <th>Customer</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.product.name}</td>
                  <td>{order.product.product}</td>
                  <td>{order.product.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.product.price * order.quantity}</td>
                  <td>{order.user.name} ({order.user.phonenumber})</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5 className="text-end me-3 mt-4">
            Total Sales: <strong className="text-success">₹{totalSell.toFixed(2)}</strong>
          </h5>
        </div>
      )}
    </div>
    </div>
  );
}
