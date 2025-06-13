// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarUser from './NavBarUser';
// import { Modal, Button, Form } from 'react-bootstrap';

// export default function ViewProductUser() {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState('');

//   // Get logged-in user from localStorage
//   const user = JSON.parse(localStorage.getItem('userdata'));
//   const phoneNumber = user?.phonenumber;

//   // Fetch products on component mount
//   useEffect(() => {
//     axios.get('http://localhost:8080/groceryshope/findall')
//       .then((response) => {
//         const inStockProducts = response.data.filter(p => p.stock > 0);
//         setProducts(inStockProducts);
//       })
//       .catch((error) => console.error("Error fetching products: ", error));
//   }, []);

//   // Handle clicking on Order button to open modal
//   const handleOrderClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//     setQuantity('');
//   };

//   // Handle placing the order
//   const handlePlaceOrder = () => {
//     if (!quantity || quantity <= 0) {
//       alert("Please enter a valid quantity.");
//       return;
//     }
//     if (!phoneNumber) {
//       alert("Phone number not found. Please update your profile.");
//       return;
//     }

//     const total = selectedProduct.price * quantity;

//     // const orderData = {
//     //   product: {
//     //     id: selectedProduct.id,
//     //     name: selectedProduct.name,
//     //     price: selectedProduct.price,
//     //     product: selectedProduct.product,
//     //     stock: selectedProduct.stock.toString(),
//     //   },
//     //   quantity: parseInt(quantity)
//     // };


//     const orderData = {
//   product: {
//     id: selectedProduct.id,
//     name: selectedProduct.name,
//     price: selectedProduct.price,
//     product: selectedProduct.product,
//     stock: selectedProduct.stock,
//     img: selectedProduct.img, // keep image
//     description: selectedProduct.description // keep description
//   },
//   user: {
//     id: user?.id  // ✅ ensure user ID is sent
//   },
//   quantity: parseInt(quantity)
// };


//     axios.post('http://localhost:8080/prorder/oreder', orderData)
//       .then(() => {
//         const billText =
//           `🧾 Grocery Order Bill\n` +
//           `-----------------------\n` +
//           `Product: ${selectedProduct.name}\n` +
//           `Quantity: ${quantity} KG\n` +
//           `Price per KG: ₹${selectedProduct.price}\n` +
//           `Total: ₹${total}\n` +
//           `-----------------------\n` +
//           `Thank you for your order🎉😊`;

//         const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(billText)}`;
//         setTimeout(() => window.open(url, '_blank'), 500);

//         setShowModal(false);
//         setQuantity('');
//       });
//   };

//   return (
//     <div>
//       <NavBarUser />
//       <div className="container mt-4">
//         <div className="row">
//           {products.length === 0 ? (
//             <div className="text-center text-muted">No products available at the moment.</div>
//           ) : (
//             products.map((item) => (
//               <div className="col-md-3 mb-4" key={item.id}>
//                 <div className="card h-100">
//                   <img
//                     src={item.img}
//                     className="card-img-top"
//                     alt="Product"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title text-center"><strong>{item.name}</strong></h5>
//                     <div className="card-text mb-3">
//                       <p>Description: <strong>{item.description}</strong></p>
//                       <p>Price (per KG): ₹<strong>{item.price}</strong></p>
//                       <p>Category: <strong>{item.product}</strong></p>
//                       {/* <p>Available Stock: <strong>{item.stock}</strong></p> */}
//                     </div>
//                     <div className='d-flex justify-content-center mt-auto'>
//                       <button className='btn btn-success' onClick={() => handleOrderClick(item)}>Order</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Order Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className='mb-3'>
//               <Form.Label>Product: {selectedProduct?.name}</Form.Label>
//             </Form.Group>
//             <Form.Group className='mb-3'>
//               <Form.Label>Enter Quantity (KG)</Form.Label>
//               <Form.Control
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 placeholder="Enter quantity in kg"
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>
//                 Total Price: ₹{selectedProduct ? selectedProduct.price * (quantity || 0) : 0}
//               </Form.Label>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={handlePlaceOrder}>Place Order</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
// IMPORTS




import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBarUser from './NavBarUser';

export default function ViewProductUser() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState(5); // Replace with actual logged-in user ID
  const [user, setUser] = useState({
    id: 1,
    name: "Akash",
    email: "wagha620@gmail.com",
    phonenumber: "8379076207",
  });

  useEffect(() => {
    axios.get("http://localhost:8080/groceryshope/findall")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products", err));

    loadRazorpayScript(); // preload script
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) {
        return resolve(true);
      }
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async (product) => {
    setSelectedProduct(product);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("🛑 Razorpay SDK failed to load.");
      return;
    }

    const orderRequest = {
      product: {
        id: product.id,
      },
      user: {
        id: user.id,
      },
      quantity: quantity,
    };

    try {
      const backendRes = await axios.post("http://localhost:8080/prorder/order", orderRequest);
      console.log("✅ Backend Order Response:", backendRes.data);

      const amountInPaise = product.price * quantity * 100;

      const options = {
        key: "rzp_test_OL9Yf0dPlLaKN0", // 🔁 Replace with your Razorpay Key ID
        amount: amountInPaise,
        currency: "INR",
        name: "Grocery Shop",
        description: "Online Order",
        handler: function (response) {
          alert("✅ Payment successful!\nPayment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phonenumber,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("🚫 Error placing order:", error);
      alert("Something went wrong while placing the order.");
    }
  };

  return (
    <div>
     <NavBarUser/>
    <div className="container mt-4">
      <h2>🛒 Product List</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card">
<img
                    src={product.img}
                    className="card-img-top"
                    alt="Product"
                    style={{ height: "200px", objectFit: "cover" }}
                  />              <div className="card-body">
                <h5>{product.name}</h5>
                <p>Price: ₹{product.price}</p>
                <p>Stock: {product.stock}</p>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    className="form-control me-2"
                    min="1"
                    max={parseInt(product.stock)}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  <button className="btn btn-success" onClick={() => handlePlaceOrder(product)}>
                    Pay & Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
