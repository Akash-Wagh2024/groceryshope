// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import NavBarUser from './NavBarUser';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function UserMyOrder() {
//   const [orders, setOrders] = useState([]);
//   const [totalBill, setTotalBill] = useState(0);

//   const user = JSON.parse(localStorage.getItem('userdata'));
//   const userId = user?.id;

//   useEffect(() => {
//     if (!userId) {
//       console.error("User ID not found in localStorage.");
//       return;
//     }

//     axios.get(`http://localhost:8080/prorder/today/user/${userId}`)
//       .then(response => {
//         const fetchedOrders = response.data;
//         setOrders(fetchedOrders);

//         // Calculate total bill
//         const total = fetchedOrders.reduce((sum, order) => {
//           const price = parseFloat(order.product.price);
//           const quantity = parseFloat(order.quantity);
//           return sum + (price * quantity);
//         }, 0);

//         setTotalBill(total);
//       })
//       .catch(err => {
//         console.error("Error fetching today's orders: ", err);
//       });
//   }, [userId]);

//   return (
//     <div>
//       <NavBarUser />
//       <div className="container mt-4">
//         <h3 className="text-center mb-4">🧾 My Orders Today</h3>

//         {orders.length === 0 ? (
//           <p className="text-center text-muted">You have not placed any orders today.</p>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover text-center">
//               <thead className="table-success">
//                 <tr>
//                   <th>#</th>
//                   <th>Product Name</th>
//                   <th>Category</th>
//                   <th>Price per Unit</th>
//                   <th>Quantity</th>
//                   <th>Total (₹)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{order.product.name}</td>
//                     <td>{order.product.product}</td>
//                     <td>₹{order.product.price}</td>
//                     <td>{order.quantity}</td>
//                     <td>₹{order.product.price * order.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <h5 className="text-end me-3 mt-4">
//               Total Bill: <strong className="text-success">₹{totalBill.toFixed(2)}</strong>
//             </h5>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import NavBarUser from './NavBarUser';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserMyOrder() {
  const [orders, setOrders] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const billRef = useRef(null);

  const user = JSON.parse(localStorage.getItem('userdata'));
  const userId = user?.id;

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found in localStorage.");
      return;
    }

    axios.get(`http://localhost:8080/prorder/today/user/${userId}`)
      .then(response => {
        const fetchedOrders = response.data;
        setOrders(fetchedOrders);

        const total = fetchedOrders.reduce((sum, order) => {
          const price = parseFloat(order.product.price);
          const quantity = parseFloat(order.quantity);
          return sum + (price * quantity);
        }, 0);

        setTotalBill(total);
      })
      .catch(err => {
        console.error("Error fetching today's orders: ", err);
      });
  }, [userId]);

  const handlePrint = () => {
    const printContents = billRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // reload to restore app state
  };

  return (
    <div>
      <NavBarUser />
      <div className="container mt-4">
        <h3 className="text-center mb-4">🧾 My Orders Today</h3>

        {orders.length === 0 ? (
          <p className="text-center text-muted">You have not placed any orders today.</p>
        ) : (
          <>
            <div ref={billRef} className="table-responsive print-area">
              <table className="table table-bordered table-hover text-center">
                <thead className="table-success">
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price per Unit</th>
                    <th>Quantity</th>
                    <th>Total (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.product.name}</td>
                      <td>{order.product.product}</td>
                      <td>₹{order.product.price}</td>
                      <td>{order.quantity}</td>
                      <td>₹{order.product.price * order.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h5 className="text-end me-3 mt-4">
                Total Bill: <strong className="text-success">₹{totalBill.toFixed(2)}</strong>
              </h5>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-primary px-4" onClick={handlePrint}>
                🖨️ Print Bill
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

