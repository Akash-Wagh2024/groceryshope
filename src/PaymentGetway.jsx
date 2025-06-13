import React from 'react';
import axios from 'axios';

export default function PaymentGetway() {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      // Call backend to create Razorpay order
      const response = await axios.post("http://localhost:8080/payment/createOrder", {
        amount: 500  // ₹5.00 (in rupees)
      });

      const { orderId, amount, currency } = response.data; // ✅ Defined variables

      const options = {
        key: "YOUR_PUBLIC_KEY", // Replace with your Razorpay public key
        amount: amount,
        currency: currency,
        name: "Grocery Shop",
        description: "Order Payment",
        order_id: orderId,
        handler: function (response) {
          alert("Payment successful! ID: " + response.razorpay_payment_id);
          // You can also POST this response to your server for verification
        },
        prefill: {
          name: "Akash Wagh",
          email: "wagha620@gmail.com",
          contact: "8379076207"
        },
        theme: {
          color: "#28a745"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error in handlePayment:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>🧾 Payment Gateway</h3>
      <button className="btn btn-success mt-3" onClick={handlePayment}>
        Pay ₹5 Now
      </button>
    </div>
  );
}
