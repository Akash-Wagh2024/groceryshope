


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAdmin from './NavBarAdmin';

export default function ViewProduct() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:8080/groceryshope/findall')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("Error occurred: " + error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8080/groceryshope/productdeleted/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        setProducts(products.filter((p) => p.id !== id));
      })
      .catch((error) => console.log("Error occurred: " + error));
  };

  const showUpdateForm = (product) => {
    // Placeholder - logic to show update form (modal or inline)
    console.log("Update clicked for:", product);
  };

  return (
    <div>
      <NavBarAdmin />
      <div className="container mt-4">
        <div className="row">
          {products.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="Product"
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => { e.target.src = '/default-img.jpg'; }} // fallback
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center"><strong>{item.name}</strong></h5>
                  <div className="card-text mb-3">
                    <p>Description: <strong>{item.description}</strong></p>
                    <p>Price: <strong>{item.price}</strong></p>
                    <p>Category: <strong>{item.product}</strong></p>
                    <p className={parseInt(item.stock) < 10 ? 'text-danger fw-bold' : ''}>
                      Stock: {parseInt(item.stock) < 10 ? `⚠️ ${item.stock}` : item.stock}
                    </p>
                  </div>
                  <div className='d-flex justify-content-between mt-auto'>
                    <button className='btn btn-danger' onClick={() => deleteProduct(item.id)}>Delete</button>
                    <button className='btn btn-warning' onClick={() => showUpdateForm(item)}>Update</button>
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
